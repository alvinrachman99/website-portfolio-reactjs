import { portofolioList } from '../data/DataPortofolio'
import portofolio1 from '../assets/portfolio1.png'
import '../styles/Portofolio.css'

function Portofolio() {
  return (
    <section id="portofolio">
        <div className="wrapper">
            <h3>Portofolio</h3>
            <div className="grid">
                {
                    portofolioList.map((item, index)=>{
                        return (
                            <div className="item" key={item.id}>
                                <a href=""><img src={item.image} /></a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Portofolio