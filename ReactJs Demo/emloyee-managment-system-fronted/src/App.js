import { ListOfEmployees } from './components/ListOfEmployees';
import { CreateEmployee } from './components/CreateEmployee';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ListOfEmployees />}></Route>
          <Route path="/employees" element={<ListOfEmployees />}></Route>
          <Route path="/add-employee" element={<CreateEmployee />}></Route>
          <Route path="/edit-employee/:id" element={<CreateEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
