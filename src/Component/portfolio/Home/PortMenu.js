import React from "react";
import { Link } from "react-router-dom";

export function PortMenu(){
    return(
        <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid ">
              <Link className="navbar-brand" to='/'><img src="https://raw.githubusercontent.com/shahzaibkhalid/mern-app-generator/master/static/logo.png"height="45px"width="40px"/></Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className ="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
             <li class="nav-item">
                  <Link class="nav-link active" >Home</Link> </li>
                  <li class="nav-item "><Link to=''class="nav-link active ">About </Link> </li>
                  <li class="nav-item"><Link class="nav-link active">Certifications </Link> </li>
                  <li class="nav-item"><Link class="nav-link active">Project</Link> </li>
                  <li class="nav-item"><Link class="nav-link active">Contact</Link></li>
                  <li class="nav-item"><Link class="nav-link active btn btn-outline ">Resume</Link></li>

           </ul>
     </div>
  </div>
  </nav>
  
        </>
    )
}