import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center"> 
      <section className="text-white text-center w-11/12 max-w-md grid gap-3">
        <p className="text-5xl font-bold text-red-600">Oops!</p>
        <p className="font-bold">404 - PAGE NOT FOUND</p>
        <p className="opacity-60">The page you looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <Link to='/' className="bg-blue-600 py-2 px-5 rounded-lg w-max m-auto font-bold hover:bg-blue-700">GO TO HOMEPAGE</Link>
      </section>
    </div>
  )
}

export default Error