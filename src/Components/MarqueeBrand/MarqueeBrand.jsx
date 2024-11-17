/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const MarqueeBrand = ({ data }) => {
  console.log(data);

  return (
    <div className="border my-10 bg-slate-400 py-6">
      <Marquee pauseOnHover={true}>
        {data.map((brand) => (
          <Link key={brand._id}>
            <img className="h-[50px] w-full object-contain mr-14" src={brand.brand_logo}/>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeBrand;
