import { Link } from "react-router-dom";
import Left from "../Admin/Left";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

function QuearyData() {

 
  const[query,setquery] = useState([])
  useEffect(()=>{
    
    fetch("/api/queryData").then((res)=>{
      return res.json()
     }).then((Data)=>{
       console.log(Data)
       setquery(Data)
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
                       
                            <th>S.No</th>
                            <th>Email</th>
                            <th>Quary</th>
                            <th>Status</th>
                            <th>Responce</th>
                            <th>Delect</th>
                           
                          
                        </tr>
                        {
                          query.map((value,index)=>(
                            <tr>
                            <td>{index}</td>
                        <td>{value.Email}</td>
                        <td>{value.Query}</td>
                        <td>{value.Status}</td>
                        <td><Link to={`/Queryreply/${value._id}`}><Button color="success"><SendIcon/> </Button></Link> </td>
                        <td><Button color="error"><DeleteIcon/> </Button></td>
                       
                        
                   
                    

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

export default QuearyData;