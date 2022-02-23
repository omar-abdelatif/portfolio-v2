function RecentProjects() {
    const projects = [
        {
            id: 1,
            img: '/portfolio-v2/imgs/login.webp',
            alt: 'login',
            title: 'ElSaad Market',
            desc: 'Login page with dashboard with react',
            url: 'https://omar-abdelatif.github.io/elsaadmarket/',
        },
        {
            id: 2,
            img: '/portfolio-v2/imgs/lacoste-react.webp',
            alt: 'lacoste',
            title: 'Lacoste',
            desc: 'Lacoste for tourism with react',
            url: 'https://omar-abdelatif.github.io/lacoste-react/',
        },
        {
            id: 3,
            img: '/portfolio-v2/imgs/portfolio-v1.webp',
            alt: 'portfolio',
            title: 'Portfolio-V1',
            desc: 'SPA portfolio with react',
            url: 'https://omar-abdelatif.github.io/portfolio-with-react/',
        }
    ]
    return (
        <section className="recent-projects">
            <div className="container">
                <div className="row">
                    <div className="project-header">
                        <h1>Recent Projects</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {projects.map(projects => (
                        <div className="col-lg-4 col-md-6" key={projects.id}>
                            <div className="project__item">
                                <div className="project__img">
                                    <img src={projects.img} alt={projects.alt} width={"356"} height={"200"} />
                                </div>
                                <div className="project__info">
                                    <h2>{projects.title}</h2>
                                    <p>{projects.desc}</p>
                                    <a href={projects.url} aria-label="project link" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default RecentProjects;