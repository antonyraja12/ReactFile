import {React,useState} from "react";

export function Hookset(){

    const [count,setCount]=useState(0);

        return(
            <>
                <div className="d-flex justify-content-center ">
                  <div className="col-lg-4">
                    <h1>Increment and Decrement</h1>  
                         <h1>{count}</h1>
                          <input type="button"value="Increment" onClick={()=>setCount(count+1)}/>
                          <input type="button"value="Decrement" onClick={()=>setCount(count-2)}/>
                          <input type="button"value="Reset" onClick={()=>setCount(count*0)}/>
                </div>
                </div>
            </>
        )
}