import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddContact from './components/AddContact';
import { Routes, Route } from "react-router-dom";
import EditContact from './components/EditContact';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddContact />}></Route>
        <Route path="/edit/:id" element={<EditContact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
