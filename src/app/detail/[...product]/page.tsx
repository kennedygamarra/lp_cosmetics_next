"use client"
import {useState } from "react";
import { Product as ProductType } from "../../types/Product";
import * as PRODUCT_LIST from '../../data.json';
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function Detail() {
  const searchParams = useSearchParams()
  const query = searchParams.get('id');  

  const products: ProductType[] = PRODUCT_LIST.map(item => ({
    code: item.codpro,
    name: item.nombre,
    price: item.precio,
    image: item.imagen
  }));


  const productFound : any = products.find((product) => {
    return product.code === query;
  });

  const handleBack = () => {
    window.history.back();
  }
 
  return (
    <>
      <span className="ml-20 font-light text-gray-400"><button  className="hover:text-gray-900" onClick={handleBack}>{'Inicio'}</button>{' > '+productFound.name}</span>
      <div className="m-20 h-fit flex flex-row">
        <div className="w-1/2">
          <Image
            src={productFound.image}
            alt={productFound.name}
            width={500}
            height={500}
          />
        </div>
        <div className="w-1/2 pt-20 gap-y-4 flex flex-col"> 
          <h1 className="font-semibold text-xl">{productFound.name}</h1>
          <p className="font-medium text-2xl ml-2">${productFound.price}</p>
          <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 border-[1px] overflow-hidden text-sm font-medium bg-blue-700 border-blue-700 text-white max-w-2xl">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-[0.3]">
              Añadir al carrito
            </span>
          </button>
        </div>
      </div>

    </>
    
  );
}
