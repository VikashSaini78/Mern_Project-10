import { Button } from "@mui/material";
import Left from "./Left";
import { useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

function Queryreply() {



  const {id} = useParams()


  const [form,setform] = useState("")
  const [to,setto] = useState("")
  const [sub,setsub] = useState("")
  const [body,setbody] = useState("")

    function hendalform(e){
      e.preventDefault()
   const replydata = {form,to,sub,body}

     fetch(`/api/querydata/${id}`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(replydata)
     }).then((res)=>{
      return res.json()
     }).then((Data)=>{
      if(Data){
        toast.success("successfuly email send")
      }

     })
    }
    

    return ( 
        <>
             <div className=" w-4/5 h-screen flex mx-auto flex-col">
       <Left/>

            <div className="w-full">
              <h1 className="text-2xl text-center text-red-800">Email send</h1>
           
              <form onSubmit={hendalform}>
                <label>From</label>
                <input type="text" className="border-2 form-control"
                    value={form}
                    onChange={(e)=>{setform(e.target.value)}}
                />

                <label>to</label>
                <input type="text" className="border-2 form-control"
                       value={to}
                    onChange={(e)=>{setto(e.target.value)}}
                />

                <label>Sub</label>
                <input type="text" className="border-2 form-control mb-3"
                       value={sub}
                    onChange={(e)=>{setsub(e.target.value)}}
                />

                <labal>Body</labal>
                <textarea  className="border-2 form-control mb-3"
                       value={body}
                    onChange={(e)=>{setbody(e.target.value)}}
                />
               
                <Button type="submit" className="border-2 form-control ">Email Send</Button>
              </form>
            
            </div>

           </div>
        </>
     );
}

export default Queryreply;