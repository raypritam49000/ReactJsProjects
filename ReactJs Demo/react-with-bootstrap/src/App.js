import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <button className="btn btn-primary m-1">Button #1</button>
      <Button variant="primary">Button #1</Button>
      <Button variant="secondary" className="mx-2">Button #2</Button>
      <Button variant="success">Button #3</Button>
      
    </>
  );
}

export default App;
