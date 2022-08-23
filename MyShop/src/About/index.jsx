import React from 'react';
import { Link } from 'react-router-dom';
import { FaBold, FaCheck } from "react-icons/fa";
import image from "../image/R.png";


import './About.css'

const About = () => {
    return (
    <section class="about_part " ID="about">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-6">
            <div class="banner_cont">
              <h1 >What is MyShop?<span style={{ color:'red'}}>{FaCheck }</span></h1>
              <p>MyShop is Bangladesh's leading full-stack B2B commerce platform for small businesses. Our goal is to use technology to supercharge businesses with easy access to B2B sourcing and last-mile logistics.</p>
              
            </div>
          </div>
          <div class="col-sm-6 col-md-6">
            <div class="banner_contpart">
              <h1 ></h1>
              <p><span style={{color:'0000',fontWeight: '600' }}>REDX</span> - our logistics service - supercharges SMEs and large enterprises alike with the widest last-mile logistics network in Bangladesh.</p>
              <p><span style={{color:'000',fontWeight: '600' }}>Baki</span>  - our digital embedded financing product provides supplies on credit, empowering thousands of small traders with an easy alternative to the complexities of traditional financing.</p>
              <button><Link to="/contact">Send us a message</Link></button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-6">
            <div class="bout_life_part_first">
              <div className="img-container">
            <img className="w-100" src={image} alt="" srcset="" />
          </div>
              
            </div>
          </div>
          <div class="col-sm-6 col-md-6">
            <div class="about_life_part">
              <h1 >Life at My Shop<span style={{ color:'red'}}>{FaCheck }</span></h1>
              <p>At ShopUp we dream big, grow fast, work hard, play harder, and at the same time change thousands of lives for the better!</p>
              <br/>
              <p>Join us to be a part of a positive force that brings change to the economy of Bangladesh. Small businesses have always been the back bone of our economy, and when we facilitate their growth, not only do we help the micro entrepreneurs, but we ourselves grow leaps and bounds.</p>
            </div>
          </div>
          </div>
        
      </div>
    
  </section>
    );
};

export default About;