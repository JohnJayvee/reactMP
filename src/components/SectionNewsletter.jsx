function SectionNewsletter () {
    return(
        <>
        <div className="newsletter text-center">
            <p className="fw-bolder fs-1 mb-5">Sign up for our newsletter to stay up to<br/>
        date with tech news!</p>
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <div class="input-group flex-nowrap">
                    <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="addon-wrapping" required/>
                    <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" required/>
                    <button className="btn btn-primary">SIGN UP FOR FREE</button>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
        </div>
        
        
        
        </>
    )
}

export default SectionNewsletter;