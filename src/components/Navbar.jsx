import { useState } from 'react'
import '../styles/Navbar.css'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

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
                    <a href="">Alvin Rachman Septian</a>
                </div>
                <button onClick={tampilMenu}>
                    {
                        statusTampil == '' ? <FaBars /> : <IoMdClose />
                    }
                
                </button>
                <div className={`menu ${statusTampil}`}>
                    <ul>
                        <li><a href="#portofolio">Portofolio</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experiance">Experiance</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar