import { motion } from "motion/react"
import profilePicture from '../assets/profile-picture.jpg'
import '../styles/Header.css'
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Header() {

  const whileTap = { scale : 0.9 }
  const whileHover = { scale : 1.2 }

  return (
    <header id="header">
        <div className="header-jumbotron">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.50,
                ease: "easeInOut" 
              }}
              src={profilePicture} 
            />
            <h3>Alvin Rachman Septian</h3>
            <p>Programmer - Web Developer</p>
            <div className="socialMedia">
                <motion.a 
                  whileTap={whileTap}
                  whileHover={whileHover}
                  href="https://www.linkedin.com/in/alvinrachman" target="_blank" rel="noopener noreferrer"
                ><FaLinkedin /></motion.a>
                <motion.a 
                  whileTap={whileTap}
                  whileHover={whileHover}
                  href="https://www.instagram.com/alvinrchmns_/" target="_blank" rel="noopener noreferrer"
                ><FaInstagram /></motion.a>
                <motion.a 
                  whileTap={whileTap}
                  whileHover={whileHover}
                  href="https://wa.me/6285892442489" target="_blank" rel="noopener noreferrer"
                ><FaWhatsapp /></motion.a>
                <motion.a 
                  whileTap={whileTap}
                  whileHover={whileHover}
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=alvinrachman16@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <CgMail /></motion.a>
                <motion.a 
                  whileTap={whileTap}
                  whileHover={whileHover}
                  href="https://github.com/alvinrachman99" target="_blank" rel="noopener noreferrer"
                ><FaGithub /></motion.a>
            </div>
        </div>
    </header>
  )
}

export default Header