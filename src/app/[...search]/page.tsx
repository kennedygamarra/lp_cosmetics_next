"use client";

import { useState } from "react";
import { Product as ProductType } from "../types/Product";
import Product from "../catalog/Product";
import { useSearchParams } from "next/navigation";
import { products } from "../dataUtils";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const productsSearch: any = products.filter((product) => {
    return product.name
      .toLowerCase()
      .includes(query ? query.toLowerCase() : "");
  });

  const [productList, setProductList] = useState<ProductType[]>(productsSearch);

  return (
    <>
      {query && (
        <>
          <h1 className="text-3xl font-light text-center my-8 text-gray-700">
            Resultados de la búsqueda &quot;
            <span className="font-medium">{query}</span>&quot;
          </h1>
          <ul className="flex flex-col gap-x-6">
            <div className="content-container px-2 py-12 small:py-24">
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5 small:gap-y-36 md:mx-10">
                {/* Generar productos */}
                {productList.map((product, index) => (
                  <Product
                    key={index}
                    code={product.code}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                  />
                ))}
              </ul>
            </div>
          </ul>
        </>
      )}
    </>
  );
}
