import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function UserLogin() {

  let [name, setName] = useState()
  let [age, setAge] = useState()

  let [email, setEmail] = useState()
  let [contact, setContact] = useState()

  let [Usn, setUsn] = useState()
  let [class1, setClass1] = useState()
  let [bjp, setbjp] = useState()


  let [Jds, setjds] = useState()
  let [Congress, setcongress] = useState()
  let [other, setOther] = useState()



  let navigate = useNavigate()


  let submit = (e) => {
    e.preventDefault();
    let voter = { name, age, email, contact, Usn, class1, bjp, Jds, Congress, other }
    fetch(' http://localhost:2022/voter', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(voter)
    })
    alert(`${name} thank you for voting`)
    navigate('/')
  }
  return (
    <div className="addvoter ">
      <h4><b><u>vote register</u></b></h4>
      <Form onSubmit={submit}>

        <Row className="mb-3  m-4 w-25 ">

          <Form.Label>name</Form.Label>
          <Form.Control type="text" required placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />


          <Form.Label>Age</Form.Label>
          <Form.Control type="date" required placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />



          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />



          <Form.Label>contact</Form.Label>
          <Form.Control type="tel" required maxLength={10} placeholder="Enter contact number" value={contact} onChange={(e) => setContact(e.target.value)} />


          <Form.Label>USN</Form.Label>
          <Form.Control type="number" required maxLength={4} placeholder="Enter address" value={Usn} onChange={(e) => setUsn(e.target.value)} />

          <Form.Label>class</Form.Label>
          <Form.Control type="text" required placeholder="Enter Ypor class" value={class1} onChange={(e) => setClass1(e.target.value)} />



          <Form.Label column sm="2">BJP</Form.Label>
          <Col sm="10"> <Form.Control style={{ width: "40vh" }} type="text"  placeholder="If you want to vote BJP type YES state" value={bjp} onChange={(e) => setbjp(e.target.value)} />
          </Col>
   

          
          <Form.Label column sm="2">JDS</Form.Label>
          <Col sm="10"> <Form.Control style={{ width: "40vh" }} type="text"  placeholder="If you want to vote BJP type YES state" value={Jds} onChange={(e) => setjds(e.target.value)} />
          </Col>
        

          <Form.Label column sm="2">Congress</Form.Label>
          <Col sm="10"> <Form.Control style={{ width: "40vh" }} type="text"  placeholder="If you want to vote BJP type YES state" value={Congress} onChange={(e) => setcongress(e.target.value)} />
          </Col>
  

        <Form.Label column sm="2">Others</Form.Label>
          <Col sm="10"> <Form.Control style={{ width: "40vh" }} type="text"  placeholder="If you want to vote BJP type YES state" value={other} onChange={(e) => setOther(e.target.value)} />
          </Col>
        </Row>

        {/* <div style={{width:"0px",borderradius:"10px",margin:"20px 30px"}}>
              <Form.Label >BJP</Form.Label>
                  <Form.Control type="radio"   value={Bjp} onChange={(e)=>setBjp(e.target.value)} />
                  <Form.Label>JDS</Form.Label>
                  <Form.Control type="radio"   value={Jds} onChange={(e)=>setjds(e.target.value)} />
                  <Form.Label>Congress</Form.Label>
                  <Form.Control type="radio"   value={Congress} onChange={(e)=>setcongress(e.target.value)} />
                  <Form.Label>Other</Form.Label>
                  <Form.Control type="radio" value={other} onChange={(e)=>setOther(e.target.value)} />
                  </div> */}
        <Button variant="primary" className="m-4 w-25" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UserLogin;