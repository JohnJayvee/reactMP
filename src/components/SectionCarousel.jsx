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
                        <img src="https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_960_720.jpg" className="d-block w-100 c-image" alt="..."/>
                        <div className="carousel-caption top-0 mt-4">
                            <p className="mt-5 fs-3 text-uppercase">Nurturing Young Minds</p>
                            <h1 className="display-1 fw-bolder text-capitalize">Explore, Discover, Grow!</h1>
                            <h6 className="display-6">At <span className="companyName">JnJ University</span>, we spark curiosity and foster a love for learning through engaging, hands-on activities.</h6>
                        </div>
                    </div>
                    <div className="carousel-item c-item" data-bs-interval="10000">
                        <img src="https://cdn.pixabay.com/photo/2021/12/03/04/18/campus-6841791_960_720.jpg" className="d-block w-100 c-image" alt="..."/>
                        <div className="carousel-caption top-0 mt-4">
                            <p className="mt-5 fs-3 text-uppercase">Inspiring Future Leaders</p>
                            <h1 className="display-3 fw-bolder text-capitalize">Empowering Tomorrow's Leaders</h1>
                            <h6 className="display-6">Our curriculum is designed to build confidence, teamwork, and leadership skills, preparing students for a successful future.</h6>
                        </div>
                    </div>
                    <div className="carousel-item c-item">
                        <img src="https://cdn.pixabay.com/photo/2020/01/22/09/39/teacher-4784916_960_720.jpg" className="d-block w-100 c-image" alt="..."/>
                        <div className="carousel-caption top-0 mt-4">
                        <p className="mt-5 fs-3 text-uppercase">A Community of Care</p>
                            <h1 className="display-3 fw-bolder text-capitalize">A Place Where Everyone Belongs</h1>
                            <h6 className="display-6">Join our inclusive community where every student is valued, supported, and encouraged to reach their full potential.</h6>
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