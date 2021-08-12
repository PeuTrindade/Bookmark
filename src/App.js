import React from 'react';
import './App.css';
import Downloads from './components/Downloads/Downloads';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import InitialSection from './components/InitialSection/InitialSection';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    
    return (
        <div className='container'>
            <Navbar/>
            <InitialSection/>
            <Features/>
            <Downloads/>
            <Footer/>
        </div>
    )
}

export default App;
