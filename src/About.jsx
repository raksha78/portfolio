/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { experience } from './constants.js';

import './About.css';
import scenic from './images/scenic.jpg';
import person from './images/raksha.jpg';
import sunset from './images/sunset.jpg';

function About() {
  return (
    <>
      <div className="profile">
        <div className="photo__container">
          <div><img className="profile__photo-img" src={scenic} alt="scenic picture"></img></div>
          <div><img className="profile__photo-img" src={person} alt="rakshitha's picture"></img></div>
          <div><img className="profile__photo-img" src={sunset} alt="sunset picture"></img></div>
        </div>
        <div className="profile__container">
          <div className="profile__intro">
            <h2 className="profile__intro-title">About me</h2>
            <div className="profile__intro-content">
              <h3 className="profile__intro-text">
                Hi, I'm Rakshitha Gururaj! 🌟
              </h3>
              <p className="profile__intro-text">
                I currently call Seattle home, though I hail from Bangalore, India. I hold a Master of Science in Computer Software Engineering. I've recently discovered a passion for web development, particularly in the art of designing and crafting user-friendly interfaces - I revel in experimenting with vibrant colors and intricate design details. 🎨
              </p>
              <p className="profile__intro-text">
                My pursuit? Landing a full-time role in the software engineering field. I bring with me 3 years of valuable experience in software engineering, collaborating with startups at various stages. Beyond code, I'm a people person, finding joy in connecting with others. 🚀
              </p>
              <p className="profile__intro-text">
                Nature is where I find solace—long walks during sunsets, the calming presence of the ocean at dusk or dawn—they speak to my soul. I also have a fondness for roller coasters, and I find immense joy in experiencing the thrill they offer. I enjoy playing badminton, exploring new hiking trails, and relishing moments spent outdoors. 🌄
              </p>
              <p className="profile__intro-text">
                A dash of entrepreneurship? Absolutely. I took the plunge as a first-time entrepreneur with HabbaOnline. Starting things from scratch ignites my spirit. 💪
              </p>
            </div>
          </div>
          <div className="profile__experience">
            <h2 className="profile__experience-title">Experience</h2>
            <ul className="profile__experience-list">
              {experience.map((item, index) => (
                <li key={index} className="profile__experience-item">
                  <span className="profile__role"><strong>{item.role}</strong></span>
                  {item.course && (
                    <span className="profile__course">{ } - {item.course}</span>
                  )}
                  <br />
                  <span className="profile__organization">{item.organization}</span>
                  <br />
                  <span className="profile__date">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>

  );

}

export default About