import { useState } from 'react'

function AddFlashCard({ addCard }) {

  const [word, setWord] = useState('')
  const [definition, setDefinition] = useState('')

  const handleWordChange = (event) => {
    setWord(event.target.value)
  }

  const handleDefinitionChange = (event) => {
    setDefinition(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    addCard({word, definition})
    setWord('')
    setDefinition('')
  }

  return (
    <section className='child'>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="word" value={word}  onChange={handleWordChange} />
      <input type="text" placeholder="definition"  value={definition}  onChange={handleDefinitionChange} />
      <button type="submit" >Add Card</button>
      </form>

    </section>
  )

}

export default AddFlashCard