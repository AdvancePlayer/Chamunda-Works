import './SearchItem.css'
import { useNavigate } from 'react-router-dom';

const SearchItem = ({key,SearchImg,SearchTitle,SearchPrice})=>{
    const navig=useNavigate();
    return(
        <>
        <div className="item-search-main">
            <div className="search-layout" onClick={navig("/product/"+key)}>
                <img src={SearchImg} alt="Product image" />
                <p className='s-title'>{SearchTitle}</p>
                <p><strong>&#8377;{SearchPrice}</strong></p>
            </div>
        </div>
        </>
    )
}
export default SearchItem;