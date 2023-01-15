import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListStudentCompoents from './components/ListStudentCompoents';
import AddStudentComponents from './components/AddStudentComponents';
import UpdateStudentComponents from './components/UpdateStudentComponents';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListStudentCompoents />} />
          <Route path="/addStudent" element={<AddStudentComponents />} />
          <Route path="/updateStudent/:id" element={<UpdateStudentComponents />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;