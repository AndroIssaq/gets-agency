import React from 'react'
import { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import { createClient } from 'contentful'
const Featured = () => {
    const [products, setProducts] = useState([])

    const client = createClient({
        space: 's60rf6yk75aq',
        environment: 'master', // defaults to 'master' if not set
        accessToken: 'mZRiUgcHs5wr0dsE_2HoEyXaxDx4TCZ9IXmj-velNfU'
    })
    const getData = async()=>{
        try {
            const response=await client.getEntries({content_type:'featuredProjects'})
            setProducts(response.items)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData()
    }, [])
  return (
    <div className=' '>
        <div className="container relative">
            <span className=' absolute right-0 w-[100%] h-[3px] bg-[#56214d]'></span>
            <div className="content pt-[20px] ">
                <div className='title flex lg:flex-row md:flex-row flex-col items-start justify-between '>
                    <div>
                    <h1 className=' lg:text-[35px] md:text-[25px] text-[20px] text-[#fff] mb-[10px] '>Featured Projects</h1>
                <p className='text-[#ceccccff] lg:w-full md:w-[70%]'>WE'RE PROUD OF EACH PROJECT WE DID, CHECK OUT OUR FULL PORTFOLIO.</p>
                    </div>
                    <NavLink to={'/Projects'}><button className=' see w-[180px] mt-[30px] h-[70px] p-[10px] text-center  text-[#fff]'>See Our Projects</button></NavLink>
                </div>
                <div className="fe-products mt-[20px] grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-[20px]">
                    {
                        products.map((product, index) => {
                            return(
                                <div key={index} className="fe-product text-[#fff] flex flex-col items-start gap-[10px]">
                                <div className="img"><img src={'http:'+product.fields.img.fields.file.url} alt="" /></div>
                                <div className="title lg:text-[25px] md:text-[20px] text-[18px]">{product.fields.title}</div>
                                <div className="des lg:text-[12px] md:text-[12px] text-[10px] text-gray-400">{product.fields.description
}</div>                         
                            </div>
                            )
                        })
                    }
                   
                </div>
            </div>

        </div>
    </div>
  )
}

export default Featured