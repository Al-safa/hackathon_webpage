import{useRef} from "react";
import React, { useState, useEffect } from 'react';
import{FaBars,FaTimes} from "react-icons/fa";
import "./NavbarStyles.css";


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
                <a href="/#">Home</a>
                <a href="/#">About Us</a>
                <a href="/#">Timeline</a>
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