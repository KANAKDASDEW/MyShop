import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShopCatagory.css';
import ShopCatagoryData from './ShopCatagoryData/ShopCatagoryData.json';

const ShopCatagory = () => {
    const [shopCatagory, setShopCatagory] = useState(ShopCatagoryData);
    // useEffect(() =>{
    //     setShopCatagory(ShopCatagoryData);
    // },[])
    return (
        <div className="shop_catagory_container">
            <h3>Shop Catagory</h3>
            <div className="shopCatagory_page">
                
                {
                    shopCatagory.map(x =>
                    <div className="shopCatagory_content" key={x.id}>
                        <Link to={`/shop/${x.id}`}>
                            <img src={x.image} alt="image" />
                            <h4>{x.title}</h4>
                            <h5>Open: {x.schedule}</h5>
                        </Link>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShopCatagory;
