const express = require("express");
const cors = require("cors");
const app = express("");

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.json());
app.use(cors());

// app.get('/',(req,res)=>{
//     res.send('<h1>Hello world</h1>');
// })

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const port = 8000;
server.listen(port, () => {
  console.log("Server is running " + port);
});
