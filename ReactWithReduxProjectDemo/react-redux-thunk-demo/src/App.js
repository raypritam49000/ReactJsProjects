import React from 'react'
import ListStudentComponents from './components/ListStudentComponents'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudentComponents from './components/AddStudentComponents';
import UpdateStudentComponents from './components/UpdateStudentComponents';
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListStudentComponents />} />
          <Route path="/addStudent" element={< AddStudentComponents />} />
          <Route path="/updateStudent/:id" element={< UpdateStudentComponents />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App