import React from 'react';
import { useEffect } from 'react';
function Hero() {
    useEffect(() => {
        const Script = document.createElement('script');
        Script.src = '/portfolio-v2/js/custom.js';
        Script.async = true;
        document.body.appendChild(Script);
    }, []);
    return (
        <section className="hero">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="hero-info">
                            <div className="hero-img">
                                <img src={process.env.PUBLIC_URL + '/imgs/profile.webp'} alt="" />
                            </div>
                            <div className="hero-txt">
                                <h1>Hi, My Name Is Omar</h1>
                                <div className="hero-slide">
                                    <h2>I'm</h2>
                                    <ul className="options">
                                        <li>
                                            <span>UI Designer</span>
                                        </li>
                                        <li>
                                            <span>Front End Developer</span>
                                        </li>
                                        <li>
                                            <span>React Js Developer</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="social">
                            <div className="facebook icon">
                                <a href="https://www.facebook.com/omar.elmalek.5" aria-label='facebook'>
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                            <div className="whatsapp icon">
                                <a href="https://api.whatsapp.com/send?phone=+201062760141" aria-label='whatsapp'>
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                            <div className="github icon">
                                <a href="https://github.com/omar-abdelatif?tab=repositories" aria-label='github'>
                                    <i className="fab fa-github"></i>
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