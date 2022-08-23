import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Shop.css'

import ShopCatagoryData from '../ShopCatagoryData/ShopCatagoryData.json'

const Shop = (props) => {
    const { id } = useParams();
    const [shopItem, setShopItem] = useState(ShopCatagoryData);

   
 const data=   shopItem.find(x=>x.id==id)

    return (
        <div className="shop_container container">
            {
               data?.catagory.map(shop =>
                    <div className="shop_content_img" key={shop.key}>
                        <Link to>
                            <img src={shop.img} alt="" />
                            <div className="shop_content">
                                <h1>{shop.key}</h1>
                                <h4>{shop.name}</h4>
                                <p>{shop.schedule}</p>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default Shop;