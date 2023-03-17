import React from "react";
import { Link } from "react-router-dom";
import './menu.css'

export function Menu(){

    return(
        <>


<nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <Link class="navbar-brand" href="#">Moodle Assesment</Link>
 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
 <Link className="link1" to='/'><li className=" text-decoration-none  ms-3 text-dark ">HelloWorld</li></Link>
 <Link className="link1" to='/congrates'><li className=" ms-3 text-dark ">Congrates</li></Link>
 <Link className="link1" to='/Superleague'> <li  className="ms-3 text-dark">Superleague</li></Link>
 <Link className="link1" to='/Socialmedia'><li className="ms-3 text-dark">Socialbutton</li></Link>
 <Link className="link1" to='/Notification'><li className="ms-3 text-dark">Notification</li></Link>
   <li class="nav-item dropdown ">
          <Link class="ms-3 dropdown-toggle link1 nav1 text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link className="link1"to='/login'><li className="ms-3 text-dark">LoginPage</li></Link></li>
          <li><Link className="link1" to="/tech/card"><li className="ms-3 text-dark">Technology Card</li></Link></li>
          <li><Link className="link1" to="/hook/set"><li className="ms-3 text-dark">Hook set</li></Link></li>
          <li><Link className="link1" to ="/FruitControl"><li className="ms-3 text-dark">FruitControl</li></Link></li>
          <Link className="link1"to="/feedback"><li className="ms-3 text-dark"> Feed back</li></Link>
          <Link className="link1"to="/DateFunction"><li className="ms-3 text-dark">Date Function</li></Link>
      </ul>
        </li>
        <Link className="link1" to="/portfolio"><li className="ms-3 text-dark">portfolio</li></Link> 
        

     </ul>
</div> 
</div>
</nav>
        </>
    );
}

 

 