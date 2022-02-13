import React from 'react';
function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="hero-img">
                            <img src={process.env.PUBLIC_URL + '/imgs/profile.webp'} alt="" />
                        </div>
                        <div className="social">
                            <div className="facebook icon">
                                <a href="https://www.facebook.com/omar.elmalek.5">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </div>
                            <div className="whatsapp icon">
                                <a href="https://api.whatsapp.com/send?phone=+201062760141">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                            <div className="github icon">
                                <a href="https://github.com/omar-abdelatif?tab=repositories">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;