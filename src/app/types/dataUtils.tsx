import * as PRODUCT_LIST from './data.json';
import { Product as ProductType } from "./Product";

export const products: ProductType[] = PRODUCT_LIST.map(item => ({
  code: item.codpro,
  name: item.nombre,
  price: increasePrice(item.precio),
  image: item.imagen
}));

//Up the price of the products
 function  increasePrice(precio: any) {
  const nuevoPrecio = precio * 1.7;
  // Redondear a la cifra más cercana en cienes
  return Math.round(nuevoPrecio / 100) * 100;
}