/* eslint-disable react/no-unescaped-entities */
import './Intro.css';

import { resumeLink } from './constants';
import person from './images/memoji_1.png';

function Hero({ setPage }) {
    return (
        <div className="portfolio-container">
            <div className="intro">
                <div className="intro__image">
                    <img src={person} alt="Rakshitha's memoji" className="intro__image-content" />
                </div>
                <div className="intro__content">
                    <h1 className="intro__title">Hey there! { }Welcome to my portfolio!</h1>
                    <div className="intro__main">
                        <p className="intro__description">I'm Rakshitha, a graduate student at Northeastern University 🎓
                            I'm on the lookout for software engineering roles, and I have a keen interest in web design and development.
                            Check out my projects and dive into my work in web design!</p>
                        <a href={resumeLink} className="resume" target="__blank">Resume</a>
                    </div>
                </div>
            </div>
            <div className="icon-holder" onClick={(event) => {
                event.preventDefault();
                setPage('/Projects');
            }}>
                <i className="gg-chevron-down"></i>
            </div>
        </div>

    )
}

export default Hero