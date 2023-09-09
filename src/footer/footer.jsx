import React, {useState, useEffect} from "react";
import'./footer.css';
import fbicon from'../assets/fbicon.png'
import instaicon from'../assets/instaicon.png'
import linicon from'../assets/linicon.png'
import xicon from'../assets/xicon.png'
import utubeicon from'../assets/youtube.png'
const Footer=()=>
{
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
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>For Event queries </h4>
                        <a href ="/event">
                            <p>Charumathy:{eventData.contact_number}</p>
                        </a>
                        <a href ="/event">
                            <p>Dhana:{eventData.contact_number}</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>For Accomdation Queries</h4>
                        <a href ="/Accomdation">
                            <p>Arthi:{eventData.contact_number}</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Other Queries</h4>
                        <a href ="/others">
                            <p>Alsafa:{eventData.contact_number}</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Coming Soon On</h4>
                        <div className="socialmedia">
                            <p><img src={fbicon} alt=""/></p>
                            <p><img src={instaicon} alt=""/></p>
                            <p><img src={linicon} alt=""/></p>
                            <p><img src={xicon} alt=""/></p>
                            <p><img src={utubeicon} alt=""/></p>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} codeInn.All right reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/terms"><div><p>Terms and conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;