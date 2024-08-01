import http from "http";
import express from "express";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// soxket io
io.on('connection', (socket) => {
  // console.log('A new user has connected: ', socket.id);
  socket.on("user-message", (message) => {          // console.log("A new User message: ", message); // iske paas message aa gya
    io.emit("message", message)  // ab ye mesage sbhi ke paas chla jayega
  })
})

app.use(express.static("./public"));

app.get('/', (req, res)=>{
  return res.sendFile("/public/index.html");
})

server.listen(9000, ()=>{
  console.log("Server is running on port 9000");
})