import { useParams, Navigate } from "react-router-dom"
import '../styles/DetailPortofolio.css'
import { portofolioList } from '../data/DataPortofolio'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

function DetailPortofolio() {

    const {id} = useParams()
    const data = portofolioList.find((item)=> item.id == id)

    if(data === undefined){
        return <Navigate to='/page-not-found' />
    }

    return (
        <>
            <Navbar />
            <section id="detail-portofolio">
                <div className="wrapper">
                    <h1>{data.title}</h1>
                    <img src={data.image} />
                    <p className="skill">
                        {
                            data.skill.map((item, index)=>{
                                return (
                                    <span> {item} </span>
                                )
                            })
                        }
                    </p>
                </div>
            </section>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default DetailPortofolio