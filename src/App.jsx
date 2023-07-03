import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Styles from './App.module.css';

function App() {

  return (
    <div>

    <nav className={Styles.navBar}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>

  )
}

export default App;
