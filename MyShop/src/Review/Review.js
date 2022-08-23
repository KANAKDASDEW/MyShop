import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Review.css';

const Review = () => {
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        speed: 500
    };
    return (
        <div className="review_page">
            <Slider {...settings}>
                <div className="review_slider">
                    <div className="review_slider_image">
                        <img src="https://i.pinimg.com/564x/35/4a/fe/354afe573feb779c0cc01178ac00d256.jpg" alt="" />
                    </div>
                    <div className="review_slider_content">
                        <p>"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"</p>
                        <div className="review_icon">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="review_slider">
                    <div className="review_slider_image">
                        <img src="https://i.pinimg.com/236x/49/d1/45/49d145fa8d1770ed94edc5c89baf2e58.jpg" alt="" />
                    </div>
                    <div className="review_slider_content">
                        <p>"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"</p>
                        <div className="review_icon">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="review_slider">
                    <div className="review_slider_image">
                        <img src="https://i.pinimg.com/236x/1d/df/a9/1ddfa98a7e262b691614bc30923a40d5.jpg" alt="" />
                    </div>
                    <div className="review_slider_content">
                        <p>"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"</p>
                        <div className="review_icon">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="review_slider">
                    <div className="review_slider_image">
                        <img src="https://i.pinimg.com/236x/49/d1/45/49d145fa8d1770ed94edc5c89baf2e58.jpg" alt="" />
                    </div>
                    <div className="review_slider_content">
                        <p>"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"</p>
                        <div className="review_icon">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="review_slider">
                    <div className="review_slider_image">
                        <img src="https://i.pinimg.com/236x/1d/df/a9/1ddfa98a7e262b691614bc30923a40d5.jpg" alt="" />
                    </div>
                    <div className="review_slider_content">
                        <p>"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"</p>
                        <div className="review_icon">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>

    );
};

export default Review;
