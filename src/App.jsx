import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import VansList from './components/VansList';
import Vans from './components/Vans';
import 'bootstrap/dist/css/bootstrap.css';




function App() {

  return (
    <div>

    <nav className='nav'>
      <Link className='nav-link' to='/'>Home</Link>
      <Link className='nav-link' to='/about'>About</Link>
      <Link className='nav-link' to='/vansList'> Vans List </Link>
      <Link className='nav-link' to='/vans'> Vans </Link>
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
