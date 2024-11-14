import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaPhp, FaReact, FaBootstrap, FaLaravel } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from "../components/ScrollToTop"

function Experiance() {
  return (
    <>
        <Navbar />
        <div className="wrapper">
            <h1>Experiance</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017"
                    iconStyle={{ background: '#6610f2', color: '#fff' }}
                    icon={<FaBootstrap />}
                >
                    <h3 className="vertical-timeline-element-title">Bootstrap</h3>
                    <p>
                    Building a responsive website quickly. With this framework, I mastered the use of the grid system and components such as navbars, buttons, and forms to create attractive and mobile-friendly designs.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017"
                    iconStyle={{ background: '#4F5B93', color: '#fff' }}
                    icon={<FaPhp />}
                >
                    <h3 className="vertical-timeline-element-title">PHP Native</h3>
                    <p>
                    Building dynamic web applications without a framework. Using PHP, I focused on developing the backend system, managing databases, and creating efficient programming logic.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018"
                    iconStyle={{ background: '#EF4223', color: '#fff' }}
                    icon={<DiCodeigniter />}
                >
                    <h3 className="vertical-timeline-element-title">Codeigniter 3</h3>
                    <p>
                    With CodeIgniter, I learned to build web applications with an organized structure, accelerate development, and optimize database connections.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 - 2024"
                    iconStyle={{ background: '#EF4223', color: '#fff' }}
                    icon={<DiCodeigniter />}
                >
                    <h3 className="vertical-timeline-element-title">Staff IT Programmer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Cengkareng, Jakarta Barat</h4>
                    <p>
                    Professional experience at PT.Shan Informasi Sistem, learning ERP system and manage the software development lifecycle from planning, design, coding, testing, to deployment
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaReact />}
                >
                    <h3 className="vertical-timeline-element-title">React Js</h3>
                    <p>
                    With React, I learned to use components and state management to create efficient and responsive web applications
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2024"
                    iconStyle={{ background: '#FF2D20', color: '#fff' }}
                    icon={<FaLaravel />}
                >
                    <h3 className="vertical-timeline-element-title">Laravel 11</h3>
                    <p>
                    I am currently learning Laravel 11 to build modern web applications with features such as routing, middleware, and efficient ORM.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        <Footer />
        <ScrollToTop />
    </>
  )
}

export default Experiance