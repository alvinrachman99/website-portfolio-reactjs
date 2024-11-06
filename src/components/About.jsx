import '../styles/About.css'

import { FaPhp, FaHtml5, FaJs, FaReact, FaBootstrap, FaLaravel, FaNode, FaGithub } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { PiFileCssLight } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";

function About() {
  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rerum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consectetur totam labore debitis hic perspiciatis eum excepturi libero. Explicabo molestias maxime eius unde cumque accusantium rem perspiciatis expedita itaque consequuntur!</p>
            <h4>Programming Language & Tools</h4>
            <div className="skills">
                <FaPhp />
                <FaHtml5 />
                <FaJs />
                <FaReact />
                <PiFileCssLight />
                <FaGolang />
                <FaBootstrap />
                <RiTailwindCssFill />
                <DiCodeigniter />
                <FaLaravel />
                <FaNode />
                <FaGithub />
            </div>
        </div>
    </section>
  )
}

export default About