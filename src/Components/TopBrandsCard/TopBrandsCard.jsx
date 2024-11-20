/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const TopBrandsCard = ({ brand }) => {
  const { brand_logo, brand_name } = brand;
  return (
    <Link className="card rounded-none bg-[#608BC1] space-y-2 text-white border p-3 ">
      <figure className="w-40 h-40 mx-auto object-cover">
        <img src={brand_logo} alt="Shoes" />
      </figure>
      <div className="border-b py-2"></div>
      <div className="pt-3 flex flex-col">
        <h2 className="card-title text-lg font-semibold text-black">{brand_name}</h2>
        <p className="text-sm text-[#F3F3E0">{brand.coupons[0].description
        }</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs ">ED: {brand.coupons[0].expiry_date}</p>
        <p className="text-xs ">Type: {brand.coupons[0].coupon_type}</p>
      </div>
    </Link>
  );
};

export default TopBrandsCard;
