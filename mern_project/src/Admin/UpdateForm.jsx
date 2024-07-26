import { Button } from "@mui/material";
import Left from "./Left";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UpdateForm() {
   const {id} = useParams()
   const naviget = useNavigate()
   const [Pname,setPname] = useState("")
   const [Pprice,setPprice] = useState("")
   const [Pdesc,setPdesc] = useState("")
   const[PStatus,setPstatus] = useState("")


   
   useEffect(()=>{
    fetch(`/api/updateform/${id}`).then((res)=>{
        return res.json()
    }).then((Data)=>{
      console.log(Data)
      setPname(Data.ProductName)
      setPdesc(Data.ProductDesc)
      setPprice(Data.ProductPrice)
    })

   },[])







    function hendalform(e){
     e.preventDefault()

    //  console.log(Pname,Pprice,Pdesc,PStatus)

     const FormData ={Pname,Pprice,Pdesc,PStatus}

     fetch(`/api/updateproductdata/${id}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(FormData)
  })
     .then((res)=>{
     return res.json()
     }).then((Data)=>{
      if(Data._id){
        naviget("/Productadd")
      }
     })
   
    }

    return ( 
        <>
      
             <div className=" w-4/5 h-screen flex mx-auto flex-col">
       <Left/>

            <div className="w-full">
              <h1 className="text-2xl text-center text-red-800">Product Update</h1>
           
              <form onSubmit={hendalform}>
                <label>Product Name</label>
                <input type="text" className="border-2 form-control"
                    value={Pname}
                    onChange={(e)=>{setPname(e.target.value)}}
                />

                <label>Product Description</label>
                <input type="text" className="border-2 form-control"
                       value={Pdesc}
                    onChange={(e)=>{setPdesc(e.target.value)}}
                />

                <label>Product Price</label>
                <input type="text" className="border-2 form-control mb-3"
                       value={Pprice}
                    onChange={(e)=>{setPprice (e.target.value)}}
                />
                     <labal>Status</labal>
                <select className="form-control mb-5"
                 value={PStatus}
                 onChange={(e)=>{setPstatus(e.target.value)}}
                >
                  <option>---select---</option>
                  <option value={"In-Stock"}>In stock</option>
                  <option value={"Out Of Stock"}>out of stock</option>
                </select>
                <Button type="submit" className="border-2 form-control " >Update Product</Button>
              </form>
            
            </div>

           </div>
        </>
     );
}

export default UpdateForm;