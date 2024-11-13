/* eslint-disable react/prop-types */
import React from "react";
import classes from "./Category.module.css";
// import { Link } from "react-router-dom";

function CategoryCard  ({data}) {  // data is consider as props
  console.log(data);
  return (
    <div className={classes.category}>
      {/* <a href change to link to */}
      <a href={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt="" />
        <p>Shop now</p>

      </a>
    </div>
  )
}

export default CategoryCard;
// Render to category components
