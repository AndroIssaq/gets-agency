import React from 'react'
import AboutUsCoursel from './AboutUsCoursel'

const Blog = () => {
  return (
    <section className='lg:mt-[0px] md:mt-[0px] mt-[50px]'>
        <div className="container">
            <div className='flex flex-col gap-[10px] items-center justify-center w-full mb-[20px]'>
                <h1 className='lg:text-[35px] md:text-[35px] text-[25px] lg:w-[50%] md:w-[80%] text-center'>Some of the events that we were able to attend and interact </h1>
                <p className='lg:w-[70%] md:w-[100%] w-[100%] text-center lg:text-[15px] md:text-[15px] text-[12px]'>Our secret lies in the diversity of our team and the ability to assimilate the knowledge shared by each other; thus, challenging ourselves with every new project. With our services branching out to include , Branding, Advertising, Motion graphics and Editorial design all in one place, you will find artists, designers, animators, project managers, and so many others working </p>
            </div>
        </div>
            <div className="content">
            <AboutUsCoursel/>
            </div>
        
    </section>
  )
}

export default Blog