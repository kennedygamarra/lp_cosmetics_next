"use client"

import Image from "next/image";
import logo from "../../../public/image/logo.jpeg";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [handleSearching, setHandleSearching] = useState(false);

  const handleButtonSearch = () => {
    setHandleSearching(!handleSearching);
  }
  
  useEffect(() => {
    if (inputRef.current?.focus && handleSearching)
    inputRef.current.focus();
  }, [handleSearching]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      //Evitar que se recargue la página
      e.preventDefault();
      //Quitar el foco del input/ocultar el input
      inputRef.current?.blur();
      if (e.currentTarget.value === "") {
        router.push("/", { scroll: false });
        return;
      }else{
        router.push(`/search?q=${e.currentTarget.value}`);
      }
    }
  };
  
  return (
    <div className="sticky top-0 inset-x-0 z-50 group mb-10">
      <form >
          <div className={!handleSearching ? 'hidden' : ''+'absolute z-10 w-full bg-[rgba(30,30,30,.58)] h-screen'}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-screen p-4 ps-10 text-sm text-gray-90 bg-gray-50 h-20"
              placeholder="Buscar Productos..."
              ref={inputRef}
              onKeyDown={handleSearch}
              onBlur={handleButtonSearch}
            />
          </div>
        </form>
      <header className="bg-[#fcc4c5] text-[#a86872] px-4 md:px-20 text-center flex justify-center items-center">
        <Link href="/" className="w-20 mx-[auto]">
          <Image src={logo} alt="Logo" className="w-20 mx-[auto]" />
        </Link>
        <button onClick={handleButtonSearch}>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </header>
    </div>
  );
}
