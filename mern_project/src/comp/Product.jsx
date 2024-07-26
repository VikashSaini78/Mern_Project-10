import { useEffect, useState } from "react";
import CardProduct from "./Card";
import { Box } from "@mui/material";
import Query from "./Quary";



function Product() {
    
 const [Allproduct,setAllproducts] = useState([])




useEffect(()=>{
    fetch("/api/allProducts").then((res)=>{
        return res.json()
    }).then((data)=>{
        setAllproducts(data)
        // console.log(data)
    })
},[])


    return ( 
        <>  
       

       <Box sx={{
      
                display:"flex",
                justifyContent: "space-evenly",
                flexWrap:"wrap",  
                gap:"50px",
                minHeight: "60vh",
                marginTop:"20px"
       }}>
       {
                Allproduct.map((value)=>(
                  <CardProduct productData = {value}/>
                )) 
            }
          
       </Box>
       

       <Box>
        <Query/>
       </Box>
          
          
           
          
        </>
     );
}

export default Product;