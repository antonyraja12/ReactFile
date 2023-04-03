import React from "react";
import './project.css'
import pro1 from '../../../project1.PNG';
import pro2 from '../../../project2.png';
import pro3 from '../../../project3.png';
import { Link } from "react-router-dom";



export function Project(){
    return(
        <>
        <div className="projectdiv p-3" id='project'>
        <h1 className="text-center" >About My Works</h1>
        <h4 className="text-center">These are some project templates I created on my own</h4>
        <div className="row mx-auto carg_grid">   
            <div className="col-6 col-lg-4 card_bg">
             <div class="card1 card text-bg-dark">
                 <img src={pro1} class="card-img" alt="..."/>
                     <div class="">
                        <h2>Sample Webpage</h2>
                        <p>Using :  HTML,CSS,Bootstrap</p>
                     <Link to="/"  > <p className="text-center"><button className="btn btn-light">view</button></p></Link>  
                    
                          
                      </div>
            </div>
            </div>
            <div className=" col-6 col-lg-4 card_bg">
        
            <div class="card text-bg-info">
                 <img src={pro3} class="card-img" alt="..."/>
                     <div class="">
                        <h2> Technology Card</h2>
                        <p>Using :ReactJS,HTML,CSS,Bootstrap</p>
                       <Link to="/tech/card" > <p className="text-center"> <button className="btn btn-light">view</button></p></Link>
                     </div>
            </div>
            </div>
            <div className="col-12 col-lg-4 card_bg">
                 <div class="card text-bg-warning">
                    <img src={pro2} class="card-img" alt="..."/>
                     <div class="">
                        <h2>React Sample</h2>
                        <p>Using :React ,JavaScript,HTML,CSS</p>
                        <Link to='/FruitControl'> <p className="text-center"><button className="btn btn-dark">view</button></p></Link>
                     </div>
          
                </div>
             </div>
            
        </div>
        </div>
        </>
        
    );
}