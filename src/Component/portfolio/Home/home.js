import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from '../../../pngback.png'
import React from "react";
import './home.css'


export function Home(){
    return(
        <>
        <div className="d-flex justify-content-center homeP ">
            <div className="row container  ">
            <div className="col-lg-6 container-fluid contentP ">
                <h1 className="text-primary">Hello,</h1>
                <h1 className="fwh">I'm Antony Raja.</h1>
                <h2 className="text-primary">Certified MERNStack Developer</h2>
                <p>Everyone in this country should learn how to program,<br/>
                because it's teaches you how to think.</p>
                
                <button className="btn btn-outline-primary">Blogs  </button>
              <div className="mt-4  ">
                    <span className=" spanicon fs-3 rounded-circle p-2"><FontAwesomeIcon icon={faGithub}/></span><span className="ms-4 spanicon fs-3 rounded-circle p-2"><FontAwesomeIcon icon={faLinkedin}/></span>
                    <span className="ms-4 spanicon fs-3 rounded-circle p-2"><FontAwesomeIcon icon={faPhone}/></span><span className="ms-4 spanicon fs-3 rounded-circle p-2"><FontAwesomeIcon icon={faEnvelope}/></span>
              </div>

            </div>
            <div className="col-lg-5  imgcontent col-lg align-self-center">
                <img src={pic}  className="col-12 rounded-circle " alt="no pics"/>             
            </div>
        </div>
        </div>

        </>
    )
}