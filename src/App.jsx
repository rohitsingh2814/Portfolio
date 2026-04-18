import react from 'react';
import './index.css'; 
import { Navbar } from '@/layouts/Navbar';
import {Hero} from "@/sections/Hero";
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Testimonials } from '@/sections/Tesimonials';
import { Contact } from '@/sections/contact';



const App = () => {
  return (
     <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Testimonials/>
        <Contact/>

      </main>
     </div>
  );
}; 

export default App;