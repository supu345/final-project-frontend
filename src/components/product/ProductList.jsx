import React, { useEffect, useState } from "react";
import productStore from "../../store/productStore.js";
import { motion } from "framer-motion";
import FeaturedSkeleton from "../../skeleton/FeaturedSkeleton.jsx";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const ProductList = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState({ brandID: "", categoryID: "" });
  const {
    listProduct,
    brandListRequest,
    categoryListRequest,
    brandList,
    categoryList,
    listByFilterRequest,
    removeProductRequest,
    allProductListRequest,
  } = productStore();

  console.log(listProduct);

  const inputOnchange = (key, value) => {
    setFilter((data) => ({
      ...data,
      [key]: value,
    }));
  };

  const handleAdd = () => {
    navigate("/add-product");
  };

  const handleDelete = async (id) => {
    let proceed = window.confirm("Are you sure?");
    if (proceed) {
      let res = await removeProductRequest(id);
      if (res) {
        // listProduct.filter((item) => item["_id"] !== id);
        toast.success("Removed successfully");
        await allProductListRequest();
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  useEffect(() => {
    (async () => {
      brandList === null ? await brandListRequest() : null;
      categoryList === null ? await categoryListRequest() : null;
      let isEveryPropertyEmpty = Object.values(filter).every(
        (value) => value === ""
      );
      !isEveryPropertyEmpty ? await listByFilterRequest(filter) : null;
    })();
  }, [filter]);

  return (
    <section
      className={
        "flex justify-center items-center flex-col gap-14 mt-28 lg:px-10 lg:pt-20 md:p-10 p-5"
      }
    >
      <div
        className={
          "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full "
        }
      >
        <select
          value={filter.brandID}
          className="select select-primary  w-full max-w-xs"
          onChange={(e) => inputOnchange("brandID", e.target.value)}
        >
          <option disabled defaultValue={"Select Brand"}>
            {" "}
            Select Brand
          </option>
          {brandList !== null ? (
            brandList.map((item, i) => {
              return (
                <option value={item["_id"]} key={i}>
                  {item["brandName"]}
                </option>
              );
            })
          ) : (
            <option>No brand</option>
          )}
        </select>

        <select
          value={filter.categoryID}
          className="select select-primary  w-full max-w-xs"
          onChange={(e) => inputOnchange("categoryID", e.target.value)}
        >
          <option disabled defaultValue={"Select Category"}>
            Select Category
          </option>
          {categoryList !== null ? (
            categoryList.map((item, i) => {
              return (
                <option key={i} value={item["_id"]}>
                  {item["categoryName"]}
                </option>
              );
            })
          ) : (
            <option>No brand</option>
          )}
        </select>

        <motion.button
          className={
            "btn border border-primary bg-base-100 hover:border-primary shadow-2xl max-w-xs"
          }
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={handleAdd}
        >
          Add a new Product
        </motion.button>
      </div>

      <div className={"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"}>
        {listProduct === null ? (
          <FeaturedSkeleton />
        ) : (
          listProduct.map((item, i) => {
            return (
              <motion.div
                key={i}
                className="card shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <figure className="px-3 pt-3">
                  <img
                    src={item["image"]}
                    alt="Shoes"
                    className="rounded-xl max-w-sm max-h-[200px]"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item["title"]} product</h2>
                  <p className={"text-gray-600"}>{item["shortDes"]} desc</p>
                </div>
                <div
                  className={
                    "flex items-center justify-between gap-10 px-8 pb-3"
                  }
                >
                  <Link
                    to={`/update-product/${item["_id"]}`}
                    className={
                      "btn border border-primary w-[50%] bg-base-100 " +
                      "hover:bg-gray-300 hover:border-primary"
                    }
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item["_id"])}
                    className={"btn btn-error text-xl"}
                  >
                    {" "}
                    <FaTrash />{" "}
                  </button>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default ProductList;
