import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/home/Slider";
import productStore from "../store/productStore";
import BrandList from "../components/home/BrandList";
import CategoryList from "../components/home/CategoryList.jsx";
import FeaturedProduct from "../components/home/FeaturedProduct.jsx";

const HomePage = () => {
  const {
    sliderListRequest,
    brandListRequest,
    categoryListRequest,
    productListRequest,
  } = productStore();

  useEffect(() => {
    (async () => {
      await sliderListRequest();
      await brandListRequest();
      await categoryListRequest();
      await productListRequest();
    })();
  }, []);
  return (
    <Layout>
      <Slider />
      <BrandList />
      <CategoryList />
      <FeaturedProduct />
    </Layout>
  );
};

export default HomePage;
