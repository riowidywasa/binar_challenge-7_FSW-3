import React from "react";
import "./css/css.css";
import "./css/responsive.css";
import Ceklis from "./img/Group53.png";
import Service from "./img/img_service.png"

function OurService() {
  return (
    <section className="service" id="ourService">
      <div className="row py-md-5 my-md-5 py-sm-0 my-sm-0">
        <div className="col-md-6 d-flex justify-content-center ">
          <img src={Service} alt="" className=" w-75  img-service" />
        </div>
        <div className="col-md-6  ser ms-auto me-auto">
          <div className=" justify-content-center">
            <h2 className="serj">
              Best Car Rental for any kind of trip in Jakarta!
            </h2>
            <div className="serp">
              <p>
                Sewa mobil di Jakarta bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <p>
                <img src={Ceklis} alt="" className="serg me-4" />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p>
                <img src={Ceklis} alt="" className="serg me-4" />
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
              <p>
                <img src={Ceklis} alt="" className="serg me-4" />
                Sewa Mobil Jangka Panjang Bulanan
              </p>
              <p>
                <img src={Ceklis} alt="" className="serg me-4" />
                Gratis Antar - Jemput Mobil di Bandara
              </p>
              <p>
                <img src={Ceklis} alt="" className="serg me-4" />
                Layanan Airport Transfer / Drop In Out
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurService;
