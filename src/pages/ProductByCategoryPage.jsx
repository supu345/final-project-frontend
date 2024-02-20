import React, { useEffect } from "react";
import productStore from "../store/productStore.js";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import ProductList from "../components/product/ProductList.jsx";

const ProductByCategoryPage = () => {
  const { listByCategoryRequest } = productStore();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await listByCategoryRequest(id);
    })();
  }, [id]);

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ProductByCategoryPage;
