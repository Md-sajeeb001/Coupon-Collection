import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [brand, setBrand] = useState({});

  useEffect(() => {
    data.map((data) => {
      if (data._id === id) {
      return  setBrand(data);
      }
    });
  }, [id, data]);

  const { brand_logo } = brand;
  console.log(brand)

  return (
    <div className="max-w-2xl mx-auto border border-red-500 text-center">
      <div className="flex justify-center gap-10 py-8 bg-slate-200 ">
        <img className="w-[100px]" src={brand_logo}/>
        {/* <h2 className="text-lg font-semibold">{brand.coupons[0].description}</h2> */}
      </div>
      
        {/* <p>{brand.coupons[0].coupon_code}</p> */}

    </div>
  );
};

export default BrandDetails;
