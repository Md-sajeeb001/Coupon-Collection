import { useLoaderData, useParams } from "react-router-dom";

const BrandRoute = () => {
  const  params  = useParams();
  const data = useLoaderData();

  console.log(params, data);


  return (
    <div>
      <h2>Brand Route Section</h2>
    </div>
  );
};

export default BrandRoute;
