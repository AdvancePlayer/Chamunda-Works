import { useEffect,useContext } from 'react';
import Category from './Category'
import { Context } from '../../context/context.js';
import {fetchDataFromApi} from '../../context/API.js';

const AllCategory=()=>{
    const {category,setCategory}=useContext(Context);

    useEffect(()=>{
        getCategory();
    },[]);

    const getCategory=()=>{
        fetchDataFromApi("/api/categories?populate=*").then((resp)=> {console.log(resp);setCategory(resp);});
    };
    return(
        <>
        <h2 style={{textAlign:'center',margin:'3% auto',fontSize:'2em'}}>Shop by category</h2>
        <div className="all-category">
            <Category categ={category} />
        </div>
        </>
    )
}
export default AllCategory;
