import React from 'react';
import Header from './components/Header';
import DealsContainer from './components/DealsContainer';
import Footer from './components/Footer';
import 'typeface-roboto';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <DealsContainer />
      <Footer />
    </div>
  );
}

export default App;
