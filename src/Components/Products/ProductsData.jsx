import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
import p7 from "../../assets/p7.jpg";
import p8 from "../../assets/p8.jpg";
import p9 from "../../assets/p9.jpg";
import p10 from "../../assets/p10.jpg";
import p11 from "../../assets/p11.jpg";
import p12 from "../../assets/p12.jpg";
import p13 from "../../assets/p13.jpg";
import p14 from "../../assets/p14.jpg";
import p15 from "../../assets/p15.jpg";
import p16 from "../../assets/p16.jpg";

// -------------------------
// MASTER PRODUCT DATABASE
// -------------------------

export const productCategories = {
  trendingTshirts: {
    title: "Trending T-shirt",
    subtitle: "Bold style, modern comfort—your go-to T-shirt for every vibe.",
    products: [
      { id: 101, name: "Full Neck T-shirt", price: 699, image: p1, sizes: ["M","L","XL"], type: "Full Neck", category: "trendingTshirts" },
      { id: 102, name: "Full Neck T-shirt", price: 699, image: p2, sizes: ["S","M","L"], type: "Full Neck", category: "trendingTshirts" },
      { id: 103, name: "Full Neck T-shirt", price: 699, image: p3, sizes: ["L","XL","XXL"], type: "Full Neck", category: "trendingTshirts" },
      { id: 104, name: "Full Neck T-shirt", price: 699, image: p4, sizes: ["M","L","XL"], type: "Full Neck", category: "trendingTshirts" },
      { id: 105, name: "Full Neck T-shirt", price: 699, image: p5, sizes: ["M","L"], type: "Full Neck", category: "trendingTshirts" },
      { id: 106, name: "Full Neck T-shirt", price: 699, image: p6, sizes: ["M","XL"], type: "Full Neck", category: "trendingTshirts" },
      { id: 107, name: "Full Neck T-shirt", price: 699, image: p7, sizes: ["L","XL"], type: "Full Neck", category: "trendingTshirts" },
      { id: 108, name: "Full Neck T-shirt", price: 699, image: p8, sizes: ["M","XL"], type: "Full Neck", category: "trendingTshirts" },
      { id: 109, name: "Full Neck T-shirt", price: 699, image: p9, sizes: ["M","L","XL"], type: "Full Neck", category: "trendingTshirts" },
      { id: 110, name: "Full Neck T-shirt", price: 699, image: p10, sizes: ["S","M","L"], type: "Full Neck", category: "trendingTshirts" },
      { id: 111, name: "Full Neck T-shirt", price: 699, image: p11, sizes: ["L","XL"], type: "Full Neck", category: "trendingTshirts" },
      { id: 112, name: "Full Neck T-shirt", price: 699, image: p12, sizes: ["M","L"], type: "Full Neck", category: "trendingTshirts" },
      { id: 113, name: "Full Neck T-shirt", price: 699, image: p13, sizes: ["XL","XXL"], type: "Full Neck", category: "trendingTshirts" },
      { id: 114, name: "Full Neck T-shirt", price: 699, image: p14, sizes: ["M","L"], type: "Full Neck", category: "trendingTshirts" },
      { id: 115, name: "Full Neck T-shirt", price: 699, image: p15, sizes: ["M","XL"], type: "Full Neck", category: "trendingTshirts" },
      { id: 116, name: "Full Neck T-shirt", price: 699, image: p16, sizes: ["L","XL"], type: "Full Neck", category: "trendingTshirts" },
    ],
  },

  oversizedTshirts: {
    title: "Over size T-shirt",
    subtitle: "Stay comfy, look cool — oversized T-shirt, ultimate street vibe",
    products: [
      { id: 201, name: "Oversized T-shirt", price: 699, image: p9, sizes: ["M","L","XL","XXL"], type: "Oversized", category: "oversizedTshirts" },
      { id: 202, name: "Oversized T-shirt", price: 699, image: p10, sizes: ["L","XL"], type: "Oversized", category: "oversizedTshirts" },
      { id: 203, name: "Oversized T-shirt", price: 699, image: p11, sizes: ["M","L"], type: "Oversized", category: "oversizedTshirts" },
      { id: 204, name: "Oversized T-shirt", price: 699, image: p12, sizes: ["M","XL"], type: "Oversized", category: "oversizedTshirts" },
      { id: 205, name: "Full Neck T-shirt", price: 699, image: p5, sizes: ["M","XL"], type: "Full Neck", category: "oversizedTshirts" },
      { id: 206, name: "Full Neck T-shirt", price: 699, image: p6, sizes: ["M","L"], type: "Full Neck", category: "oversizedTshirts" },
      { id: 207, name: "Full Neck T-shirt", price: 699, image: p7, sizes: ["L","XL"], type: "Full Neck", category: "oversizedTshirts" },
      { id: 208, name: "Full Neck T-shirt", price: 699, image: p8, sizes: ["M","L"], type: "Full Neck", category: "oversizedTshirts" },
    ],
  },

  trendingShirts: {
    title: "Men Trending shirts",
    subtitle: "Stay cool, stay classic – men's shirt for daily wear",
    products: [
      { id: 301, name: "Men Shirt", price: 899, image: p13, sizes: ["M","L","XL"], type: "Shirt", category: "trendingShirts" },
      { id: 302, name: "Men Shirt", price: 899, image: p14, sizes: ["L","XL"], type: "Shirt", category: "trendingShirts" },
      { id: 303, name: "Men Shirt", price: 899, image: p15, sizes: ["M","XL"], type: "Shirt", category: "trendingShirts" },
      { id: 304, name: "Men Shirt", price: 899, image: p16, sizes: ["M","L"], type: "Shirt", category: "trendingShirts" },
    ],
  },

  menShirts: {
    title: "Men Shirts",
    subtitle: "Classic vibes, modern edge — men's shirt made for you",
    products: [
      { id: 401, name: "Men Shirt", price: 899, image: p13, sizes: ["M","L","XL"], type: "Shirt", category: "menShirts" },
      { id: 402, name: "Men Shirt", price: 899, image: p14, sizes: ["L","XL"], type: "Shirt", category: "menShirts" },
      { id: 403, name: "Men Shirt", price: 899, image: p15, sizes: ["M","XL"], type: "Shirt", category: "menShirts" },
      { id: 404, name: "Men Shirt", price: 899, image: p16, sizes: ["M","L"], type: "Shirt", category: "menShirts" },
    ],
  },
};
