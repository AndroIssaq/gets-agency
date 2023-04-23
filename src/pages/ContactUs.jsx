import React from 'react'
import shape1 from '../assets/shape-7.png'
import shape2 from '../assets/shape-8.png'
import {MdOutlineLocationOn,MdOutlineMailOutline,MdPhoneEnabled,MdOutlineWatchLater} from 'react-icons/md'
const ContactUs = () => {
  return (
    <div className='w-full relative'>
        <div className='absolute z-[-1] w-[40%] h-[35%] right-0  top-0 pink__gradient'></div>

        <div className="panner bg-[#222121] z-[-10] h-[70vh] flex items-center justify-center relative">
        <h1 className='ti lg:text-[45px] md:text-[35px] text-[30px] text-[#fff]  '>Contact Us </h1>
        <span className=' shape1 absolute lg:w-[150px] md:w-[80px] w-[120px]  right-[10%] top-[15%]'><img src={shape1} alt="" className='w-full' /></span>
          <span className=' shape1 lg:w-[90px] md:w-[40px] w-[30px]  absolute lg:left-[50px] md:left-[-50px] left-[50px] bottom-[20%]'><img src={shape2} alt="" className='w-full' /></span>
        </div>
        <div className="container  ">
            <div className="content  mt-[100px] lg:h-[100vh]">
                <h3 className=' lg:text-[25px] md:text-[25px] text-left text-[15px] text-[#fff]  '>Get In Touch </h3>
                <h1 className='lg:text-[45px]  md:text-[35px] text-[30px] lg:w-[600px] text-[#fff] '>
                Have Any Project on Mind? Work Together
                </h1>
                <div className="address flex items-center justify-start lg:flex-row md:flex-col flex-col mt-[30px] gap-[20px]">
                    <div className="left grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 flex-1 gap-[20px]">
                        <div className="card z-[100]   border border-[#cecccc21] p-[30px] rounded-md flex flex-col items-start justify-start gap-[10px]">
                            <span className="icon w-[60px] h-[60px] rounded-full flex items-center justify-center bg-mainColor  text-[#ffec00] text-[40px]"><MdOutlineLocationOn/></span>
                            <h1 className='text-[25px]'>Locations</h1>
                            <p className='text-[20px] font-extralight'>16 Mohammed Youssef Seleem, Al Matar, El Nozha, ‏القاهرة‏، ‏محافظة القاهرة‏، ‏مصر‏</p>
                        </div>
                        
                        <div className="card z-[100]   border border-[#cecccc21] p-[30px] rounded-md flex flex-col items-start justify-start gap-[10px]">
                            <span className="icon w-[60px] h-[60px] rounded-full flex items-center justify-center bg-mainColor  text-[#ffec00] text-[40px]"><MdOutlineMailOutline/></span>
                            <h1 className='text-[25px]'>Email Address</h1>
                            <p className='text-[20px] font-extralight'>info@getsagency.com</p>
                        </div>

                        <div className="card z-[100]   border border-[#cecccc21] p-[30px] rounded-md flex flex-col items-start justify-start gap-[10px]">
                            <span className="icon w-[60px] h-[60px] rounded-full flex items-center justify-center bg-mainColor  text-[#ffec00] text-[40px]"><MdPhoneEnabled/></span>
                            <h1 className='text-[25px]'>Phone Number</h1>
                            <p className='text-[20px] font-extralight'>+201222660570</p>
                        </div>

                        <div className="card z-[100]   border border-[#cecccc21] p-[30px] rounded-md flex flex-col items-start justify-start gap-[10px]">
                            <span className="icon w-[60px] h-[60px] rounded-full flex items-center justify-center bg-mainColor  text-[#ffec00] text-[40px]"><MdOutlineWatchLater    /></span>
                            <h1 className='text-[25px]'>Working Hours</h1>
                            <p className='text-[20px] font-extralight'>Sunday - Monday </p>
                            <p className='text-[20px] font-extralight'>09 am - 05 pm </p>
                            
                        </div>
                    </div>
                    <div className="right  w-full flex-1 h-full flex items-start justify-end ">
                        <iframe className='w-full h-[65vh] border-none ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.3375981607787!2d31.34382682448564!3d30.11315177488908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815c31591b135%3A0x42a44f391aa380f4!2zMTYg2YXYrdmF2K8g2YrZiNiz2YEg2LPZhNmK2YXYjCDYp9mE2YXYt9in2LHYjCDZgtiz2YUg2KfZhNmG2LLZh9ip2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCsIDQ0NzAzMzA!5e0!3m2!1sar!2seg!4v1681823763692!5m2!1sar!2seg"  allowFullScreen  referrerPolicy={"no-referrer-when-downgrade"}></iframe>
                    </div>
                </div>
            </div>

            <div className="form mt-[100px] z-[100] ">
                <div className="head w-full flex items-center flex-col ">
                    <h3 className=' lg:text-[25px] md:text-[25px] text-center text-[15px] text-[#fff]  '>Message Us </h3>
                    <h1 className='lg:text-[45px] text-center  md:text-[35px] text-[30px] lg:w-[600px] text-[#fff] '>
                    Get Any Consultations ? Contact With Us    
                    </h1>
                </div>
                <form className='w-[100%] z-[100]  mt-[50px] flex flex-col items-center justify-center gap-[20px] '>
                    <div className="names z-[100]   text-black gap-[20px] w-[100%] grid lg:grid-cols-3 ">
                        <input className=' z-[100]   bg-transparent 
                        rounded-md border border-[#dddada68]' placeholder='Full name' type="text"/>
                        <input  className=' z-[100]  bg-transparent 
                        rounded-md border border-[#dddada68]  ' placeholder='Email' type="email" />
                        <input  className=' z-[100]  bg-transparent 
                        rounded-md border border-[#dddada68] ' placeholder='Phone'  type="phone" />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your message...' className='w-[90%] z-[100]  bg-transparent 
                        rounded-md border border-[#dddada68] p-[20px]'></textarea>
                    <button className='download z-[100]  w-[190px] h-[60px] text-center'>send The Message </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs