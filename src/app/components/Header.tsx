import Image from "next/image";
import logo from "../../../public/image/logo.jpeg";

export default function Header() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="bg-[#fcc4c5] text-[#a86872] p-4 text-center flex justify-center items-center mb-4">
        <Image src={logo} alt="Logo" className="w-20" />
        {/* <h1 className="ml-2 text-3xl font-semibold">Catálogo de Productos</h1> */}
        <form>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
            Search
          </label>
          <div className="relative w-fit">
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
              className="block w-[30rem] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Buscar Productos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 hover:bg-[#] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2 bg-[#993e50]"
            >
              Search
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}
