import React from "react";
import "./searchItem.css"

const SearchItem =()=>{
    return(
        <div className="searchItems">
            <img src=""
            alt="hotel"
            className="siImg"/>
            <div className="siDesc">
                <h1 className="siTitle">Arcade Rooms</h1>
                <span className="siDistance">500m</span>
                <span className="siTaxiOp">Free Taxi</span>
                <span className="siSubtitle">Studiio with Air Condition</span>
                <span className="siFeatures">Entire Studio * 1 bathroom * 21m 1full bed</span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, So lock in this great price today</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailsTexts">
                    <span className="siPrice">123$</span>
                    <span className="siTaxOp">Icluded of Taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}
export default SearchItem;