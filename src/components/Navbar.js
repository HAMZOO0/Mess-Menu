import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/android-chrome-192x192.png";
import "../css/navbar.css";

export default function Navbar() {
   return (
      <>
         <nav className="nav navbar navbar-expand-lg bg-body-tertiary shadow-sm">
            <div className="container-fluid px-3">
               <div className="d-flex align-items-center">
                  <Link to="/" className="d-flex align-items-center text-decoration-none">
                     <img src={logo} alt="NUST logo" height="40px" width="40px" className="me-2" />
                     <span className="navbar-brand mb-0 h1 text-dark fw-bold">NUST Balochistan Campus Menu</span>
                  </Link>
               </div>

               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link
                           className="nav-link active hover-underline-animation px-3"
                           aria-current="page"
                           to="/daily"
                        >
                           Today
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link
                           className="nav-link active hover-underline-animation px-3"
                           aria-current="page"
                           to="/weekly"
                        >
                           This Week
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
}
