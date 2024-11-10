import CategoryCard from "./CategoryCard";
import { categoryInfos } from "./categoryFullInfos";
import classes from "./Category.module.css";

const Category = () => {
  return (
    <div className={classes.category__container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </div>
  );
};

export default Category;
