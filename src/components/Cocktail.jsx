import { Link } from "react-router-dom";
import { useGlobally } from "./Context";

const Cocktail = ({ id, name, image, alcoholic, glass }) => {
  const { showDetails } = useGlobally();

  return (
    <article className="rounded bg-gray-300">
      <img
        className="h-60 w-full object-cover rounded-t"
        src={image}
        alt={name}
      />
      <section className="p-4 grid gap-1">
        <p className="font-bold text-xl">{name}</p>
        <p>{glass}</p>
        <p className="opacity-60">{alcoholic}</p>
        <Link
          to={`cocktail/${id}`}
          onClick={() => showDetails(id)}
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold px-4 py-1 rounded text-center"
        >
          Details
        </Link>
      </section>
    </article>
  );
};

export default Cocktail;
