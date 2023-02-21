import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Search from './components/pages/Search'
import Post from './components/pages/Post'
import Nav from './components/Nav'

import './App.css'

function App() {
    return (
      <>
          <Nav />
          <Routes>
              <Route
                  path="/search"
                  element={<Search />}
              />
              <Route path="/post" element={<Post />} />
              <Route path="/" element={<Navigate to="/search" />} />
          </Routes>
        </>
    )
}

export default App
