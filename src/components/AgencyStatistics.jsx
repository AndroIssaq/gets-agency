import React from 'react'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaAward} from 'react-icons/fa'
import axios from 'axios'
import { useState , useEffect } from 'react';
import { createClient } from 'contentful'
const AgencyStatistics = () => {
    const [agencyStatistics, setAgencyStatistics] = useState([])
    const client = createClient({
        space: 's60rf6yk75aq',
        environment: 'master', // defaults to 'master' if not set
        accessToken: 'mZRiUgcHs5wr0dsE_2HoEyXaxDx4TCZ9IXmj-velNfU'
      })
      const getData = async()=>{
        try {
            const response=await client.getEntries({content_type:'agencystatistic'})
            setAgencyStatistics(response.items)
        } catch (error) {
            console.log(error);
        }
      }


    useEffect(() => {
        getData()
    }, [])

  return (
    <section className='mt-[100px] z-[150]'>
        <div className="container">
            <div className="content flex flex-col gap-[10px] items-center justify-center w-full relative">
            <h1 className='ti lg:text-[35px] md:text-[25px] text-[20px] text-[#fff]  '>Gets Statistics </h1>
        <p className='lg:text-[17px] md:text-[12px] text-[12px] lg:leading-[40px] z-[1] md:leading-[30px] leading-[30px] text-center '>Why People’s Like Us</p>
            </div>
            <div className="cards grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">

            {
                    
                    agencyStatistics.map((agencyStatistic,index)=>{
                        
                      
                        return(
                            <div key={index} className="card  relative flex flex-col items-start p-[40px] border border-[#cecccc21]">
                            <div className="icon w-[40px] h-[30%]">
                                <img src={'http:'+agencyStatistic.fields.img.fields.file.url} alt="" className='w-full object-cover' />
                            </div>
                            <h1 className="numper text-[65px]">{agencyStatistic.fields.numpers}</h1>
                            <p className='title text-[17px]'>{agencyStatistic.fields.title}</p>
                            <div className=' agencyStatistic  absolute  w-[50%] h-[50%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'></div>
                        </div>
                        )
                    })
                }
               
            </div>
        </div>
    </section>
  )
}

export default AgencyStatistics