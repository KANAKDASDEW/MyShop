import React from "react";
import "./Footer.css";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithubSquare,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const ContactFooter = () => {
    return (
        <footer id="footer">
            <div className="container footer-container">
                <div className="row">
                    <div className="col-12 pt-5 d-flex justify-content-center ">
                        <div className="social-container">
                            <h1> Social Media</h1>
                            <Nav>
                          
                                <Nav.Item>
                                    <Nav.Link href="https://www.facebook.com" className="Facebook">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </Nav.Link>
                                </Nav.Item>
                  
                                <Nav.Item>
                                    <Nav.Link href="https://github.com" className="Github">
                                        <FontAwesomeIcon
                                            icon={faGithubSquare}
                                        />
                                    </Nav.Link>
                                </Nav.Item>
                                
                                <Nav.Item>
                                    <Nav.Link href="https://www.linkedin.com"className="Linnkden">
                                        {" "}
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className=" col-12 d-flex justify-content-center copyrights pt-5">
                        <p className="para text-center">
                            Copyright ©2022 All rights reserved | DESIGN &&
                            Build BY &nbsp;{" "}
                            <span className="brandName">MY Shop</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
