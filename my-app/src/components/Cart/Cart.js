import './Cart.css'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BsCartX } from "react-icons/bs";
import { useContext } from 'react';
import { Context } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const Cart=()=>{
    const {total,ProductQty,RemoveFromCart,cartItem}=useContext(Context);
    const Navig = useNavigate();
    return(
        <>
        <div className="cart-main">
        <div className="cart-layout">
            { !cartItem.length &&
            <div className="empity-state">
                <BsCartX />
                <p>No item present </p>
                <button onClick={()=>Navig("/")}>Shop now</button>
            </div>
            }
            { !!cartItem.length && <>   
            <div className="cart-prod-info">
            {cartItem.map((item)=>(
            <>
            <div key={item.id} className="cart-product-full">
                <img src={process.env.REACT_APP_LINK + item?.attributes?.img?.data[0]?.attributes?.url} alt="Item Image" />
                <span className="name-categ">
                    <p className="item-name"><b>{item?.attributes?.title}</b></p>
                    <p className="item-categ">{item?.attributes?.categories?.data[0]?.attributes?.title}</p>
                </span>
                <div className="prod-qty-detail">
                    <span onClick={()=>ProductQty("dec",item)}>-</span>
                    <span>{item?.attributes?.quantity}</span>
                    <span onClick={()=>ProductQty("inc",item)}>+</span>
                </div>
                <p><b>&#8377;{item?.attributes?.price}</b></p>
                <IoMdCloseCircleOutline onClick={()=>RemoveFromCart(item)}/>
            </div>
            <hr />
            </>
            ))}
                <div className="cart-total">
                    <h5>Total:</h5>
                    <p>&#8377;{total}</p>
                </div>
            </div>
            <div className="cart-btn-pair">
                <button onClick={()=>Navig("/")}>Continue Shopping</button>
                <button onClick={()=>Navig("/checkout")}>Proceed to checkout</button>
            </div>
            </>}
        </div>
    </div>
</>
    )
}
export default Cart;