import{useRef} from "react";
import React, { useState, useEffect } from 'react';
import{FaBars,FaTimes} from "react-icons/fa";
import "./NavbarStyles.css";
import AnchorLink from "react-anchor-link-smooth-scroll";


function Navbar(){

    const [eventData, setEventData] = useState(null);
    const navRef = useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    useEffect(() => {
       
        fetch('https://web-it-like-spider.onrender.com/hackathon/home/')
             .then(response => response.json())
             .then(data => setEventData(data))
             .catch(error => console.error('Error fetching data:', error));
         }, []);
   
       if(!eventData){
           return <div>Loading...</div>;
       }

    return(
        <header>
            <h3>{eventData.name}</h3>
            <nav ref = {navRef}>
                <AnchorLink href="#home">Home</AnchorLink>
                <AnchorLink href="#aboutus" smooth>About Us</AnchorLink>
                <AnchorLink href="#timeline">Timeline</AnchorLink>
                <a href="/#">Login</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;