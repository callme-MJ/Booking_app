import React from "react";
import "./roomList.css";
import useFetch from "../../hooks/useFetch";

const RoomList = () => {
    const {data, loading, error} = useFetch("/hotels?featured=true")
    return(
        <div className="rl">
            {loading? "loading.....":<>
            {data.map((item)=>(

                <div className="rlItem" key={item._id}>
                <img src={item.photos[0]}
                //  "https://images.oyoroomscdn.com/uploads/hotel_image/17864/ef100ccfa4c938f9.jpg"
                alt="room" className="rlImg"/> 
                <span className="rlName">{item.name}</span>
                <span className="rlCity">{item.city}</span>
                <span className="rlPrice">from ${item.cheapestPrice}</span>
                   {item.rating && <div className="rlRating">
                        <button>{item.rating}</button>
                        <span>Excellent</span>
                    </div>}
            </div>
                ))}  
                </>}
            
        </div>

    )
}
export default RoomList;