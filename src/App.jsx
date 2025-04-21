import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Program from './components/programs/Program';
import Title from './components/title/Title';
import About from './components/About/About';
import Campus from './components/campus/Campus';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Admission from './components/admission/Admission';




function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM'  title='What we offer' />
        <Program/>
{/*         <Title subTitle='About us' title="BEE SCHOOL"/>
 */}        <About/>
            <Admission/>
{/*         <Title subTitle='Gallery'  title='Campus Photos'/>
 */}        <Campus/>
{/*         <Title subTitle='Contact Us'  title='Get in Touch'/>
 */}        <Contact/>
        <Footer/>
      </div>

    </>
  );
}

export default App;