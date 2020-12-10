import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Styling } from 'styled-components';
import style from "./components/style";


ReactDOM.render(
    <Styling style={style}>
        <App />
    </Styling>, 
    document.getElementById("root")
);
