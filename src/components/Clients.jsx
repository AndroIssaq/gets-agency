import React from 'react'
import img1 from '../assets/Brand-17-1.png'
import axios from 'axios'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay,Pagination, Navigation,Scrollbar } from "swiper";
import { useState , useEffect } from 'react';
import { createClient } from 'contentful'
const Clients = () => {
    const [clients, setClients] = useState([])

    const client = createClient({
      space: 's60rf6yk75aq',
      environment: 'master', // defaults to 'master' if not set
      accessToken: 'mZRiUgcHs5wr0dsE_2HoEyXaxDx4TCZ9IXmj-velNfU'
    })
    const getData = async()=>{
      try {
          const response=await client.getEntries({content_type:'clients'})
          setClients(response.items)
      } catch (error) {
          console.log(error);
      }
    }

  useEffect(() => {
      getData()
  }, [])
  
;
  return (
    <div className='mt-[100px]'>
        <div className="container">
        <h1 className='ti lg:text-[35px] md:text-[25px] text-[20px] text-[#fff] mb-[30px] '>Our Clients </h1>
        <Swiper
   slidesPerView={4}
   spaceBetween={90}
   loop={true}
  scrollbar={{
   hide: true,
 }}
   breakpoints={{
     350: {
       slidesPerView: 3,
       spaceBetween: 0,
     },
     640: {
       slidesPerView: 3,
       spaceBetween: 0,
     },
     768: {
       slidesPerView: 4,
       spaceBetween: 0,
     },
     1024: {
       slidesPerView: 4,
       spaceBetween: 0,
     },
   }}
   centeredSlides={true}
   autoplay={{
     delay: 2500,
     disableOnInteraction: false,
   }}
   navigation={false}
   modules={[Autoplay,Pagination,Scrollbar]}
   className="mySwiper"
    >
            <div className="clients flex items-center justify-center   ">
        {
                    clients.map((client,index)=>{
                        return(
                            
                                <div key={index} className="client flex items-center justify-center w-full ">
                                    <SwiperSlide key={index}>
                            <img src={'http:'+client.fields.img.fields.file.url} alt="" className='w-[100%] object-cover'/>
                            </SwiperSlide>
                            </div> 
                        )
                    })
                }

            </div>
            </Swiper>
        </div>
    </div>
  )
}

export default Clients