import React from 'react'
import video from '../assets/Sequence 01.mp4'
const Hero = () => {
  return (
    <div className=' w-full hero'>
        <video autoPlay muted loop className='w-full'>
            <source src={video}  />
        </video>
    </div>
  )
}

export default Hero