import Admin from "./Admin/Admin";
import Delect from "./Admin/Delect";
import ProductAdd from "./Admin/ProductAdd";
import ProductForm from "./Admin/ProductForm";
import Queryreply from "./Admin/Queryreply";
import UpdateForm from "./Admin/UpdateForm";
import Footer from "./comp/Footer";
import HomePage from "./comp/HomePage";
import Login from "./comp/Login";
import Navbar from "./comp/Navbar";
import Product from "./comp/Product";
import Query from "./comp/Quary";
import QuearyData from "./comp/QuearyData";
import Regustion from "./comp/Regustion";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import User from "./comp/User";
import {usercontext} from "./userContext"
import { useState } from "react";

function App() {
 const [loginadmin,setloginadmin] = useState(localStorage.getItem("admin"))
 const [loginuser,setloginuser] = useState(localStorage.getItem("user"))
 
  return ( 

    <>

    <usercontext.Provider value={{loginadmin,setloginadmin,loginuser,setloginuser}}>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>

    <Route path="/homepage" element={<HomePage/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/" element={<Regustion/>}/>
    <Route path="/product" element={<Product/>}/>     
    <Route path="/Productadd" element={<ProductAdd/>}/>
    <Route path="/productform" element={<ProductForm/>}/>
    <Route path="/UpdateForm/:id" element={<UpdateForm/>}/>
    <Route path="/delectproduct/:id" element={<Delect/>}/>
    <Route path="/Quary" element={<Query/>}/>
    <Route path="/QuertData" element={<QuearyData/>}/>
    <Route path="/Queryreply/:id" element={<Queryreply/>}/>
    <Route path="/user" element={<User/>}/>

    </Routes> 
    <Footer/>
    </BrowserRouter>
    </usercontext.Provider>
 
    </>

   );
}

export default App;