import {React,useState}  from "react";
import'./fruitcontrol.css'


export function FruitController(){
        const [count,setCount]=useState(0);
        const [count1,setCount1]=useState(0);
    return(
            <>
                <div className=" d-flex justify-content-around bg-warning">
                    <div className="col-lg-8 container-fluid border border-dark bg-light bgfruit m-5">
                        <div className="text-center fs-1 m-5">Kumar ate<span className="text-warning">{count}</span>Mangoes and <span className="text-warning">{count1}</span>Bananas</div> 
                         <div className="row text-center m-5">
                        <div className="col-lg-6 ">
                            <img src="https://d3nn873nee648n.cloudfront.net/900x600/12936/20-EA437116.jpg" alt="" className="container-fluid"/>  
                            <input type="button"value="Eat Mango"className="btn btn-primary mt-5" onClick={()=>setCount(count+1)}/>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://d3nn873nee648n.cloudfront.net/900x600/12689/18-EA425524.jpg" alt="" className="container-fluid"/>
                            <input type="button" className="btn btn-primary mt-5" value="Eat Banana" onClick={()=>setCount1(count1+1)}/>
                        </div> 
                        <div> <input className="btn btn-danger mt-3" type="button"value="Reset"onClick={()=>{
                            setCount(count*0);
                            setCount1(count1*0);
                        }}/></div>
                       
                         </div>
                    </div>
                    
                </div>            
            </>

        )
}