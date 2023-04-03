import { faContao, faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faContactCard, faEnvelope, faMap, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLocation, faMapLocation, faQuestion, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./contact.css"


export function  Contact(){
    return(
        <>
        <div className="m-5 row h-100 contact">
        <h3 className="text-center">Get in touch with Me<span> <img className="contimg" src="https://i.pinimg.com/564x/35/2b/3b/352b3b6f1092c64115cbfcf456ad4e38.jpg"alt=""/></span></h3>
            <div className="col-lg-2 ">
            </div>
            <div className="col-lg-4 ">
            <div className="">
                <div class="input-group">
                    <div class="input-group-text" id="btnGroupAddon"><FontAwesomeIcon icon ={faUser}/></div>
                    <input type="text" class="form-control" placeholder="Name" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                    </div>

                    <div class="input-group mt-3">
                    <div class="input-group-text" id="btnGroupAddon">@</div>
                    <input type="text" class="form-control" placeholder="Mail id" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                    </div>

                    <textarea className="w-100 border border-5  rounded-4 mt-4"></textarea><br/>
                   <p className="text-center"><input type="button"className="btn btn-outline-dark"  value="Send" /></p> 

                </div>
            
               </div>
            <div className="col-lg-4">
            <div className="m-3"><FontAwesomeIcon icon={faEnvelope}/> <span className="ms-2">antonyraja.adev@gmail.com</span></div>
                <div className="m-3 "> <FontAwesomeIcon icon={faContactCard}/><span className="ms-2">+91 6379031063</span></div>
                <div className="m-3"><FontAwesomeIcon icon={faMapLocation}/><span className="ms-2">Dindigul,TamilNadu,India-624304</span></div>
                <div className="m-3"><span className="m-3"><FontAwesomeIcon icon={faTwitter}/></span><span className="m-3"><FontAwesomeIcon icon={faLinkedinIn}/></span>
                    <span className="m-3"><FontAwesomeIcon icon={faGithub}/></span>                
                </div>
           
               
            </div>
        </div>
        </>
    )
}