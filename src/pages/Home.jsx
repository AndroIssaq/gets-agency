import React from 'react'
import Hero from '../components/Hero'
import { Services } from '../components/Services'
import Clients from '../components/Clients'
import Founder from '../components/Founder'
import Featured from '../components/Featured'
import DownloadPortfolioLayout from '../components/DownloadPortfolioLayout'
import PlanetComponetnt from '../components/PlanetComponetnt'

const Home = () => {
  return (
    <div className='w-full relative'>
      <DownloadPortfolioLayout/>
      <Hero/>
      <PlanetComponetnt/>
      <Services/>
      <Clients/>
      <Founder/>
      <Featured/>
    </div>
  )
}

export default Home