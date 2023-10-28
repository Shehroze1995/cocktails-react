import { useState } from "react";
import Cocktail from "./Cocktail";
import { useGlobally } from "./Context";
import OrdinaryCocktail from "./OrdinaryCocktail";
import { IoIosArrowDown } from "react-icons/io";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import AllCocktails from "./AllCocktails";

const Home = () => {
  const {
    cocktails,
    handledSearch,
    loading,
    noResult,
    closeSubmenu,
    ordinaryCocktails,
    isSubmenuOpen,
    openSubmenu,
    fetchCategories,
    page,
    handledPage,
    fetchCocktails,
    allCocktails,
  } = useGlobally();
  const [input, setInput] = useState("");

  const hideSubmenu = (e) => {
    if (!e.target.classList.contains("categories")) closeSubmenu();
  };

  return (
    <div
      className={`w-full bg-[url('https://i.pinimg.com/originals/de/44/d5/de44d5172d2b0e3cfeec35a15f9359d8.jpg')] bg-cover bg-center bg-no-repeat bg-fixed ${
        loading || noResult ? "h-screen" : "h-full"
      }`}
    >
      <main onClick={hideSubmenu} className="pb-12 pt-36">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-90% max-w-2xl m-auto flex items-center bg-[#374151] rounded-lg"
        >
          <div className="flex items-center border-2 border-gray-500 h-[3.5rem] rounded-lg rounded-tr-none rounded-br-none border-r-0 font-bold text-white cursor-pointer relative max-[350px]:w-[28%] categories">
            <button
              onClick={openSubmenu}
              className="flex items-center gap-1 h-full w-full px-2 max-[350px]:px-0 max-[350px]:gap-0 max-[350px]:text-[12px] categories"
            >
              All Categories{" "}
              <span>
                {" "}
                <IoIosArrowDown
                  className={`transition-all duration-300 ${
                    isSubmenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </button>
            <ul
              className={`absolute left-0 bottom-[-6rem] rounded-lg border-2 border-gray-500 bg-[#374151] p-4 w-40 grid gap-1 font-normal overflow-hidden duration-500 ${
                isSubmenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <li>
                <button
                  onClick={() => {
                    fetchCategories();
                    closeSubmenu();
                  }}
                  className="hover:text-blue-700 categories"
                >
                  Ordinary Drinks
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    fetchCocktails();
                    closeSubmenu();
                  }}
                  className="hover:text-blue-700"
                >
                  Cocktails
                </button>
              </li>
            </ul>
          </div>
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-white border-2 border-gray-500 rounded-lg rounded-tl-none rounded-bl-none focus:ring-blue-500 focus:border-blue-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none bg-transparent"
              placeholder="Search Cocktails..."
            />
            <button
              onClick={(e) => {
                handledSearch(e, input);
                setInput("");
              }}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
        {loading ? (
          <div className="text-white text-4xl text-center font-bold animate-pulse mt-8">
            <p>Loading ..</p>
            <p>Please Wait</p>
          </div>
        ) : (
          cocktails.length > 0 &&
          !noResult && (
            <section className="grid gridCols py-8 gap-12 w-[90%] max-w-6xl m-auto">
              {cocktails.map((item) => {
                return <Cocktail key={item.id} {...item} />;
              })}
            </section>
          )
        )}
        {noResult && (
          <div className="text-2xl w-max m-auto text-white my-16 font-bold text-center animate-pulse">
            Sorry, No matching cocktail found.
            <p>Try other keywords</p>
          </div>
        )}
        {ordinaryCocktails.length > 0 && (
          <section className="grid gridCols  w-[90%] max-w-6xl m-auto mt-12 gap-x-3 gap-y-6">
            {ordinaryCocktails.slice(page * 10 - 10, page * 10).map((item) => {
              return <OrdinaryCocktail key={item.id} {...item} />;
            })}
          </section>
        )}
        {ordinaryCocktails.length > 0 && (
          <div className="text-white flex items-center justify-center gap-2 flex-wrap mt-8 w-[90%] m-auto gap-y-2">
            <button
              onClick={() => handledPage(page - 1)}
              className={`${page == 1 ? "invisible" : "visible"}`}
            >
              <BsFillArrowLeftSquareFill className="w-6 h-6" />
            </button>
            {[...Array(ordinaryCocktails.length / 10)].map((_, index) => {
              return (
                <span
                  onClick={() => handledPage(index + 1)}
                  className={`bg-gray-400 w-6 text-center text-black cursor-pointer ${
                    page == index + 1 ? "bg-red-700 text-white" : ""
                  }`}
                  key={index}
                >
                  {index + 1}
                </span>
              );
            })}
            <button
              onClick={() => handledPage(page + 1)}
              className={`${page == 10 ? "invisible" : "visible"}`}
            >
              <BsFillArrowRightSquareFill className="w-6 h-6" />
            </button>
          </div>
        )}
        {allCocktails.length > 0 && <AllCocktails/>}
      </main>
    </div>
  );
};

export default Home;
