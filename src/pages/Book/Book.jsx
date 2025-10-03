import React from 'react'
import './Book.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Book = () => {
  return (
    <div className='book'>
      <img src={back_arrow_icon} alt="back arrow" />
      <iframe width='90%' height='90%' 
      src='https://www.youtube.com/embed/LoK7yWMXAkA'
      title='wattpad' frameBorder='0' allowFullScreen></iframe>

      <div className='book-info'>
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Book
