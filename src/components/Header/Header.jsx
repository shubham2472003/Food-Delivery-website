import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          Crave it? <br />
          Get it delivered
        </h2>
        <p>
          Choose from our diverse menu and find something for every craving!
          From delicious pizzas and burgers to healthy salads and desserts,
          there’s something for everyone. With fast delivery, fresh ingredients,
          and mouth-watering flavors, your next meal is just a click away.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
