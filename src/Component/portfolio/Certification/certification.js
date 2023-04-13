import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import java  from "../../../certificates/Basics of java-1.png"
import mongo  from "../../../certificates/CRUD_MongoDB-1.png"
import tech  from "../../../certificates/Tech Foundation-1.png" 
import scratch  from "../../../certificates/hongkong_Scratch-1.png" 
import html  from "../../../certificates/html_sp-1.png" 
import metadep  from "../../../certificates/metaDepth-1.png" 
import metaintro  from "../../../certificates/meta_intro-1.png"
import './certification.css';


  

   
  export function Certification() {
   return( 
   <>
   <div className="d-flex align-items-center">
   <div className="cetmain" id="certificate">
      <div>   <h1 className="text-center fonts">Certifications</h1>
     <div className="certifidiv p-5">
      
      <img src={java} alt="" className="imgcer"/>
      <img src={mongo} alt="" className="imgcer"/>
      <img src={tech} alt="" className="imgcer"/>
      <img src={scratch} alt="" className="imgcer"/>
      <img src={html} alt="" className="imgcer"/>
      <img src={metadep} alt="" className="imgcer"/>
      <img src={metaintro} alt="" className="imgcer"/>   
   </div>
   </div>
   </div>
   </div>
      </>);
}