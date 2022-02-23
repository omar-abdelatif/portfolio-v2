function ScrollUp() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.querySelector('.scrollup').classList.add('show');
        } else {
            document.querySelector('.scrollup').classList.remove('show');
        }
    });
    return (
        <section className="scrollup">
            <a href="#top" aria-label="scroll top" className="scroll">
                <i className="fad fa-hand-point-up"></i>
            </a>
        </section>
    );
}
export default ScrollUp;