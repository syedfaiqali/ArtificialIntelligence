import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Change import to Routes
import './App.css';
import Home from "./Component/HomePage/Home";
import NavBar from "./Component/NavBar/NavBar";

const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount
  }, [pathname]);

  return null; // This component doesn't render anything
}

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="App">
      <div className="ResponsiveNav">
        <NavBar />
        {/* {windowWidth <=1024?<NavBarMobile/>:<NavBar />} */}
      </div>
      <Routes> {/* Use Routes here for nested routing */}
        <Route path="/" element={<Home />} />
        {/* Additional routes can be added here */}
      </Routes>
    </div>
  );
}

export default App;
