import '../style/adminDashBoard.css';

import { useEffect } from "react";
import { useState } from "react";

const AdminDashBoard = () => {

    let [voter, setVoter] = useState([])
    let [bjp, setrbjp] = useState([])

    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch('http://localhost:2022/voter', {})
            let data = await response.json()
            setVoter(data)
        }
        fetchdata()
    }, [voter])



    return (
        <div className="adminDashBoard">
            <div className="s1">
                <h6 id='S1'><b><u>student voting</u></b></h6>
            </div>
           
            <h4><b><u> Total voting :{voter.length}</u> </b></h4>
            {/* <h4><b><u> Total voting :{voter.bjp.length}</u> </b></h4> */}


        </div>
    );
}

export default AdminDashBoard;