import React from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Filter from "../components/Filter";
function SearchCar(){
  
  return(
    <>
      <Header text={'Kembali'} linkk={'/'}/>
      <Filter/>
      <Footer/>
    </>
  )
}

export default SearchCar