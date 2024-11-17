import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import TopBrands from "../../Components/TopBrands/TopBrands";
import MarqueeBrand from "../../Components/MarqueeBrand/MarqueeBrand";
// import { useEffect, useState } from "react";

const Home = () => {
  const data = useLoaderData();
//   console.log(data)
//   const [brand, setBrand] = useState(null);

//   useEffect(() => {
//     const brand = data.map((brand) => console.log(brand));
//     setBrand(brand);
//   }, [data]);
//   console.log(brand);

  return (
    <div className="">
      <Banner></Banner>
      <div>
        <TopBrands data={data}></TopBrands>
      </div>
      <div>
        <MarqueeBrand data={data}></MarqueeBrand>
      </div>
    </div>
  );
};

export default Home;
