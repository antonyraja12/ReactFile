import React from "react";
import './home.css'


export function Home(){
    return(
        <>
        <div className="d-flex justify-content-center homeP  text-white">
            <div className="row container  ">
            <div className="col-lg-6 container-fluid contentP ">
                <h1 className=" text-info">Hello,</h1>
                <h1 className="fwh">I'm Antony Raja.</h1>
                <h2 className="text-info">FullStack Developer</h2>
                <p>Everyone in this country should learn how to program,<br/>
                because it teaches you how to think.</p>
                <button className="btn btn-outline-info">Blogs  </button>
            </div>
            <div className="col-lg-5 imgcontent">
                
            </div>
        </div>
        </div>

        </>
    )
}