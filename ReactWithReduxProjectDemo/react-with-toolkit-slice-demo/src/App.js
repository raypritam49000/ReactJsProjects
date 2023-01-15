import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudentComponents from './components/AddStudentComponents';
import ListStudentComponents from "./components/ListStudentComponents";
import UpdateStudentComponents from "./components/UpdateStudentComponents";
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListStudentComponents/>}/>
          <Route path='/addStudent' element={<AddStudentComponents/>}/>
          <Route path='/updateStudent/:id' element={<UpdateStudentComponents/>}/>
          <Route path='/*' element={<h1>404 Route Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App