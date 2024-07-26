import { Button, Link } from "@mui/material";
import Left from "../Admin/Left";
import { useEffect, useState } from "react";

function User() {

   const [userData,setuserData] = useState([])

useEffect(()=>{
    
    fetch("/api/userData").then((res)=>{
        return res.json()
        }).then((Data)=>{
          console.log(Data)
          setuserData(Data)
        })
    
},[])
    function updateStatus(id){
        console.log(id)

        fetch(`/api/updateStatus/${id}`).then((res)=>{
           return res.json()
        }).then((data)=>{console.log(data)})
    }



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
                       
                            <th>S.No</th>
                            <th>Username</th>
                            <th>RegistationDate</th>
                            <th>Status</th>
                           
                           
                          
                        </tr>
                    

                        </thead>




                        {
                            userData.map((value,index)=>(

                              <tr>
                                <td>{index}</td>
                                <td>{value.Username}</td>
                                <td>{value.CreateDate}</td>
                                <td><Button onClick={()=>{updateStatus(value._id)}}>{value.Status}</Button></td>
                              </tr>
                            ))
                            
                        } 
                        
                    </table>           


            </div>

           </div>
        </>
     );
}

export default User;