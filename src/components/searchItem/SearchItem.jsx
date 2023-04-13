import React from "react";
import "./searchItem.css"
import { Link } from "react-router-dom";

const SearchItem =({item})=>{
    return(
        <div className="searchItems">
            <img src={item.photos[0]}
            alt="hotel"
            className="siImg"/>
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance}</span>
                <span className="siTaxiOp">Free Taxi</span>
                <span className="siSubtitle">Studiio with Air Condition</span>
                <span className="siFeatures">{item.desc}</span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, So lock in this great price today</span>
            </div>
            <div className="siDetails">
                {item.rating && 
                <div className="siRating">
                    <span>Excellent</span>
                    <button>{item.reating}</button>
                </div>}
                <div className="siDetailsTexts">
                    <span className="siPrice">{item.cheapestPrice}$</span>
                    <span className="siTaxOp">Icluded of Taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                    <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default SearchItem;