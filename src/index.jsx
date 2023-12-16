import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Accomodation from './pages/Accomodations';
import Error from './pages/Error';
import { Header } from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './utils/style/GlobalStyle';
import { AccomodationProvider } from './utils/context';

ReactDOM.render(
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
  </React.StrictMode>,
  document.getElementById('root')
)