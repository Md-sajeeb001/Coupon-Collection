/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brand_logo, brand_name, description, rating } = brand;
  return (
    <Link className="card rounded-none bg-[#31363F] text-white border p-3 ">
      <figure className="w-full h-40 object-cover">
        <img src={brand_logo} alt="Shoes" />
      </figure>
      <div className="border-b py-2"></div>
      <div className="pt-3 space-y-2 flex flex-col">
        <h2 className="card-title">{brand_name}</h2>
        <p>{description}</p>
        <div className="flex items-center gap-2 flex-grow">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span>{rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
