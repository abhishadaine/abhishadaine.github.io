import React from 'react';
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import Links from '../../components/Links';
import Sider from './Sider';
import Footer from '../../components/Footer';

function Home() { 
    return (
        <div className='bg-primary px-40 sm:px-5'> 
            {/* <Header/> */}
            <div>
                <Intro/>
                {/* <Links/> */}
                <About/>
                <Experiences/>
                <Projects/>
                <Contact/>
                <Sider/>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Home
