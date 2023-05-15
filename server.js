const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


// app.get('/',(req,res)=>{
//     res.send('<h1>Hello world</h1>');
// })

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });

io.on('connection', (socket) => {
  socket.on("chat message", (msg) => {
    io.emit('chat message',msg);
    console.log("message: " + msg);
  });
});


const port = 8000;
http.listen(port, () => {
  console.log("Server is running " + port);
});
