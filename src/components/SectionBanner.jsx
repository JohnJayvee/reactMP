import { Link } from "react-router-dom";

function SectionBanner(){
    return(
        <>
            <div className="row container-padder">
                <div className="col-md-6 text-center">
                    <img src="https://img.freepik.com/free-vector/digital-designers-team-drawing-with-pen-computer-monitor_74855-10586.jpg?t=st=1719846773~exp=1719850373~hmac=0afeebb3dd9c7d7d1e105a48edb3aa0c8265447a54ece450cceb54d345e66cfd&w=740"></img>
                </div>
                <div className="col-md-6 text-center">
                    <h4 className="display-4 mt-4 fw-bolder">"Elevate Your Digital Presence with</h4>
                    <h5 className="display-5 fw-bolder">Our Expert Design, Development, and Marketing Services."</h5>
                    <p className="fs-4 fw-bolder">Let’s Build Your Success Online!</p>
                    <button className="btn btn-primary btn-styler"><Link to={"./services"}>View Our Services</Link></button>
                </div>
            </div>
        
        </>
    )
}

export default SectionBanner;