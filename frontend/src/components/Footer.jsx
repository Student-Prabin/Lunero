import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" py-12 px-8">
      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-x-8 gap-y-10">

        {/* Column 1 */}
        <div className="flex justify-center items-center">
          <p className="text-lg text-start leading-relaxed text-gray-600">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <p className="text-gray-500 font-medium mb-4">Links</p>
          <ul className="space-y-8 font-semibold">
            <li>
              <Link to="/" className="text-black hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="text-black hover:underline">Shop</Link>
            </li>
            <li>
              <Link to="/about" className="text-black hover:underline">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-black hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <p className="text-gray-500 font-medium mb-4">Help</p>
          <ul className="space-y-8 font-semibold">
            <li>
              <Link to="#" className="text-black hover:underline">Payment Options</Link>
            </li>
            <li>
              <Link to="#" className="text-black hover:underline">Returns</Link>
            </li>
            <li>
              <Link to="#" className="text-black hover:underline">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <p className="text-gray-500 font-medium mb-4">Newsletter</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border-b-2 border-black outline-none py-2 placeholder-gray-500"
            />
            <button className="text-black font-semibold underline hover:text-gray-700 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Divider + Bottom Text */}
      <hr className="my-10 border-gray-300" />
      <p className="text-center text-gray-600 text-sm">
        © 2022 <span className="font-semibold text-black">Meubel House</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
