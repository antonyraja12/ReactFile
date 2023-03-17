import React, { useState } from "react";

export function Datefun(){

        const[day,setDay]=useState("");
    function datefun(){
            var a=document.getElementById("fetch").value;
            var date=new Date(a);
            date.setDate(date.getDate()+90);
            var output=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
                setDay(output);
    }
    return(
        <>
        <input type="date" id="fetch"/>
        <input type="button"value="Date" onClick={datefun}/>
        <h1>{day}</h1>
        </>
    );
}