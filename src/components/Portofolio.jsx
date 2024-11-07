import { portofolioList } from '../data/DataPortofolio'
import { Link } from 'react-router-dom'
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
                                <Link to={`/portofolio/${item.id}`}><img src={item.image} /></Link>
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