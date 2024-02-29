"use client" 

import { useState } from "react";
import Catalog from "./catalog/Catalog";
import * as PRODUCT_LIST from './data.json';
import { Product } from "./types/Product";  
import Search from "./[...search]/page";

const products: Product[] = PRODUCT_LIST.map(item => ({
  code: item.codpro,
  name: item.nombre,
  price: item.precio,
  image: item.imagen
}));


export default function Home() {

  const [productList, setProductList] = useState<Product[]>(products);

  return (
    <>
      <Catalog products={productList} />
      <Search  />
    </>
    
  );
}
