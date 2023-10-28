
// eslint-disable-next-line react/prop-types
const OrdinaryCocktail = ({ name, img }) => {

  return <article className="">
    <img className="object-cover" src={img} alt={name} />
    <section className="p-4 bg-gray-300">
    <p className="text-2xl text-blue-800">{name}</p>
    <p className="opacity-60">Ordinary Drink</p>
    </section>
  </article>;
};

export default OrdinaryCocktail;
