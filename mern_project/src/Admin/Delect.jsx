import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function Delect() {
    const {id} = useParams('')
   const naviget = useNavigate([])

    fetch(`/api/AdminproductDelect/${id}`,{
        method:"DELETE"
    })
    .then((res)=>{
        return res.json()
    }).then((Data)=>{
        if(Data.message){
            naviget('/Productadd')
        }
        else{
            toast.success("delet")
        }

    })
  

    return ( 
        <>
        {id}
            Delect
        </>
     );
}

export default Delect;