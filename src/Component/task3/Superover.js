import React  from "react";
import csklogo from '../../CSK.png';
import rcblogo from '../../RCB.png';
import'./Superover.css'
export function Superleague(){
    return(
        <>
        <div className="d-flex justify-content-center bg-dark d-flex align-items-center supover ">
            <div className="col-lg-6 row "> 
                <div className="col-lg-12 text-white fs-1 text-center">Super Over League</div>
                <div className="col-lg-6">
                    <img src={csklogo} alt="" className="container-fluid"/>
                    </div>  
                <div className="col-lg-6">
                    <img src={rcblogo} alt="" className="container-fluid"/>                    
                    </div>   
            </div>      
            </div>
        </>

    )
}


