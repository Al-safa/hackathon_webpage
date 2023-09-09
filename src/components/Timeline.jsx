import React, {useState, useEffect} from "react";
import './TimelineStyles.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Timeline = () => {
  const [eventData, setEventData] = useState(null);
  
   useEffect(() => {
       
     fetch('https://web-it-like-spider.onrender.com/hackathon/home/')
          .then(response => response.json())
          .then(data => setEventData(data))
          .catch(error => console.error('Error fetching data:', error));
          AOS.init({duration: 2000});
      }, []);

      

    if(!eventData){
        return <div>Loading...</div>;
    }
  return(
    <div className='timeline-section'>
      <h1>Timeline</h1>
      <div className='timeline'>
        <div className="container left-container">
          <img src="./images/start.png"></img>
          <div className="text-box" data-aos="zoom-in">
            <h2>Registration Begins</h2>
            <h3>{eventData.registration_start_date}</h3>
            <p>The registration is officially open, and we can't wait to welcome you aboard! Whether you're a passionate enthusiast, a dedicated developer, or simply curious about what we have to offer, now is the perfect time to secure your spot.</p>
            <span class="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img src="./images/cross.png"></img>
          <div className="text-box" data-aos="zoom-in">
            <h2>Registration Closes</h2>
            <h3>{eventData.registration_end_date}</h3>
            <p>Register before it's too late. Time is of the essence, and we want you to join us for this unforgettable experience. Register soon to avoid disappointment.</p>
            <span class="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <img src="./images/party.png"></img>
          <div className="text-box" data-aos="zoom-in">
            <h2>Opening Ceremony</h2>
            <h3>{eventData.start_date}</h3>
            <p>The hackathon begins! This is where you will unleash your creativiy as well as your coding prowess and it will be a journey of innovation, collobration and problem-solving.</p>
            <span class="right-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img src="./images/three.png"></img>
          <div className="text-box" data-aos="zoom-in">
            <h2>Triple Rounds</h2>
            <h3>On triple days!</h3>
            <ul className="round-details">{eventData.rounds.map(round => (
              <li>Round {round.round_number} - Date: {round.round_date}
              </li>
            ))}
            </ul>
            <span class="left-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
        <img src="./images/finish.png"></img>
          <div className="text-box" data-aos="zoom-in">
            <h2>Hackathon Concludes</h2>
            <h3>{eventData.end_date}</h3>
            <p>Your journey comes to a conclusion here after three days of building, coding and fun!</p>
            <span class="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
        <img src="./images/win.png"></img>
          <div className="text-box" data-aos="zoom-in">
            <h2>Results Announcement</h2>
            <h3>{eventData.end_date}</h3>
            <p>The most awaited day! The time to celebrate the incredible achievements and innovation solutions that emerged from this hackathon</p>
            <span class="right-container-arrow"></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Timeline;