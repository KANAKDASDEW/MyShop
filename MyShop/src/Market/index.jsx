import React from 'react';
import { Link } from 'react-router-dom';
import image from '../image/OIP (1).jpg';
import './Market.css'

const Market = () => {
    return (
        <div className="market_container" ID="ABOUT" >
            <div className="market_image">
                <img src={image} alt="" />
            </div>
            <div className="market_content">
                <h3>Our Market Policy</h3>
                <p>lorem Ipsum Policy Market amet has been designed to be used in the public domain.lorem ipsum dolor sit amet con et just abs.
                lorem Ipsum Policy Market amet has been designed to be used in the public domain.lorem ipsum dolor sit amet con et.
                lorem Ipsum Policy Market amet has been designed to be used in the public domain.lorem ipsum dolor sit amet con et just abs?
                </p>
                <Link to="/signIn">Get Start Your Bussiness</Link>
            </div>
        </div>
    );
};

export default Market;