import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, google, updateUserProfile } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [err, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const handelSignUpSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");
    const terms = form.get("terms")
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    console.log(email, password, name);

    // reset state
    setError("");
    setSuccess(false);

    if (!passwordValidation.test(password)) {
      toast.error(
        "password should be At least one upper case one lower case, and numbers"
      );
      return;
    }

    if(password < 6){
      toast.error('password must be at least 6 character');
      return;
    }

    if(!terms){
      toast.error('accept our terms and condition')
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result);
        setSuccess(result);
        e.target.reset();

        navigate("/");
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        toast.error(error.message);
      });
  };

  const handelGoogleSubmit = () => {
    google()
      .then((result) => {
        console.log(result);
        setSuccess(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(err.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-xl mx-auto my-10 shrink-0 shadow-2xl">
      <h1 className="text-5xl text-center pt-5 font-bold">Register now!</h1>
      <form onSubmit={handelSignUpSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            name="photo"
            type="photo"
            placeholder="photo url"
            className="input input-bordered"
            required
          />
        </div>

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
        </div>

        <div className="form-control">
          <label className="label justify-start gap-3 cursor-pointer">
            <input type="checkbox" name="terms" className="checkbox" />
            <span className="label-text">accept our terms and condition</span>
          </label>
        </div>

        <p>
          Already Have An Account? Please{" "}
          <Link className="text-red-500" to="/login">
            log in
          </Link>
        </p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register </button>
        </div>
        <div className="divider">OR</div>
        <div className="form-control mt-6">
          <button onClick={handelGoogleSubmit} className="btn btn-primary">
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
