import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function PageNotFound() {
  return (
    <>
        <Navbar />

        <div className="wrapper">
            <h3>Oopss..</h3>
            <p style={{minHeight: '400px'}}>Halamanan yang anda tuju tidak ditemukan...</p>
        </div>

        <Footer />
    </>
  )
}

export default PageNotFound