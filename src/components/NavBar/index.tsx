import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">First Flow</NavLink>
        </li>
        <li>
          <NavLink to="/flow-2">Flow 2</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};
