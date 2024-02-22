import { projects } from "./constants";
import { icons } from "./icons";

import parse from 'html-react-parser';

import './Project.css';

function Project() {
    return (
        <div className="projects">
            <ul className="projects__list">
                {projects.map((item, index) => (
                    <li key={index} className={`projects__item ${item.background}`}>
                        <div className="project">
                            <div className="project__header">
                                <span className="project__title">{item.title}</span>
                                <a className="project__link" href={item.link} target="_blank" rel="noreferrer"><span className="link__text">{!item.view ? 'View on github' : item.view}</span>{
                                    !item.view ? parse(icons["github"]) : parse(icons["figma"])}</a>
                            </div>
                            <ul className="project__role">
                                {item.role.map((element) => (
                                    <li className="role" key={element} title={element}>{element}</li>
                                ))}
                            </ul>
                            <span className="project__description">{item.description}</span>
                            <ul className="project__tech-stack">
                                {item.techStack.map((element) => (
                                    parse(`<li className="tech-stack__icons" key=${element} title=${element}>${(icons[element])}</li>`)
                                ))}
                            </ul>
                        </div>
                        <div className="project__video">
                            <video className={`project__video-player ${item.className}`} autoPlay controls loop>
                                <source src={item.videoLink} type="video/mp4" />
                            </video>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Project