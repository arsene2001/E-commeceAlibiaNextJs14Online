import React from "react";
import CategoryList from "../components/CategoryList";
import Skeleton from "../components/Skeleton";
import { Suspense } from "react";

const produits = () => {
  return (
    <div className="">
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>
    </div>
  );
};

export default produits;
