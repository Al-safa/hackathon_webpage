import "./AboutStyles.css"
import React, { useState, useEffect } from 'react';

const About = () => {

    const [eventData, setEventData] = useState(null);
    
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
        <div className = "About" id="aboutus">
           <h1>What it's all about?</h1> 

           <div className="About-details">
                <div className="details">
                    <p>Thiagarajar College of Engineering togerther with the Organizers :</p>
                    {eventData.organizers.map(organizer=> (
                        <ul>
                            <li>
                            {organizer.organizer_info}
                            </li>
                        </ul>
                    ))} 
                    <p>proudly present {eventData.name}. A three days hackathon where hundreds of students from various department come together and work on a variety of problem statements. Problem statements include both software and electronic tracks. This will bring you a golden opportunity to test your skills against the best of the best contenders for cash prizes, goodies, and more! Participants will be building projects from scratch, which will be presented to our panel of experienced judges to decide our winners finally. Join us and use this opportunity to think out of the box!</p>
                    
                
                </div>
                <div className="image">
                    <img alt="img1" src="/images/IE_logo.png"/>
                    <img alt="img2" src="/images/CSI_logo.png"/>
                </div>
                
            </div>
        </div>
       
    )
}

export default About