import { useContext, useEffect, useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import CopyToClipboard from "react-copy-to-clipboard";

const BrandDetails = () => {
  const { user } = useContext(AuthContext);

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

  const {
    rating,
    brand_name,
    brand_logo,
    shop_Link,
  } = brand;

  console.log(brand);
  return (
    <div className="page-container">
      {/* Top Section */}
      <div className=" flex  items-center bg-white w-full px-10 py-8">
        <img
          src={brand_logo}
          alt={`${brand_name} Logo`}
          className="w-[300px] h-28 object-fill mr-20"
        />
        <h1 className="text-3xl font-bold mr-8">{brand_name}</h1>
        <p className="text-yellow-500">⭐⭐⭐⭐ {rating}</p>
      </div>

      {/* Coupons Section */}
      <div className="coupons-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12">
        {data.map((coupon, index) => (
          <div
            key={index}
            className="coupon-card border p-4 rounded-lg shadow-lg"
          >
            <div>
              <h2 className="text-xl font-semibold">{coupon["coupon-code"]}</h2>
              <p className="text-sm text-gray-600">
                Condition: {coupon.coupons[0].condition}
              </p>
              <h1 className="text-5xl font-bold p-9">{coupon.coupons[0].percentage_off}</h1>
            </div>
            <div className="flex justify-between items-center mt-4">
              {/* Copy Code Button */}
              <CopyToClipboard
                text={coupon["coupon-code"]}
                // onCopy={() => handleCopy(coupon["coupon-code"])}
              >
                <button className="btn btn-primary">Copy Code</button>
              </CopyToClipboard>

              {/* Use Now Button */}
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
