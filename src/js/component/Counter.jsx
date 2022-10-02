import React from "react";

export const Counter = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container text-white display-1 box">
                    <div className="clockIcon display-4"><i class="fa-solid fa-clock text-white"></i></div>
                    <div className="fourthDigit">{props.fourthDigit}</div>
                    <div className="thirdDigit">{props.thirdDigit}</div>
                    <div className="secondDigit">{props.secondDigit}</div>
                    <div className="firstDigit">{props.firstDigit}</div>
                </div>
            </nav>
        </div>
    );
};
