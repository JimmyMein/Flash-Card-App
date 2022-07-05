import './App.css';
import FlashCard from './components/FlashCard'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/FlashCard'>FlashCard</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/FlashCard' element={<FlashCard />}/>
      </Routes>
    </div>
  );
}

export default App;