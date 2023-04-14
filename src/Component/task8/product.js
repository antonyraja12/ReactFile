import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShapes, faShare, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Product(){
    let {id} = useParams(); 
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+id)
        .then(res=>res.json())
        .then(data=>setProduct(data))
        

    },[]);


    return (      
        
         <>
         <div className="m-4">
         <div className="col-lg-10 fonts m-5"><h3>{product.title}</h3></div>

        <div className="row">
            <div className="col-lg-4">
                <img src={product.image} alt="no image" className="container-fluid"/>

            </div>
            <div className="col-lg-6">
                <h4>Amount :<span className="ms-5 fonts">{product.price}$</span></h4>
                <h4>Category:<span className="ms-4 fonts">{product.category}</span></h4>
                <div className="row ">
                <p className="fs-4 text-danger"><FontAwesomeIcon icon={faTag} /><span className="text-dark ms-4">Offers</span></p>
                    <div className="col-lg-3 border border-dark rounded-4">
                        <h5 className="">No Cost EMI</h5>
                        Available No Cost EMI on select cards for orders above ₹3000
                    </div>
                    <div className="col-lg-3 border border-dark rounded-4 ms-3">
                        <h5>Bank offers</h5>
                        Flat INR 1500 Instant Discount on HDFC Bank Credit Card EMI Txn.                   

                    </div>
                    <div className="col-lg-3 border border-dark rounded-4 ms-3 bo">
                        <h5>Partner Offers</h5>
                        Free Spotify Premium subscription on purchase of Laptops, Smart Watches 
                    </div>
                </div>
                <h4>Description :</h4>{product.description}
                
            </div>
        </div>
        </div>

    </>
    );
}