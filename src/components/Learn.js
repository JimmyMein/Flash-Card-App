import './Card.scss'
function Learn({ cards, setCards, changeCardSide }) {

  
  return (
    <section className='child'>
      {cards.map((card, index) =>
      <div className="card-details"onClick={() => changeCardSide(index)}>
          {card.flipped ? <p className='definition'>{card.definition}</p> : <p className='word' key={index}>{card.word} </p>
          }
       </div> )}
        
    </section>
  )

}

export default Learn