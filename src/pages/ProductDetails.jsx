import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Heart,
  RotateCcw,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import { NavLink, useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import {UseShop} from '../context/ShopContext'

const ProductDetails = () => {
const {cartItems}=UseShop()
const product = useLoaderData()
  return (
    <div className="container text-white h-full max-w-7xl mx-auto lg:px-8 sm:px-6 py-10 antialiased">
      <nav className="flex items-center gap-2 text-sm text-white/30 font-body mb-8">
        <NavLink className="hover:text-white flex items-center gap-1.5 transition-colors" to={"/Products"}>
          <ArrowLeft size={15} />
          Products
        </NavLink>
        <span>/</span>
        <span className="capitalize text-white/50">{product.category}</span>
        <span>/</span>
        <span className="text-white/70 clamp-1 max-w-[200px]">{product.title}</span>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-16">
        <div className="image-container relative bg-muted rounded-4xl aspect-square transition-all">
          <img
            src={product.images[0]}
            alt="Product Image"
            className="object-contain w-full h-full p-10 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="details flex flex-col gap-5">
          <div className="badge w-fit bg-[#C8F400]/10 rounded-full border border-[#C8F400] text-primary text-xs px-3     py-1">
            {product.category}
          </div>
          <h1 className="font-syne text-3xl font-bold">{product.title}</h1>
          <div className="flex gap-2">
            <div className="flex">
              <Star size={20} fill="gold" stroke="" />
              <Star size={20} fill="gold" stroke="" />
              <Star size={20} fill="gold" stroke="" />
              <Star size={20} fill="gold" stroke="" />
              <Star size={20} fill="gray" stroke="" />
            </div>
            <p className="text-muted text-md font-semibold">4.0</p>
            <p className="text-white/30 text-md font-semibold">({product.reviews.length} reviews)</p>
          </div>
          <div className="py-4 border-y border-white/60 w-full font-syne text-4xl text-primary font-bold">
            {" "}
            ${product.price}
          </div>
          <p className="text-white/50 leading-relaxed text-sm full-body">
            {product.description}
          </p>
          <div className="flex gap-3 w-full">
            <button
              className="flex-1 text-black font-syne flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-base transition-all duration-200 active:scale-95
            bg-secondary hover:bg-[#ddff48]"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="flex items-center justify-center border border-white/10 text-muted p-3.5 rounded-2xl hover:text-red-400 hover:border-red-500/30 transition-all ">
              <Heart size={20} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-1 w-full">
            <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center flex flex-col items-center">
              <Truck size={20} />
              <p className="text-white/60 text-[11px] font-body font-semibold">Free Delivery</p>
              <p className="text-white/25 text-[10px] font-body">On orders $50+</p>
            </div>
            <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center flex flex-col items-center">
              <Shield size={20} />
              <p className="text-white/60 text-[11px] font-body font-semibold">Secure Pay</p>
              <p className="text-white/25 text-[10px] font-body">256-bit SSL</p>
            </div>
            <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center flex flex-col items-center">
              <RotateCcw size={20} />
              <p className="text-white/60 text-[11px] font-body font-semibold">Easy Returns</p>
              <p className="text-white/25 text-[10px] font-body">30-day policy</p>
            </div>
          </div>
          <div className="flex gap-3 mt-6 ">
           {product.id>1 && <NavLink
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl transition-all text-white text-sm font-body"
              to={(`/Products/${product.id-1}`)}
            >
              <ChevronLeft size={20} />
              Previous
            </NavLink>}
           {product.id<30 && <NavLink
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary hover:bg-[#ddff48] text-black border border-[#C8F400] rounded-2xl transition-all font-heading font-semibold text-sm"
              to={`/Products/${product.id+1}`}
            >
              Next <ChevronRight size={20} />
            </NavLink>}
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 mx-auto">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div> */}
    </div>
  );
};

export default ProductDetails;
