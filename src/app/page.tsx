"use client" 

import { useState } from "react";
import Catalog from "./catalog/Catalog";
import { Product } from "./types/Product";  
import Search from "./[...search]/page";
import { products } from "./types/dataUtils";

export default function Home() {

  const [productList, setProductList] = useState<Product[]>(products);

  return (
    <>
        <Catalog products={productList} />
        <Search  />
    </>
    
  );
}
