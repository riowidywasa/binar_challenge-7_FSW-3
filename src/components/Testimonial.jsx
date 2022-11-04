import React from "react";
import './css/css.css';
import './css/responsive.css';
import Picture1 from "./img/img_photo.png";
import Picture2 from "./img/img_photo1.png"
import ButtonRight from "./img/Right_button.png";
import ButtonLeft from "./img/Left_button.png";
import { Helmet } from "react-helmet";

function Testimonial(){


    return(
    <section className="testimonial position-relative my-5" id="testimonial">
        <h1 className="testimonial-h1 text-center">Testimonial</h1>
        <p className="testimonial-p">Berbagai review positif dari para pelanggan kami</p>
        <div className="owl-carousel owl-theme">
            <div className="item">
                <div className="row">
                    <div className="col-sm-3 col-xs-12">
                        <img src={Picture1} alt="" className="testimonial-foto ms-sm-5 d-inline ms-auto me-auto" />
                    </div>
                    <div className="col-sm-9 testi col-xs-12">
                        <div className="d-flex flex-row justify-content-sm-start justify-content-center">
                            <img src="./img/star5.png" alt="" className="bintang "/>
                            <img src="./img/star5.png" alt="" className="bintang "/>
                            <img src="./img/star5.png" alt="" className="bintang "/>
                            <img src="./img/star5.png" alt="" className="bintang "/>
                            <img src="./img/star5.png" alt="" className="bintang "/>
                        </div>
                        <div className="testi-paragraf d-block ms-auto me-auto ms-sm-0 me-sm-0">
                            <p className="testimonial-hasil">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                            <p className="testimonial-name">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="row">
                    <div className="col-sm-3 col-xs-12">
                        <img src={Picture2} alt="" className="testimonial-foto ms-sm-5 d-inline ms-auto me-auto"/>
                    </div>
                    <div className="col-sm-9 testi col-xs-12">
                        <div className="d-flex flex-row justify-content-sm-start justify-content-center">
                            <img src="./img/star5.png" alt="" className="bintang "/>
                            <img src="./img/star5.png" alt="" className="bintang "/>
                            <img src="./img/star5.png" alt="" className="bintang "/>
                            <img src="./img/star5.png" alt="" className="bintang "/>
                            <img src="./img/star5.png" alt="" className="bintang "/>
                        </div>
                        <div className="testi-paragraf d-block ms-auto me-auto ms-sm-0 me-sm-0">
                            <p className="testimonial-hasil">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                            <p className="testimonial-name">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="row">
                    <div className="col-sm-3 col-xs-12">
                        <img src={Picture1} alt="" className="testimonial-foto ms-sm-5 d-inline ms-auto me-auto"/>
                    </div>
                    <div className="col-sm-9 testi col-xs-12">
                        <div className="d-flex flex-row justify-content-sm-start justify-content-center">
                            <img src="./img/star5.png" alt="" className="bintang "/>
                            <img src="./img/star5.png" alt="" className="bintang "/>
                            <img src="./img/star5.png" alt="" className="bintang "/>
                            <img src="./img/star5.png" alt="" className="bintang "/>
                            <img src="./img/star5.png" alt="" className="bintang "/>
                        </div>
                        <div className="testi-paragraf d-block ms-auto me-auto ms-sm-0 me-sm-0">
                            <p className="testimonial-hasil">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                            <p className="testimonial-name">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="slider_nav position-absolute">
            <img src={ButtonLeft} alt="" className="kiri"/>
            <img src={ButtonRight} alt="" className="kanan"/>
        </div>
       <Helmet>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.0/owl.carousel.min.js"></script>
            <script>{`
             /* eslint-env jquery */
                $('.owl-carousel').owlCarousel({

                /*the little visible images at the end of the carousel*/
                loop: true,

                rtl: false,
                lazyLoad: true,
                navText: [$('.kiri'), $('.kanan')],
                nav: [$('.nav-slider')],

                nav: true,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 2,
                        margin: 100
                    },
                    600: {
                        items: 1,
                        stagePadding: 28,
                        margin: 100
                    },
                    800: {
                        items: 1,
                        stagePadding: 130,
                        margin: 100
                    },
                    1000: {
                        items: 1,
                        stagePadding: 230,
                        margin: 100
                    },
                    1200: {
                        items: 1,
                        stagePadding: 280
                    },
                    1400: {
                        items: 1,
                        margin: 100,
                        stagePadding: 440
                    },
                    1600: {
                        items: 1,
                        margin: 10,
                        stagePadding: 490
                    },
                    1800: {
                        items: 1,
                        margin: 100,
                        stagePadding: 650
                    }
                }
            })
        `}</script>
       </Helmet>
        

    </section>
  )
}

export default Testimonial;