import React from 'react'
import { useState } from 'react'
import {IoCloseSharp} from 'react-icons/io5'
const DownloadPortfolioLayout = () => {
    const [active,setActive]=useState(true)
  return (
    <div className={`transition duration-300  ${active?'download-active':'download-not-active'} download-layout fixed z-[150] lg:w-[500px] lg:h-[400px] md:w-[500px] md:h-[400px] w-[300px] h-[350px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>
        <div className="container relative h-full">
            <div className="content h-full flex flex-col items-center justify-center gap-[20px]">
                    <h5 className='text-[25px] w-[100%] text-center text-[#fff]'>To Know More About Us Download Our Portofolio</h5>
                    <button className=' download  tran w-[90%] border-none h-[50px] p-[10px] text-center border  text-[#fff]'><span className=' relative '>Download Portofolio</span> </button>
                    <button onClick={()=>setActive(!active)} className='  absolute w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-black top-[-20px] right-[-50px] text-[30px]   '><IoCloseSharp/></button>
            </div>
        </div>
    </div>
  )
}

export default DownloadPortfolioLayout