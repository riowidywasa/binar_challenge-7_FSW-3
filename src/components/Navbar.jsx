import React from "react";
import ButtonCustom from './Button';
import './css/css.css';
import './css/responsive.css';
function Navbar(){
  return(
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-lg my-1 ">
          <a className="navbar-brand logo" href="##">Binar Rental</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions">
            <span className="navbar-toggler-icon" />
          </button>
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5 className="navbar-judul">BCR</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-lg-auto mb-2 ms-0">
              <li className="nav-item pe-4">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#ourService"
                >
                  Our Service
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link active" href=" #whyus">
                  Why Us
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link active" href=" #testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link active" href=" #faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item pe-4 my-2 my-lg-0">

                  <ButtonCustom textButton={'Register'}></ButtonCustom>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    
    </>
  

)
}

export default Navbar

