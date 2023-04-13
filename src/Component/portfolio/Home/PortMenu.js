import React from "react";
import { Link } from "react-router-dom";
import {Link as Linkto} from 'react-scroll';


export function PortMenu(){
    return(
        <>
     <nav className="navbar navbar-expand-lg navbar-light fs-5  fixed-top bg-primary ">
         <div className="container-fluid ">
              <Link className="navbar-brand" to='/'><img src="https://raw.githubusercontent.com/shahzaibkhalid/mern-app-generator/master/static/logo.png"height="45px"width="40px" alt="no image"/></Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className ="navbar-nav ms-auto ">
             <li class="nav-item ms-3">
                  <Linkto class="nav-link active" to="home"smooth={true}duration={350} ac>Home</Linkto> </li>
                  <li class="nav-item ms-3"><Linkto to='about' smooth={true}duration={350} class="nav-link active ">About </Linkto> </li>
                  <li class="nav-item ms-3"><Linkto to="certificate"smooth={true}duration={350} class="nav-link active">Certifications </Linkto> </li>
                  <li class="nav-item ms-3"><Linkto to="project" smooth={true}duration={350} class="nav-link active">Project</Linkto> </li>
                  <li class="nav-item ms-3"><Linkto to='skill' smooth={true}duration={350}class="nav-link active">Skills</Linkto> </li>
                  <li class="nav-item ms-3"><Linkto to="contact"smooth={true}duration={350} class="nav-link active">Contact</Linkto></li>
                  

           </ul>
           
     </div>
  </div>
  </nav>
  
        </>
    )
}