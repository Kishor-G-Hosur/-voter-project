

import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../style/adminNavbar.css'


function  AdminNavbar() {
  return (
    <div className="adminNavbar">
    <>
      
        <Navbar bg="info mr-5" className="mb-3">
       
            <Navbar.Brand className='m-2' href="#"><b><u>AdminPortal</u></b> </Navbar.Brand>
        
                <div className="navbar">
                  <ul>
                    <li> <Link id='k1' Link to="/admin/"><b>Home</b> </Link></li>

                    <li><Link id='k3'  Link to="/admin/about"><b>About</b></Link></li>
                    <li><Link id='k4' Link to="/admin/show-voter"><b>voter-list</b></Link></li>

                    <li><Link id='k6' className='text-danger' Link to="/"><b>Logout</b> </Link></li>
                  
                  </ul>
                </div>
        </Navbar>
    
    </>
    </div>
  );
}

export default AdminNavbar;