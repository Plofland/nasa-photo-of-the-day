import React from 'react'
import App from '../App'


export default function Video(props) {
    const { nasaData } = props;
    return (
        <div id="nasaVideo">
            <h1>{nasaData.title}</h1>
            <iframe src={nasaData.url} title="Hard Coded Title"></iframe>
        </div>
    )
}