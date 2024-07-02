import webpackage1 from '../img/web-package/web-1.png';
import webpackage2 from '../img/web-package/web-2.png';
import webpackage3 from '../img/web-package/web-3.png';
function SectionWebPackage() {

    return(
        <>
        <div className="web-packages text-center">
            <h1 className="display-2 fw-bolder container-padder">Web Development Packages</h1>
            <p className='fw-bold fs-4'>Based on market demand, we have created 3 packages<br/> that will
            cover all your business needs .</p><br/>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4">
                        <div className='p-box h-100'>
                            <p className='fw-bolder fs-3'>URLinks<br/> by JJWSS</p>
                            <br/>
                            <img src={webpackage1} />
                            <p className='fw-bold fs-2'><sup>$</sup>36<sub>/Subscription Model <br/>Paid Yearly</sub></p>
                            <button className='btn btn-primary btn-service'>Get this Service</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='box-recommended h-100'>
                            <p className='fw-bolder fs-3'>Complete Professional Website Package</p>
                            <br/>
                            <img src={webpackage3} />
                            <p className='fw-bold fs-2'><sup>$</sup>1099<sub>/One-time Payment, <br/>Paid only domain and hosting Yearly</sub></p>
                            <button className='btn btn-primary btn-service'>Get this Service</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='p-box h-100'>
                            <p className='fw-bolder fs-3'>Complete Professional Website Package</p>
                            <br/>
                            <img src={webpackage2} />
                            <p className='fw-bold fs-2'><sup>$</sup>396<sub>/Subscription Model <br/>Paid Yearly</sub></p>
                            <button className='btn btn-primary btn-service'>Get this Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default SectionWebPackage;