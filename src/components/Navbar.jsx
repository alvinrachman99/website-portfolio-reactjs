import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
                <a href="">Alvin Rachman Septian</a>
            </div>
            <div className="menu">
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