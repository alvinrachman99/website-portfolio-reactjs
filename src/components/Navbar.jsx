import { useState } from 'react'
import '../styles/Navbar.css'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { HashLink } from "react-router-hash-link"
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

function Navbar() {

    const [statusTampil, setStatusTampil] = useState('');
    
    function tampilMenu(){
        if(statusTampil == ''){
            setStatusTampil('tampil')
        } else {
            setStatusTampil('')
        }
    }

    return (

        <nav>
            <div className="wrapper">
                <div className="logo">
                    <HashLink to="/#header">Alvin Dev</HashLink>
                </div>
                <button onClick={tampilMenu}>
                    {
                        statusTampil == '' ? <FaBars /> : <IoMdClose />
                    }
                
                </button>
                <div className={`menu ${statusTampil}`}>
                    <ul>
                        <motion.li whileHover={{ scale: 1.1 }} ><HashLink to="/#portofolio">Portofolio</HashLink></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} ><HashLink to="/#about">About</HashLink></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} ><Link to="/experiance">Experiance</Link></motion.li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar