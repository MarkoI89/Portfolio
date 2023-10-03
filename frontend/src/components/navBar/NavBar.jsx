import "./navBar.css";
import { useNavigate } from "react-router";
import { useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [ isMobile, setIsMobile ] = useState(null)

  return (
    <div className="navBar">
      <div className="name">
        <p style={{ marginRight: "5px", color: "gray", fontWeight: "700" }}>
          Marko
        </p>
        <p style={{ fontWeight: "700" }}>Ivezic</p>
      </div>
      <ul className="menu">
        <li className="list" onClick={() => navigate("/")}>Home</li>
        <li className="list" onClick={() => navigate("/about_me")} >About</li>
        <li className="list" onClick={() => navigate("/skills") } >Skills</li>
        <li className="list" onClick={() => navigate("/projects") } >Projects</li>
        <li className="list" onClick={() => navigate("/contact")}>Contact</li>
      </ul>
      <div className="mobileMenu" onClick={() => {!isMobile ? setIsMobile(true) : setIsMobile(false)}}>
        <div className={isMobile ? "firstMenuLineOpen" : "firstMenuLineClosed"} ></div>
        <div className={isMobile ? "secondMenuLineOpen" : "secondMenuLineClosed"} ></div>
        <div className={isMobile ? "thirdMenuLineOpen" : "thirdMenuLineClosed"} ></div>
      </div>
      {isMobile && 
      <div className="mobileMenuList" >
      <li className="mobileList" onClick={() => navigate("/")}>Home</li>
        <li className="mobileList" onClick={() => navigate("/about_me")} >About</li>
        <li className="mobileList" onClick={() => navigate("/skills") } >Skills</li>
        <li className="mobileList" onClick={() => navigate("/projects") } >Projects</li>
        <li className="mobileList" onClick={() => navigate("/contact")}>Contact</li>
      </div>}
      
    </div>
  );
}

export default NavBar;
