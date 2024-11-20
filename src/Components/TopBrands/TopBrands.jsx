/* eslint-disable react/prop-types */

import TopBrandsCard from "../TopBrandsCard/TopBrandsCard";

const TopBrands = ({ data }) => {
  return (
    <div className="py-10">
      <h2 className="pb-6 text-center text-4xl font-bold underline underline-offset-4 ">
        Featured Brands
      </h2>
      <p className="pb-10 text-slate-600 max-w-2xl mx-auto text-center">
        Go Into Brands Carefree and make astounding savings at Yellow, Texmart,
        RichMan , Artisan, lereve, Arong, Ecstasy, Cats Eye and others. Get your
        clothing , footwear, and everything availed online save biggest with
        promo codes, coupons, and discount offers.
      </p>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.map((brand) => (
          <TopBrandsCard key={brand._id} brand={brand}></TopBrandsCard>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
