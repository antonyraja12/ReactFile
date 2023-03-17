import {React,useState,useEffect} from "react";

export function Products(){

    const [details,setDetails]=useState([]);
     useEffect(()=>{
      fetch("localhost:3000/data.json")
      .then(res=>res.json())
       .then(datas =>setDetails(datas))   ; 
    });




    return(
        <>
        {
            details.map((value,index)=>(
                
            ))
        }


        </>
    );
}