import './ProductDetail.css'
import RelatedProduct from '../Product/RelatedProduct';
import { useParams } from 'react-router-dom';
import { useContext,useState } from 'react';
import { Context } from '../../context/context';
import Fetch_data from '../../context/Fetch_data';
import { TiTick } from "react-icons/ti";
import { TbCircleDotted } from "react-icons/tb";



const ProductDetail=()=>{
    const {prodId}=useParams();
    const [quantity, setQuantity] = useState(1);
    const [message,setMessage] = useState(false);
    const {data} = Fetch_data(`/api/products?populate=*&[filters][id]=${prodId}`);
    const {AddToCart}=useContext(Context);
    console.log(data);
    if (!data){
        return<div className='feching_data_loading'><TbCircleDotted />Loading...</div>
    }
    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };
    
    let displayMessage = ()=>{
        setMessage(true);
        setTimeout(() => {
            setMessage(false);
        }, 3000);
    }
    return(
        <>
            <div className="main-content">
                <div className="prod-detail-layout">
                    <div className="prod-detail-upper">
                        {message&&<div className="display-message">
                                <div className="circle"><TiTick /></div>
                                <p>Item added to cart</p>
                            </div>}
                        <div className="prod-detail-left">
                            <img src={process.env.REACT_APP_LINK + data?.data[0]?.attributes?.img?.data[0]?.attributes?.url} alt="Product Img" />
                        </div>
                        <div className="prod-detail-right">
                            <span className="prod-detail-name">{data?.data[0]?.attributes?.title}</span>
                            <div className="price-pair">
                            <span>&#8377;{data?.data[0]?.attributes?.price}</span>
                            <span className="prod-price">&#8377;{data?.data[0]?.attributes?.maxprice}</span>
                            </div>
                            <span className="prod-detail-description">{data?.data[0]?.attributes?.description}</span>

                            <div className="prod-detail-btn-grp">
                                <div className="prod-detail-qty">
                                    <span onClick={decrement}>-</span>
                                    <span>{quantity}</span>
                                    <span onClick={increment}>+</span>
                                </div>
                                <button onClick={()=>{AddToCart(data.data[0], quantity);setQuantity(1);displayMessage()}}> + Add to carts</button>
                            </div>
                            <span className="prod-detail-divider"/>
                            <span className="prod-detail-item-info"><strong>Category: </strong>
                                <span>{data?.data[0]?.attributes?.categories?.data[0]?.attributes?.title}</span>
                            </span>

                        </div>
                    </div>
                    <RelatedProduct productId={prodId} categoryId={data?.data[0]?.attributes?.categories?.data[0]?.id}/>
                </div>
            </div>
        </>
    )
}
export default ProductDetail;
