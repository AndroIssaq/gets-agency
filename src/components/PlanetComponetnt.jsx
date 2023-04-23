import React from 'react'
import {motion} from 'framer-motion'
import EarthPlanet from './EarthPlanet'
import { Link , NavLink } from 'react-router-dom'
import StarsCanvas from './Stars'
const PlanetComponetnt = () => {
  return (
   
      <div className="container relative">
 <div className='w-full flex lg:flex-row md:flex-col flex-col  items-center justify-center gap-[20px] '>
 <motion.div className='xl:flex-1 xl:h-[100vh] md:h-[550px] h-[350px] flex items-center justify-center w-full'>
        <EarthPlanet/>
      </motion.div>
      <div className='flex-1 flex flex-col items-start justify-center xl:h-[100vh] md:h-[550px] h-[350px]'>
      <h1 className=' ti lg:text-[30px] md:text-[25px] text-[20px] text-[#fff] mb-[30px]'>We Are The Best <span className='text-[#ffec00]'>  Solution  </span> For You </h1>
            <span className=' text-[#cecccc]  lg:text-[25px] md:text-[20px] text-[18px] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum possimus magnam nulla nisi dicta. Aut impedit, tempore molestiae quos ipsam non mollitia, atque esse tempora, est natus beatae inventore dicta?</span>
            <NavLink to={'/About Us'}><button className=' meet w-[180px] mt-[30px] h-[70px] p-[10px] text-center border border-[#ffec00] text-[#fff]'>Know More About Us</button></NavLink>
      </div>
      </div>
     <StarsCanvas/>
    </div>
  )
}

export default PlanetComponetnt