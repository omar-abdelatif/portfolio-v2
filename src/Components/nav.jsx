import { Link } from 'react-router-dom';
function NAV() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/portfolio-v2">Omar Abdelatif</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav my-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="https://drive.google.com/file/d/1PLF0Hq3ZFIf9YZZQiZ5hKBSH4KC4KLi4/view?usp=sharing">Download CV</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default NAV;