import ProductCard from "../product-card/product-card";

import { CategoryPreviewContainer, TitleLink, Preview } from'./category-preview.styles.js'

const CategoryPreview = ({title, productsArray}) => {
    return (
    <CategoryPreviewContainer>
        <h2>
            <TitleLink to={title}>
                <TitleLink as='span'>{title.toUpperCase()}</TitleLink>
            </TitleLink>
        </h2>
        <Preview>
            {
                productsArray
                .filter((_, index) => index < 4 )
                .map((product) => 
                    <ProductCard key={product.id} product={product} />)
            }
        </Preview>
    </CategoryPreviewContainer>
    )
}

export default CategoryPreview;