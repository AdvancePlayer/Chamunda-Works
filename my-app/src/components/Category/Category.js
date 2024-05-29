import './Category.css'
import { useNavigate } from 'react-router-dom';

const Category = ({categ}) => {
        const navigate=useNavigate();
    return (
        <div className="category-main-content">
            <div className="category-layout">
                {categ?.data?.map((item) => (
                    <div key={item.id} className="img-black" onClick={()=>navigate(`/category/${item.id}`)}>
                        <img src={process.env.REACT_APP_LINK + item.attributes.img.data.attributes.url} alt="Category-pic" />
                        <p>{item.attributes.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category;
