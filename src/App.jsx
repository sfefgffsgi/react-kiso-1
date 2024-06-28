import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'

import { ThreadList } from './ThreadList'
import { CreateThread } from './CreateThread'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ThreadList />} />
          <Route path="/create-thread" element={<CreateThread />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App
