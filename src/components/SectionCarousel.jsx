function SectionCarousel(){
    return(
        <>
        <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item c-item active" data-bs-interval="10000">
                        <img src="https://cdn.pixabay.com/photo/2023/10/10/05/52/website-8305451_1280.jpg" className="d-block w-100 c-image" alt="..."/>
                        <div className="carousel-caption top-0 mt-4">
                            <p className="mt-5 fs-3 text-uppercase">Transform Your Vision into Stunning Reality</p>
                            <h1 className="display-2 fw-bolder text-capitalize">Exceptional Web Design Services</h1>
                            <h6 className="display-6">We focus on user experience, ensuring your site is both beautiful and functional.</h6>
                        </div>
                    </div>
                    <div className="carousel-item c-item" data-bs-interval="10000">
                        <img src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg " className="d-block w-100 c-image" alt="..."/>
                        <div className="carousel-caption top-0 mt-4">
                            <p className="mt-5 fs-3 text-uppercase">Build with Excellence</p>
                            <h1 className="display-3 fw-bolder text-capitalize">Innovative Web Development Solutions</h1>
                            <h6 className="display-6">Our expert developers bring your ideas to life with cutting-edge technology and robust coding practices.</h6>
                        </div>
                    </div>
                    <div className="carousel-item c-item">
                        <img src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_960_720.jpg" className="d-block w-100 c-image" alt="..."/>
                        <div className="carousel-caption top-0 mt-4">
                        <p className="mt-5 fs-3 text-uppercase">Boost Your Online Presence</p>
                            <h1 className="display-3 fw-bolder text-capitalize">Effective Online Marketing Strategies</h1>
                            <h6 className="display-6">We help you reach your target audience, increase engagement, and achieve your business goals.</h6>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
        </>
    )
}

export default SectionCarousel;