import React from "react";
import datasc from '../../datasct.png';
import iot from '../../IOT.png';
import vr from '../../vr.webp';
import ml from '../../ml.png'
export function Techcard(){
    return(
        <>
        <div className="d-flex justify-content-center align-items-center ">
            <div className="col-lg-10 bg-info">
              <div className="col-lg-12 text-center"><h1>Learn 4.0 Technology</h1>
                         <p>Industry 4.0 is powered by the Industrial Internet of Things (IIoT) and cyber-physical systems – smart, autonomous systems that use computer-based algorithms to monitor and control physical things like machinery, robots, and vehicles</p></div>
            <div className="col-lg-12 row container d-flex justify-content-around">
                <div className="col-lg-5 bg-light border-top  border-5 border-danger rounded-5">
                         <h3 className="fw-2 ">Data Scientist</h3>
                         <p>Data scientists are a new breed of analytical data expert who have the technical skills to solve complex    problems  and the curiosity to explore what problems need to be solved. They're part mathematician, part computer scientist and part trend-spotter.
                           </p>
                         <div className="float-end" > <img src={datasc} alt="no pic" /></div>
                </div>
                <div className="col-lg-5 bg-light border-top  border-5 border-success rounded-5">
                <h3 className="fw-2">IOT Developer</h3>
                         <p>IOT developer are a new breed of analytical data expert who have the technical skills to solve complex    problems  and the curiosity to explore what problems need to be solved. They're part mathematician, part computer scientist and part trend-spotter.
                           </p>
                         <div className="float-end" > <img src={iot} alt="no pic" height="200px"/></div>
                </div>
            </div>
            <div className="col-lg-12 mt-3 row container d-flex justify-content-around">
                <div className="col-lg-5 bg-light border-top  border-5 border-warning rounded-5">
                <h3 className="fw-2">VR Developer</h3>
                         <p>VR Developers  are a new breed of analytical data expert who have the technical skills to solve complex    problems  and the curiosity to explore what problems need to be solved. They're part mathematician, part computer scientist and part trend-spotter.
                           </p>
                         <div className="float-end" > <img src={vr} alt="no pic" height="200px"/></div>
                </div>
                <div className="col-lg-5 bg-light border-top  border-5 border-secondary rounded-5">
                <h3 className="fw-2">ML Engineer</h3>
                         <p>ML Engineers are a new breed of analytical data expert who have the technical skills to solve complex    problems  and the curiosity to explore what problems need to be solved. They're part mathematician, part computer scientist and part trend-spotter.
                           </p>
                         <div className="float-end" > <img src={ml} alt="no pic" height="200px"/></div>
                </div>
            </div>

        </div>
        </div>
        </>
    )
}