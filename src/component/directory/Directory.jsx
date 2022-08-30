import CategoryItem from "../directory-item/directory-item";
import { DirectoryContainer } from "./directory.styles.js";

const Categories = ({ categoriesData }) => {
  return (
    <DirectoryContainer>
      {categoriesData.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Categories;
