import React from 'react';
import wife from '../img/wife.jpg';

const About = () => {
    return (
        <div className="container home">
        <h4 className="black-text">About:</h4>
            <div className="row">
                <img className="col s12 m6" src={wife} alt="wife" responsive-img/>
                <p className="col s12 m6 flow-text">My name is Marcin. I live in a small town called Redditch not far away from Birmingham in the UK I aspire to became a web developer. It is just the beginning of my journey to rich this goal but during this time I managed to learn technologies like HTML, CSS, JavaScript, and ReactJS. I constantly improve my skills and I am looking for an opportunity to put my knowledge into practice. I am excited about the new challenges. Please check out my contact section in the footer of the website I am always eager to help.</p>
            </div>
        </div>
    )
}

export default About