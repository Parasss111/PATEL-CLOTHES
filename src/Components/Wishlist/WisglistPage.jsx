import React from "react";
import { useWishlist } from "./WishlistContext";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <section className="px-6 md:px-20 mt-32 mb-20">
      <h2 className="text-3xl font-bold mb-6">My Wishlist</h2>

      {wishlist.length === 0 && <p>No items in wishlist.</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={item.image}
              className="w-full h-56 object-cover rounded-xl cursor-pointer"
              onClick={() =>
                navigate(`/product/${item.id}`, { state: item })
              }
            />

            <button
              onClick={() => removeFromWishlist(item.id)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full text-black shadow"
            >
              ♥
            </button>

            <p className="mt-2 font-semibold">{item.name}</p>
            <p className="text-gray-600">₹{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WishlistPage;
