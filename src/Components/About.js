import React from 'react';
import wife from '../img/wife.jpg';

const About = () => {
    return (
        <div className="container home">
        <h4 className="black-text">About:</h4>
            <div className="row">
                <img className="col s12 m6" src={wife} alt="wife" responsive-img/>
                <p className="col s12 m6 flow-text">I live in a small town called Redditch not far away from Birmingham in the UK and I aspire to become a web developer. It is just the beginning of my journey to reach this goal. During my learning process, I managed to learn technologies like HTML, CSS, JavaScript, and ReactJS. I always try to stay on the top with new technologies and I am looking for an opportunity on how to improve my current skills and put them into practice. If you are looking for an enthusiastic and hardworking person you are on the right page - please scroll down to see my contact detail. Always happy to help!</p>
            </div>
        </div>
    )
}

export default About