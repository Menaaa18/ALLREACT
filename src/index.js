import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import Blog from './pages/blog'
import Users from './pages/Users';
import SingleUser from './pages/SingleUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        
        <Route path = "/home" element={<App/>}></Route>
        <Route path = "/about" element={<About/>}></Route>
        <Route path = "/blog" element={<Blog/>}></Route>
        <Route path = "/Users" element={<Users/>}></Route>
        //this is a dynamic parameter
        <Route path = "/Users/:id" element={<SingleUser/>}></Route>
        
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
