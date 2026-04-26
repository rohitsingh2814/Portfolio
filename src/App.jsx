import react from 'react';
import './index.css'; 
import { Navbar } from '@/layouts/Navbar';
import {Hero} from "@/sections/Hero";
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Testimonials } from '@/sections/Tesimonials';
import { Contact } from '@/sections/contact';
import { Education } from './sections/Education';
import {CodingStats} from './sections/stats';
import { Footer } from './layouts/Footer';



const App = () => {
  return (
     <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Education/>
        <CodingStats/>
        <Testimonials/>
        <Contact/>

      </main>
      <Footer/>
     </div>
  );
}; 

export default App;