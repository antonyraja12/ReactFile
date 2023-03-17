import React from "react";
import { Link } from "react-router-dom";
import './feedback.css'
import './response'

export function Feedback(){
            return(
                <>
                    <div className="d-flex justify-content-center  align-items-center bgfeed">
                        <div className="col-lg-5 bg-light text-center rounded-5  d-flex align-items-center m-4">
                                <div>
                            <div className="fs-2 ms-3"><p>How satisfied are you with our <br></br> customer support and Performance</p></div>
                            <div className="d-flex m-5 ">
                              <Link to='/response'>  <img className="col-lg-4 col-md-3 col-sm-3 col-3 ms-3 image-fluid" src="https://www.pngmart.com/files/15/Happy-Face-Emoji-PNG-File.png" alt=""/></Link>
                              <Link to='/response'> <img className="col-lg-4 col-md-3 col-sm-3 col-3 ms-3" src="http://cdn.shopify.com/s/files/1/1061/1924/products/Neutral_Face_Emoji_grande.png?v=1571606037" alt=""/></Link>
                              <Link to='/response'>  <img className="col-lg-4 col-md-3 col-sm-3 col-3 ms-3" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_grande.png?v=1571606089" alt=""/></Link>

                            </div>
                            
                            </div>
                        </div>
                    </div>
                </>
            
            );
}