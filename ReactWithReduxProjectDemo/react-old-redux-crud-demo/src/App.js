import React from 'react';
import AddUserComponents from './components/AddUserComponents';
import { ToastContainer } from 'react-toastify';
import ListUserComponents from './components/ListUserComponents';
import { Routes, Route} from "react-router-dom";
import UpdateUserComponents from './components/UpdateUserComponents';


const App = () => {
  return (
    <div className="container">

      <Routes>
        <Route exact path="/" element={<ListUserComponents />} />
        <Route path="/addUser" element={<AddUserComponents />} />
        <Route path="/updateUser/:id" element={<UpdateUserComponents />} />
        <Route path="*" element={<div><h2>404 Page not found etc</h2></div>}/>
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App;