import React from "react";
import anto from '../../pr1.jpg' ;

import './About.css'

export function About(){
    return(
        <>
        <div className=" aboutbg d-flex align-items-center p-4 m-3"id="about">
         
          <div className="row">
          <div className="col-lg-4">
               <p className="text-center "> <img src={anto} alt="no pics" className="col-10 rounded-5"/></p>
            </div>
            <div className="col-lg-7">
                <h2 className="fs-1 fonts ">About Myself</h2>
                <p className="fs-5">I am a person who works really hard and is energetic, self-motivated, and trustworthy.  
                responsible team player who can easily adjust to any difficult circumstances.  
                I can work well on my own initiative as well as in a collaborative setting. 
                I can stay on task and meet deadlines even when under duress.</p>
                <h2>Education</h2>
            
                <div className="row p-3 text-center rounded-5 bg-light ">
                    <div className="col-lg-4 ">
                       <div className=" educat">
                       <h4>B.Sc(CS)</h4>
                        <p>G.T.N Arts college,</p>
                        <p>Dindigul.</p>
                        <p>2021</p>
                      <span>%  <progress className="" value="73" max="100"></progress></span>
                        

                       </div>
                    </div>
                    <div className="col-lg-4 mt-2 ">
                            <div className=" educat">
                             <h4>HSE</h4>
                              <p>St.Antony's Hr Sec School,</p>
                              <p>Dindigul.</p>
                              <p>2018</p>
                             %  <progress value="77" max="100"></progress>
                   
                            </div>
                     </div>
                    <div className="col-lg-4 mt-2">
                            <div className="educat">
                             <h4>SSLC</h4>
                             <p>St.Antony's Hr Sec School,</p>
                             <p> Dindigul.</p>
                             <p>2018</p>
                             %  <progress value="83" max="100"></progress>
                   
                            </div>
                     </div>
                </div>


            
            </div>

          </div>
        </div>
        </>
    )

}