import React from "react";
import './Footer.css'

const Footer =()=>{
    return(
        <>
            <div className="newsletter-main">
                <hr />
                <div className="newsletter-content">
                    <div className="text">
                        <p>Subscribe to our </p>
                        <h4>Newsletter</h4>
                    </div>
                    <div className="box-btn">
                        <input type="email" placeholder="Your email"/>
                        <button type="submit"><b>Subscribe</b></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;