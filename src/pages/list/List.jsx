import React, { useState } from "react";
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List= ()=>{
    const location= useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openCalendar, setOpenCalendar]= useState(false)
    const [options, setOptions] =useState(location.state.options)
    return(
        <div>
            <Navbar/>
            <Header type= "list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                        <label>Destination</label>
                        <input placeholder={destination} type="text" />
                    </div>
                    <div className="lsItem">
                        <label>Check-in date</label>
                          <span onClick={()=> setOpenCalendar(!openCalendar)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openCalendar &&<DateRange
                            onChange={(item)=> setDate([item.selection])}
                            minDate={new Date()}
                            ranges={date}
                            />}
                    </div>
                    <div className="lsItem">
                        <label>Options</label>
                        <div className="lsOptions">

                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input type="number" min={1} placeholder={options.adult} className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Children</span>
                                    <input type="number" min={0} placeholder={options.children} className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input type="number" min={1} placeholder={options.room} className="lsOptionInput" />
                                </div>
                        </div>
                    </div>
                                <button>Search</button>
                    </div>
                    <div className="listResult">

                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default List;