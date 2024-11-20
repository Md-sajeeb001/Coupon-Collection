import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const UpDateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);

  const handelUpDate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");

    updateUserProfile({ displayName: name, photoURL: photo })
      .than((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-xl mx-auto my-10 shrink-0 shadow-2xl">
      <h1 className="text-3xl text-center pt-5 font-bold">Update Profile!</h1>
      <form className="card-body">
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
        <div className="form-control ">
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
        <Link onClick={handelUpDate} className="btn">Update Profile</Link>
      </form>
    </div>
  );
};

export default UpDateProfile;
