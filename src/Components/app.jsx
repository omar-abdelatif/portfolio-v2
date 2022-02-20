import React from 'react';
import NAV from './nav';
import Hero from './hero';
import Work from './work';
import RecentProjects from './recentprojects';
import Skills from './skills';
import Footer from './footer';
function App() {
    return (
        <React.Fragment>
            <NAV />
            <Hero />
            <Work />
            <RecentProjects />
            <Skills />
            <Footer />
        </React.Fragment>
    );
}
export default App;