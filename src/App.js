import React from 'react';
import Cover from './general/Cover.js';
import InfoImage from './general/InfoImage1.js';
import InfoBox from './general/InfoBox2.js';
import ImageCollage from './general/ImageCollage3.js';
import InfoSports from './infosports/InfoSports.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Cover />
      <InfoImage />
      <InfoBox />
      <ImageCollage />
      <InfoSports />
    </div>
  );
}

export default App;
