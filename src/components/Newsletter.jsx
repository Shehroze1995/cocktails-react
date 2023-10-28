import { AiOutlineMail } from "react-icons/ai";

const Newsletter = () => {
  return (
    <div className="w-full h-screen overflow-hidden text-white flex items-center justify-center bg-[url('https://i.pinimg.com/originals/de/44/d5/de44d5172d2b0e3cfeec35a15f9359d8.jpg')] bg-cover bg-center bg-no-repeat">
      <section className="grid gap-2 text-center">
        <p className="font-bold text-2xl">Get more updates...</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-2 w-[90%] max-w-sm m-auto flex items-center relative">
            <AiOutlineMail className="text-gray-600 absolute left-3 top-[50%] translate-y-[-50%]" />
            <input
              placeholder="Your email address.."
              type="email"
              className="w-full bg-gray-300 rounded-lg text-black outline-none px-8 py-2 border-4 focus:border-blue-500"
            />
          </div>
          <button className="bg-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-800">Subscribe</button>
        </form>
        <p className="max-w-sm opacity-60">By subscribing you agree with our Terms of Service and Privacy Policy. </p>
      </section>
    </div>
  );
};

export default Newsletter;
