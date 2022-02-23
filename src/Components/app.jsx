import React from 'react';
import { useEffect } from 'react';
import NAV from './nav';
import Hero from './hero';
import Work from './work';
import RecentProjects from './recentprojects';
import Skills from './skills';
import Testmonials from './testmonials';
import ScrollUp from './scrollup';
import Footer from './footer';
function App() {
    useEffect(() => {
        const Script = document.createElement('script');
        Script.src = '/portfolio-v2/js/custom.js';
        Script.async = true;
        document.body.appendChild(Script);
    }, []);
    return (
        <React.Fragment>
            <NAV />
            <Hero />
            <Work />
            <RecentProjects />
            <Skills />
            <Testmonials />
            <ScrollUp />
            <Footer />
        </React.Fragment>
    );
}
export default App;