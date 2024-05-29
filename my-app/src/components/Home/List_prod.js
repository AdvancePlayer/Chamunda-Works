import Product from "../Product";

const List_prod=({product})=>{
    return(
        
        <div style={{display:'flex',flexWrap:'wrap',gap:"10px",justifyContent:'flex-start',margin:"2% 4px"}}>
                {product?.data?.map((item)=>(
                    <Product key={item.id} id={item.id} data={item.attributes}/>
                ))}
            </div>
    )
}
export default List_prod;