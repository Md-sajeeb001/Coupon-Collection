/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BrandsCard = ({ brand }) => {
  const { brand_logo, brand_name, description, rating, isSaleOn, _id } = brand;
  return (
    // <div
    //   className="card card-side gap-14
    // bg-base-100 shadow-xl  p-4"
    // >
    //   <div>
    //     <figure className="border border-red-500 w-[400px] h-[200px] bg-slate-500">
    //       <img src={brand_logo} className=" object-contain" />
    //     </figure>
    //     <div className="space-y-2 pt-2">
    //       <h2>{brand_name}</h2>
    //       <div>
    //         <span className="text-sm pr-3">{rating}</span>
    //         <div className="rating rating-sm">
    //           <input
    //             type="radio"
    //             name="rating-6"
    //             className="mask mask-star-2 bg-orange-400"
    //           />
    //           <input
    //             type="radio"
    //             name="rating-6"
    //             className="mask mask-star-2 bg-orange-400"
    //             defaultChecked
    //           />
    //           <input
    //             type="radio"
    //             name="rating-6"
    //             className="mask mask-star-2 bg-orange-400"
    //           />
    //           <input
    //             type="radio"
    //             name="rating-6"
    //             className="mask mask-star-2 bg-orange-400"
    //           />
    //           <input
    //             type="radio"
    //             name="rating-6"
    //             className="mask mask-star-2 bg-orange-400"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="text-left w-full  space-y-4 ">
    //     <h2 className="card-title">{brand_name}</h2>
    //     <p>{description}</p>
    //     <p>{brand.coupons[0].description}</p>
    //   </div>
    //   <div className="card-actions justify-end ">
    //     <Link to={`/brandDetails/${_id}`} className="btn btn-primary">
    //       View Coupons
    //     </Link>
    //     <div className="animate__animated animate__bounce animate__infinite">
    //       {isSaleOn && <span>sale is on</span>}
    //     </div>
    //   </div>
    // </div>


      <div className="page-container max-w-3xl mx-auto border rounded-lg p-6 px-4 py-4">
        <div className="card-section space-y-4">
          <div className="brand-card bg-base-100 shadow-lg p-4 rounded-lg">
            {/* Card Header */}
            <div className="card-header flex items-center space-x-4">
              <img
                src={brand_logo}
                className="w-32 h-16 rounded-full object-contain"
              />
              <div className="text-sm font-medium flex items-center space-x-1">
                <span className="text-yellow-500">⭐⭐⭐⭐</span>
                <span>{rating}</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="card-body mt-4">
              <h3 className="text-lg font-semibold">{brand_name}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>

            {/* Card Footer */}
            <div className="card-footer mt-4 flex justify-between items-center">
              {isSaleOn && (
                <span className="bouncing-text text-sm font-bold text-red-500 animate-bounce">
                  Sale is On!
                </span>
              )}
              <Link to={`/brandDetails/${_id}`} className="btn btn-primary">
                View Coupons
              </Link>
            </div>
          </div>
        </div>
      </div>

  );
};

export default BrandsCard;
