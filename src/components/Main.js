import { useState, useEffect } from 'react'
import './Card.scss'
import AddFlashCard from './AddFlashCard.js'


function Main({ cards, setCards }) {
  const [index, setIndex] = useState(null)
  const [word, setWord] = useState('')
  const [definition, setDefinition] = useState('')



 const addCard = card => {
   if(card.index !== undefined && card.index !== null)
      setCards(cards.map((c, i) => {
        if ( i === card.index ) {
          c.word = card.word
          c.definition = card.definition
        }
        return c
      }))
   else
    setCards([...cards, card])

  //  localStorage.setItem('cards', JSON.stringify(cards))
  }

 const removeCard = indexOfCardClicked => {
    const newCards = cards.filter(
      (card, i) => i !== indexOfCardClicked)
      setCards(newCards)
    
    // localStorage.setItem('cards', JSON.stringify(cards))
  }

  const editCard = (index, card) => {
    setIndex(index)
    setWord(card.word)
    setDefinition(card.definition)
  }


  return (
    <div className="Card">
      <h2>Make your own Card!</h2>
      <AddFlashCard
        cards={cards}
        addCard={addCard}
        index={index}
        setIndex={setIndex}
        word={word}
        definition={definition}
        setWord={setWord}
        setDefinition={setDefinition}
        />
    <section className='child'>
      {cards.map((card, index) =>
      <div className="card-details">
          <p className='word' key={index}>{card.word} </p>
          <p className='defintion' key={index}>{card.definition}</p>  
          
          <button onClick={() => removeCard(index)}>Delete</button>
          <button onClick={() => editCard(index, card)}>Edit</button>
   
           
         
       </div> )}
        
    </section>

    </div>
  )
 
}

export default Main
