import React, {useState} from "react";
import profile from "../images/Profile.svg";
import {Link} from "react-router-dom";
import "./SignIn.css";

const SignIn = ({show}) => {
    const [signin, setSignin] = useState(false);

    const handleSignin = () => {
        setSignin(!signin);
    }

    return (
        <Link to="/signin"
              className="profile"
              onClick={handleSignin}

        >
            {signin ?
                //if user sign in
                <div className="signin">
                    <div className="signin__img">
                        <img src={profile} alt=""/>
                    </div>

                    <span className={show ? "" : "signin__span"}>Lusine Hayrapetyan</span>
                </div>
                :
                //user sign out
                <div className="signout" style={{"height": show ? "46px" : "32px"}}>
                    <img src={profile} alt=""/>
                    <span>Sign In</span>
                </div>
            }
        </Link>
    )
};

export default SignIn