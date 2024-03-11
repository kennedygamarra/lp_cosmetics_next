import * as PRODUCT_LIST from './data.json';
import { Product as ProductType } from "./Product";

console.log("PRODUCT_LIST",PRODUCT_LIST);

export const products: ProductType[] = PRODUCT_LIST.map(item => ({
  code: item.codpro,
  name: item.nombre,
  price: increasePrice(item.precio),
  image: item.imagen
}));

//Up the price of the products
 function  increasePrice(precio: any) {
  const nuevoPrecio = precio * 1.7;
  // Round to the nearest 100
  return Math.round(nuevoPrecio / 100) * 100;
}