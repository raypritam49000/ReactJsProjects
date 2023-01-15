import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Student from './components/Student';
import Index1 from './context-reducers/index1'



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Student />
//   </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index1/>
  </React.StrictMode>
);



