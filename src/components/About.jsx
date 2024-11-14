import '../styles/About.css'
import { useRef } from 'react';
import { motion, useInView } from 'motion/react'

import { FaPhp, FaHtml5, FaJs, FaReact, FaBootstrap, FaLaravel, FaNode, FaGithub } from "react-icons/fa";
import { PiFileCssLight } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";
import { SiMysql, SiPostgresql, SiVisualstudiocode } from "react-icons/si";

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 50 }}  
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}    
              transition={{ duration: 1 }}      
            >My name is Alvin Rachman Septian, I'm a Junior Web Developer and graduated from Gunadarma University majoring in Informatics Management. I'm currently living in Bekasi City, Indonesia.</motion.p>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 50 }}  
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}    
              transition={{ duration: 1.5 }}      
            >As an experienced Web Developer with 3 years of experience I have primarily focused on web application development. Throughout my career, I have successfully developed various impactful applications and managed complex projects, deepening my understanding of the software development lifecycle. My commitment to delivering high-quality work has helped me become a fast learner, always seeking out new challenges to improve my skills</motion.p>
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