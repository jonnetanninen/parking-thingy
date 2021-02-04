import './i18n';
import React from 'react';
import './App.css';
import Map from "./modules/map/components/Map";
import Navbar from './modules/common/components/Navbar'
import Footer from './modules/common/components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
