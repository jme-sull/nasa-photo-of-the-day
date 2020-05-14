import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants'
import ImageContainer from './components/image-container.jsx'




function App() {

  const [ currentImage, setCurrentImage ] = useState('')

  useEffect(() => {
    
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res)
        setCurrentImage(res.data.url)
      })
      .catch(err => {
        console.log('nope')
        debugger
      })
    }, [])




  return (

    <div className="App">
      <h1>picture goes here</h1>
      <ImageContainer imageSRC = {currentImage}/>
    </div>
  );
}

export default App;
