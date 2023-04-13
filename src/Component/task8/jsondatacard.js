// import React,{ useEffect,useState} from "react";

import React, { useState, useEffect } from "react";
import './json.css';


export function Jsoncard() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/data.json")
            .then(res => res.json())
            .then(data => setProduct(data))

    }, []);

    return (
        <>

            {
                product.map((value, index) => (
                    <>



                        <div className="d-inline-flex col-lg-3">
                            <div>
                                <div class="card mt-2">
                                    <p className="text-center"> <img src={value.image} alt="" className="col-11" /></p>
                                    <div class="card-body">

                                        <h5 ClassName=" card-title">{value.Brand}</h5>
                                        <h6 className="text-danger">Model: {value.Model}</h6>
                                        <h6>Network Type: {value.Network_Type}</h6>
                                        <h5>Price: {value.Pricing}</h5>
                                        <h6>Rating: {value.Rating}</h6>

                                    </div>
                                </div>
                            </div>
                        </div>




                    </>
                ))

            }


        </>
    ) ;
}