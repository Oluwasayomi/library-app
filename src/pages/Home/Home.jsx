import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.png'
import hero_title from '../../assets/hero_title.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} alt="banner image" className='banner-img'/>
        <div className='hero-caption'>
          <img src={hero_title} alt="banner title" className='caption-img'/>
          <p>After her death, she goes around worlds solving missions just for... fun?</p>
        </div>
      </div>
    </div>
  )
}

export default Home