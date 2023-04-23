import React from 'react'
import {Link} from 'react-router-dom'
import { useState , useEffect } from 'react';
import { createClient } from 'contentful'
const AboutUsHero = () => {
    const [aboutUsHero, setAboutUsHero] = useState([])
    const client = createClient({
        space: 's60rf6yk75aq',
        environment: 'master', // defaults to 'master' if not set
        accessToken: 'mZRiUgcHs5wr0dsE_2HoEyXaxDx4TCZ9IXmj-velNfU'
      })
      const getData = async()=>{
        try {
            const response=await client.getEntries({content_type:'aboutusHeroSection'})
            setAboutUsHero(response.items)
        } catch (error) {
            console.log(error);
        }
      }


    useEffect(() => {
        getData()
    }, [])
  return (
    <>
    <div className="content lg:h-[100vh] md:h-[50vh] h-[100vh]  lg:flex-row md:flex-row flex-col flex items-start justify-center gap-[20px]">   
    {
        aboutUsHero.map((aboutUsHeroImg,index)=>{
            return(
                <div key={index} className="img flex-1 w-[100%]"><img src={'http:'+aboutUsHeroImg?.fields?.img?.fields?.file?.url} alt="" className=' object-cover w-full'/></div>
            )

        }) 
    }
       
            <div className="aboutus-dec flex-1 flex items-start justify-start flex-col gap-[10px] p-[10px]">
                <h6>We Are The Best</h6>
                <h1 className='lg:text-[45px] md:text-[25px] text-[27px] font-semibold leading-[50px]'>Best Digital Solutiuon Provider Agency</h1>
                <h3 className='lg:text-[20px] md:text-[13px] text-[13px]'>Professional Design Agency to provide solutions</h3>
                <p className='lg:text-[17px] md:text-[12px] text-[12px] lg:leading-[40px] md:leading-[30px] leading-[30px]'>On the other hand denounce with righteous and dislike men who beguile and demoralizes by the charms of pleasure thes moment, so blinded by desire that they cannot</p>
                <Link to={'/'}><button className=' meet w-[180px]  h-[60px] p-[10px] text-center border border-[#ffec00] text-[#fff]'> Our Services</button></Link>
            </div>
            </div>
    </>
  )
}

export default AboutUsHero