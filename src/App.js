import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import MultiMedia from './components/MultiMedia'
import style from './components/style'
import styled from 'styled-components'


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
    <StyledApp className="App">
      <MultiMedia nasaData={nasaData} style={style}/>
      <h2 id="date">{nasaData.date}</h2>
      <p id="mediaDescription">
        {nasaData.explanation} <span role="img" aria-label='go!'>🚀</span>
      </p>
      <a href="https://www.nasa.gov/multimedia/imagegallery/iotd.html">Want to see more images from NASA?</a>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  
  background-color: ${style.backgroundColor};
  color: ${style.textColor};
  font-family: ${style.fontFamily};
  font-size: ${style.fontSize};
  width: ${style.multiMedia.width};
  text-align: ${style.textAlign};
  border-radius: ${style.borderRadius};
  margin: ${style.margin};
  h2 {
    font-size: ${style.h2.fontSize};
  };
  p {
    font-size: ${style.p.fontSize};
    margin: ${style.p.margin};
  }
`