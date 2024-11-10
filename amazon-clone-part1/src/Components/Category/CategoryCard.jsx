/* eslint-disable react/prop-types */
import classes from "./Category.module.css";
// import { Link } from "react-router-dom";

const CategoryCard = ({data}) => {
  console.log(data);
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>

      </a>
    </div>
  );
};

export default CategoryCard;
