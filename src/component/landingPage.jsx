import { Link } from "react-router-dom";
import '../style/landingpage.css'

const LandingPage = () => {
    return (
        <div className="landingpage">

            <div className="img999">
                <img width={1000} id="id1" src="images/img1.png" alt="" />
            </div>
            <h3 id="id9" style={{textAlign:"center"}}><b><u>vote for future</u></b></h3>
            <div className="selectLoginType">

                <div className="users">
                 
                    <br />
                    <div className="user">
                        <Link id="i3" to='/admin-login'>ADMIN-LOGIN</Link>
                        <Link id="i3" to='/user-login'>student-voter</Link>
                    </div>
                    <div className="us1 mt-4 p-4"><b>
                        <p>StudentVote.org was launched by the Student PIRGs in partnership with Rock the Vote. Since 2008, we’ve worked with more than one hundred campus and group partners. Below are our premier partners.</p>
                      <br />
                        <p>The Student PIRGs’ New Voters Project is a nonpartisan effort to help register young people and get them to the polls on Election Day. We believe the best way to raise the voices of young people and our issues is to register and vote. Together we can make change happen.</p></b>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default LandingPage;