import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CiClock2 } from "react-icons/ci";

//create your first component
const SecondsCounter = ({timer}) => {
	return (
        <div className="container">
            <div className="row text-center bg-dark text-light px-5 py-3 justify-content-center">
                {/* <div><i className="fa-regular fa-clock" style={{color: '#ffffff'}}></i></div> */}
                <div className="col-1 px-3"><CiClock2 className="border-2 rounded border-end border-start" /></div>
                <div className="col-1 px-3">{Math.floor(timer/10000)%10}</div>
                <div className="col-1 px-3">{Math.floor(timer/1000)%10}</div>
                <div className="col-1 px-3">{Math.floor(timer/100)%10}</div>
                <div className="col-1 px-3">{Math.floor(timer/10)%10}</div>
                <div className="col-1 px-3">{(timer)%10}</div>
            </div>
        </div>
	);
};

export default SecondsCounter;