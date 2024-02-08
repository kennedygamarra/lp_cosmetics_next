import { Product as ProductProps } from "../types/Product";

const Product: React.FC<ProductProps> =({name, price, image}) => {

  return (
    <li className="w-full max-w-sm bg-white rounded-lg shadow-sm ">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={image}
          alt="Producto"
        />
      </a>
      <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 border-[1px] border-black overflow-hidden text-sm font-medium text-gray-900 group hover:bg-blue-700 hover:border-blue-700 hover:text-white">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-[0.3]">
          Añadir al carrito
        </span>
      </button>
      <div className="px-5 pb-5 ">
        <a href="#">
          <p className="text-sm font-semibold tracking-tight text-gray-900">
            {name}
          </p>
        </a>
        <div className="flex items-center justify-between mt-4">
          <span className="font-medium text-gray-600">${price}</span>
        </div>
      </div>
    </li>
  );  
}

export default Product;