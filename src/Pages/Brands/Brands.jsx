import { useLoaderData } from "react-router-dom";
import BrandsCard from "../BrandsCard/BrandsCard";

const Brands = () => {
  const data = useLoaderData();
  return (
    <div>
      <h2 className="text-4xl text-center font-bold py-10 underline">Top Brands</h2>
     <div className=" space-y-6 py-8">
     {data.map((brand) => (
        <BrandsCard key={brand._id} brand={brand}></BrandsCard>
      ))}
     </div>
    </div>
  );
};

export default Brands;
