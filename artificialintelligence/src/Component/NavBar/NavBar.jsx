import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../Images/after-effects.png'

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const stopPropagation = (e) => {
    setServicesOpen(!servicesOpen);
  };
  useEffect(() => {
    setServicesOpen(true);
  }, [stopPropagation]);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const handleShowModal = () => {
    // setIsChecked(!isChecked);
  };

  return (
    <>
      <div style={{ height: "90px" }}>
        <nav className="d-flex justify-content-between">
          <div className="d-flex align-items-sm-center">
            <Link to="/">
              <img src={logo} width="20px" id="headerLogo" height="20px" alt="" />
            </Link>

            <input type="checkbox" id="drop" />
            <h6>A random generator for design briefs.</h6>
          </div>
          <div className="d-flex justify-content-between align-items-sm-center">
            <div className="display-none">
              <h5 className="" onClick={handleShowModal}>
                good<b>Palette</b>
              </h5>
            </div>
            <div className="display-none">
              <Link style={{ backgroundColor: "white" }} to="/contact">
                <span className="display-none mx-2">
                  <b>About</b>
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
