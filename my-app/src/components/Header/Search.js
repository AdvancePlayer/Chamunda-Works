import './Search.css'
import Fetch_data from '../../context/Fetch_data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search=({setSearch})=>{
    const [query,setquery]=useState(""); 
    const navig= useNavigate();
    const change=(event)=>{
        setquery(event.target.value);
    }
    let {data} = Fetch_data(`/api/products?populate=*&[filters][title][$contains]=${query}`);
    if(!query?.length){data=null};
    return(
        // <div className="search-main">
        //     <div className="search-layout">
        //         <input type="text" autoFocus placeholder='Enter search here..' />
        //         <span>
        //             {/* <AiOutlineClose onClick={()=>setSearch(false)}/> */}
        //             <button onClick={()=>setSearch(false)}>.</button>
        //         </span>
        //     </div>
        // </div>
        <div className="floating-div">
            <div className="search-bar">
                <input type="text" placeholder="Search here.." value={query} onChange={change} autoFocus/>
                <button className="cancel-button" onClick={()=>setSearch(false)}>Cancel</button>
            </div>
            {data?.data?.map(item => (
                <div className="item-search-main">
            <div className="search-layout" key = {item.id} onClick={()=>{navig('./product/'+item.id);setSearch(false)}}>
                <img src={process.env.REACT_APP_LINK + item?.attributes?.img?.data[0]?.attributes?.url} alt="Product image" />
                <p className='s-title'>{item.attributes.title}</p>
                <p><strong>&#8377;{item.attributes.price}</strong></p>
            </div>
        </div>
            ))}
        </div>

    )
}
export default Search;