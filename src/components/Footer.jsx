import React from 'react'
import logo from '../assets/logo.png'
import '../index.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaYoutubeSquare} from 'react-icons/fa'
export const Footer = () => {
  return (
    <footer className='mt-[50px] bg-mainColor z-[100] '>
        <div className="container z-[100]">
            <div className="content mb-[20px] z-[100] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  lg:p-[20px] md:p-[20px] p-[0px] gap-[40px] ">
                <div className='flex flex-col items-start  justify-start gap-[30px]'>
                    <div className="logo w-[150px]"><img src={logo} alt="" className='w-full' /></div>
                    <div className="des text-[12px] text-[#ceccccff]">Creative Artists with a strong artistic taste trained and experienced in various industries and creative fields, passionate and ready to build your brand in every aspect.</div>
                </div>
                <div className='flex flex-col items-start pt-[20px] justify-start gap-[30px]'>
                    <div className="news text-[20px] font-semibold text-[#fff]"><h1>Newsletter Subscription</h1></div>
                    <form className=""><input type="email" placeholder='Email*' className=' bg-transparent border-b' /></form>
                </div>
                <div className='flex flex-col items-start pt-[20px] justify-start gap-[30px]'>
                    <div className='text-[20px] font-semibold text-[#fff]'><h1> Portfolio</h1></div>
                    <button className=' download w-[90%] border-none h-[50px] p-[10px] text-center border  text-[#fff]'><span className=' relative '>Download Portofolio</span> </button>
                </div>
                <div className='flex flex-col items-start pt-[20px] justify-start gap-[10px]'>
                <div className='text-[20px] font-semibold text-[#fff]'><h1>Contact Info</h1></div>
                    <div >
                        <span className='text-[#fff] font-semibold text-[18px]'>Address: </span>
                        <span className='text-[#ceccccff] text-[14px]'>Villa 416 A Orouba Axis, Fifth Settlement, New Cairo, Cairo.</span>
                    </div>
                    <div >
                        <span className='text-[#fff] font-semibold text-[18px]'>Phone: </span>
                        <span className='text-[#ceccccff] text-[14px]'>+201013132121</span>
                    </div>
                    <div >
                        <span className='text-[#fff] font-semibold text-[18px]'>Email: </span>
                        <span className='text-[#ceccccff] text-[14px]'>info@iconicbrs.com</span>
                    </div>
                </div>
            </div>

        </div>
        <div className="socail bg-[#750373] ">
            <div className="container">
                <div className="content w-full lg:flex-row md:flex-row flex-col gap-[10px] h-full flex items-center lg:justify-between md:justify-between justify-center p-[10px]  lg:p-[20px]">
                    <ul className="social-links flex items-center gap-[10px] text-[20px]">
                        <li><a href="" className='text-[#fff] hover:text-[#ffec00] transition duration-300'><FaFacebookSquare/></a></li>
                        <li><a href="" className='text-[#fff] hover:text-[#ffec00] transition duration-300'><FaTwitterSquare/></a></li>
                        <li><a href="" className='text-[#fff] hover:text-[#ffec00] transition duration-300'><FaInstagramSquare/></a></li>
                        <li><a href="" className='text-[#fff] hover:text-[#ffec00] transition duration-300'><FaLinkedin/></a></li>
                        <li><a href="" className='text-[#fff] hover:text-[#ffec00] transition duration-300'><FaYoutubeSquare/></a></li>
                    </ul>
                    <h3 className='text-[#ceccccff]'>© 2023 Gets All Rights Reserved.</h3>
                </div>
            </div>
        </div>
    </footer>
  )
}
