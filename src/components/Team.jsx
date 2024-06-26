import React from 'react';

// Team Member Component
const TeamMember = ({ name, position, imageUrl }) => (
    <div className="team-item">
        <div className="relative overflow-hidden">
            <img className="w-full" src={imageUrl} alt={name} />
            <div className="team-overlay">
                <div className="flex items-center justify-start">
                    <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter"></i></a>
                    <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook"></i></a>
                    <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </div>
        <div className="bg-light text-center p-4">
            <h5 className="text-uppercase">{name}</h5>
            <p className="m-0">{position}</p>
        </div>
    </div>
);

// Team Carousel Component
const TeamCarousel = () => {
    return (
        <div className="container">
            <div className="border-start border-5 border-primary ps-5 mb-5 max-w-2xl">
                <h6 className="text-primary text-uppercase">Team Members</h6>
                <h1 className="text-5xl uppercase mb-0">Qualified Pets Care Professionals</h1>
            </div>
            <div className="owl-carousel team-carousel relative owl-drag">
                <div className="owl-stage-outer">
                    <div className="owl-stage">
                        <div className="owl-item">
                            <TeamMember
                                name="Dr. Ma. Gracia Dizon-Flores"
                                position="Veterinarian"
                                imageUrl="/img/team-1.jpg"
                            />
                        </div>
                        <div className="owl-item">
                            <TeamMember
                                name="Lyka Mae Paco"
                                position="Training and Behavior/Care and Boarding"
                                imageUrl="/img/team-2.jpg"
                            />
                        </div>
                        <div className="owl-item">
                            <TeamMember
                                name="Dr. Ma. Veronica A. Marquez"
                                position="Veterinary Nutritionist"
                                imageUrl="/img/team-3.jpg"
                            />
                        </div>
                        <div className="owl-item">
                            <TeamMember
                                name="Grace Cruz"
                                position="Grooming and Hygiene"
                                imageUrl="/img/team-4.jpg"
                            />
                        </div>
                    </div>
                </div>
                <div className="owl-nav">
                    <div className="owl-prev"><i className="bi bi-arrow-left"></i></div>
                    <div className="owl-next"><i className="bi bi-arrow-right"></i></div>
                </div>
                <div className="owl-dots disabled"></div>
            </div>
        </div>
    );
};

export default TeamCarousel;
