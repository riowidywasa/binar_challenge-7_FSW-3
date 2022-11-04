import React from "react";
import './css/css.css';
import './css/responsive.css';
import  Facebook  from './img/icon_facebook-1.png';
import  Instagram  from "./img/icon_instagram.png";
import  Twitter  from "./img/icon_twitter.png";
import  Mail  from "./img/icon_mail.png";


function Footer(){

  return(
    <>
      <footer className="container-lg mt-5">
        <div className="row">
            <div className="col-lg-4 col-md-12 mb-3">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="col-lg-2 col-md-12">
                <p>Our Service</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>
            <div className="col-lg-3 col-md-12  mb-3">
                <p>Connect with us</p>
                <div className="row">
                  <div className="col-2"><img src={Facebook} alt=""/></div>
                    <div className="col-2"><img src={Instagram} alt=""/></div>
                    <div className="col-2"><img src={Twitter} alt=""/></div>
                    <div className="col-2"><img src={Mail} alt=""/></div>
                    <div className="col-2"><img src={Twitter} alt=""/></div>
                </div>
            </div>
            <div className="col-lg-3 col-md-12  mb-3">
                <p className="">Copyright Binar 2022</p>
                <a href="##" className="logo">Binar Rental</a>
            </div>
        </div>
        <div></div>
    </footer>
    </>
  )
}

export default Footer