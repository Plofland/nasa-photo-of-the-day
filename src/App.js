import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Media from './components/Media'



const apiKey = "kMJxIqquK5i6SOwPNZZyTjGxEPO1bnf7AdbIY2MA"
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key="

function App({style}) {

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
    <StyleApp className="App">
      <Media nasaData={nasaData} style={style}/>
      <h2 id="date">{nasaData.date}</h2>
      <p id="mediaDescription">
        {nasaData.explanation} <span role="img" aria-label='go!'>🚀</span>
      </p>
      <a href="https://www.nasa.gov/multimedia/imagegallery/iotd.html">Want to see more images from NASA?</a>
    </StyleApp>
  );
}

export default App;

const StyleApp = style.div`
  background-color: ${style.backgroundColor}
  color: ${style.textColor}
  h2 {
    background-image: ${style.header.headerBackground};
    border: ${style.header.border};
    border-radius: ${style.header.borderRadius};
  }
`