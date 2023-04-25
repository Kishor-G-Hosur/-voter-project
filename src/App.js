
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './component/landingPage';
import AdminLogin from './component/adminLogin';
import AdminPortal from './component/adminPortal';
import UserLogin from './component/userLogin';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/admin/*" element={<AdminPortal/>}/>
        <Route path='/user-login' element={<UserLogin/>}/>
        </Routes>
        </BrowserRouter>

    </div>
  );
}
export default App;
