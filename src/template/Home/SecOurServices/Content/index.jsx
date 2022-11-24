const Content = ({img , title,content}) => {

  return (
    <div className="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
        
        <div className="service_single_content text-center mb-100">
            
            <div className="service_icon">
                <img src={img} alt="ds" />
            </div>
            <h6>{title}</h6>
            <p>{content}</p>
        </div>
    </div>
  );
}

export default Content;