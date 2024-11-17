/* eslint-disable react/prop-types */

import Brand from "../Brand/Brand";

const TopBrands = ({ data }) => {
  return (
    <div className="py-10">
      <h2 className="pb-14 text-center text-4xl font-bold underline underline-offset-4 ">Featured Brands</h2>

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.map((brand) => (
          <Brand key={brand._id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
