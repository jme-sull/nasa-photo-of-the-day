import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants'
import ImageContainer from './components/image-container.jsx'




function App() {
  return (

    <div className="App">
      <h1>picture goes here</h1>
      <ImageContainer />
    </div>
  );
}

export default App;
