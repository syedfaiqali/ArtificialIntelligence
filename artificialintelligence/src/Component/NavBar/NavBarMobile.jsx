import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

function NavBarMobile() {
  const [click, setClick] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(true);
   const [hideMenu, setHideMenu] = useState(false);
  const changeClick = () => {
    setClick(prevClick => !prevClick); 
    setHideMenu(false); 
};
  const setResponsiveMenu = () => {
    setHideMenu(true)
    setClick(false);
  };
const resetState=()=>{
setClick(false)
setHideMenu(false)
}
  const stopPropagation = (e) => {
    setServicesOpen(!servicesOpen);
  };
  useEffect(() => {
    setServicesOpen(true);
  }, [stopPropagation]);
 
  return (
    <>
      <div style={{ height: "90px" }}>
        <nav>
          <Link to="/">
            <img src={logo} width="200" id="headerLogo" height="60" alt="" />
          </Link>
          <label
            htmlFor="drop"
            className="toggle toogleIcon"
            onClick={changeClick}
          >
            <i className={click ? "fas fa-bars" : "fas fa-bars"}></i>
          </label>
          <input type="checkbox" id="drop" />
          
            <ul className={hideMenu ===false ? "menu":"d-none" }>
              <li>
                <label htmlFor="drop-1" className="toggle">
                  Services +
                </label>
                <Link style={{ backgroundColor: "white" }} to="/services">
                  Services
                </Link>
                <input type="checkbox" id="drop-1" />
                {servicesOpen && (
                  <ul>
                    {/* <li>
                  <Link style={{backgroundColor:"white"}}  to="#">Hire Team</Link>
                </li> */}
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        onClick={resetState}
                        to="/graphics-development-services"
                      >
                        Graphics Designing
                      </Link>
                    </li>
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        to="/web-application-development-services"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        to="/seo-services"
                      >
                        SEO
                      </Link>
                    </li>
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        to="/ui-ux-design-services"
                      >
                        UI/UX Designing
                      </Link>
                    </li>
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        to="/wordpress-development-services"
                      >
                        WordPress Development
                      </Link>
                    </li>
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        to="/social-media-marketing-services"
                      >
                        Social Media Marketing
                      </Link>
                    </li>
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        to="/3d-animation-services"
                      >
                        3D Animation
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <label htmlFor="drop-2" className="toggle">
                  Work +
                </label>
                <Link style={{ backgroundColor: "white" }} to="/Work">
                  Work
                </Link>
                <input type="checkbox" id="drop-2" />
                {servicesOpen && (
                  <ul>
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        to="/GraphicsDesigning"
                      >
                        Graphics Designing
                      </Link>
                    </li>
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        to="/WebDevelopment"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        to="/SearchEngine"
                      >
                        SEO
                      </Link>
                    </li>
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        to="/UIUXDesigning"
                      >
                        UI/UX Designing
                      </Link>
                    </li>
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        to="/Wordpress"
                      >
                        Wordpress Development
                      </Link>
                    </li>
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        to="/SocialMedia"
                      >
                        Social Media Marketing
                      </Link>
                    </li>
                    <li onClick={setResponsiveMenu}>
                      <Link
                        style={{ backgroundColor: "white" }}
                        to="/Animation"
                      >
                        3D Animation
                      </Link>
                    </li>
                    {/* <li onClick={setResponsiveMenu}>
                  <Link style={{backgroundColor:"white"}}  to="/Wikipedia">Wikipedia</Link>
                </li> */}
                    {/* <li onClick={setResponsiveMenu}>
                  <Link style={{backgroundColor:"white"}}  to="/Ebook">Ebook</Link>
                </li> */}
                  </ul>
                )}
              </li>
              <li onClick={setResponsiveMenu}>
                <Link style={{ backgroundColor: "white" }} to="/AboutUs">
                  About Us
                </Link>
              </li>
              <li onClick={setResponsiveMenu}>
                <Link style={{ backgroundColor: "white" }} to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBarMobile;
