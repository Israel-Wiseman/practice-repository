import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Styles from './App.module.css';
import VansList from './components/VansList';
import Vans from './components/Vans';

function App() {

  return (
    <div>

    <nav className={Styles.navBar}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/vansList'> Vans List </Link>
      <Link to='/vans'> Vans </Link>
    </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vansList' element={<VansList/>} />
        <Route path='/vans' element={<Vans/>} />
      </Routes>
    </div>

  )
}

export default App;
