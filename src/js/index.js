//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

window.onload = () => {
    let timer = -1;
    let app = ReactDOM.createRoot(document.getElementById('app'));

    setInterval(() => {
        timer++;
        app.render(<SecondsCounter timer={timer} />);
    }, 1000)
}
