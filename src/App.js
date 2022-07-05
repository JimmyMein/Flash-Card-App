import './App.css';
import Main from './components/Main'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Learn from './components/Learn'
import { useState } from 'react'

function App() {

  const [cards, setCards] = useState([])
  // if(localStorage.getItem('cards') != undefined) {
  //   setCards(JSON.parse(localStorage.getItem('cards')))
  // }
  const changeCardSide = (index) => {
    
    setCards(cards.map((card, i) => {
      if ( i === index ) 
        card.flipped = !card.flipped
      return card
    }))
  }
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Main'>Create Flash Cards</Link>
        <Link to='/Learn'>Learn</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Main' element={<Main cards={cards} setCards={setCards} changeCardSide={changeCardSide} />}/>
        <Route path='/Learn' element={<Learn cards={cards} setCards={setCards} changeCardSide={changeCardSide} />}/>
      </Routes>
    </div>
  );
}

export default App;