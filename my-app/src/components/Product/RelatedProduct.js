import List_prod from '../Home/List_prod'
import Fetch_data from '../../context/Fetch_data'
import './RelatedProduct.css'

const RelatedProduct=({categoryId,productId})=>{
    const {data}=Fetch_data(`/api/products?populate=*&[filters][categories][id]=${categoryId}&[filters][id][$ne]=${productId}&pagination[start]=0&pagination[limit]=4`)
    console.log(data);
    return(
        <>
        <div className="rel-prod-layout">
                 <h3 className='rel-title'>You Might Also Like</h3>
                 <div className="line">
                 </div>
            <div className="rel-prod">
                <List_prod product={data}/>
            </div>
        </div>
        </>
    )
}
export default RelatedProduct;