import { useGlobally } from "./Context";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const AllCocktails = () => {
  const { allCocktails, page, handledPage } = useGlobally();
  const length = [...Array(10)];

  return (
    <>
      <div className="grid gridCols gap-x-4 gap-y-8 mt-8 w-[90%] max-w-6xl m-auto">
        {allCocktails.slice(page * 10 - 10, page * 10).map((item) => {
          const { id, name, img } = item;
          return (
            <article key={id}>
              <img src={img} alt={name} />
              <section className="p-2 bg-gray-300">
                <p className="text-2xl">{name}</p>
                <p>Cocktail</p>
              </section>
            </article>
          );
        })}
      </div>
      <div className="text-white flex items-center justify-center flex-wrap gap-1 text-center w-11/12 max-w-max m-auto mt-10 font-bold">
        <button
          className={`${page == 1 ? "invisible" : "visible"}`}
          onClick={() => handledPage(page - 1)}
        >
          <BsFillArrowLeftSquareFill className="w-6 h-6" />
        </button>
        {length.map((item, index) => {
          return (
            <span
              onClick={() => handledPage(index + 1)}
              className={`w-6 h-6 bg-gray-400 text-black cursor-pointer ${
                page == index + 1 ? "bg-red-700 text-white" : ""
              }`}
              key={index}
            >
              {index + 1}
            </span>
          );
        })}
        <button
          className={`${page == 10 ? "invisible" : "visible"}`}
          onClick={() => handledPage(page + 1)}
        >
          <BsFillArrowRightSquareFill className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default AllCocktails;
