import React from 'react'
import about from '../assets/about-4.png'
import axios from 'axios'
import { useState , useEffect } from 'react';
import Blog from '../components/Blog';
import AboutUsHero from '../components/AboutUsHero';
import OurTeam from '../components/OurTeam';
import AgencyStatistics from '../components/AgencyStatistics';
const AboutUs = () => {


  return (
    <section className='lg:mt-[150px] md:mt-[150px] mt-[50px] relative '> 
    <div className='absolute z-[-1] w-[40%] h-[35%] right-0  top-0 pink__gradient'></div>
        <div className='absolute  left-[0px] w-[40%] h-[35%] lg:top-[1200px] md:top-[1600px] top-[3500px] white__gradient'></div>
        <div className="container">
        <h1 className='ti lg:text-[30px] md:text-[25px] text-[20px] text-[#fff] mb-[30px] '>What We Do </h1>
            <AboutUsHero/>
        </div>
        <Blog/>
        <AgencyStatistics/>
        <OurTeam/>
    </section>
  )
}

export default AboutUs