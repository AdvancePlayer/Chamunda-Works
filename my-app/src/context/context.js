import { createContext,useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

export const Context=createContext();
const ContextProvider=({children})=>{
    const [category,setCategory] = useState();
    const [product,setProduct]= useState();
    const [carousel,setCarousel]= useState();
    const [cartItem,setCartItem]= useState([]);
    const [cartCount,setCartCount]= useState(0);
    const [total,setTotal]= useState(0);
    const Location = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[Location])

    useEffect(()=>{
        let count = 0;
        cartItem.map(item=> count+=item?.attributes?.quantity);
        setCartCount(count);

        let total=0;
        cartItem.map(item =>total += item?.attributes?.quantity * item?.attributes?.price);
        setTotal(total);
    },[cartItem,product]);
    const AddToCart=(product,quantity)=>{
        let item = [...cartItem];
        let index= item?.findIndex((p)=>p.id===product.id);
        if (index!==-1){
            item[index].attributes.quantity += quantity;
        } else{
            product.attributes.quantity = quantity;
            item=[...item,product];
        }
        setCartItem(item);
    };
    const RemoveFromCart=(product)=>{
        let item = [...cartItem];
        item=item.filter((p)=>p.id!==product.id);
        setCartItem(item);
    };
    const ProductQty=(type,product)=>{
        let item = [...cartItem];
        let index= item.findIndex((p)=>p.id===product.id);
        if(type==="inc"){
            item[index].attributes.quantity +=1;
        } else if(type==="dec"){
            if(item[index].attributes.quantity===1) return;
            item[index].attributes.quantity -=1;
        }
        setCartItem(item);
    };

    return(
        <Context.Provider value={{carousel,setCarousel,category,setCategory,product,setProduct,cartItem,setCartItem,cartCount,setCartCount,total,setTotal,AddToCart,RemoveFromCart,ProductQty}}>
            {children}
        </Context.Provider> 
    )
};

export default ContextProvider;
