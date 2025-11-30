import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { productCategories } from "./ProductsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCart } from "../Cart/CartContext";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useWishlist } from "../Wishlist/WishlistContext";
import { Heart } from "lucide-react";
import "swiper/css/navigation";
import AuthModal from "../AuthPage/AuthModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const ProductDetails = () => {
    const navigate = useNavigate();
    const { state } = useLocation(); // product passed here

    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);
    const [isAuthOpen, setIsAuthOpen] = useState(false);



    if (!state) {
        return <p className="text-center mt-20">Product not found</p>;
    }

    const { id, image, name, price, description, category } = state;

    // ✅ Quantity Selector State
    const [qty, setQty] = useState(1);

    const increaseQty = () => setQty(qty + 1);
    const decreaseQty = () => qty > 1 && setQty(qty - 1);

    // ✅ Find related products (same category)
    const related = category
        ? productCategories[category]?.products.filter((p) => p.id !== id)
        : [];


    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const isSaved = wishlist.some((w) => w.id === id);

    return (
        <section className="w-full px-6 md:px-20 mt-32 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* LEFT IMAGE */}
                <div className="relative flex justify-center">
                    {/* PRODUCT IMAGE */}
                    <img
                        src={image}
                        alt={name}
                        className="w-100 max-h-[550px] object-cover object-center rounded-2xl"
                    />

                    {/* FLOATING WISHLIST HEART */}
                    <button
                        onClick={() => {
  if (isSaved) {
    removeFromWishlist(id);
    toast.info("Removed from wishlist");
  } else {
    addToWishlist({ id, image, name, price, category });
    toast.success("Added to wishlist");
  }
}}

                        className="absolute top-4 right-4 bg-white shadow-lg rounded-full p-2 hover:scale-110 transition border"
                        >
                        <Heart
                            size={22}
                            className={isSaved ? "text-red-600 fill-red-600" : "text-gray-700"}
                        />
                    </button>
                </div>



                {/* RIGHT DETAILS */}
                <div className="flex flex-col">

                    <h1 className="text-3xl font-bold">{name}</h1>

                    <div className="flex items-center gap-3 mt-2">
                        <p className="text-xl font-bold text-black">Rs. {price}</p>
                        <span className="text-white bg-black px-3 py-1 text-sm rounded-xl">
                            SAVE 8%
                        </span>
                    </div>

                    {/* SIZE SECTION */}
                    <p className="mt-4 text-gray-700 font-semibold text-lg">SIZE</p>

                    <div className="flex gap-3 mt-2">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`border px-4 py-2 rounded-md font-medium transition 
      ${selectedSize === size ? "bg-black text-white" : "hover:bg-black hover:text-white"}
    `}
                            >
                                {size}
                            </button>
                        ))}

                    </div>


                    {/* ✅ QUANTITY SELECTOR */}
                    <div className="mt-6">
                        <p className="text-gray-700 font-semibold text-lg">Quantity</p>

                        <div className="flex items-center gap-4 mt-2">
                            <button
                                onClick={decreaseQty}
                                className="w-10 h-10 border border-gray-400 rounded-full text-xl hover:bg-black hover:text-white transition"
                            >
                                -
                            </button>

                            <span className="text-xl font-semibold">{qty}</span>

                            <button
                                onClick={increaseQty}
                                className="w-10 h-10 border border-gray-400 rounded-full text-xl hover:bg-black hover:text-white transition"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={() => {
                                const token = localStorage.getItem("token");
                                if (!token) {
                                    toast.error("You must login first!");
                                    setIsAuthOpen(true);
                                    return;
                                }

                                if (!selectedSize) {
                                    toast.warning("Please select a size!");
                                    return;
                                }

                                addToCart({
                                    id,
                                    name,
                                    image,
                                    price,
                                    size: selectedSize,
                                    qty,
                                });

                                // navigate("/cart");
                            }}
                            className="border border-black w-40 py-3 rounded-xl font-bold hover:bg-black hover:text-white transition"
                        >
                            ADD TO CART
                        </button>


                        <button
                            onClick={() => {
                                const token = localStorage.getItem("token");

                                if (!token) {
                                    toast.error("You must login first!");
                                    setIsAuthOpen(true);
                                    return;
                                }

                                if (!selectedSize) {
                                    toast.warning("Please select a size!");
                                    return;
                                }

                                // remove all previous cart items (optional, like Amazon)
                                // clearCart();

                                addToCart({
                                    id,
                                    name,
                                    image,
                                    price,
                                    size: selectedSize,
                                    qty,
                                });

                                navigate("/cart"); // go to checkout
                            }}
                            className="bg-black text-white w-40 py-3 rounded-xl font-bold hover:bg-gray-800 transition"
                        >
                            BUY IT NOW
                        </button>

                    </div>

                    {/* DESCRIPTION */}
                    <h2 className="text-2xl font-bold mt-10">Description</h2>

                    <p className="text-gray-700 mt-2 leading-relaxed">
                        {description || "Regular fit polo shirt. Lapel collar with button fastening under the placket. Long sleeves."}
                    </p>
                </div>
            </div>

            {/* ⭐ RELATED PRODUCTS SECTION */}
            {related.length > 0 && (
                <div className="mt-20">
                    <h2 className="text-2xl font-bold mb-5">Related Products</h2>

                    <div className="relative">

                        {/* LEFT ARROW */}
                        <button
                            className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                        >
                            ❮
                        </button>

                        {/* RIGHT ARROW */}
                        <button
                            className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                        >
                            ❯
                        </button>

                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            slidesPerView={2}
                            spaceBetween={20}
                            breakpoints={{
                                640: { slidesPerView: 4 },
                                1024: { slidesPerView: 5 },
                            }}
                            className="pb-5"
                        >
                            {related.map((p) => (
                                <SwiperSlide key={p.id}>
                                    <div
                                        className="cursor-pointer bg-white rounded-xl p-3 transition w-full"
                                        onClick={() =>
                                            navigate(`/product/${p.id}`, { state: { ...p, category } })
                                        }
                                    >
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-48 object-cover rounded-xl"
                                        />

                                        <p className="mt-2 text-gray-700 font-medium text-base">
                                            {p.name}
                                        </p>

                                        <p className="text-black font-semibold text-base">
                                            ₹{p.price}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}



            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
             
        </section>
    );
};

export default ProductDetails;
