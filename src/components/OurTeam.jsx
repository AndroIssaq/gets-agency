import React from 'react'
import shape1 from '../assets/shape-7.png'
import shape2 from '../assets/shape-8.png'
import { createClient } from 'contentful'
import { useState , useEffect } from 'react';
const OurTeam = () => {
  const [employes, setEmployes] = useState([])

  const client = createClient({
    space: 's60rf6yk75aq',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'mZRiUgcHs5wr0dsE_2HoEyXaxDx4TCZ9IXmj-velNfU'
  })
  const getData = async()=>{
    try {
        const response=await client.getEntries({content_type:'team'})
        setEmployes(response.items)
    } catch (error) {
        console.log(error);
    }
  }


useEffect(() => {
    getData()
}, [])
  return (
    <section className='mt-[100px] w-full bg-[#222121] z-[-200] py-[20px]'>
      <div className="container pb-[20px] ">
        <div className="content flex flex-col gap-[10px] items-center justify-center w-full relative ">
          <span className=' shape1 absolute lg:w-[150px] md:w-[80px] w-[70px]  right-[0] top-0'><img src={shape1} alt="" className='w-full' /></span>
          <span className=' shape1 lg:w-[90px] md:w-[40px] w-[30px]  absolute lg:left-[-50px] md:left-[-50px] right-[50px] bottom-0'><img src={shape2} alt="" className='w-full' /></span>
        <h1 className='ti lg:text-[35px] md:text-[25px] text-[20px] text-[#fff] mb-[30px] '>Meet Our Team </h1>
        <p className='lg:text-[17px] md:text-[12px] text-[12px] lg:leading-[40px] z-[1] md:leading-[30px] leading-[30px] text-center lg:w-[60%] md:w-[100%] w-full'>On the other hand denounce with righteous and dislike men who beguile and demoralizes by the charms of pleasure thes moment, so blinded by desire that they cannot</p>
        <div className='employes grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-[30px]'>
          {
            employes.map((employee,index)=>{
              return(
                <div key={index} className="employee cursor-pointer z-[1] gap-[10px] flex flex-col items-start justify-start w-full">
                    <div className="img rounded-md overflow-hidden w-full"><img src={'http:'+employee.fields.img.fields.file.url } alt="" className='w-full object-cover rounded-md' /></div>
                    <div className="dec flex flex-col gap-[5px]">
                      <h1>{employee.fields.name}</h1>
                      <h3>{employee.fields.title}</h3>
                    </div>
                </div>
              )
            })
          } 
        </div>
        </div>
      </div>

    </section>
  )
}

export default OurTeam