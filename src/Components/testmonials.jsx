import Slider from 'react-slick';
import "../../node_modules/slick-carousel/slick/slick.css";
// import "../../node_modules/slick-carousel/slick/slick-theme.css";
function Testmonials() {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            content: 'lorem20',
        },
        {
            id: 2,
            name: 'John Doe',
            content: 'lorem20',
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <section className="testmonials">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="testmonials-title">
                            <h2>Testimonials</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="testmonials-slider">
                            <Slider {...settings}>
                                {testimonials.map(testimonial => (
                                    <div className="testmonial-item" key={testimonial.id}>
                                        <div className="testmonial-content">
                                            <i className="fas fa-quote-left"></i>
                                            <p>{testimonial.content}</p>
                                            <i className="fas fa-quote-right"></i>
                                            <h3>{testimonial.name}</h3>
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
export default Testmonials;