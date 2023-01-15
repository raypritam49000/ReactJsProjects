import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>JWT Authentication using JSON fake server</h2>
        <Routes>
          <Route exact path="/" element={
            <Fragment>
              <Header />
              <Home />
            </Fragment>
          }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
