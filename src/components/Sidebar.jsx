import React, { useState } from 'react'
import { 
    FiHome,
    FiCompass,
    FiShoppingBag,
    FiBook,
    FiSend,
    FiMenu
} from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo.png';
import ContactCard from './ContactCard';

const Sidebar = ({children}) => {
    const[isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FiHome />,
        },{
            path: "/explore",
            name: "Explore",
            icon: <FiCompass />,
        },{
            path: "/cart",
            name: "Cart",
            icon: <FiShoppingBag />,
        },{
            path: "/purchase/history",
            name: "Purchase History",
            icon: <FiBook />,
        },{
            path: "/contact",
            name: "Contact us",
            icon: <FiSend />,
        }
    ]

    return (
        <>
            <div className='sidebar' style={{ width: isOpen ? "300px" : "50px" }}>
                <div className="top_section">
                    <div className='logo-container' style={{ display: isOpen ? "block" : "none" }}>
                        <img src={Logo} alt="Logo" />
                        <h1 className='logo'>BREADHOUSE</h1>
                    </div>
                    <div className="bars" style={{marginLeft: isOpen ? "5px" : "0px"}}>
                        <FiMenu onClick={toggle}/>
                    </div>
                </div>
                <div class="a-link-container">
                    <div className="link-wrapper">
                        {
                            menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className="navbar-link" activeclassName='active'>
                                    <div className="icon">{item.icon}</div>
                                    <div className="link-text" style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>
                                </NavLink>
                            ))
                        }
                    </div>
                    <div className="contact-us" style={{ display: isOpen ? "block" : "none" }}>
                        <ContactCard />
                    </div>
                </div>
            </div>

            <main>
                {children}
            </main>
        </>  
    )
}

export default Sidebar