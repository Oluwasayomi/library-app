import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category = "Popular"}) => {
  const [shuffledCards, setShuffledCards] = useState([]);

  const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const filtered = cards_data.filter(card =>
      card.categories.includes(category)
    );
    const shuffled = shuffleArray(filtered);
    setShuffledCards(shuffled);
  }, [category]);

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular Books"}</h2>
      <div className='card-list'>
        {shuffledCards.map((card, index)=>{
          return <div className='card' key={index}>
            <img src={card.image} alt="image"/>
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards