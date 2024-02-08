import { Product as ProductInterface} from "../types/Product";
import Product from "./Product";

// import * as products from './data.json';

interface CatalogProps {
  products: ProductInterface[];
}

export default function Catalog({products}: CatalogProps) {
  return (
    <ul className="flex flex-col gap-x-6">
      <div className="content-container p-[2px] py-12 small:py-24 ">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5 small:gap-y-36">
          {/* Generar productos */}
          {products.map((product,index) => (
            <Product key={index} code={product.code} name={product.name} price={product.price} image={product.image} />
            ))}
        </ul>
      </div>
    </ul>
  );
}
