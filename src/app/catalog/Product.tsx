import { useState } from "react";
import { Product as ProductProps } from "../types/Product";
import Image from "next/image";

const Product: React.FC<ProductProps> =({name, price, image, code}) => {
  
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    setLoading(false);
  }
  
  const SkeletonLoader = () => {
    return (
      <>
        <div role="status" className="max-w-sm p-4 animate-pulse md:p-6">
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded">
                <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                </svg>
            </div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2.5 bg-gray-200 rounded-full w-sm mb-4"></div>
        </div>
      </>
    );
  };

  return (
    <>
    {loading && <SkeletonLoader/>}
    <li className={loading ? 'hidden' : ''+ " w-full max-w-sm bg-white rounded-lg shadow-sm"}>
      <a href={`detail/product?id=${code}`}>
        <Image
          src={image}
          alt="Producto"
          width={300}
          height={300}
          className="p-8 rounded-t-lg"
          onLoad={handleImageLoaded}
          priority={true}
          />
      </a>
      {/* <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 border-[1px] border-black overflow-hidden text-sm font-medium text-gray-900 group hover:bg-blue-700 hover:border-blue-700 hover:text-white">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-[0.3]">
          Añadir al carrito
        </span>
      </button> */}
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
    </>
  );  
}

export default Product;