import img1 from '../assets/0014_Orascom-Branding.jpg'
import img2 from '../assets/0014_Orascom-Branding.jpg'
import img3 from '../assets/0027_Heinz-Tomato-Paste-1.jpg'
import img4 from '../assets/Brand-17-1.png'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import brush from '../assets/border-1.png'
import React, { useRef, useState,useEffect } from "react";
import { createClient } from 'contentful'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './styles.css'
// import required modules
import { Autoplay,Pagination, Navigation } from "swiper";
import axios from 'axios'
const AboutUsCoursel = () => {
    const [swipers, setSwipers] = useState([])
    const client = createClient({
      space: 's60rf6yk75aq',
      environment: 'master', // defaults to 'master' if not set
      accessToken: 'mZRiUgcHs5wr0dsE_2HoEyXaxDx4TCZ9IXmj-velNfU'
    })
    const getData = async()=>{
      try {
          const response=await client.getEntries({content_type:'blog'})
          setSwipers(response.items)
      } catch (error) {
          console.log(error);
      }
    }


  useEffect(() => {
      getData()
  }, [])


  return (
      <div className='w-full  pb-[40px] h-[70vh]  overflow-hidden relative'>
       
             <Swiper
      // install Swiper modules
      slidesPerView={2}
      spaceBetween={0}
      loop={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 2 ,
          spaceBetween: 0,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
          
         {
            swipers.map((swiper,index)=>{
                return(
                    <SwiperSlide key={index}>
      {({ isNext   }) => (
       
        <div key={index} className={`w-full flex flex-col  h-[70vh]   overflow-hidden relative`}>
        <span className={`absolute p-[25px] flex items-end justify-start w-full h-full  top-0 left-0 z-10  bg-[#11111154] `}>
        <h1 className='text-[#ceccccff] font-extralight lg:text-[30px] md:text-[25px] text-[20px] border-x px-[10px] border-[#ffec00]  z-50'>{swiper.fields.title}</h1>
        </span>
        <img src={'http:'+swiper.fields.img.fields.file.url } alt="" className='w-full h-full object-cover   ' />
      </div>
      )}
        
        </SwiperSlide>
                )
              
            })
        }
        
    </Swiper>

  
      </div>
  )
  }
  
  export default AboutUsCoursel

