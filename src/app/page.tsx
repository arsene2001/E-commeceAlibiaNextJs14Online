//"use server";
import { Suspense } from "react";
import Skeleton from "./components/Skeleton";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";

const HomePage = async () => {
  //find All Product
  // const WixClient = useWixClient();
  // useEffect(() => {
  //   const getProducts = async () => {
  //
  //     console.log(res);
  //   };
  //   getProducts();
  // }, [WixClient]);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Produit vedette</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={10}
          />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl mb-10">Categories</h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
