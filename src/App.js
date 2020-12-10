import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
// import video from './components/video'



const apiKey = "kMJxIqquK5i6SOwPNZZyTjGxEPO1bnf7AdbIY2MA"
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key="

function App() {

  const [nasaData, setNasaData] = useState({})
  
  useEffect(() => {
    const fetchNasaApi = () => {
    axios
      .get(`${baseUrl}${apiKey}`)
      .then((result) => {
        setNasaData(result.data)
        console.log(result.data)
      }).catch((err) => {
        console.log(err)
      });
    }
    fetchNasaApi();
  }, [])
  

  return (
    <div className="App">
      <Video />
      <h2 id="date">{nasaData.date}</h2>
      <p id="mediaDescription">
        {nasaData.explanation} <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <a href="https://www.nasa.gov/multimedia/imagegallery/iotd.html">Want to see more images from NASA?</a>
    </div>
  );
}

export default App;
