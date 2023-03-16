import React from "react";
import './Socialbutton.css'

export function Socialmedia(){
    return(
    <>
        <div className="d-flex justify-content-center  align-items-center "id="ssimg">
            <div className="col-lg-6  ">
                <p className="fs d-flex justify-content-center  ">Social Buttons</p>
                <div className="d-flex justify-content-center"> 
                <button type="button "className="btn btn-warning">Like</button>
                <button type="button" className="btn btn-light ms-3">Commend</button>
                <button type="button" className="btn btn-primary ms-3">Share</button></div>
            </div>
        </div>
    </>
    )
}