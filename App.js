import React from "react";

import Nav from './Nav';
import Header from './Header';
import MainContent from './MainContent';
import Footer from "./Footer";
// import About from "./About";
// import About from "./AboutComponent/About"
const App = () => {
    return(
        <>
        <Nav />
        <Header />
        <MainContent/>
        <Footer/>
        {/* <About/> */}
       
        </>
    );
}


export default App;