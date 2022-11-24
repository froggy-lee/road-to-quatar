import SectionHeading from '../../../components/SectionHeading'
import Content from './Content'

const SecOurServices = ({data}) => {

  return (
    <section className="our_services_area section-padding-50-0 clearfix" id="about">
        <div className="container">
            
            <SectionHeading
                title='ABOUT US'
            />
                

            <div className="row">
                {data && data.map((item , key) => (
                    <Content
                        key={key}
                        img={item.img}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
        </div>
    </section>
  );
}

export default SecOurServices;