
import '../style/adminLogin.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdminLogin() {
    let [email,setEmail]=useState('')
 let [password,setPassword]=useState('')
 let navigate=useNavigate();
 
 let login=(e)=>
     {
         e.preventDefault();
         let data={email,password}
         console.log(data)
         if(email ==='admin@gmail.com' && password ==='123')
       {
            navigate('/admin/')
         }
       else{
             alert("invalid Login credentials")
   }
}
  return (
    <Form onSubmit={login}>
      <div className="admin1 m-4">
        <h4 className='text-info'><b><u>welcome to Admin</u></b></h4>
      <Form.Group className="w-25 m-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" required value={email} placeholder="enter your Email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="m-3 w-25" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required value={password} placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group> 
      <Button className='m-3' variant="primary" type="submit">
        Submit
      </Button>
      </div>
      <div className='name'>
        <img height={400} src="images/img22.jpg" alt="" />
      </div>
    </Form>
  );
}

export default AdminLogin;