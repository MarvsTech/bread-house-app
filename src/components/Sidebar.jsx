import React, {useState} from 'react'
import Logo from '../images/svg/logo.png';

import { FiGrid } from "react-icons/fi";
import { FiFlag } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";

import { useLocation } from 'react-router-dom';

const Sidebar = () => {

  const location = useLocation();
  const [closeMenu, setCloseMenu] = useState(false);
  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  }

  return (
    <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
      <div className={closeMenu === false ? "logo-container" : "logo-container active"}>
        <img src={Logo} alt="icon" className="logo"/>
        <h2 className="title">BreadHouse</h2>
      </div>
      <div className={closeMenu === false ? "burger-container" : "burger-container active"}>
        <div className="burger-trigger" onClick={()=>{handleCloseMenu()}}></div>
        <div className="burger-menu"></div>
      </div>
      <div className={closeMenu === false ? "content-container" : "content-container active"}>
        <ul>
          <li className="active">
            <FiGrid size={32} />
            <a href="/">Dashboard</a>
          </li>
          <li>
            <FiFlag size={32} />
            <a href="/">Explore</a>
          </li>
          <li>
            <FiBookmark size={32} />
            <a href="/">Saved</a>
          </li>
          <li>
            <FiShoppingCart size={32} />
            <a href="/">Cart</a>
          </li>
          <li>
            <FiShoppingBag size={32} />
            <a href="/">Selling</a>
          </li>
          <li>
            <FiSend size={32} />
            <a href="/">Contact</a>
          </li>
          <li>
            <FiSettings size={32} />
            <a href="/">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar