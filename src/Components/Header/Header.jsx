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
    <div className="navbar  bg-white border-b py-6 lg:px-14">
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
            <NavLink className="text-black font-semibold" to="/myprofile">
              My-Profile
            </NavLink>
          </ul>
        </div>
        <Link to="/">
          <img className="w-24 h-10 " src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white text-sm font-semibold px-1 gap-10">
          <NavLink className="text-black font-semibold" to="/">
            Home
          </NavLink>
          <NavLink className="text-black font-semibold" to="/brands">
            Brands{" "}
          </NavLink>
          <NavLink className="text-black font-semibold" to="/myprofile">
            My-Profile
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end gap-4 mr-6">
        {user ? (
          <Link className="btn bg-sky-300 hover:bg-sky-950 hover:text-white text-black" onClick={handelLogOut}>Logout</Link>
        ) : (
          <div className="sm:space-x-10 space-x-4">
            <Link to="/login" className="btn lg:px-8 bg-sky-300 hover:bg-sky-950 hover:text-white text-black">
              Login
            </Link>
            <Link to="/Register" className="btn lg:px-8 bg-white hover:bg-sky-950 hover:text-white">
              Register
            </Link>
          </div>
        )}
      </div>

      <div>
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/myprofile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link onClick={handelLogOut}>Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
