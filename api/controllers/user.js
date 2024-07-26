
const reg = require("../models/reg")
const jwt = require("jsonwebtoken")



exports.homePageController = (req,res)=>{
    res.send("home page")

}

// reg

exports.regController = async(req,res)=>{
// console.log(req.body)
const {uname,password} = req.body


const userCheck = await reg.findOne({Username:uname,Password:password})
if(userCheck==null){

    const record = await new reg({Username:uname, Password:password,})
    await record.save()

    const saved_data  = await reg.findOne({Username:uname})

       const token =  jwt.sign({UserId:saved_data._id},'shhhh',{expiresIn:'3d'})
    res.json({"record":record,"token":token})   
   


}
else{
    res.json({message:"User Id Already Exist"})
}

}



// Login


exports.userCheckController = async(req,res)=>{
    const {username,password} = req.body
    // console.log(req.body)

    const userCheck = await reg.findOne({Username:username})

    if(userCheck!==null){
        if(userCheck.Status == "Active"){
            const Token = jwt.sign({userId:userCheck._id},"tgg4567",{expiresIn:"3d"})
            res.json({"result":userCheck,"token":Token})
    
        }else{
            res.json(userCheck)
        }
             
        
    }else{
        res.json({message:"Email & password did not match..🫤"})
    }

}



