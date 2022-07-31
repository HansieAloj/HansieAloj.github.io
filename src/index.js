import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Header from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Regions from './pages/Regions';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




const routing = (
  //Link -> Path -> Component
  <BrowserRouter>
    <Header/>

    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/regions" element={<Regions/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>
  </BrowserRouter>
);


ReactDOM.render(routing, document.getElementById('root'));
