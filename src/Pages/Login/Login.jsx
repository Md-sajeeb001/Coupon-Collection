import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const handelSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-xl mx-auto my-10 shrink-0 shadow-2xl">
      <h1 className="text-5xl text-center pt-5 font-bold">Login now!</h1>
      <form onClick={handelSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type={showPass ? "text" : "password"}
            placeholder="password"
            className="input input-bordered"
            required
          />
          <Link
            onClick={() => setShowPass(!showPass)}
            className="absolute right-8 top-[50px] text-lg"
          >
            {showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </Link>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>

        <p>
          Dont Have An Account? Please{" "}
          <Link className="text-red-500" to="/Register">
            Register
          </Link>
        </p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
