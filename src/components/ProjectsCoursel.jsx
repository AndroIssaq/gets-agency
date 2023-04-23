import React, { useRef, useState , useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import './ProjectsCoursol.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { createClient } from 'contentful'
const ProjectsCoursel = () => {
  const [coursels, setCoursel] = useState([])
  const client = createClient({
    space: 's60rf6yk75aq',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'mZRiUgcHs5wr0dsE_2HoEyXaxDx4TCZ9IXmj-velNfU'
})
const getData = async()=>{
    try {
        const response=await client.getEntries({content_type:'projectsCoursel'})
        setCoursel(response.items)
    } catch (error) {
        console.log(error);
    }
}
useEffect(() => {
    getData()
}, [])

  const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      infinite: true,
      swipeToSlide: true,
      beforeChange: function(currentSlide, nextSlide) {
  
      },
      afterChange: function(currentSlide) {

      }
    };
    
  return (
    <>
    <div className="lg:h-[100vh] md:h-[70vh] h-[70vh] overflow-hidden">
    <Slider {...settings}>
        {
          coursels.map((coursel,index)=>{
            return(
              
              <div key={index} className="w-full flex lg:items-start lg:justify-start md:items-center md:justify-center items-center justify-center  lg:h-[100vh] md:h-[70vh] h-[70vh] bg-white text-black">
                  <div className="img w-full lg:h-[100vh] md:h-[70vh] h-[70vh] "><img src={'http:'+coursel.fields.img.fields.file.url} alt=""  className="w-full h-full object-cover"/></div>
                  <div className=" h-full w-full lg:text-left md:text-center text-center absolute top-[0px] left-0 lg:px-[150px] md:px-[50px] px-[10px] flex flex-col lg:items-start lg:justify-center md:items-center md:justify-center items-center justify-center gap-[10px]">
                  <h1 className='  w-[400px] leading-[60px] lg:text-[65px] md:text-[30px] text-[25px] text-[#fff] '>{coursel.fields.title}</h1>
                  <span className=" lg:w-full md:w-full w-[200px] text-[#000] lg:text-[18px] md:text-[15px] text-[12px]">{coursel.fields.description}</span>
                  </div>
              </div>
             
            )
          })
        }
         </Slider>
      </div>
    </>
  )
}

export default ProjectsCoursel