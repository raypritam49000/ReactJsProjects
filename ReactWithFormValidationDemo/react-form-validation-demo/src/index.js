import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import RegisterForm from './RegisterForm'
import reportWebVitals from './reportWebVitals';

export default function Index() {
  return (
    <>
      <RegisterForm />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

reportWebVitals();
