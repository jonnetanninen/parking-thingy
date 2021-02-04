import './i18n';
import React from 'react';
import './App.css';
import Map from "./modules/map/components/Map";
import Navbar from './modules/common/components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Map />
    </div>
  );
}

export default App;
