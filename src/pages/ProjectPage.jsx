import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { createClient } from 'contentful'
import { useSelector } from 'react-redux'
const ProjectPage = () => {

  const params = useParams()
  const projectTitle = params.projectTitle
  const [project,setProject]=useState([])
  /*
console.log(projectTitle);
const projects=useSelector(state=>state.projects.projects)
const project=projects.filter(project => project.fields.title == projectTitle)
*/ 

const client = createClient({
  space: 's60rf6yk75aq',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'mZRiUgcHs5wr0dsE_2HoEyXaxDx4TCZ9IXmj-velNfU'
})
const getData = async()=>{
  try {
      const response=await client.getEntries({content_type:'projects' , 'fields.title':projectTitle})
      setProject(response.items)
  } catch (error) {
      console.log(error);
  }
}
useEffect(() => {
  getData()
}, [])
  return (
    <section>
      {
        project.map((pro,index)=>{
          return(
              <>
               <div key={index} className="panner w-full h-[100vh] relative">
        <img src={'http:'+pro.fields.projectHeaderImage.fields.file.url  } alt="" className="w-full h-full object-cover" />
        <span className=" absolute w-full h-full flex items-center justify-center bg-[#00000043] top-0">
          <h1 className="ti lg:text-[35px] md:text-[25px] text-[20px] text-[#fff]  ">
          {pro.fields.title}
          </h1>
        </span>
      </div>
      <div className="container relative ">
        <div className="content grid lg:grid-cols-[2fr,1fr] md:grid-cols-1 grid-cols-1   gap-[20px] w-full mt-[100px]">
          <div className="left flex  flex-col gap-[20px] items-start justify-start w-full">
            <div className="header grid grid-cols-2 gap-[40px] w-full ">
              <div className="img">
                <img src={'http:'+pro?.fields?.img1?.fields?.file?.url } alt="" className=' object-cover'/>
              </div>
              <div className="img">
                <img src={'http:'+pro?.fields?.img2?.fields?.file?.url} alt="" className=' object-cover'/>
              </div>
            </div>
            <div className="img">
              <img src={'http:'+pro?.fields?.img3?.fields?.file?.url } alt="" className=' object-cover'/>
            </div>
            <div className="img">
              <img src={'http:'+pro?.fields?.img4?.fields?.file?.url } alt="" className=' object-cover'/>
            </div>
            <div className="img">
              <img src={'http:'+pro?.fields?.img5?.fields?.file?.url } alt="" className=' object-cover'/>
            </div>
            <div className="img">
              <img src={'http:'+pro?.fields?.img6?.fields?.file?.url} alt="" className=' object-cover' />
            </div>
          </div>
          <div className="right h-full relative  ">
            <div
              className={`description 
              }  top-[50%] bg-black p-[40px] transition duration-300 flex items-start justify-start gap-[10px] flex-col`}
            >
              <div className="name text-[40px]">
                <h3>{pro.fields.title}</h3>
              </div>
              <p className="descripation text-[13px]">
              {pro.fields.heroProjectDescription}
              </p>
              <h1 className="category flex items-center gap-[10px]">
                Category: <p>{pro.fields.category}</p>
              </h1>
              <h1 className="date flex items-center gap-[10px] ">
                Date: <p>{pro.fields.publishedAt}</p>
              </h1>
              <h1 className="industry flex items-center gap-[10px]">
                industry: <p>{pro.fields.industaryMarket}</p>
              </h1>
            </div>
          </div>



        </div>
      </div>
              </>
          )
        })
      }
     
    </section>
  )
}

export default ProjectPage
