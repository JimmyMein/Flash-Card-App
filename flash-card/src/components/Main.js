import { useState, useEffect } from 'react'
import Learn from './Learn.js'
import AddFlashCard from './AddFlashCard.js'


function Main() {
  const [cards, setCards] = useState()


  function getCards() {
    fetch('/cards')
    .then(res => res.json())
    .then(res => setCards(res.cards))
  }

  function updateCards() {
    if(cards !== null){
      fetch('/cards', {
        method: 'POST',
        headers: {'Content-type': 'application/json' },
        body: JSON.stringify({ cards })

      })
    }
  }

  useEffect(getCards, [])
  useEffect(updateCards, [cards])

 const addCard = card => {
  setCards([...cards, card])
  }

//  const removeCard = indexOfCardClicked => {
//     const newCards = cards.filter(
//       (card, i) => i !== indexOfCardClicked)
//       setCards(newCards)
//   }

  return (
    <div className="Card">
      <h1>Make your own Card!</h1>
      <AddFlashCard
        cards={cards}
        addCard={addCard}
        />
    </div>
  )
 
}

export default Main