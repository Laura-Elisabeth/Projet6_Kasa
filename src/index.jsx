import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Accomodation from './pages/Accomodations/accomodations';
import Error from './pages/Error/error';
import {Header} from './components/Header/header';
import Footer from './components/Footer/footer';
import GlobalStyle from './utils/style/GlobalStyle';
import { AccomodationProvider } from './utils/context';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <AccomodationProvider>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/accomodation/:accomodationNumber' element={<Accomodation/>} />
          <Route path='/*' element={<Error/>} />
        </Routes>
      <Footer />
      </AccomodationProvider>
    </Router>
  </React.StrictMode>
)