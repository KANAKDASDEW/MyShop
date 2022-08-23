import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactTypingEffect from 'react-typing-effect';
import './Signup.css';



const Signup = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <section class="Contact_part Signup ">
                <div class="container ">
                    <div class="row ">
                        <div class="col-sm-12 col-md-6 last style">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                                id="Form"
                                method=""
                                action=""
                            >   
                                <div class="row mt_70">
                              
                                    <div class="col-12 ">
                                        <input
                                            name="name"
                                            onChange={handleChange}
                                            value={inputs.name}
                                            type="text"
                                            id=""
                                            placeholder="Your name*"
                                        />
                                    </div>

                                    <div class="col-12  ">
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            value={inputs.email}
                                            placeholder="Your email*"
                                        />
                                    </div>

                                    <div class="col-12  ">
                                        <input
                                            name="phone"
                                            onChange={handleChange}
                                            value={inputs.phone}
                                            type="phone"
                                            id=""
                                            placeholder="Phone  number*"
                                        />

                                        <label
                                            id="phone-error"
                                            class="name"
                                            for="phone"
                                        ></label>
                                    </div>
                                    
                                    <div class="col-12  ">
                                        <input
                                            name="password"
                                            onChange={handleChange}
                                            value={inputs.password}
                                            type="password"
                                            id=""
                                            placeholder="password*"
                                        />

                                        <label
                                            id="password-error"
                                            class="password"
                                            for="password"
                                        ></label>
                                    </div>


                                   

                                    <div class="col-12 mb-2">
                                    <button type="submit" class="btn btn-success">Submit</button>
                                        <br />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default  Signup;