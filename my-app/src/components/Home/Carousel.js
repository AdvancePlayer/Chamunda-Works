import React from "react";
import './Carousel.css'
import { useNavigate } from "react-router-dom";

const Carousel = ({carousel})=>{
    const navig = useNavigate();
    let catId = 0;
    return(
        <>
                <div className="main-banner">
                {carousel?.data?.map((item)=>(
                    <div key={item.id}  className="content">
                    <p style={{display:"none"}}>{catId=item?.attributes?.category?.data?.id}</p>
                    <span className="img-bg"><img src={process.env.REACT_APP_LINK + item?.attributes?.image?.data[0]?.attributes?.url} alt="carousel-image" /></span>
                    <div className="text-content">
                        <h1>{item?.attributes?.title}</h1>
                        <p>{item?.attributes?.desc}</p>
                        <button className="shop-now-btn" onClick={()=>navig('/category/'+catId)}>Shop Now &#8594;</button>
                        <p className="resp-btn" onClick={()=>navig('/category/'+catId)}>Shop now &#8594;</p>
                    </div>
                </div>))}
            </div>
        </>
    )
}
export default Carousel;
