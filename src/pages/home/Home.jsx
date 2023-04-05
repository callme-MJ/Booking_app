import React from "react";
import "./home.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import RoomList from "../../components/roomList/RoomList";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
const Home = ()=>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">
                    Explore nearby
                </h1>
                <PropertyList/>
                <h1 className="homeTitle">
                    Rooms nearby
                </h1>
                <RoomList/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;