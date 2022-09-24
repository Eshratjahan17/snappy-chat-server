const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());
const port =process.env.PORT||5000;
const {chats}=require("./Data");

app.get("/", (req, res) => {
  res.send("Doing again chat application!");
});


app.get("/api/chat",(req,res)=>{
  res.send(chats);
});
app.get("/api/chat/:id",(req,res)=>{
  const chat=chats.find((c)=>c._id === req.params.id);
  res.send(chat);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
