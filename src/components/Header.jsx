import React from "react";
import Navbar from "./Navbar";
import ButtonCustom from "./Button";
import './css/css.css';
import './css/responsive.css';
import shp from './img/shp.png'
import Mercedes from './img/Mercedes.png'

function Header({text, linkk}){

  return(
    <>
      <header className="header container-fluid ">
        <Navbar/>
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-6 col-sm-12  mt-lg-5 mt-0">
              <div className=" as ">
                <h1 className="jh1 mb-xl-3">Sewa & Rental Mobil Terbaik di Kawasan Jakarta </h1>
                <p className="jp ">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas 
                    terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24jam
                </p>
                <br/>
                <ButtonCustom link={linkk}  textButton={text}/>
              </div>
            </div>
            <div className="col-lg-6  col-sm-12  aa mt-5">
              <img src={shp} alt="" className=" tt " />
              <img src={Mercedes} alt="" className="t " />
            </div>
            </div>
          </div>
      </header>
    </>
  )
}

export default Header