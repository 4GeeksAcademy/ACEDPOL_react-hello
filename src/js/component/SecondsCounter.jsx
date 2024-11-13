import React from "react";

//create your first component
const SecondsCounter = ({timer}) => {
	return (
        <div className="container-fluid">
            <div className="row text-center bg-dark text-light px-5 py-3 justify-content-center" style={{fontSize: '5rem'}}>
                <div className="col-1 mx-3 border-3 rounded border-end border-start"><i className="fa-regular fa-clock" style={{color: '#ffffff'}}></i></div>
                <div className="col-1 mx-3 border-3 rounded border-end border-start">{Math.floor(timer/10000)%10}</div>
                <div className="col-1 mx-3 border-3 rounded border-end border-start">{Math.floor(timer/1000)%10}</div>
                <div className="col-1 mx-3 border-3 rounded border-end border-start">{Math.floor(timer/100)%10}</div>
                <div className="col-1 mx-3 border-3 rounded border-end border-start">{Math.floor(timer/10)%10}</div>
                <div className="col-1 mx-3 border-3 rounded border-end border-start">{(timer)%10}</div>
            </div>
        </div>
	);
};

export default SecondsCounter;