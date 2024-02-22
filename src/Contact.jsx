/* eslint-disable react/no-unescaped-entities */
import parse from 'html-react-parser';

import "./Contact.css";

import { linkedIn, resumeLink } from './constants';

function Contact() {
    return (
        <div className="footer">
            <span className="footer__text">Let's connect and explore opportunities together 🚀 💻</span>
            <div className="footer__section">
                <span className="footer__item item-e4ce8e">
                    <span className="footer_subtext">CONTACT ME 📩</span>
                    <a className="footer__work-link" href="mailto:rakshitha27@gmail.com" target="_blank" rel="noreferrer">rakshitha27@gmail.com</a>
                </span>
                <span className="footer__item item-c7b198">
                    <span className="footer_subtext ">CONNECT WITH ME 🤝</span>
                    { parse(`<a className="footer__work-link" href=${linkedIn}>LinkedIn</a>`) }
                </span>
                <span className="footer__item item-cabfab">
                    <span className="footer_subtext">DOWNLOAD MY RESUME 📥</span> 
                    { parse(`<a className="footer__work-link" href=${resumeLink}>Resume</a>`) }
                </span>
                <span className="footer__item item-8f8787">
                    <span className="footer_subtext">VIEW MY WORK 💼</span> 
                    { parse(`<a className="footer__work-link" href="">Github</a>`) }
                </span>
            </div>
            <span className="footer__made-by">Made by Rakshitha Gururaj © 2024</span>
        </div>
    )
}


export default Contact