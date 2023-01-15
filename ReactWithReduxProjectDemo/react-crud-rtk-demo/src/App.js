import './App.css';
import Header from './components/Header';
import ListOfStudentsComponent from './components/ListOfStudentsComponent';
import AddStudentComponent from './components/AddStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import { Routes, Route, } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<ListOfStudentsComponent />} />
        <Route path="/addStudent" element={<AddStudentComponent />} />
        <Route path="/updateStudent/:id" element={<UpdateStudentComponent />} />
      </Routes>
    </>
  );
}

export default App;
