import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import TopBrands from "../../Components/TopBrands/TopBrands";
import MarqueeBrand from "../../Components/MarqueeBrand/MarqueeBrand";

const Home = () => {
  const data = useLoaderData();

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
