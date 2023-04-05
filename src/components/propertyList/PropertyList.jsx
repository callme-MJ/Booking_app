import React from "react";
import "./propertyList.css"

const PropertyList = () => {
    return(
        <div className="propertyList">
            <div className="propertyListItem">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1e/dc/6b/96/chambre-d-hotes-le-49.jpg" alt="" className="propertyListImg"/>
                <div className="propertyListInfo">
                        <h1>Entire apartment</h1>
                        <h2>4 guests</h2>
                        <h2>2 bedrooms</h2>
                </div>
            </div>
            <div className="propertyListItem">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1c/75/8c/01/maison-d-hotes-chamade.jpg" alt="" className="propertyListImg"/>
                <div className="propertyListInfo">
                        <h1>Entire apartment</h1>
                        <h2>4 guests</h2>
                        <h2>2 bedrooms</h2>
                </div>
            </div>
            <div className="propertyListItem">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1e/dc/6b/96/chambre-d-hotes-le-49.jpg" alt="" className="propertyListImg"/>
                <div className="propertyListInfo">
                        <h1>Entire apartment</h1>
                        <h2>4 guests</h2>
                        <h2>2 bedrooms</h2>
                </div>
            </div>
            <div className="propertyListItem">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1c/75/8c/01/maison-d-hotes-chamade.jpg" alt="" className="propertyListImg"/>
                <div className="propertyListInfo">
                        <h1>Entire apartment</h1>
                        <h2>4 guests</h2>
                        <h2>2 bedrooms</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList;