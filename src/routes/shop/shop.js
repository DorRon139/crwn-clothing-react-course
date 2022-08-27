import { useContext } from "react";
import { ProductsContext } from "../../contexts/product.contex";
import ProductCard from "../../component/product-card/product-card";
import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;