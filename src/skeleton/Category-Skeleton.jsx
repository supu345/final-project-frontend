import React from "react";

const CategorySkeleton = () => {
  return (
    <section
      className={
        "lg:px-10 lg:pt-20 md:p-10 p-6 flex flex-col items-center justify-center gap-10"
      }
    >
      <div className={"text-center"}>
        <h1 className={"lg:text-3xl md:text-2xl text-xl font-bold uppercase"}>
          Top Categories
        </h1>
        <p className={"mt-2 lg:text-md md:text-sm text-xs text-gray-600"}>
          Explore a World of Choices Across Our Most Popular Shopping Categories{" "}
        </p>
      </div>
      <div
        className={
          "grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-10 w-full "
        }
      >
        {Array.from({ length: 6 }).map((i) => {
          return (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="skeleton h-32  w-full"></div>
              <div className="skeleton h-4 w-20"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySkeleton;
