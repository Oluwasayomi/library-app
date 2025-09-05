import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.png'
import hero_title from '../../assets/hero_title2.png'
import read_icon from '../../assets/read_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} alt="banner image" className='banner-img'/>
        <div className='hero-caption'>
          <img src={hero_title} alt="banner title" className='caption-img'/>
          <p>After her death, she goes around worlds solving missions just for... fun?</p>
          <div className='hero-btns'>
            <button className='btn'><img src={read_icon} alt="read"/>Read</button>
            <button className='btn dark-btn'><img src={info_icon} alt="info"/>More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      
      <div>
        <TitleCards/>
        <TitleCards/>
        <TitleCards/>
        <TitleCards/>
      </div>
    </div>
  )
}

export default Home