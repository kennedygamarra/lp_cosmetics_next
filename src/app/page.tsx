import Catalog from "./catalog/Catalog";
import Header from "./components/Header";
import * as PRODUCT_LIST from './data.json';
import { Product } from "./types/Product";  

const products: Product[] = PRODUCT_LIST.map(item => ({
  code: item.codpro,
  name: item.nombre,
  price: item.precio,
  image: item.imagen
}));

export default function Home() {
  return (
    <>
      <Header/>
      <Catalog products={products} />
    </>
    
  );
}
