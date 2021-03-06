import { Link } from 'react-router-dom';
function NAV() {
    const onChangeHandler = () => {
        const Body = document.body;
        Body.classList.toggle('dark-mode');
    };
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            document.querySelector('.navbar').classList.add('fixed');
        } else {
            document.querySelector('.navbar').classList.remove('fixed');
        }
    })
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">Omar Abdelatif</Link>
                    <ul className="navbar-nav my-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="https://drive.google.com/file/d/1PLF0Hq3ZFIf9YZZQiZ5hKBSH4KC4KLi4/view?usp=sharing">Download CV</a>
                        </li>
                        <li className="nav-item">
                            <div className="form-check form-switch">
                                <input className="form-check-input" onChange={onChangeHandler} type="checkbox" id="flexSwitchCheckChecked" aria-label='darkmode switcher' />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default NAV;