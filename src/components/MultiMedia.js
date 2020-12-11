import React from 'react'
import style from './style'
import styled from 'styled-components'

export default function MultiMedia(props) {
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

const StyledMedia = styled.div`
    img {
        width: ${style.multiMedia.width};
        margin: ${style.multiMedia.margin}
    }
    
    margin: ${style.multiMedia.margin};
    h1 {
        /* background-image: ${style.h1.Background}; */
        font-size: ${style.h1.fontSize};
        /* border: ${style.h1.border};
        border-radius: ${style.h1.borderRadius}; */
        color: ${style.h1.color};
        margin: ${style.h1.margin};
      }
`;