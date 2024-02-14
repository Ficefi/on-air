import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./HeaderNavigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.categoryElement, isActive && css.active);
};

export const HeaderNavigation = () => {
  return (
    <div className={css.navigation}>
      <NavLink to="/" className={css.header_logo}>
        <img src="/images/onair-logo.svg" alt="logo_onair" />
      </NavLink>
      <ul className={css.categoriesList}>
        <li>
          <NavLink className={buildLinkClass} to="/movies">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink className={css.categoryElement} to="/serials">
            Serials
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
