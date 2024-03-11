"use client" 

import { useState, Suspense } from "react";
import Catalog from "./catalog/Catalog";
import { Product } from "./types/Product";  
import Search from "./[...search]/page";
import { products } from "./types/dataUtils";

export default function Home() {

  const [productList, setProductList] = useState<Product[]>(products);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Catalog products={productList} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Search  />
      </Suspense>
    </>
    
  );
}
