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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
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
            img: '/imgs/html5.webp',
            alt: 'html5',
            width: '50px',
            height: '50px',
        },
        {
            id: 2,
            img: '/imgs/css.webp',
            alt: 'css3',
            width: '50px',
            height: '60px',
        },
        {
            id: 3,
            img: '/imgs/js.webp',
            alt: 'js',
            width: '50px',
            height: '50px',
        },
        {
            id: 4,
            img: '/imgs/react.webp',
            alt: 'react',
            width: '80px',
            height: '50px',
        },
        {
            id: 5,
            img: '/imgs/git.webp',
            alt: 'git',
            width: '50px',
            height: '50px',
        },
        {
            id: 6,
            img: '/imgs/bs.webp',
            alt: 'bootstrap',
            width: '50px',
            height: '50px',
        },
        {
            id: 7,
            img: '/imgs/github.webp',
            alt: 'github',
            width: '50px',
            height: '50px',
        },
        {
            id: 8,
            img: '/imgs/PS.webp',
            alt: 'Adobe Photoshop',
            width: '50px',
            height: '50px',
        },
        {
            id: 9,
            img: '/imgs/XD.webp',
            alt: 'Adobe XD',
            width: '50px',
            height: '50px',
        },
        {
            id: 10,
            img: '/imgs/VSCODE.webp',
            alt: 'Visual Studio Code',
            width: '50px',
            height: '50px',
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
                                            <img src={skill.img} alt={skill.alt} width={skill.width} height={skill.height} />
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