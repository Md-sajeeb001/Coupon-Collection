/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const MarqueeBrand = ({ data }) => {

  return (
    <div className="border my-10 bg-[#F3F3E0] py-6">
      <Marquee className="flex items-center gap-10" pauseOnHover={true}>
        {data.map((brand) => (
          <Link to={`/brand/${brand._id}`} key={brand._id}>
            <img className="h-[50px] w-36 object-contain mr-4" src={brand.brand_logo}/>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeBrand;
