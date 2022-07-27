import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Category";
import items from "./data";
import "./Menu.css";

const allcategories = ["all", ...new Set(items.map((item) => item.category))];
const MenuMain = () => {
  console.log(items);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCatogries] = useState(allcategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default MenuMain;
