import SectionHeading from '../../../components/SectionHeading'
//import Timeline from './Timeline'
import {Roadmap} from '../../../utils/allImgs'

const SecOurRoadmap = ({data , img}) => {

  return (
    <section className="roadmap section-padding-100" style={{background: `url(${img}) center center / cover no-repeat`, backgroundSize: 'cover'}} id="roadmap">
      
        <div className="container">
        <SectionHeading
            title='ROADMAP'
        />
          <div className="row">
            <div className="section_5-content">
              <img src={Roadmap} className="center-block" alt="" />
              <div className='content-roadmap'>
                <div>
                  Hello
                </div>
                <div>
                  123
                </div>
                <div>
                  123
                </div>
                <div>
                  123
                </div>
                <div>
                  123
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default SecOurRoadmap;