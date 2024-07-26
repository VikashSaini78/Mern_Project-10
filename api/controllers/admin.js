const RegCollection = require("../models/reg")
const ProductCollection = require("../models/product")
const QueryCollection = require("../models/query")
const nodemailer = require("nodemailer")
const { regController } = require("./user")

const multer = require("multer")

let storege = multer.diskStorage({
  destination:function(req, file, cd){
    cd(null,"../public/Upload")
  },
  filename:function(req,file,cd){
    cd(null,Date.now() + file.originalname)
  }
})


const Upload = multer({
  storage : storege, 
  limits:{fileSize:1024*1024*4}
})
exports.productinsertController = async (req,res)=>{
// console.log(req.body)
const {PName,PDesc,PPrice,Status} = req.body
console.log(req.file)
 
const record = await new ProductCollection({ProductName:PName,ProductDesc:PDesc,ProductPrice:PPrice,ProductStatus:Status})

// if(record==null){
//     await record.save()
//     res.json(record)
// }else{
//     res.json({message:'please Enter Product Details...🙁'})
// }



await record.save()
    res.json(record)

}





exports.ProductDataController = async (req,res)=>{
    const record = await ProductCollection.find()
    res.json(record)
}



// updaterform


exports.UpdateFormController= async(req,res)=>{
    //  console.log(req.params.id)

    const ProductId = req.params.id

  const record = await ProductCollection.findById(ProductId)
  res.json(record)
    
}



exports.updateProductController = async(req,res)=>{
    const id = req.params.id
    // console.log(req.body)
     const {Pname,Pdesc,Pprice,PStatus} = req.body
     const record =  await ProductCollection.findByIdAndUpdate(id,{
        ProductName:Pname,
        ProductPrice:Pprice,
        ProductDesc:Pdesc,
        ProductStatus:PStatus,
    
     })
     res.json(record)
}

exports.DelectProductContoroller = async (req,res)=>{
    // console.log(req.params.id)
    const id = req.params.id

   const record = await ProductCollection.findByIdAndDelete(id)
   res.json({message:`Successfuly delect`})
  //  res.json(record)
}



// allproduct



exports.allProductsController = async(req,res)=>{
  const record = await ProductCollection.find()
  res.json(record)
}








exports.queryFormController = async(req,res)=>{
  console.log(req.body)
  const {Email,Query} = req.body

  const record = await new QueryCollection({
         Email:Email,
         Query:Query
  })
 await record.save()
 res.json(record)
    
}



exports.queryDataCollection = async (req,res)=>{
      const record = await  QueryCollection.find()
     await res.json(record)
}



exports.queryreplyController = async (req,res)=>{
// console.log(req.body)
const {form,to,sub,body} = req.body

const transporter = await nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "sstylesavvy@gmail.com",
    pass: "zoqgjtigucocvdzo",
  },
});



const info = await transporter.sendMail({
    from: "dkexpress06@gmail.com",// sender address
    to: to, // list of receivers
    subject: sub , // Subject line
    text: body, // plain text body
    html: body, // html body
  });

}



exports.userDataContoller = async (req,res)=>{
const record = await RegCollection.find().sort({CreateDate:-1})
await res.json(record)

}

exports.userstatusController = async (req,res)=>{
  // console.log(req.params.id)
  const id = req.params.id

  const record = await RegCollection.findById(id)

  let newstatus = null

  if(record.Status == "Active"){
    newstatus="Suspended"
  }else{
    newstatus ="Active"
  }

 const Data = await RegCollection.findByIdAndUpdate(id,{
    Status:newstatus
  })

  res.json(Data)
}