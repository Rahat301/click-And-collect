import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner_left'>
                <p>Summer Sell</p>
                <h1>UPTO <span>70%</span></h1>
                <p>Collect your offer using promo code</p>
                <h3>ASEDGF</h3>
            </div>
            <div>
                <img style={{width:"100%"}} src="https://cdna.4imprint.com/qtz/homepage/categories/images21/drinkware0222.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;