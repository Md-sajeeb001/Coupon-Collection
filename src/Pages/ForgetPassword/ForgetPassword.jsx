import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { forgetPass } = useContext(AuthContext);

  const navigate = useNavigate();

  const handelForgetPass = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");

    forgetPass(email)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-xl mx-auto my-10 shrink-0 shadow-2xl">
      <h1 className="text-5xl text-center pt-5 font-bold">Reset Password</h1>
      <form onSubmit={handelForgetPass} className="card-body">
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

        <div className="form-control mt-6">
          <Link
            onClick={() => window.open("https://mail.google.com", "_blank")}
            className="btn bg-sky-300 hover:bg-sky-950 hover:text-white text-black"
          >
            Reset{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
