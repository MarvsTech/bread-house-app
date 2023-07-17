import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar/>

        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App