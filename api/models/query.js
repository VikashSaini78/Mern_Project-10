const mongoose = require("mongoose")

 const {Schema,model} = mongoose

  const QuerySchema =  new Schema({
      Email:String,
      Query:String,
      Status:{type:String,default:"unread"}
 })
 const queryTable = model("query",QuerySchema)

 module.exports = queryTable