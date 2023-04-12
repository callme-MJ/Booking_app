import React from "react";
import "./propertyList.css"
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
    const {data, loading, error} = useFetch("/hotels/countByType");
    console.log(data);
    const images =[
        "https://media-cdn.tripadvisor.com/media/photo-s/1e/dc/6b/96/chambre-d-hotes-le-49.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/1c/75/8c/01/maison-d-hotes-chamade.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/1e/dc/6b/96/chambre-d-hotes-le-49.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/1c/75/8c/01/maison-d-hotes-chamade.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/1c/75/8c/01/maison-d-hotes-chamade.jpg",
    ]
    return(
        <div className="propertyList">
            {loading? ("loading..."):(<>
            {data && 
            images.map((img,index)=>(
                <div className="propertyListItem" key={index}>
                <img src={img} alt="hotel img" className="propertyListImg"/>
                <div className="propertyListInfo">
                        <h1>{data[index]?.type}</h1>
                        <h2> {data[index]?.count} {data[index]?.type}</h2>
                </div>
            </div>
                ))}
            </>)}
        </div>
    )
}

export default PropertyList;