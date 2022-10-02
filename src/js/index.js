//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let Counter = 0;
setInterval(() => {
    const fourthDigit = Math.floor(Counter / 1000 % 10)
    const thirdDigit = Math.floor(Counter / 100 % 10)
    const secondDigit = Math.floor(Counter / 10 % 10)
    const firstDigit = Math.floor(Counter % 10)
    console.log(fourthDigit, thirdDigit, secondDigit, firstDigit)
    Counter++;

    ReactDOM.render(<Home firstDigit={firstDigit} secondDigit={secondDigit} thirdDigit={thirdDigit} fourthDigit={fourthDigit} />, document.querySelector("#app"))
}, 1000);

