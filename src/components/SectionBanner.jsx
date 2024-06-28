function SectionBanner(){
    return(
        <>
            <div className="row container-padder">
                <div className="col-md-6 text-center">
                    <img src="https://cdn.pixabay.com/photo/2012/02/23/08/40/beautiful-15728_960_720.jpg" alt="Courses" />
                </div>
                <div className="col-md-6 text-center">
                    <h4 className="display-4 mt-4">Discover Your Path to Success</h4>
                    <h5 className="display-5">Unlock a World of Possibilities!</h5>
                    <p className="fs-4">Our diverse range of courses is designed to ignite your passion and pave the way for a bright future.</p>
                    <button className="btn btn-primary btn-styler">View All Course</button>
                </div>
            </div>
            <div className="featuredCourses text-center">
                <div className="container text-center">
                    <ul><li>Featured Courses</li></ul>
                </div>
                <h4 className="display-4 fw-bolder">Explore Featured Courses</h4>
                <div>
                    <div className="featuredUL">
                        <ul>
                            <li>See All</li>
                            <li>Trending</li>
                            <li>Featured</li>
                            <li className="btn-active">Popular</li>
                        </ul>
                    </div>
                </div>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src="https://placehold.co/300x200" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h6 class="card-title display-6">Card title</h6>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://placehold.co/300x200" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h6 class="card-title display-6">Card title</h6>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                        <div class="card">
                            <img src="https://placehold.co/300x200" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h6 class="card-title display-6">Card title</h6>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://placehold.co/300x200" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h6 class="card-title display-6">Card title</h6>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://placehold.co/300x200" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h6 class="card-title display-6">Card title</h6>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://placehold.co/300x200" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h6 class="card-title display-6">Card title</h6>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
        </>
    )
}

export default SectionBanner;