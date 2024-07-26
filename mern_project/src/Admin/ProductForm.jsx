import { Button } from "@mui/material";
import Left from "./Left";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductForm() {

  const[PName,setPName] = useState("")
  const[PPrice,setPprice] = useState("")
  const[PDesc,setPDesc] = useState("")
  const[PImg,setPImg] = useState("")



  const naviget = useNavigate()


  function hendalform(e){
  e.preventDefault()
  console.log(PImg)

    // console.log(`product name :- ${PName},price :- ${PDesc}, description :-${ PPrice},status:-${PStatus}`)


  const FormData = {PName,PDesc,PPrice,PImg}

  fetch("/api/insertProduct",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(FormData)
  }).then((res)=>{
    return res.json()
  }).then((Data)=>{
   if(Data._id){
    naviget("/Productadd")
   }
  //  else{
  //       setmessage(Data.message)
  //  }
  })


  }
    return ( 
        <>
            
           <div className=" w-4/5 h-screen flex mx-auto flex-col">
       <Left/>

            <div className="w-full">
              <h1 className="text-2xl text-center text-red-800">Product Form</h1>
               {/* <p className="text-red-800 text-center">{message} </p> */}
              <form onSubmit={hendalform} encType="multipart/form-data">
                <label>Product Name</label>
                <input type="text" className="border-2 form-control"
                    value={PName}
                    onChange={(e)=>{setPName(e.target.value)}}
                />

                <label>Product Description</label>
                <input type="text" className="border-2 form-control"
                       value={PDesc}
                    onChange={(e)=>{setPDesc(e.target.value)}}
                />

                <label>Product Price</label>
                <input type="text" className="border-2 form-control mb-3"
                       value={PPrice}
                    onChange={(e)=>{setPprice (e.target.value)}}
                />
                 <label>Product image</label>
                <input type="file" className="border-2 form-control mb-3"
                name="img"
                    onChange={(e)=>{setPImg (e.target.files[0])}}
                />
            

                <Button sx={{backgroundColor:'tomato'}} type="submit" className="border-2 form-control" >Add Product</Button>
              </form>
            
            </div>

           </div>
        </>
     );
}

export default ProductForm;