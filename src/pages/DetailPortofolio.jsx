import { useParams } from "react-router-dom"
import '../styles/DetailPortofolio.css'
import { portofolioList } from '../data/DataPortofolio'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function DetailPortofolio() {

    const {id} = useParams()
    const data = portofolioList.find((item)=> item.id == id)
    console.log(data)

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
                                    item + ' '
                                )
                            })
                        }
                    </p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default DetailPortofolio