/* eslint-disable react/prop-types */
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
const MarqueeBrand = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border my-10 bg-white py-6 rounded-lg">
      <Marquee
        className="flex items-center gap-10 border-t-black border-t border-b border-b-black"
        pauseOnHover={true}
      >
        {data.map((brand) => (
          <Link
            onClick={() => setShowModal(true)}
            to={`/brand/${brand._id}`}
            key={brand._id}
          >
            <img
              className="h-[50px] w-36 object-contain mr-4 "
              src={brand.brand_logo}
            />
          </Link>
        ))}
      </Marquee>
      {
      showModal && <Modal></Modal>
      }
    </div>
  );
};

export default MarqueeBrand;
