import React from 'react'
import { useParams } from 'react-router-dom'
import './Book.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import cards_data from '../../assets/cards/Cards_data'

const Book = () => {
  const { id } = useParams();
  const book = cards_data.find(cards => cards.id === Number(id));

  if (!book) {
    return <div className='book'><p>Book not found.</p></div>;
  }

  return (
    <div className='book'>
      <img src={back_arrow_icon} alt="back arrow" />
      <iframe width='90%' height='90%' 
      src='https://www.youtube.com/embed/LoK7yWMXAkA'
      title='wattpad' frameBorder='0' allowFullScreen></iframe>

      <div className='book-info'>
        <p>Published On: Wattpad</p>
        <p>Name: {book.name}</p>
        <p>Type: {book.categories.join(', ')}</p>
      </div>
    </div>
  )
}

export default Book
