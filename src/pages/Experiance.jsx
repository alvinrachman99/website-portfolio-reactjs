import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaPhp, FaHtml5, FaJs, FaReact, FaBootstrap, FaLaravel, FaNode, FaGithub } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { PiFileCssLight } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";

function Experiance() {
  return (
    <>
        <div className="wrapper">
            <h1>Experiance</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaReact />}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </>
  )
}

export default Experiance