import { useState } from "react";
import "./Regustion.css"
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast"

function Regustion() {
    const [uname,setuname] = useState("")
    const [password,setpassword] = useState("")



    function hendalform(e){
     e.preventDefault()
    //  console.log(uname,pass)


    const formData = {uname,password}
    fetch("/api/regnsert",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formData)


  }).then((res)=>{
    return res.json()
  }).then((Data)=>{
  console.log(Data)
 

  if(Data.record && Data.record._id){
    toast.success("Successfuly Registation")
  } else if (Data.message){
    toast.error("User Id Already Exist")
  }

  })
  
  
    }

    
    return ( 
        <>
       
          <div className="form">
           <div className="form_comp">
           <h1 className="text-center">Registration</h1>
           {/* <p className="message_color">{}</p> */}
           <form onSubmit={hendalform}>
                <label>username</label>
                <input type="text" placeholder="username" className="form-control"
                value={uname}
                onChange={(e)=>{setuname(e.target.value)}}
                 />
                <label>password</label>
                <input type="password" placeholder="password" className="form-control"
                  value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
                />
                 <button type="submit" className="form-control btn btn-success mt-3">Registration</button>

                 <p className="mt-3"> Already a Customer ? <Link to={"/Login"}>Login</Link> </p>
                
         </form>
       
        
         </div>
         </div>
        </>
     );
}

export default Regustion;