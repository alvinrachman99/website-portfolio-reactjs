import '../styles/About.css'

import { FaPhp, FaHtml5, FaJs, FaReact, FaBootstrap, FaLaravel, FaNode, FaGithub } from "react-icons/fa";
import { PiFileCssLight } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";
import { SiMysql, SiPostgresql, SiVisualstudiocode } from "react-icons/si";

function About() {
  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <p>My name is Alvin Rachman Septian, I'm a Junior Web Developer and graduated from Gunadarma University majoring in Informatics Management. I'm currently living in Bekasi City, Indonesia.</p>
            <p>As an experienced Web Developer with 3 years of experience I have primarily focused on web application development. Throughout my career, I have successfully developed various impactful applications and managed complex projects, deepening my understanding of the software development lifecycle. My commitment to delivering high-quality work has helped me become a fast learner, always seeking out new challenges to improve my skills</p>
            <h4>Programming Language & Tools</h4>
            <div className="skills">
                <FaPhp />
                <FaHtml5 />
                <FaJs />
                <FaReact />
                <PiFileCssLight />
                <FaBootstrap />
                <RiTailwindCssFill />
                <DiCodeigniter />
                <FaLaravel />
                <FaNode />
                <SiMysql />
                <SiPostgresql />
                <FaGithub />
                <SiVisualstudiocode />
            </div>
        </div>
    </section>
  )
}

export default About