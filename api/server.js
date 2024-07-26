const express = require("express")

const server = express()
const apiRouter = require("./routes/api")
const mongoose = require("mongoose")
 const cors = require("cors")

mongoose.connect("mongodb://127.0.0.1:27017/mern_project").then(()=>{
    console.log("Database successfullu connected")
}).catch((error)=>{
  console.log("db note connected")
})



server.use(express.static('Public'))
server.use(cors())
server.use(express.json())
server.use("/api",apiRouter)
const port = 5000
server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})