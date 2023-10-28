import { Link } from "react-router-dom";
import { useGlobally } from "./Context";
import { useEffect } from "react";

const Detail = () => {
  const { selectedCocktail } = useGlobally();
  const { name, image, category, glass, alcoholic, ingredients, instructions } =
    selectedCocktail;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCocktail]);
  
  return (
    <div className="">
      <article className="pt-36 pb-8 w-[90%] m-auto max-w-6xl text-white">
        <div className="w-max m-auto mb-8">
          <Link
            to={`/cocktails-react/`}
            className="px-4 py-2 text-xl rounded font-bold border border-blue-500 hover:text-blue-800"
          >
            Go Back
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-center mb-12 border-b-2 w-max m-auto pb-1 border-[#2272FF]">
          {name}
        </h1>
        <div className="flex justify-center gap-4 items-start max-[600px]:flex-col">
          <div className="w-[40%] max-[600px]:w-full">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={name}
            />
          </div>
          <section className="w-[60%] flex flex-col gap-2 text-gray-300 max-[600px]:w-full">
            <p className="flex items-center">
              <span className="font-bold text-[#2272FF] text-xl mr-1 rounded">
                Name:
              </span>{" "}
              {name}
            </p>
            <p>
              <span className="text-[#2272FF] text-xl mr-1 font-bold">
                Category:
              </span>{" "}
              {category}
            </p>
            <p>
              <span className=" text-[#2272FF] text-xl mr-1 font-bold">
                Glass:
              </span>{" "}
              {glass}
            </p>
            <p>
              <span className=" text-[#2272FF] text-xl mr-1 font-bold">
                Info:
              </span>{" "}
              {alcoholic}
            </p>
            <p>
              <span className=" text-[#2272FF] text-xl mr-1 font-bold">
                Ingredients:
              </span>{" "}
              {ingredients.map((item, index) => {
                return (
                  <span key={index}>
                    {item}
                    {index !== ingredients.length - 1 ? ", " : "."}
                  </span>
                );
              })}
            </p>
            <p>
              <span className=" text-[#2272FF] text-xl mr-1 font-bold">
                Instructions:
              </span>{" "}
              {instructions}
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Detail;
