/* eslint-disable react/prop-types */

import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const MarqueeBrand = ({ data }) => {
  return (
    <div className="border my-10 bg-white py-6 rounded-lg">
      <Marquee
        className="flex items-center gap-10 border-t-black border-t border-b border-b-black"
        pauseOnHover={true}
      >
        {data.map((brand) => (
          <Link to={`/brand/${brand._id}`} key={brand._id}>
            <img
              className="h-[50px] w-36 object-contain mr-4 "
              src={brand.brand_logo}
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeBrand;
