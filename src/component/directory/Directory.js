import CategoryItem from "../category-item/category-item";
import "./directory.styles.scss";

const Categories = ({ categoriesData }) => {
  return (
    <div className="directory-container">
      {categoriesData.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
