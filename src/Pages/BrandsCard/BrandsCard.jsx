/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BrandsCard = ({ brand }) => {
  const { brand_logo, brand_name, description, rating, isSaleOn, _id } = brand;

  return (
    <div className="page-container max-w-3xl mx-auto border rounded-lg p-6 px-4 py-4">
      <div className="card-section space-y-4">
        <div className="flex items-center justify-between brand-card bg-base-100 shadow-lg p-4 rounded-lg">
          <div className="card-header flex flex-col">
            <img
              src={brand_logo}
              className="w-40 h-28 border rounded-md p-4 object-contain"
            />
            <div className="text-sm font-medium flex flex-col pt-4 space-x-1 space-y-3">
              <h3 className="sm:text-2xl text-lg font-bold">{brand_name}</h3>
              <div>
                <span className="text-yellow-500 mr-3">⭐⭐⭐⭐</span>
                <span>{rating}</span>
              </div>
              <p className="text-sm font-semibold text-gray-600">
                {description}
              </p>
            </div>
          </div>

          <div className="card-footer mt-4 flex flex-col">
            {isSaleOn && (
              <div className="flex flex-col sm:w-56 w-40">
                <span className="animate__animated animate__bounce animate__infinite text-sm font-bold text-center pb-6 text-green-500 ">
                  Sale is On!
                </span>
                <Link
                  to={`/brandDetails/${_id}`}
                  className="btn sm:px-8 bg-sky-300 hover:bg-sky-700 text-black"
                >
                  View Coupons
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;
