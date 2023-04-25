import AdminNavbar from "./adminNavbar";
import AdminDashBoard from "./adminDashBoard";
import {Routes, Route } from "react-router-dom";
import ShowUser from "./showUser";
import About from "./about";

const AdminPortal = () => {
    return ( 
        <div className="adminportal">
        <AdminNavbar/>
        <Routes>
        <Route path="/" element={<AdminDashBoard/>}/>
        <Route path='/show-voter' element={<ShowUser/>}/>
        <Route path='/about' element={<About/>}/>
    
       
      </Routes>
        </div>
     );
}
 
export default AdminPortal;