import React from "react";
import pic from '../../profile_img.png'
import pic1 from '../../watch.png'
import './cardimage.css'

function Cardimage(){
    return(
        <>
    
        <div className="d-flex justify-content-center align-items-center ">
             <div className="col-lg-12 border border-dark bgimg d-flex justify-content-center p-5 "  >     
                    <div >  
                      <h1 className="text-center">Congradgulation</h1>
                      <div className=" col-lg-12  bg-info "> 
                        <div className="  d-flex justify-content-center"><img src={pic} alt="" className="mt-5"></img></div>
                            
                              <p className="  d-flex justify-content-center">Kiran .V</p>
                              <p className="  d-flex justify-content-center">KGiSL Insititute Of Technology Coimbatore,Tamil Nadu </p>
                             <p className="  d-flex justify-content-center"> <img src={pic1} alt="" className=""></img></p>

                             </div>

                    </div>
            
             </div>
        </div>
        
         </>

    )


}
export default Cardimage;