import { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price, description, view }) => {
  const { currency } = useContext(ShopContext);

  if (view === "column") {
    return (
      <Link to={`/product/${id}`} className="cursor-pointer w-full">
        <div className="flex justify-between items-center p-3 hover:bg-gray-50 transition rounded">
          {/* Left: Image and text */}
          <div className="flex gap-4 items-center">
            <img
              className="h-24 w-24 object-cover flex-shrink-0 rounded"
              src={image[0]}
              alt={name}
            />
            <div className="flex flex-col">
              <p className="font-semibold text-lg">{name}</p>
              {description && <p className="text-gray-500 text-sm">{description}</p>}
            </div>
          </div>

          {/* Right: Price */}
          <p className="font-semibold text-lg">{currency}{price}</p>
        </div>
      </Link>
    );
  }

  // Grid view
  return (
    <Link className="cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="h-80 w-full object-cover hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt={name}
        />
        <p className="pt-3 pb-1 text-small">{name}</p>
        <p className="font-semibold">{currency}{price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
