const mongoose = require("mongoose")

 const {Schema,model} = mongoose

  const regiSchema =  new Schema({
    Username:String,
    Password:Number,
    Status:{type:String, default:"Active"},
    CreateDate:{type:Date, default:new Date()}
 })
 const regTable = model("reg",regiSchema)

 module.exports = regTable