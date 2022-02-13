import React from 'react';
import NAV from './nav';
import Hero from './hero';
import Work from './work';
import Footer from './footer';
function App() {
    return (
        <React.Fragment>
            <NAV />
            <Hero />
            <Work />
            <Footer />
        </React.Fragment>
    );
}
export default App;