import React from "react";
import './Skill.css'
import html from '../logos/html.png'
import javaicon from '../../../pngwing.com.png'


export function Skills(){
    return(
        <>
        <div id="skill">
            <div className=" m-3 skilldiv">
                <h1 className="text-center">LEARNED SKILLS</h1>
               <div className="row text-center skillrow1 ">
               <div className="  col-6 col-sm-3 ">
                    <img src={html}alt=""className="col-8 p-3 border"/>
                    
                </div>
            
                <div className="col-6 col-sm-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                    alt="" className="col-6 p-3 border"/>
                </div>
                
                <div className="col-6 col-sm-3 ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/640px-Javascript-shield.svg.png"alt="" className="  mt-1 p-3 col-6 border"/>
                </div>
                <div className= "  col-6 col-sm-3 skill_pic">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png" alt="" className="p-4 col-9 col-md-10 col-lg-10 p-3 "/>
                </div>
                </div>
               <div className="row text-center ">
               <div className="  col-6 col-sm-3 skill_pic">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt=""className="col-8 p-2 mt-4"/>
                </div>
                <div className="  col-6 col-sm-3 skill_pic">
                    <img src={javaicon} className="col-9  " alt=""/>
                 </div>
                <div className="  col-6  col-sm-3  skill_pic">
                    <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="" className="col-10 mt-2 p-3"/>
                </div>
            
                <div className="col-6 col-sm-3 skill_pic"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png" alt=""className="col-8 col-lg-12 mt-5 p-3"/></div>
               
                </div>
                <div className="row d-flex justify-content-center  mt-3">
                 <div className="col-6 col-sm-3  skill_pic "> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mongodb.png/640px-Mongodb.png"alt="" className=" col-12 "/>
                 </div>
                 <div className=" col-6 col-sm-3 skill_pic"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png" alt=""className="col-12 mt-2" /></div>
                </div>
                </div>
              

            
            
        </div>
        </>
    )
}