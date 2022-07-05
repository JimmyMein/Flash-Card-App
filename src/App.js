import './App.css';
import Main from './components/Main'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Learn from './components/Learn'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Main'>Create Flash Cards</Link>
        <Link to='/Learn'>Learn</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Main' element={<Main />}/>
        <Route path='/Learn' element={<Learn />}/>
      </Routes>
    </div>
  );
}

export default App;