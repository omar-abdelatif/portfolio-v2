import Slider from 'react-slick';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
function Skills() {
    const settings = {}
    return (
        <section className="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skills__title">
                            <h2>Skills</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="skills__slider">
                            <Slider {...settings}></Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;