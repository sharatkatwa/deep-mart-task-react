import { ChevronDown, Cross, Search, X } from "lucide-react";
import React from "react";
import ProductCard from '../components/ProductCard'

const Products = () => {
  return (
    <>
      <div className="container h-full max-w-7xl mx-auto lg:px-8 sm:px-6 py-10 antialiased">
        <div className="mb-8">
          <h1 className="font-syne text-4xl font-semibold text-white">All Products</h1>
          <p className="text-white/50">50 products found</p>
        </div>
        <div className="mb-6 border border-white/50 rounded-2xl p-5 text-white text-sm ">
          <div className="top flex flex-col sm:flex-row gap-2 border-b border-white/50 pb-5 mb-5">
            <div className="relative flex-1 ">
              <Search
                size={20}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search products..."
                className=" flex-1 px-10 w-full h-10 p-3 border border-white/50 rounded-2xl focus:border-[#C8F400] outline-none"
              ></input>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60">
                {" "}
                <X size={15} />
              </button>
            </div>
            <div className="relative">
              <select className="w-full h-10 px-3 bg-[#111] border border-white/50 rounded-2xl focus:border-[#C8F400] outline-none pr-8 appearance-none cursor-pointer min-w-[140px]">
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="furniture">Furniture</option>
                <option value="home">Home</option>
                <option value="sports">Sports</option>
                <option value="accessories">Accessories</option>
              </select>
              <ChevronDown
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none"
              />
            </div>
            <div className="relative">
              <select className="w-full h-10 px-3 bg-[#111] border border-white/50 rounded-2xl focus:border-[#C8F400] outline-none pr-8 appearance-none cursor-pointer min-w-[160px]">
                <option value="default">Featured</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="rating-desc">Top Rated</option>
                <option value="rating-asc">Lowest Rated</option>
              </select>
              <ChevronDown
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none"
              />
            </div>
            <button
              className="flex items-center gap-1.5 text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/15
                         border border-red-500/20 px-4 h-10 rounded-2xl text-sm  transition-all shrink-0 "
            >
              <X size={15} />
              Clear
            </button>
          </div>
          <div className="bottomdsf flex gap-2">
            <span className=" flex items-center px-1 justify-center bg-volt/15 text-primary border border-[#C8F400] bg-[#C8F400]/10 rounded-full text-xs gap-1">
              clothing
              <X size={10}/>
            </span>
            <span className=" flex items-center px-1  justify-center bg-volt/15 text-primary border border-[#C8F400] bg-[#C8F400]/10 rounded-full text-xs gap-1">
              clothing
              <X size={10}/>
            </span>
           
          </div>
        </div>
        
        <div className="showCards grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default Products;
