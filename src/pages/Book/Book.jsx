import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Book.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import cards_data from '../../assets/cards/Cards_data'

const Book = () => {
  const { id } = useParams();
  const book = cards_data.find(cards => cards.id === Number(id));
  const navigate = useNavigate();

  if (!book) {
    return <div className='book'><p>Book not found.</p></div>;
  }

  return (
    <div className='book'>
      <img src={back_arrow_icon} alt="back arrow" className='book_arrow' onClick={()=>{navigate('/')}}/>
      {/*<iframe width='90%' height='90%' 
      src={`https://www.wattpad.com/story/embed/${book.link}`}
      title='Book Preview' frameBorder='0' allowFullScreen></iframe> 
      commented since wattpad embed image is not showing*/} 

      <div className='book-details'>
        <div className='left_image'>
        <img src={book.image} alt="book image"/>
        </div>

        <div className='right_description'>
          <h3>Book Preview</h3>
          <p>{book.description.split('\n').map((line, i) => (
            <span key={i}> {line} <br /> </span>))}
          </p>
          <button className="read-button"
          onClick={() =>
          window.open(
            book.categories.includes("Upcoming")
            ? `https://www.wattpad.com/user/${book.link}`
            : `https://www.wattpad.com/story/${book.link}`, '_blank')}>
          {book.categories.includes("Upcoming")
            ? "Check Author's Page"
            : "Read Full Story on Wattpad"}
          </button>
        </div>
      </div>

      <div className='book-info'>
        <p>Published On: Wattpad</p>
        <p>Name: {book.name}</p>
        <p>Type: {book.categories.join(', ')}</p>
      </div>
    </div>
  )
}

export default Book
