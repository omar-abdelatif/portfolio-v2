function Work() {
    const work = [
        {
            id: 1,
            img: '/portfolio-v2/imgs/nfe.webp',
            title: 'Nubian For Electronics',
            desc: 'For pc setup and accessories',
            url_icon: 'fad fa-link',
            url: 'https://omar-abdelatif.github.io/nubian-for-electronics/',
            alt: 'Nubian For Electronics',
            tags: [
                'HTML5',
                'CSS3',
                'Bootstrap',
                'JavaScript',
                'JQuery',
            ]
        },
        {
            id: 2,
            img: '/portfolio-v2/imgs/game.webp',
            title: 'Gaming For Life',
            desc: 'For selling all platform games ',
            url_icon: 'fad fa-link',
            url: 'https://omar-abdelatif.github.io/gameing-site/',
            alt: 'Gaming For Life',
            tags: [
                'HTML5',
                'CSS3',
                'Bootstrap',
                'JavaScript',
                'JQuery',
            ]
        },
        {
            id: 3,
            img: '/portfolio-v2/imgs/piratesbike.webp',
            title: 'Pirates Bike',
            desc: 'For Finding Lost Bikes',
            url_icon: 'fad fa-link',
            url: 'https://omar-abdelatif.github.io/pirates-bikes/',
            alt: 'Pirates Bike',
            tags: [
                'HTML5',
                'CSS3',
                'Bootstrap',
                'JavaScript',
                'JQuery',
            ]
        },
        {
            id: 4,
            img: '/portfolio-v2/imgs/omlo.webp',
            title: 'Olmo',
            desc: 'For SEO and Social Media',
            url_icon: 'fad fa-link',
            url: '',
            alt: 'Olmo',
            tags: [
                'HTML5',
                'CSS3',
                'Bootstrap',
                'JavaScript',
                'JQuery',
            ]
        }
    ]
    return (
        <section className="work">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="work__title">
                            <h1>Pervious Work</h1>
                        </div>
                    </div>
                </div>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Projects</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">UI DESIGNS</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row justify-content-center">
                            {work.map(item => (<div className="col-lg-3" key={item.id}>
                                <div className="work__item">
                                    <img src={item.img} alt={item.alt} />
                                    <div className="work__item-info">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <div className="work__item-links">
                                            <a href={item.url} className="work__item-link">
                                                <i className={item.url_icon}></i>
                                            </a>
                                        </div>
                                        <div className="tags">
                                            {item.tags.map(tag => (<span key={tag}>{tag}</span>))}
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <h1>
                            <span>SOOOOOOON With</span>
                            <span>
                                <i className="fad fa-heart"></i>
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="more__btn">
                    <a className="btn btn-primary" href="https://github.com/omar-abdelatif?tab=repositories" target={'_blank'} rel="noreferrer">More Projects</a>
                </div>
            </div>
        </section>
    );
}
export default Work;