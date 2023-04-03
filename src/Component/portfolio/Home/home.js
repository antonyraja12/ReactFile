import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from '../../../pngback.png'
import React from "react";
import './home.css'
import { Link } from "react-router-dom";



export function Home(){


    return(
        <>
        <div className="d-flex justify-content-center homeP " id='home'>
            <div className="row container  ">
            <div className="col-lg-6 container-fluid contentP ">
                <h1 className="text-primary">Hello,</h1>
                <h1 className="fwh">I'm Antony Raja.</h1>
                <h2 className="text-primary">Certified MERNStack Developer</h2>
                <p>Everyone in this country should learn how to program,<br/>
                because it's teaches you how to think.</p>
                <Link to ="https://drive.google.com/file/d/1_6g-CJ_H40ykhCk-lJ_62jbjQEkAPsX-/view?usp=sharing"><input type="button" className="btn btn-outline-primary"value="Resume"/> </Link>
              <div className="mt-4  ">
                  <Link to='https://github.com/antonyraja12'><span className=" spanicon fs-3 rounded-circle p-2"><FontAwesomeIcon icon={faGithub}/></span></Link>
                  <Link to='https://www.linkedin.com/in/antony-raja/'><span className="ms-4 spanicon fs-3 rounded-circle p-2"><FontAwesomeIcon icon={faLinkedin}/></span></Link>
                  <Link ><span className="ms-4 spanicon fs-3 rounded-circle p-2"><FontAwesomeIcon icon={faPhone}/></span></Link>
                  <Link to='https://mail.google.com/mail/u/0/#inbox?compose=new'><span className="ms-4 spanicon fs-3 rounded-circle p-2"><FontAwesomeIcon icon={faEnvelope}/></span></Link>
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