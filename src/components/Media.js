import React from 'react'
import style from './style'

export default function Media(props) {
    const { nasaData } = props;
    if(nasaData.media_type === "image"){
        return (
            <StyledMedia id="nasaVideo">
                <h1>{nasaData.title}</h1>
                <img src={nasaData.url} alt={`${nasaData.title} ${nasaData.date}`}></img>
            </StyledMedia>
        )
    }
    else {
        return (
            <StyledMedia id="nasaVideo">
                <h1>{nasaData.title}</h1>
                <iframe src={nasaData.url} title={`${nasaData.title} ${nasaData.date}`}></iframe>
            </StyledMedia>
        )
    }
}

const StyledMedia = style.div`
    size: ${style.media.size};
    margin: ${style.media.margin}
    h1 {
        background-image: ${style.header.headerBackground};
        border: ${style.header.border};
        border-radius: ${style.header.borderRadius};
        color: ${style.header.color};
      }
`;