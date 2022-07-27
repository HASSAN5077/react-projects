import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="menu-section">
      {items.map((menu) => {
        const { id, title, img, desc, price } = menu;
        console.log(id);
        return (
          <div className="menu" key={id}>
            <img src={img} alt="" />
            <div className="info">
              <header>
                <h4>{title}</h4>
                <span>${price}</span>
              </header>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
