import './App.css';
import Learing from './Components/Learing/Learing';
import Sidebar from './Components/Sidebar.js';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import React from 'react'
import A from './Components/Learing/AllSign/A.js'


function App() {
  return (
      <div className="App">
      <div className="AppGlass">
    <BrowserRouter>
      <Sidebar />
      <Routes>
         <Route path='/Learing/A' element={<A />} />
         <Route path='/Learing' element={<Learing />} />
         </Routes>
        {/* <Sidebar /> */}
    </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
