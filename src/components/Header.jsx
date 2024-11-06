import profilePicture from '../assets/profile-picture.png'
import '../styles/Header.css'
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture} />
            <h3>Alvin Rachman Septian</h3>
            <p>Programmer - Web Developer</p>
            <div className="socialMedia">
                <a href=""><FaInstagram /></a>
                <a href=""><FaTiktok /></a>
                <a href=""><FaFacebookF /></a>
            </div>
        </div>
    </header>
  )
}

export default Header