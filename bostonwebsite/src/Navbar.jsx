import React, { useState } from "react";
import menu from './menu';
import "./Navbar.css";

function Navbar({className, setPage}) {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
      setActive(!active);
      setIcon(!icon);};

    
  const list = menu.map( item => {
    return (
        <li className="nav__item" key={item.name}>
            <a 
            className="nav__link" 
            href="#" 
            onClick={ (e) => {
                e.preventDefault();
                setPage(item.name);
                setActive(false);
                setIcon(false);
                }
            }>
                {item.name}
            </a>
        </li>
    );
});

return (
    
    <nav className="nav">
      <a href="#maincontent" className="skiplink" >Skip to main content >> </a>
      <a href="#" className="nav__brand">
        Hello，Boston!
      </a>
       <ul className={active ? "nav__menu nav__active" : "nav__menu"}>
        {list}
        </ul>
     
      <div className={icon ? "nav__toggler toggle" : "nav__toggler"}  onClick={navToggle} >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
