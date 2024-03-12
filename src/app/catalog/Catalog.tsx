import { Product as ProductInterface} from "../types/Product";
import Product from "./Product";

interface CatalogProps {
  products: ProductInterface[];
}

export default function Catalog({products}: CatalogProps) {
  return (
    <ul className="flex flex-col gap-x-6">
      <div className="content-container px-2 small:py-24">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 small:gap-y-36 md:mx-10">
          {/* Generar productos */}
          {products.map((product,index) => (
            <Product key={index} code={product.code} name={product.name} price={product.price} image={product.image} />
            ))}
        </ul>
      </div>
    </ul>
  );
}
