import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import styled from '@emotion/styled';

import Search from './components/pages/Search'
import Post from './components/pages/Post'
import Nav from './components/Nav'

import './App.css'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-bottom: 50px;
`;

const Footer = styled.footer`
  background-color: #f2f2f2;
  margin-top:30px;
  padding-top:5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;

`;

const FooterText = styled.p`
  color: #555;
  font-size: 14px;
  text-align: center;
`;


function App() {
    return (
      <>
          <Nav />
          <Wrapper>
          <Routes>
              <Route
                  path="/search"
                  element={<Search />}
              />
              <Route path="/post" element={<Post />} />
              <Route path="/" element={<Navigate to="/search" />} />
          </Routes>

          </Wrapper>
          <div style={{ position: 'relative' }}>
            <Footer><FooterText>Ariel Meshorer © 2023 </FooterText></Footer>
          </div>
        </>
    )
}

export default App
