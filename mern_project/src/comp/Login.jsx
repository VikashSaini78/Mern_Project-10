import { useState } from "react";
import "./Login.css"
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { usercontext } from "../userContext";
function Login() {

const {setloginadmin,setloginuser} = useContext(usercontext)


  const[username,setuser] = useState("")
  const[pass,setpass] = useState("")


 const naviget = useNavigate()

    function hendalform(e){
     e.preventDefault()
     const fData = {username,pass}


    fetch("/api/checkuser",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(fData)
    }).then((res)=>{
        return res.json()
    }).then((Data)=>{
        console.log(Data)

        if(Data.result && Data.result._id){
            (localStorage.setItem("user",Data.result.Username))
            setloginuser(localStorage.getItem("user"))
            naviget("/admin")

            toast.success("Successfuly Login")

            if(Data.result && Data.result.Username==="admin"){
            // (localStorage.setItem("admin",Data.result.Username))

            // setloginadmin(localStorage.getItem("admin"))
                naviget("/admin")
            }
            else{         
                naviget("/product") 
            }             
        }
        else{
            toast.error("Email & password did not match")
        }
       
        // else(Data.Status === "suspended"){
        // toast.error("suspended error")
        // }

         
    })
    
    }
    

    return ( 
        <>
            <div className="form">
           <div className="form_comp">
           <h1 className="text-center">Login</h1>
           <form onSubmit={hendalform}>
                <label>username</label>
                <input type="text" placeholder="username" className="form-control"
                 value={username}
                 onChange={(e)=>{setuser(e.target.value)}}
                 />
                <label>password</label>
                <input type="password" placeholder="password" className="form-control"
                value={pass}
                 onChange={(e)=>{setpass(e.target.value)}}
                />
                 <button type="submit" className="form-control btn btn-danger mt-3">Login</button>
                 <p className="mt-3">New User ? <Link to={"/reg"}>Create Account</Link> </p>
                
         </form>
       
        
         </div>
         </div>
        </>
     );
}

export default Login;