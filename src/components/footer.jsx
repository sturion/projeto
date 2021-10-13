import React from "react"
import ReactDOM from 'react-dom';
import RedBull from "./images/RedBull.png"
import Pokerstars from "./images/Pokerstars.svg"
import AOC from "./images/AOC.svg"
import {SocialIcon} from 'react-social-icons';

export default props => {

    return (
        <div>
            <hr className="separator"></hr>
            <footer className="footer">
                <div className="Social_Networks">
                <SocialIcon url="https://twitter.com/furia" bgColor="rgba(0, 0, 255, 0)" fgColor="#fff" target="_blanknpm i"/>
                <SocialIcon url="https://www.facebook.com/furiagg" bgColor="rgba(0, 0, 255, 0)" fgColor="#fff" target="_blank"/>
                <SocialIcon url="https://www.instagram.com/furiagg" bgColor="rgba(0, 0, 255, 0)" fgColor="#fff" target="_blank"/>
                <SocialIcon url="https://www.youtube.com/channel/UCE4elIT7DqDv545IA71feHg" bgColor="rgba(0, 0, 255, 0)" fgColor="#fff" target="_blank"/>
                <SocialIcon url="https://www.twitch.tv/furiatv" bgColor="rgba(0, 0, 255, 0)" fgColor="#fff" target="_blank"/>
                </div>
                <div className="Partners">
                    <ul className="PartnersList">
                        <il><img src={RedBull} className="PartnersLogos" id="RedBull"></img></il>
                        <il><img src={Pokerstars} className="PartnersLogos" id="pokerstarslogo"></img></il>
                        <il><img src={AOC} className="PartnersLogos"></img></il>
                    </ul>
                </div>
            </footer>
        </div>
    )
}