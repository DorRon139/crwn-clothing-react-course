import ProductCard from "../../component/product-card/product-card";
import { Link } from 'react-router-dom'

import './category-preview.scss'

const CategoryPreview = ({title, productsArray}) => {
    return (
    <div className='category-preview-container'>
        <h2>
            <Link classNAme='title' to={title}>
                <span className='title'>{title.toUpperCase()}</span>
            </Link>
        </h2>
        <div className='preview'>
            {
                productsArray
                .filter((_, index) => index < 4 )
                .map((product) => 
                    <ProductCard key={product.id} product={product} />)
            }
        </div>
    </div>
    )
}

export default CategoryPreview;