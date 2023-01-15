import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
    </div>
  );
}

export default App;
