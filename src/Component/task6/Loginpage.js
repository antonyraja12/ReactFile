import React from "react";
import'./loginPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logpag from'../../log.png';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export function LoginPage(){
    return(
            <>

            <div className="col-lg-11 bglogin d-flex justify-content-around py-5 ">
            
                <div className="col-lg-8 row  bg-white rounded-5 container-fluid ">
                    <div className=" col-lg-5 container-fluid">
                        <div> <img src={logpag} alt="" className="col-lg-12 rounded-circle"/></div>
                        
                    </div>
                    
                    <div className=" col-lg-5 container-fluid d-flex justify-content-center " >
                        <div>
                        <h1>Member Login</h1>
                        <div className="bg-secondary rounded-5 divlog" ><FontAwesomeIcon icon={faEnvelope}/><input type="text" placeholder="E-mail" className="border-0 bg-transparent inplogin"  /></div>
                        <div className="bg-secondary rounded-5 mt-3 divlog"><FontAwesomeIcon icon={faLock}/><input type="Password" placeholder="Password" className="border-0  bg-transparent inplogin"  /></div>
                        <input type='button' value="LOGIN"className="bgbut rounded-5 mt-3"/>
                        <p>forgot <span className="text-success">user name / Password  ? </span></p>
                        <p className="text-success">Create your Account</p>
                        </div>
                        </div>  
                    </div>
                
            </div>
            </>
    )

}