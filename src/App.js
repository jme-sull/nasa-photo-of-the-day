import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants'
import ImageContainer from './components/image-container.jsx'
import InfoContainer from "./components/info-container";




function App() {

  const [ currentInfo, setCurrentInfo] = useState({ })


  useEffect(() => {
    
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res)
        setCurrentInfo(res.data)
      })
      .catch(err => {
        console.log('nope')
        debugger
      })
    },[])




  return (

    <div className="App">
      <h1> {currentInfo.title} </h1>
      <ImageContainer imageSRC = {currentInfo.url}/>
      <InfoContainer explaination = {currentInfo.explanation} />
    </div>
  );
}

export default App;
