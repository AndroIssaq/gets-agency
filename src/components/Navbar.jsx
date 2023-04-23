import React, { useEffect } from 'react'
import {useState}from 'react'
import close from '../assets/close.svg'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import {Link , NavLink} from 'react-router-dom'
const navbarLinks=[  'About Us' , 'Projects' , 'Contact Us']
const Navbar = () => {
    const [toggle, settoggle] = useState(false)
    const [color, setColor]=useState(false)
    const ColorHandler=()=>{
        if(window.scrollY>=300){
            setColor(true)
        }else{
            setColor(false)    
        }
    }
        window.addEventListener('scroll',ColorHandler)
     
   
    
  return (
    <div className={` lg:fixed md:fixed relative w-full h-[90px] top-0 z-40 `}>
    <nav className={ `${color?'set-color': 'bg-transparent'}  `} >
        <div className="container">
            <div className="content flex  w-full items-center justify-between py-[10px] ">
                <img src={logo} alt="" className='lg:w-[124px] h-[60px] object-cover'/>
                <ul className=' nav-links items-center justify-center  gap-[25px] text-[#fff]    sm:flex  hidden'>
                <NavLink  to={`/`}  className={``}><li >Home</li></NavLink>
                    {
                        navbarLinks.map((link , index)=>(
                            <NavLink  key={index} to={`/${link}`} className={``}><li >{link}</li></NavLink>
                        ))
                    }
                </ul>
                <div className="mobile-nav sm:hidden   cursor-pointer  ">
                    <img className=' w-[30px]' src={toggle ? close :menu} alt="menu" onClick={()=>settoggle((prev)=>!prev)} />
                    <div className={`${toggle ? 'flex' : 'hidden'} bg-mainColor  w-full rounded-sm sidebar  bg-primary p-5 flex gap-5 items-start flex-col absolute right-0 top-20` } >
                        <ul className='mobile-nav-links items-start justify-start gap-[10px] text-[#fff]  flex flex-col z-10 w-full '>
                        <NavLink  to={`/`} onClick={()=>settoggle((prev)=>!prev)} ><li className=' w-full text-left p-[10px]'>Home</li></NavLink>
                            {
                                navbarLinks.map((link , index)=>( 
                                   <Link key={index} to={`/${link}`} onClick={()=>settoggle((prev)=>!prev)} > <li key={index} className=' w-full text-left p-[10px]'>{link}</li></Link>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar