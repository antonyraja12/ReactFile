import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import'./notification.css'
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export function Notification(){
    return( 
        <>       
         <div className=" d-flex justify-content-center">
            
            <div className="col-lg-4  text-white" >
            <p className="fs-1 text-dark text-center">Notification</p>
                <div className="bg-primary bgnot  mt-4 pt-3 h-25"><FontAwesomeIcon icon={faCircleCheck} className="iconnot"/>   Information_Message </div>
                <div className="bg-success bgnot  mt-4 pt-3 h-25"><FontAwesomeIcon icon={faCircleCheck} className="iconnot"/>   Success_Message</div>
                <div className="bg-warning bgnot  mt-4 pt-3  h-25"><FontAwesomeIcon icon={faBell} className="iconnot"/>   Warning_Message</div>
                <div className="bg-danger  bgnot  mt-4 pt-3  h-25"><FontAwesomeIcon icon={faExclamationCircle} className="iconnot"/>    Error_Message</div>
            </div>
        </div>
        </>

    )
}


