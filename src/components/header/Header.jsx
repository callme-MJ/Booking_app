import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { faBed, faBus, faCalendarDays, faCar, faPerson, faPlane, faSearch, faTrain } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from "date-fns/format";
import "./header.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";


const Header=({type})=>{
    const [destination, setDestination] = useState("");
    const [openCalendar, setOpenCalendar] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const {user} = useContext(AuthContext);

    const handleOption=(type, action)=>{
        setOptions({...options, [type]: action==="i"? options[type]+1 : options[type]-1})
    }

    const navigate = useNavigate()
    
    const {dispatch}= useContext(SearchContext)
    
    const handleSearch= ()=>{
        dispatch({type:"NEW_SEARCH", payload:{destination,date,options}})
        navigate("/hotels",{state:{destination, date, options}})
    }

    return(
        <div className="header">
            <div className={type === "list" ? "headerContainer list" :"headerContainer"}>


            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span className="icon">Rooms</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span className="icon">Flights</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span className="icon">Car Rentals</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTrain} />
                <span className="icon">Trains</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBus} />
                <span className="icon">Bus</span>
                </div>
            </div>

           { 
           type !== "list" &&<>
            <h1 className="title">
            Find your next stay
            </h1>
            <p className="headerDisc">
            Search low prices on hotels, homes and much more...
            </p>
            {!user && <button className="headerBtn">Sign in/ Register</button>}
            
            <div className="headerSearch">
                <div className="searchItem">
                <FontAwesomeIcon icon={faBus} className="searchIcon" />
                <input type="text"
                placeholder="to where"
                className="searchInput"
                onChange={(e)=> setDestination(e.target.value)}/>
                </div>
                <div className="searchItem">
                <FontAwesomeIcon icon={faCalendarDays}className="searchIcon" />
                <span onClick={()=>{setOpenCalendar(!openCalendar)}} className="searchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
               {openCalendar && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  minDate={new Date()}
  className="date"
/>}
                </div>

                <div className="searchItem">
                <FontAwesomeIcon icon={faPerson} className="searchIcon"/>
                <span onClick={()=>{setOpenOptions(!openOptions)}} className="searchText">{`${options.adult} adult. ${options.children} children. ${options.room} rooms`}</span>
                {openOptions && 
                <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionBtns" >
                            <button className="optionBtn" disabled={options.adult <=1} onClick={()=>handleOption("adult", "d")}>-</button>
                            <span>{options.adult}</span>
                            <button className="optionBtn" onClick={()=>handleOption("adult", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionBtns">
                            <button className="optionBtn" disabled={options.children <=0} onClick={()=>handleOption("children", "d")}>-</button>
                            <span>{options.children}</span>
                            <button className="optionBtn" onClick={()=>handleOption("children", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Rooms</span>
                        <div className="optionBtns">
                            <button className="optionBtn" disabled={options.room <=1} onClick={()=>handleOption("room", "d")}>-</button>
                            <span>{options.room}</span>
                            <button className="optionBtn" onClick={()=>handleOption("room", "i")}>+</button>
                        </div>
                    </div>
                </div>
                }
                </div>

                <div className="searchItem">
                <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
                <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
            </div>
            </>}
        
            </div>
        </div>
    )
}

export default Header;