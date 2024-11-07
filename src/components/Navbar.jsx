import { useState } from 'react'
import '../styles/Navbar.css'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { HashLink } from "react-router-hash-link"
import { Link } from 'react-router-dom'

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
                    <Link to="/">Alvin Rachman Septian</Link>
                </div>
                <button onClick={tampilMenu}>
                    {
                        statusTampil == '' ? <FaBars /> : <IoMdClose />
                    }
                
                </button>
                <div className={`menu ${statusTampil}`}>
                    <ul>
                        <li><HashLink to="/#portofolio">Portofolio</HashLink></li>
                        <li><HashLink to="/#about">About</HashLink></li>
                        <li><HashLink to="/#experiance">Experiance</HashLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar