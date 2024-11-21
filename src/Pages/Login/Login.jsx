import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import googleImg from "../../assets/google.png";

const Login = () => {
  const { signUpUser, google } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [success, setSuccess] = useState(false);
  const [err, setError] = useState("");
  const navigate = useNavigate();

  const handelSignUp = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (password < 6) {
      toast.error("password must be at least 6 character");
    }

    // reset state
    setSuccess(false);
    setError("");

    signUpUser(email, password)
      .then((result) => {
        setSuccess(result);

          navigate("/");

      })
      .catch((error) => {
        setError(error.message);
        if (err) {
          return toast.error("register now");
        }
      });
  };

  const handelGoogleSubmit = () => {
    google()
      .then((result) => {
        setSuccess(result);
        navigate("/");
        if (success) {
          toast.success("user log out successful");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-xl mx-auto my-10 shrink-0 shadow-2xl">
      <h1 className="text-5xl text-center pt-5 font-bold">Login now!</h1>
      <form onSubmit={handelSignUp} className="card-body">
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
            <Link
              to="/forgetPassword"
              href="#"
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-sky-300 hover:bg-sky-950 hover:text-white text-black">
            Log in{" "}
          </button>
        </div>
        <div className="divider">OR</div>
        <div className="form-control mt-6">
          <button
            onClick={handelGoogleSubmit}
            className="btn bg-white text-black hover:bg-white border-blue-300"
          >
            <img className="w-10 h-10" src={googleImg} />
            Login With Google{" "}
          </button>
        </div>
        <p className="text-center py-2">
          Dont Have An Account? Please{" "}
          <Link className="text-red-500" to="/Register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
