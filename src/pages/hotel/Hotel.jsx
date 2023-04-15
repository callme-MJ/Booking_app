import React, { useContext, useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Hotel = ()=>{
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);
  const [openModal, setOpenModal] = useState(false)

  const {data, loading, error}= useFetch(`/hotels/find/${id}`)

  const {date, options} = useContext(SearchContext)
  const {user}= useContext(AuthContext);
  const navigate = useNavigate();

  const MILLISECONDS_PER_DAY = 1000*60*60*24;
  function dayDifference (date1,date2){
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffDays = Math.ceil(timeDiff/MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = (dayDifference(date[0]?.endDate,date[0]?.startDate));
  const handleOpen = (i)=>{
    setOpenSlide(true);
    setSlideNumber(i);
  }

  const handleMove = (direction)=>{

    let newSlideNumber;
    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? data.photos.length - 1 : slideNumber - 1;
    }else{
      newSlideNumber = slideNumber === data.photos.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  }

  const handleClick=()=>{
    if(user){
      setOpenModal(true)
    }else{
      navigate("/login")
    }
  }
    
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            {loading? ("loading") :(
            <div className="hotelContainer">
              { openSlide && <div className="slider">
                <FontAwesomeIcon onClick={()=>{setOpenSlide(false)}} icon={faCircleXmark} className="close"/>
                <FontAwesomeIcon onClick={()=>handleMove("l")} icon={faCircleArrowLeft} className="arrow"/>
                <div className="slideWrapper">
                  <img src={data.photos[slideNumber]} alt="slides" className="sliderImg"/>
                </div>
                <FontAwesomeIcon onClick={()=>handleMove('r')} icon={faCircleArrowRight} className="arrow"/>

              </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Book Now!</button>
                    <h1 className="hotelTitle">{data.name}</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} className="hotelIcon"/>
                        <span className="hotelAddress">{data.address}</span>
                    </div>
                        <span className="hotelDistance">Excellent location - {data.distance}m from Center</span>
                        <span className="hotelPriceHighlight">Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi..</span>
                        <div className="hotelImages">
                            {data.photos?.map((photo,index)=>(
                              <div className="hotelImgWrapper">
                                    <img onClick={()=>handleOpen(index)} src={photo} alt="hotel" className="hotelImg"/>
                                </div>
                            ))}
                        </div>
                        <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelDetailsTitle">Hotel Details</h1>
                                <p className="hotelDetailsDesc">
                                  {data.desc}
                                </p>
                            </div>
                            <div className="hotelDetailsPrice">
                                <h1>Perfect for a {days} night stay</h1>
                                <span>located in the real heart of karkow, this property has an excellent location score of 9.9</span>
                                <h2><b>${days * data.cheapestPrice * options.room}</b>({days} nights)</h2>
                                <button className="hotelDetailsBtn" onClick={handleClick}>Book Now!</button>
                            </div>
                        </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
            )}
            {openModal &&<Reserve setOpen={setOpenModal} hotelId={id}/>}
        </div>

        
    )
}

export default Hotel;                   