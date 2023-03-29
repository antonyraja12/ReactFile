import { faContao, faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faContactCard, faEnvelope, faMap, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLocation, faMapLocation, faQuestion, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export function  Contact(){
    return(
        <>
        <div className="m-5 row h-100">
        <h3>Contact</h3>
            <div className="col-lg-4 border ">
                
                <div className="m-5">
                <div class="input-group mt-3">
                    <div class="input-group-text" id="btnGroupAddon"><FontAwesomeIcon icon ={faUser}/></div>
                    <input type="text" class="form-control" placeholder="Name" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                    </div>

                    <div class="input-group mt-3">
                    <div class="input-group-text" id="btnGroupAddon">@</div>
                    <input type="text" class="form-control" placeholder="Mail id" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                    </div>

                    <textarea className="w-100 border border-5  rounded-4 mt-4"></textarea><br/>
                    <input type="button"className="btn btn-primary"  value="Send" />

                </div>
            

            </div>
            <div className="col-lg-4 border">
                <div><p><FontAwesomeIcon icon={faEnvelope}/> antonyraja.adev@gmail.com</p></div>
                <div> <p><FontAwesomeIcon icon={faContactCard}/>+91 6379031063</p></div>
                <div><p><FontAwesomeIcon icon={faMapLocation}/>Dindigul,TamilNadu,India-624304</p></div>
                <div><span><FontAwesomeIcon icon={faTwitter}/></span><span><FontAwesomeIcon icon={faLinkedinIn}/></span>
                    <span><FontAwesomeIcon icon={faGithub}/></span>                
                </div>
            </div>
            <div className="col-lg-4 border">
                <img className="col-12" src="https://i.pinimg.com/564x/35/2b/3b/352b3b6f1092c64115cbfcf456ad4e38.jpg"alt=""/>
            </div>
        </div>
        </>
    )
}