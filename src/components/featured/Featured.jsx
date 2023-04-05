import './featured.css';
import React from 'react';
 
const Featured = () => {
    return(

    <div className="featured">
        <div className="featureItem">
        <img src='https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=700'
        alt='city'
        className='featuredImg'/>
        <div className="featuredTitle">
        <h1>Cochin</h1>
        <h2>adf</h2>
        </div>
        </div>
        <div className="featureItem">
        <img src='https://ideas.ted.com/wp-content/uploads/sites/3/2016/05/featured-art_r-muggah.jpg?w=750'
        alt='city'
        className='featuredImg'/>
        <div className="featuredTitle">
        <h1>Cochin</h1>
        <h2>adf</h2>
        </div>
        </div>
        <div className="featureItem">
        <img src='https://media.cntraveler.com/photos/5ca60f7f7b531a5e47949cde/master/w_4000,h_2400,c_limit/NYC_GettyImages-500619014.jpg'
        alt='city'
        className='featuredImg'/>
        <div className="featuredTitle">
        <h1>Cochin</h1>
        <h2>adf</h2>
        </div>
        </div>
    </div>
        )
}
export default Featured;