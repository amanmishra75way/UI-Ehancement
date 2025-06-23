import React, { useContext } from "react";
import { shopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(shopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-in-out w-full"
            src={image[0]}
            alt="product"
          />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </motion.div>
    </Link>
  );
};

export default ProductItem;
