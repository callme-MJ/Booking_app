import React from "react";
import "./mailList.css";

const MailList = () => {
    return(
        <div className="ml">
            <h1 className="mTitle">Save time, Save Money..</h1>
            <span className="mlDesc">Sign up and we'll send you details</span>
            <div className="mlContainer">
                <input type="text" placeholder="Enter your email" className="mlInput"/>
                <button className="mlButton">Get Started</button>
            </div>
        </div>
    )
}
export default MailList;