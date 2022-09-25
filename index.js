const express = require("express");
const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
const port =process.env.PORT||5000

const {chats}=require("./Data");
const connectDB = require("./config/db");
const userRoutes=require('./routes/userRoutes');
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


dotenv.config();
connectDB();


app.get("/", (req, res) => {
  res.send("Doing again chat application!");
});

app.use('/api/user',userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
