import React from 'react'
import img from '../assets/pic4.jpg'
import axios from 'axios'
import { useState , useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful'
const ProjectsContent = () => {
const [projects,setProjects]=useState([])



const client = createClient({
  space: 's60rf6yk75aq',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'mZRiUgcHs5wr0dsE_2HoEyXaxDx4TCZ9IXmj-velNfU'
})
const getData = async()=>{
  try {
      const response=await client.getEntries({content_type:'projects'})
      setProjects(response.items)
  } catch (error) {
      console.log(error);
  }
}
useEffect(() => {
  getData()
}, [])
const reversedProjects=[...projects].reverse()
;
  return (
    <section className='mt-[100px] w-full    py-[20px] relative'>
        <div className='absolute z-[-1] w-[40%] h-[35%] right-0  top-[500px] pink__gradient'></div>
       
    <div className="container pb-[20px] ">
      <div className="content flex flex-col gap-[10px] items-center justify-center w-full relative ">
      <h1 className='ti lg:text-[35px] md:text-[25px] text-[20px] text-[#fff] mb-[30px] '>Projects </h1>
      <p className='lg:text-[17px] md:text-[12px] text-[12px] lg:leading-[40px] z-[1] md:leading-[30px] leading-[30px] text-center lg:w-[60%] md:w-[100%] w-full'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem cusantium natus error sit omnis iste natus error</p>
      <div className='projects   grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-[30px]'>
        {
            reversedProjects.map((project,index)=>{
                return(
                    <Link key={index} to={`/projectPage/${project.fields.title}`}><div className="project cursor-pointer  gap-[10px] flex flex-col items-start justify-start w-full">
                    <div key={index} className="img rounded-md   overflow-hidden w-full"><img src={'http:'+project.fields.img.fields.file.url} alt="" /></div>
                    <div className="dec flex flex-col gap-[5px]">
                        <h1 className='w-auto'>{project.fields.title}</h1>
                        <h3>{project.fields.description}</h3>
                    </div>
                </div></Link>
                )
            })
        }
      </div>
      </div>
    </div>

  </section>
  )
}

export default ProjectsContent