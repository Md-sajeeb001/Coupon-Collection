import logo from "../../assets/images-removebg-preview.png"
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
    <li><NavLink>Home</NavLink></li>
    <li><NavLink>Brands </NavLink></li>
    <li><NavLink>My-Profile</NavLink></li>
    </>
  return (
    <div className="navbar  bg-white border-b py-6 px-14">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm gap-10 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
       <div>
        <img className="w-16 h-16 " src={logo} alt="" />
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white text-sm font-semibold px-1 gap-10">
         {links}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <Link className="btn px-8 bg-[#EB6440] hover:bg-[#497174] text-white border-[#EB6440] border-2-[[#EB6440]]  hover:text-black  hover:border-[#EB6440] text-lg font-semibold ">Login</Link>
        <Link className="btn px-8 bg-[#EB6440] hover:bg-[#497174] text-white border-[#EB6440] border-2-[[#EB6440]]  hover:text-black  hover:border-[#EB6440] text-lg font-semibold ">Register</Link>
      </div>
    </div>
  );
};

export default Header;
