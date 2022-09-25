const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema=mongoose.Schema(
  
{
  name:{  type:String,require:true },
  email:{ type:String,require:true ,unique:true  },
  password:{ type:String,require:true  },
  pic:{ type:String,
  default:"https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png"
  },

},
{
  timestamps :true

}
);
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const User= mongoose.model("User",userSchema);

module.exports=User;