const mongoose = require("mongoose")

const {Schema,model} =mongoose

    const ProductSchema = new Schema({
        ProductName:String,
        ProductPrice:Number,
        ProductDesc:String,
        ProductStatus:{type:String,default:"In stock"},
     })

   const ProductTable =  model("ProductTable",ProductSchema)
   module.exports =ProductTable