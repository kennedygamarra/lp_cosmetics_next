"use client"
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { products } from "../../dataUtils";

export default function Detail() {
  const searchParams = useSearchParams()
  const query = searchParams.get('id');  

  const productFound : any = products.find((product) => {
    return product.code === query;
  });

  const handleBack = () => {
    window.history.back();
  }
 
  return (
    <>
      <p className="pl-4 text-xs md:ml-20 font-light text-gray-400"><button  className="hover:text-gray-900" onClick={handleBack}>{'Inicio'}</button>{' > '+productFound.name}</p>
      <div className="flex h-fit m-4 flex-col items-center md:m-20 md:flex-row">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={productFound.image}
            alt={productFound.name}
            width={500}
            height={500}
          />
        </div>
        <div className="md:w-1/2 pt-20 gap-y-4 flex flex-col"> 
          <h1 className="font-semibold text-xl">{productFound.name}</h1>
          <p className="font-medium text-2xl ml-2">${productFound.price}</p>
          {/* <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 border-[1px] overflow-hidden text-sm font-medium bg-blue-700 border-blue-700 text-white max-w-2xl">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-[0.3]">
              Añadir al carrito
            </span>
          </button> */}
        </div>
      </div>

    </>
    
  );
}
