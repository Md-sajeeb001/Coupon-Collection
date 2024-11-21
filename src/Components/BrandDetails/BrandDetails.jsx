import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
  const [brand, setBrand] = useState([]);
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    data.map((brand) => {
      if (brand._id === id) {
        return setBrand(brand);
      }
    });
  }, [data, id]);

  const { rating, brand_name, brand_logo, shop_Link } = brand;
  console.log(brand);

  return (
    <div className="page-container">
      <div>
        <div className=" flex items-center bg-white w-full px-10 py-8">
          <img
            src={brand_logo}
            alt={`${brand_name} Logo`}
            className="w-[300px] h-28 object-fill mr-20"
          />
          <h1 className="text-3xl font-bold mr-8">{brand_name}</h1>
          <p className="text-black bg-yellow-400 px-3 py-2 rounded-full">
            ⭐ {rating}
          </p>
        </div>
        {/* <button>{coupons[0]?.coupon_code}</button> */}
      </div>

      <div className="coupons-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12">
        {data.map((coupon) => (
          <div
            key={coupon._id}
            className="coupon-card border p-4 rounded-lg shadow-lg bg-white"
          >
            <div className="space-y-3">
              <img
                className="w-14 h-14 rounded-full object-contain"
                src={coupon.brand_logo}
                alt=""
              />
              <h2 className="text-xl font-semibold">{coupon["coupon-code"]}</h2>
              <p className="text-lg font-bold text-gray-600">
                Condition: {coupon.coupons[0].condition}
              </p>
              <p>Expiry Date : {coupon.coupons[0].expiry_date}</p>
              <h1 className="text-5xl font-bold p-9">
                $ {coupon.coupons[0].percentage_off} off
              </h1>
            </div>
            <div className="flex justify-between items-center mt-4">
              <Link to="/modal" className="btn  btn-primary">Show Coupon Code</Link>

              <button
                className="btn btn-secondary"
                onClick={() => window.open(shop_Link, "_blank")}
              >
                Use Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
