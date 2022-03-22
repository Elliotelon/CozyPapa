import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        상품을 찾을 수 없습니다...
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={products} />
  }

  return <GridView products={products}>상품 목록</GridView>;
};

export default ProductList;
