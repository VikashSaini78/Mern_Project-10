import {Button } from "@mui/material";
import Left from "./Left";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';

function ProductAdd() {

    const [productdata,setproductdata] = useState([])
//    const[Status,setstatus] = useState('')



useEffect(()=>{
    fetch("/api/productdata").then((res)=>{
        return res.json()
    }).then((Data)=>{
        console.log(Data)
        setproductdata(Data)
    })
},[])
  
    return ( 
        <>
            
           <div className="w-4/5 h-auto flex mx-auto flex-col mb-20">
       <Left/>

            <div className="">
              <h1 className="m-auto text-2xl text-center text-red-800 ">Product,management</h1>
              <Link to={"/productform"}><Button variant="contained" color="success" className="form-control" >Add Product Here </Button></Link>



             <table className="table table-hover table-striped mt-3 w-full">
                    <thead>
                        <tr className="border-2 table-warning">
                       
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Product Price</th>
                            <th>Product Status</th>
                            <th>Update Product</th>
                            <th>Delete Product</th>
                          
                        </tr>

                      {/* <tr>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>

                      </tr>
                   */}
                         {
                            productdata.map((value)=>(
                             <tr>
                                  <td>{value.ProductName}</td>
                                  <td>{value.ProductDesc} </td>
                                  <td>{value.ProductPrice} </td>
                                  <td>{value.ProductStatus}</td>
                                  <td> <Link to={`/UpdateForm/${value._id}`}><Button color="success"><UpdateIcon/> Update</Button></Link> </td>
                                  <td><Link to={`/delectproduct/${value._id}`}><Button color="error"><DeleteIcon/> Delete</Button></Link> </td>
                                 
                             </tr>
                            ))
                        }
                       
                    


                        </thead>
                        
                    </table>           


            </div>

           </div>
        </>
     );
}

export default ProductAdd;