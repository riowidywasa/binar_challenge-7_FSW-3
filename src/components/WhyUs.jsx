import React from "react";
import './css/responsive.css';
import './css/css.css';

import Lengkap from "./img/icon_complete-1.png"
import Murah from "./img/icon_price-1.png"
import Jam from "./img/icon_24hrs-1.png"
import Profesional from "./img/icon_professional-1.png"

function WhyUs(){

    return(
    <section className="whyUs " id="whyus">
            <div className="text-lg-start text-center">
                <h1 className=" wj">Why Us?</h1>
                <p className="wt mt-4"> Mengapa harus pilih Binar Car Rental?</p>
            </div>
            <div className="row d-flex justify-content-lg-between justify-content-md-evenly justify-content-center my-1  ">
                <div className="col-xxl-2 my-3 card col-sm-12">
                    <div className="card-body">
                        <img src={Lengkap} alt="" className=" card-img cg"/>
                        <h5 className="card-title">Mobil Lengkap</h5>
                        <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                </div>
                <div className="col-xxl-2 my-3  card col-sm-12">
                    <div className=" card-body">
                        <img src={Murah} alt="" className=" card-img cg"/>
                        <h5 className="card-title">Harga Murah</h5>
                        <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil
                            lain</p>
                    </div>
                </div>
                <div className="col-xxl-2 my-3  card col-sm-12">
                    <div className=" card-body">
                        <img src={Jam} alt="" className=" card-img cg"/>
                        <h5 className="card-title">Layanan 24 Jam</h5>
                        <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di
                            akhir minggu</p>
                    </div>
                </div>
                <div className="col-xxl-2 my-3  card col-sm-12">
                    <div className=" card-body">
                        <img src={Profesional} alt="" className=" card-img cg"/>
                        <h5 className="card-title">Sopir Profesional</h5>
                        <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs