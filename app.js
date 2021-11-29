const express= require("express"); //access 
const socket= require("socket.io");

const app= express();  //initialize


app.use(express.static("frontend"));

let port=process.env.port || 3000;

let server=app.listen(port,()=>{
    console.log("Listening");
})

let io=socket(server);

io.on("connection",(socket)=>{

    console.log("New connection");

    socket.on("beginPath",(data)=>{

        io.sockets.emit("beginPath",data);
    })

    socket.on("drawStroke",(data)=>{

        io.sockets.emit("drawStroke",data);
    })

    socket.on("redoUndo",(data)=>{
        io.sockets.emit("redoUndo",data);
    })
})
