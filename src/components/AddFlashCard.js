import { useState } from 'react'
import Learn from './Learn'

function AddFlashCard({ addCard, cards, setCards, removeCard, index, setIndex, word, definition, setWord, setDefinition }) {



  const handleWordChange = (event) => {
    setWord(event.target.value)
  }

  const handleDefinitionChange = (event) => {
    setDefinition(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    addCard({word, definition, flipped: false, index})
    setIndex(null)
    setWord('')
    setDefinition('')
  }

  const clear = () => {
    setIndex(null)
    setWord('')
    setDefinition('')
  }

  return (
    <section className='child-add'>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="word" value={word}  onChange={handleWordChange} />
      <input type="hidden" value={index}/>
      <input type="text" placeholder="definition"  value={definition}  onChange={handleDefinitionChange} />
      <button type="submit" >{index !== null ?  "Update Card": "Add Card"}</button>
      {index !== null ? <button onClick={() => clear()} type="button" >Clear</button>: ''}
      </form> 
    </section>
    
  )

}

export default AddFlashCard