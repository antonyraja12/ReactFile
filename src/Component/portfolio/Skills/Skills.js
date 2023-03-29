import React from "react";
import './Skill.css'
import html from '../logos/html.png'


export function Skills(){
    return(
        <>
        <div>
            <div className="d-flex flex-wrap bg-dark  ">
                <div className="skill_pic">HTML
                    <img src={html}alt="" className=" container-fluid "/>
                </div>
                <div className="skill_pic">CSS
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                    alt="" className="container-fluid  "/>
                </div>
                <div className="skill_pic">JavaScript
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/640px-Javascript-shield.svg.png"alt="" className="container-fluid"/>
                </div>
                <div className="skill_pic">Bootstrap
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png" alt="" className="container-fluid"/>
                </div>
                <div className="skill_pic">ReactJS 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt=""className="container-fluid"/>
                </div>
                <div className="skill_pic">MySQL
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/640px-Database-mysql.svg.png" alt="" className="container-fluid"/>
                </div>
                <div className="skill_pic">MongoDB <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mongodb.png/640px-Mongodb.png"alt="" className="container-fluid"/>
                 </div>
                <div className="skill_pic">SpringBoot <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png" alt=""className="container-fluid" /></div>
                <div className="skill_pic">NodeJS <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png" alt=""className="container-fluid"/></div>
                <div className="skill_pic">Core Java
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFGXdN4Vms02GAnvrrRFYNcmZWl8C912GEydQM1WZEjum7R-Izo008eenv3rFnm7OWEg&usqp=CAU" alt="" className="container-fluid"/>
                </div>

            </div>
            
        </div>
        </>
    )
}