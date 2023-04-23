import React from 'react'
import axios from 'axios'
import  { useState,useEffect } from "react";
import {Link,NavLink} from 'react-router-dom'
import { createClient } from 'contentful'
const Founder = () => {
  const [founders, setFounder] = useState([])
  const client = createClient({
    space: 's60rf6yk75aq',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'mZRiUgcHs5wr0dsE_2HoEyXaxDx4TCZ9IXmj-velNfU'
  })
  const getData = async()=>{
    try {
        const response=await client.getEntries({content_type:'founder'})
        setFounder(response.items)
    } catch (error) {
        console.log(error);
    }
  }

useEffect(() => {
    getData()
}, [])

  return (
    <div className='lg:mt-[200px] md:mt-[250px] mt-[150px] '>
      <div className="container">
        <div className="content flex items-center justify-center lg:flex-row md:flex-col flex-col gap-[40px] h-[100vh]">
          <div className="desc flex-1 flex flex-col items-start justify-start h-[100vh]">
            <h1 className=' ti lg:text-[30px] md:text-[25px] text-[20px] text-[#fff] mb-[30px]'>MEET THE FOUNDER OF <span className='text-[#ffec00]'> GETS </span></h1>
            <span className=' text-[#cecccc]  lg:text-[25px] md:text-[20px] text-[18px] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum possimus magnam nulla nisi dicta. Aut impedit, tempore molestiae quos ipsam non mollitia, atque esse tempora, est natus beatae inventore dicta?</span>
            <NavLink to={'/About Us'}><button className=' meet w-[180px] mt-[30px] h-[70px] p-[10px] text-center border border-[#ffec00] text-[#fff]'>Know More About Us</button></NavLink>
          </div>
          <div className=" flex-1 h-full w-full flex items-start justify-end ">
            <div className=" founder  img h-[70%] lg:w-[70%] md:w-full w-full flex items-start justify-end relative overflow-hidden">
              {
                founders.map((founder,index)=>{
                  return(
                    <img key={index} src={'http:'+founder.fields.img.fields.file.url} alt="" className=' h-full w-[100%] object-cover' />
                  )
                })
              }
              
              <span className=' absolute  bottom-[10%] w-[0%] h-[100px] bg-[#56214d] flex flex-col items-start justify-center '>
                <h3 className='ml-[20px] text-[20px] text-[#ffec00]'>FELOBATER</h3>
                <h1 className=' ml-[20px] text-[#fff]'>Founder</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Founder