import React from "react";

const Category = ({ filterItems, categories }) => {
  return (
    <div className="btn-cont">
      {categories.map((category, index) => {
        return (
          <button className="filter-btn" onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
