import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { portofolioList } from '../data/DataPortofolio'
import { Link } from 'react-router-dom'
import '../styles/Portofolio.css'

function Portofolio() {

    const ref = useRef(null)
    const isInView = useInView(ref)
    
    const gridContainerVariant = { 
        hidden: {opacity : 0}, show:{
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            }
        } 
    }
    
    const gridVariant = { 
        hidden: {opacity : 0}, 
        show: {opacity : 1}, 
    }

  return (
    <section id="portofolio">
        <div className="wrapper">
            <h3>Portofolio</h3>
            <motion.div 
                ref={ref}
                variants={gridContainerVariant}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="grid"
            >
                {
                    portofolioList.map((item, index)=>{
                        return (
                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                variants={gridVariant}
                                transition={{ 
                                    duration: 0.50,
                                    ease: "easeInOut" 
                                }}
                                className="item" 
                                key={item.id}
                            >
                                <Link to={`/portofolio/${item.id}`}><img src={item.image} /></Link>
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </div>
    </section>
  )
}

export default Portofolio