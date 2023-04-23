import React from 'react'
import { createClient } from 'contentful'
import { useState , useEffect } from 'react';
export const Services = () => {
    const [services, setServices] = useState([])

    const client = createClient({
        space: 's60rf6yk75aq',
        environment: 'master', // defaults to 'master' if not set
        accessToken: 'mZRiUgcHs5wr0dsE_2HoEyXaxDx4TCZ9IXmj-velNfU'
      })
      const getData = async()=>{
        try {
            const response=await client.getEntries({content_type:'services'})
            setServices(response.items)
        } catch (error) {
            console.log(error);
        }
      }
      useEffect(() => {
        getData()
    }, [])
    const servicesRev=services.reverse()

  return (
    <section className='lg:mt-[50px] md:mt-[100px] mt-[50px] relative'>
        <div className='absolute z-[1] w-[40%] h-[35%] left-[20%]  top-0 pink__gradient'></div>
        <div className='absolute z-[-1] right-[0px] w-[40%] h-[35%] lg:top-[1200px] md:top-[1600px] top-[3500px] white__gradient'></div>
        
        <div className="container z-10">
            <h1 className='ti lg:text-[35px] md:text-[25px] text-[20px] text-[#fff] mb-[30px] '>What We Do </h1>
            <div className="services grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-[20px] gap-y-[30px] ">
                {
                    
                    servicesRev.map((service,index)=>{
                        return(
                            <div key={index} className="service relative p-[20px] border border-[#cecccc21] text-[#fff] flex flex-col items-start justify-start text-left gap-[5px]">
                                <div className="img w-full flex items-center justify-center "><img src={'http:'+service.fields.img.fields.file.url } alt="" className=' object-cover w-[50%] h-[100%]'/></div>
                                <div className="title lg:text-[25px] md:text-[20px] text-[18px]  ">{service.fields.title}</div>
                                <div className="des lg:text-[12px] md:text-[12px] text-[10px] text-gray-400 ">{service.fields.description}</div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    </section>
  )
}
