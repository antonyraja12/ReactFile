import React from "react";
import { Link } from "react-router-dom";


export function Menu(){

    return(
        <>
            <ul className="nav bg-secondary">
               <Link to='/'><li className=" nav-item ms-3 text-dark ">Task1</li></Link>
               <Link to='/congrates'><li className=" ms-3 text-dark ">Task2</li></Link>
               <Link to='/Superleague'> <li  className="ms-3 text-dark">Task3</li></Link>
               <Link to='/Socialmedia'><li className="ms-3 text-dark">Task4</li></Link>
               <Link to='/Notification'><li className="ms-3 text-dark">Task5</li></Link>
            </ul>        
        </>
    )
}
 
