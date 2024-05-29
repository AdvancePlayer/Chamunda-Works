import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Product.css'
import { TbCircleDotted } from "react-icons/tb";

export default function Product({ id,data }) {
    const navigate = useNavigate();
    if (!data){
        return<div className='feching_data_loading'><TbCircleDotted />Loading...</div>
    }
    return (
        <>
                    <div className="product-main" onClick={()=>{navigate("/product/"+id)}}>
                        <img src={process.env.REACT_APP_LINK + data?.img?.data[0]?.attributes?.url} alt="Product Image" />
                        <p>{data?.title}</p>
                        <div className="price-grp">
                            <div className="real">
                                &#8377;{data?.price}
                            </div>
                            <div className="max">
                                &#8377;{data?.maxprice}
                            </div>
                        </div>
                    </div>
        </>
    )
}
