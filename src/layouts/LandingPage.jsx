import React from "react";
import Header from "../components/Header";
import OurService from "../components/OurService";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import Sewa from "../components/Sewa";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
function LandingPage(){
  
  return(
    <>
      <Header text={'Mulai Sewa Mobil'} linkk={'/search-car'} />
      <div className="container-lg">
        <OurService/>
        <WhyUs/>
      </div>
      <Testimonial/>
      <div className="container-lg">
        <Sewa/>
        <Faq/>
      </div>
      <Footer/>
    </>
  )
}

export default LandingPage