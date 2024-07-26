const mongoose = require("mongoose")

 const {Schema,model} = mongoose

  const regiSchema = Schema({
    Username:String,
    Password:Number,
    
 })
 const regTable = model("reg",regiSchema)

 module.exports = regTable