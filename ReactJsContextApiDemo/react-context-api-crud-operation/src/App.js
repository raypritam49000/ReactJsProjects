import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployeeComponents from './componoents/AddEmployeeComponents';
import ListEmployeeComponents from './componoents/ListEmployeeComponents'
import UpdateEmployeeComponents from './componoents/UpdateEmployeeComponents'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListEmployeeComponents />} />
          <Route path='/addEmployee' element={<AddEmployeeComponents/>} />
          <Route path='/updateEmployee/:id' element={<UpdateEmployeeComponents />} />
          <Route path='/*' element={<h1>404 Route Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App