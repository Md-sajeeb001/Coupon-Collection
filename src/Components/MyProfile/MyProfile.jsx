import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="card bg-base-100 w-96 mx-auto shadow-xl my-12">
      <figure className="px-10 pt-10">
        <img src={user.photoURL} alt="USER" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{user.displayName}</h2>
        <p>{user.email}</p>
        <div className="card-actions">
          <Link
            to="/update"
            className="btn bg-sky-300 hover:bg-sky-950 hover:text-white text-black"
          >
            update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
