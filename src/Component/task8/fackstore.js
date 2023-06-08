import React, { useEffect, useState } from "react";
import './json.css'
import { Link } from "react-router-dom";

export function Fackstore(){

    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setProduct(data))
        console.log(product);

    },[]);  

    return (
        <>
        {
            product.map((value,index)=>(
                <>
                   <div className="d-inline-flex col-lg-3">
                            <div>
                                <div class="card mt-2 col-12">
                                    <p className="text-center"> <img src={value.image} alt="" className="col-10 sizes" /></p>
                                    <div class="card-body">

                                        <h5 >{value.title}</h5>
                                        <h6>{value.category}</h6>
                                        <h5>{value.price }</h5>
                                      <Link to={`/description/${value.id}`} ><input type="button" value="Buy Now"className="btn btn-primary" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>




                </>


            ))
        }
        
        
         </>

    );
}