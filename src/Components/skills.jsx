import Slider from 'react-slick';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
function Skills() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            }
        ]
    }
    const skills = [
        {
            id: 1,
            icon: 'fab fa-html5',
        },
        {
            id: 2,
            icon: 'fab fa-css3-alt',
        },
        {
            id: 3,
            icon: 'fab fa-js-square',
        },
        {
            id: 4,
            icon: 'fab fa-react',
        },
        {
            id: 5,
            icon: 'fab fa-git',
        },
        {
            id: 6,
            icon: 'fab fa-github',
        },
        {
            id: 7,
            icon: 'fab fa-bootstrap',
        }
    ];
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
                            <Slider {...settings}>
                                {skills.map(skill => (
                                    <div className="slider-item" key={skill.id}>
                                        <div className="slider-item-icon">
                                            <i className={skill.icon}></i>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;