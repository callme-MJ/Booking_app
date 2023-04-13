import { Link } from "react-router-dom";
import "./naavbar.css"
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar=()=>{
    const {user} = useContext(AuthContext);

    return(
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color:"white", textDecoration:"none"}}>
                <div className="navLogo">
                    OYO
                </div>
                </Link>
                

                {user ? user.username:
                (<div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>)}
            </div>
        </div>
    )
}
export default Navbar;