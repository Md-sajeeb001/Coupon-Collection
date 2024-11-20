import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="card bg-base-100 w-full max-w-xl mx-auto my-10 shrink-0 shadow-2xl">
      <h1 className="text-5xl text-center pt-5 font-bold">Login now!</h1>
      <form className="card-body">
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
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
