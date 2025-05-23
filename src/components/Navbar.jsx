import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const cart= useSelector((store)=> store.cart)
  return (
    <div className="navbar fixed top-0 bg-base-100 shadow-sm z-10">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-[30px] sm:text-3xl p-0 font-bebas">Shopzy</NavLink>
      </div>
      <div className="navLinks">
        <ul className="menu men px-1 text-[12px] sm:text-[16px] font-semibold cursor-pointer menu-horizontal">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-indigo-600" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${isActive ? "text-indigo-600" : ""}`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `${isActive ? "text-indigo-600" : ""}`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <NavLink
            to="/cart"
            className={({ isActive }) => `btn btn-ghost btn-circle ${isActive ? "text-indigo-600" : ""}`}
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-xs font-bold indicator-item bg-indigo-200">{cart.length} </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
