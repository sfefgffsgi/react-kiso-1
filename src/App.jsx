import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'

import { ThreadList } from './ThreadList'
import { CreateThread } from './CreateThread'
import { Threads } from './Threads'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ThreadList />} />
          <Route path="/threads/new" element={<CreateThread />} />
          <Route path="/threads/:thread_id" element={<Threads />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App
