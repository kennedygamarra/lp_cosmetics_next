import * as PRODUCT_LIST from './data.json';
import { Product as ProductType } from "./types/Product";

export const products: ProductType[] = PRODUCT_LIST.map(item => ({
  code: item.codpro,
  name: item.nombre,
  price: aumentarPrecio(item.precio),
  image: item.imagen
}));

//Aumentar precio en 70% 
function  aumentarPrecio(precio: any) {
  const nuevoPrecio = precio * 1.7;
  // Redondear a la cifra más cercana en cienes
  return Math.round(nuevoPrecio / 100) * 100;
}