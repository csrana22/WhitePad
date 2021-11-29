const express= require("express"); //access 
const socket= require("socket.io");

const app= express();  //initialize


app.use(express.static("frontend"));

app.get("/",(req,res)=>{

    res.sendFile("./frontend/index.html");
})

let portn=process.env.PORT || 8080;

let server=app.listen(portn,()=>{
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
