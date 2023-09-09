import "./HeroStyles.css"
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function Hero () {
    const [eventData, setEventData] = useState(null);
    useEffect(() => {
       
     fetch('https://web-it-like-spider.onrender.com/hackathon/home/')
          .then(response => response.json())
          .then(data => setEventData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    const navigate = useNavigate()

    if(!eventData){
        return <div>Loading...</div>;
    }

    return(
        <div className="hero-container">
            <video src="/videos/video2.mp4" autoPlay loop muted/>
            <h1>{eventData.name}</h1>
             <p>Transform your ideas into reality by grabbing this chance now!</p>
            <button onClick={()=> navigate('register')}>Register</button>
        </div> 
        
    );
}
export default Hero;