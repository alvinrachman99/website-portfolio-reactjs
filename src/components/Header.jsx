import profilePicture from '../assets/profile-picture.jpg'
import '../styles/Header.css'
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture} style={{ width:'20%', borderRadius: '100%' }} />
            <h3>Alvin Rachman Septian</h3>
            <p>Programmer - Web Developer</p>
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/alvinrachman" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/alvinrchmns_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://wa.me/6285892442489" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=alvinrachman16@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer">
                      <CgMail />
                </a>
                <a href="https://github.com/alvinrachman99" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
        </div>
    </header>
  )
}

export default Header