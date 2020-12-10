import starrySpace from '../assets/starrySpace'

export default {
    backgroundColor: '#1d1d1d',
    textColor: 'whitesmoke',
    header: {
        headerBackground: `${starrySpace.jpeg}`,
        border: '3px solid black',
        borderRadius: "10%"
    },
    media: {
        size: '80%',
        margin: '0 auto',
        
    },
    breakpoints: {
        mobile: '(max-width: 550px)',
        tablet: '(max-width: 800px)',
    }
    
}


//color: ${style.textColor};
// background-color: ${style.backgroundColor};