import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import React from 'react'
import A from './Components/Learing/AllSign/A.js'

export default function Routeing() {
  return (
    <BrowserRouter>
    <Routes>
                <Route path='/A' element={<A />} />
                {/* <Route path='/B' element={<B />} />
                <Route path='/C' element={<C />} />
                <Route path='/D' element={<D />} />
                <Route path='/E' element={<E />} /> */}
</Routes>
    </BrowserRouter>
  )
}
