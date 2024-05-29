import './SelectCategory.css'
import { useParams } from 'react-router-dom';
import List_prod from '../Home/List_prod';
import Fetch_data from '../../context/Fetch_data';
import { TbCircleDotted } from "react-icons/tb";


const SelectCategory=()=>{
    const {categId}=useParams();
    console.log(categId);
    const {data} = Fetch_data(`/api/products?populate=*&[filters][categories][id]=${categId}`);
    console.log(data);
    if (!data){
        return<div className='feching_data_loading'><TbCircleDotted />Loading...</div>
    }
    return(
        <>
            <div className="main-cat">
                <div className="layout-category">
                    <p>Category : {data?.data[0]?.attributes?.categories?.data[0]?.attributes?.title}</p>
                    <span><hr /></span>
                    <div className="product-list">
                        <List_prod product = {data}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SelectCategory;