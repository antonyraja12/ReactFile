import React from "react";
import anto from '../../../anto.png' ;

export function About(){
    return(
        <>
        <div className="row m-5">
         
            <div className="col-lg-4">
                <img src={anto} alt="no pics" className="col-10 "/>
            </div>
            <div className="col-lg-7">
                <h2 className="fs-1 ">About Myself</h2>
                <p className="fs-5">I am a person who works really hard and is energetic, self-motivated, and trustworthy.  responsible team player who can easily adjust to any difficult circumstances.  I can work well on my own initiative as well as in a collaborative setting. I can stay on task and meet deadlines even when under duress.</p>


            </div>

        </div>
        </>
    )

}