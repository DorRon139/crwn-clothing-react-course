import { useContext, useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";
import ProductCard from '../../component/product-card/product-card'
import { CategoriesContext } from '../../contexts/categories.contex'

import './category.scss'

const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState([])

    console.log(products)

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h2 className='category-title'>{category}</h2>
            <div className='category-container'>
                {products && 
                    products.map(product => 
                        <ProductCard key={product.id} product={product} />)
                }
            </div>
        </Fragment>
    )
}

export default Category