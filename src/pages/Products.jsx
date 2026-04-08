import { ChevronDown, Cross, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router";

const Products = () => {
  const products = useLoaderData();
  const [search, setsearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [debounce, setDebounce] = useState({ search: "", category: "all", sort: "default" });
  console.log(debounce);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce({ search, category, sort });
    }, 500);
    return () => clearTimeout(timer);
  }, [search, category, sort]);

  const filteredProducts = useMemo(() => {
    let result = products
      .filter((p) => p.title.toLowerCase().includes(debounce.search.toLowerCase()))
      .filter((p) => (debounce.category === "all" ? true : p.category === debounce.category));
    console.log(result);

    if (debounce.sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (debounce.sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [products, debounce]);

  return (
    <>
      <div className="container h-full max-w-7xl mx-auto lg:px-8 sm:px-6 py-10 antialiased">
        <div className="mb-8">
          <h1 className="font-syne text-4xl font-semibold text-white">All Products</h1>
          <p className="text-white/50">{products.length} products found</p>
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
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                placeholder="Search products..."
                className=" flex-1 px-10 w-full h-10 p-3 border border-white/50 rounded-2xl focus:border-[#C8F400] outline-none"
              ></input>
              <button
                onClick={() => setsearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60"
              >
                {" "}
                <X size={15} />
              </button>
            </div>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-10 px-3 bg-[#111] border border-white/50 rounded-2xl focus:border-[#C8F400] outline-none pr-8 appearance-none cursor-pointer min-w-[140px]"
              >
                <option value="all">All Categories</option>
                <option value="beauty">Beauty</option>
                <option value="fragrances">Fragrances</option>
                <option value="furniture">Furniture</option>
                <option value="groceries">Groceries</option>
                {/* <option value="sports">Sports</option> */}
                {/* <option value="accessories">Accessories</option> */}
              </select>
              <ChevronDown
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none"
              />
            </div>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full h-10 px-3 bg-[#111] border border-white/50 rounded-2xl focus:border-[#C8F400] outline-none pr-8 appearance-none cursor-pointer min-w-[160px]"
              >
                <option value="default">Featured</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                {/* <option value="rating-desc">Top Rated</option> */}
                {/* <option value="rating-asc">Lowest Rated</option> */}
              </select>
              <ChevronDown
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none"
              />
            </div>
            <button
              onClick={() => {
                setsearch("");
                setCategory("all");
                setSort("default");
                return;
              }}
              className="flex items-center gap-1.5 text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/15
                         border border-red-500/20 px-4 h-10 rounded-2xl text-sm  transition-all shrink-0 "
            >
              <X size={15} />
              Clear
            </button>
          </div>
          <div className="bottomdsf flex gap-2">
            {category !== "all" && (
              <span className=" flex items-center px-1 justify-center bg-volt/15 text-primary border border-[#C8F400] bg-[#C8F400]/10 rounded-full text-xs gap-1">
                {category}
                <X size={10} onClick={() => setCategory("all")} />
              </span>
            )}
            {sort !== "default" && (
              <span className=" flex items-center px-1  justify-center bg-volt/15 text-primary border border-[#C8F400] bg-[#C8F400]/10 rounded-full text-xs gap-1">
                {sort}
                <X size={10} onClick={() => setSort("default")} />
              </span>
            )}
            {search !== "" && (
              <span className=" flex items-center px-1  justify-center bg-volt/15 text-primary border border-[#C8F400] bg-[#C8F400]/10 rounded-full text-xs gap-1">
                {search}
                <X size={10} onClick={() => setsearch("")} />
              </span>
            )}
          </div>
        </div>

        <div className="showCards grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts.map((elem) => (
            <ProductCard product={elem} key={elem.id} />
          ))}
          {/* {products.map((elem) => (
            <ProductCard product={elem} key={elem.id} />
          ))} */}
          {/* <ProductCard />
          <ProductCard /> */}
        </div>
      </div>
    </>
  );
};

export default Products;
