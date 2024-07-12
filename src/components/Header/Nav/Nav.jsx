import React from "react";
import { Link } from "react-router-dom";

// import burgerIcon from "../../../assets/burger-icon.png";

const Nav = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">NewPokemon</Link>
        </li>
        {/* <li>
          <Link to="/pokemon:id">Pokemon</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;