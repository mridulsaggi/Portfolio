import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { workExperiences } from '../constants';

const Experience = () => {
    return (
        <div className='my-[2rem]'>
            <h1 className='text-white m-5 text-3xl font-bold'>Experiences</h1>
        <VerticalTimeline>
            {
                workExperiences.map((e, idx) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#0E0E10', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={e.duration}
                        iconStyle={{ background: '#0E0E10', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{e.pos}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{e.name}</h4>
                        <p>
                            {e.title}
                        </p>
                    </VerticalTimelineElement>
                ))
            }
        </VerticalTimeline>
        </div>
    )
}

export default Experience