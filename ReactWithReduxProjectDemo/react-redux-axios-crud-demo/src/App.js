import './App.css';
import AddComponent from './compononts/AddComponent';
import Home from './compononts/Home';
import { Routes, Route } from "react-router-dom";
import UpdateComponent from './compononts/UpdateComponent';


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddComponent />} />
        <Route path="/edit/:id" element={<UpdateComponent />} />
      </Routes>
    </>
  );
}

export default App;
