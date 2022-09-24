const { default: mongoose } = require("mongoose");

const userSchema=mongoose.Schema(
  
{
  name:{  type:String,require:true },
  email:{ type:String,require:true  },
  password:{ type:String,require:true  },
  pic:{ type:String,require:true ,
  default:"https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png"
  },

},
{
  timestamps :true

}
);
const User= mongoose.model("User",userSchema);

module.exports=User;