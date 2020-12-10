import React from 'react'


export default function Media(props) {
    const { nasaData } = props;
    if(nasaData.media_type === "image"){
        return (
            <div id="nasaVideo">
                <h1>{nasaData.title}</h1>
                <img src={nasaData.url} alt={`${nasaData.title} ${nasaData.date}`}></img>
            </div>
        )
    }
    else {
        return (
            <div id="nasaVideo">
                <h1>{nasaData.title}</h1>
                <iframe src={nasaData.url} title={`${nasaData.title} ${nasaData.date}`}></iframe>
            </div>
        )
    }
    }
    