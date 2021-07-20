import React, {useState} from "react";
import profile from "../images/Profile.svg";
import {Link} from "react-router-dom";
import "./SignIn.css";

const SignIn = ({show}) => {
    const [signin, setSignin] = useState(false);

    const handleSignin = () => {
        setSignin(!signin);
        console.log("signin   ", signin);
    }
    return (
        <Link to="/signin"
              className="profile"
              onClick={handleSignin}

        >
            {signin ?
                <div className="signin">
                    <div  className="signin_img">
                        <img src={profile} alt=""/>
                    </div>

                    <span className={show ? "" : "span"}>Lusine TerHayrapetyan</span>
                </div>
                :
                <div className="signout" style={{"height": show ? "46px" : "32px"}}>
                    <img src={profile} alt=""/>
                    <span>Sign In</span>
                </div>
            }
        </Link>
    )
};

export default SignIn