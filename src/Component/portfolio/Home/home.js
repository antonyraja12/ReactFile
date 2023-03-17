import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './home.css'


export function Home(){
    return(
        <>
        <div className="d-flex justify-content-center homeP  text-white">
            <div className="row container  ">
            <div className="col-lg-6 container-fluid contentP ">
                <h1 className=" text-info">Hello,</h1>
                <h1 className="fwh">I'm Antony Raja.</h1>
                <h2 className="text-info">FullStack Developer</h2>
                <p>Everyone in this country should learn how to program,<br/>
                because it's teaches you how to think.</p>
                
                <button className="btn btn-outline-info">Blogs  </button>
              <div className="">
                    <span className=""><FontAwesomeIcon icon={faGithub}/></span><span><FontAwesomeIcon icon={faLinkedin}/></span>
                    <span><FontAwesomeIcon icon={faPhone}/></span><span><FontAwesomeIcon icon={faEnvelope}/></span>
              </div>

            </div>
            <div className="col-lg-5  imgcontent">
                {/* <img src="https://i.pinimg.com/564x/39/e6/d4/39e6d4c4f0572317e8a6c123e5d21015.jpg"  className="container-fluid rounded-5" />              */}
            </div>
        </div>
        </div>

        </>
    )
}