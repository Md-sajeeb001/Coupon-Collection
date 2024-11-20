import { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handelLogOut = () => {
    logOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <NavLink className="text-black font-semibold" to="/">
              Home
            </NavLink>
            <NavLink className="text-black font-semibold" to="/brands">
              Brands{" "}
            </NavLink>
            <NavLink className="text-black font-semibold" to="">
              My-Profile
            </NavLink>
          </ul>
        </div>
        <div>
          <img className="w-24 h-10 " src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white text-sm font-semibold px-1 gap-10">
          <NavLink className="text-black font-semibold" to="/">
            Home
          </NavLink>
          <NavLink className="text-black font-semibold" to="/brands">
            Brands{" "}
          </NavLink>
          <NavLink className="text-black font-semibold" to="">
            My-Profile
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-4 mr-6">
        {user ? (
          <div>
            <Link onClick={handelLogOut} className="btn">
              Log out
            </Link>
          </div>
        ) : (
          <div className="space-x-10">
            <Link
              to="/login"
              className="btn px-8 bg-[#EB6440] hover:bg-[#497174] text-white border-[#EB6440] border-2-[[#EB6440]]  hover:text-black  hover:border-[#EB6440] text-lg font-semibold "
            >
              Login
            </Link>
            <Link
              to="/Register"
              className="btn px-8 bg-[#EB6440] hover:bg-[#497174] text-white border-[#EB6440] border-2-[[#EB6440]]  hover:text-black  hover:border-[#EB6440] text-lg font-semibold "
            >
              Register
            </Link>
          </div>
        )}
      </div>
      <div>
        {user && user?.email ? (
          <div>
            <img className="w-12 h-12 rounded-full" src={user.photoURL} />
            <p>{user.displayName}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
