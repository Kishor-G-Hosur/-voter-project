
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/showuser.css'
const ShowUser = () => {
    let [voter,setVoter]=useState([])
    

    useEffect(()=>{
     let fetchdata=async()=>{
            let response=await fetch('http://localhost:2022/voter',{})
            let data=await response.json()
            setVoter(data)
        }
        fetchdata()
    },[voter])
     
    let navigator=useNavigate()
    let remove=(id)=>
    {
        navigator=fetch(`http://localhost:2022/voter/${id}`,
        {
            method:"DELETE"
        })
    }
    return ( 
        <div className="showvoter">
               <div className="userlist1"> 
            <h1 id="pl1">voter list</h1>
            <h4><b><u> Total voting :{voter.length}</u> </b></h4>
            {/* <h4><b><u> Total vote for BJP :{voter.data.Bjp.length}</u> </b></h4> */}
            {
                voter.map((data)=>
                (

                    <div className="showvoter1">
                     
                     <h4>name: {data.name}</h4>
                        <h4>age: {data.age}</h4>
                         <h4>email: {data.email}</h4>
                         <h4>phoneNumber: {data.contact}</h4>
                         <h4>USN:{data.Usn}</h4> 
                         <h4>class :{data.class1}</h4>
                         <h4>BJP :{data.Bjp}</h4>
                         <h4>JDS :{data.Jds}</h4>
                         <h4>Congress :{data.Congress}</h4>
                         <h4>Other :{data.other}</h4>
                        <button id="btn99" onClick={()=>remove(data.id)}>Delete</button>
                    </div>

                ))
            }
        </div>
        </div>
     );
}
 
export default ShowUser;