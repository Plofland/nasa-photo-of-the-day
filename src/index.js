import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components';
import style from "./components/style";


ReactDOM.render(
    <ThemeProvider style={style}>
        <App />
    </ThemeProvider>, 
    document.getElementById("root")
);
