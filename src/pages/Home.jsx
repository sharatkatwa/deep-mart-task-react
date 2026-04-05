import { ArrowRight, Package, ShoppingBag, Star, Tag, TrendingUp, Zap } from "lucide-react";
import { NavLink } from "react-router";
import CategoryCards from "../components/CategoryCards";
const Home = () => {
  return (
    <div className="container h-full max-w-7xl mx-auto lg:px-8 sm:px-6 py-10 antialiased">
      <div className="relative overflow-hidden rounded-3xl bg-[#111] border-2 border-white/8 p-8 sm:p-12 mb-10">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-volt/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-volt/4 rounded-full blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-[.4]"
            style={{
              backgroundColor: "#0a0a0a",
              backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        {/* content */}
        <div className="relative text-white flex sm:flex-row flex-col sm:items-center items-start justify-between gap-10">
          <div className="left space-y-5">
            <h4 className="uppercase text-primary opacity-[0.6] ">Good morning👋</h4>
            <h1 className="sm:text-5xl text-4xl leading-none font-syne font-bold ">
              Welcome back,
              <br /> <span className="text-primary">Sharat</span>
            </h1>
            <p className="text-white/50 max-w-100">
              Discover today's picks — hand-curated products across electronics, fashion, and more.
            </p>
            <div className="flex gap-5 text-nowrap">
              <button className="hover:bg-[#ddff48]/90 transition-all bg-secondary rounded-xl flex items-center gap-2 justify-center px-5 py-3 text-black font-medium">
                <span>Shop Now</span> <ArrowRight size={15} />
              </button>
              <button className="border hover:border-white hover:text-white transition-all border-white/9 rounded-xl  flex items-center gap-2 justify-center px-5 py-3  text-white/50 font-normal">
                <span>View all products</span>
              </button>
            </div>
          </div>
          <div className="right shrink-0 space-y-5">
            <div className="border  border-[#C8F400]/20 bg-[#C8F400]/10 rounded-2xl text-center px-7 py-5 ">
              <h2 className="text-3xl text-primary font-semibold font-syne">20+</h2>
              <p className="text-sm text-white/50">Products Available</p>
            </div>
            <div className="border border-white/20 bg-white/10 rounded-2xl text-center px-7 py-5 ">
              <h2 className="text-3xl text-white font-semibold font-syne">Free</h2>
              <p className="text-sm text-white/50">Delivery on &#8377;999+</p>
            </div>
          </div>
        </div>
      </div>
      {/* 4 highlights cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
        <div className="border-2 border-white/20 rounded-2xl p-6 flex items-start capitalize gap-5">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-[#C8F400]/10 text-primary ">
            <Package />
          </div>
          <div>
            <h3 className="text-white text-3xl font-syne">0</h3>
            <p className="text-sm text-muted">Cart items </p>
            <p className="text-xs text-white/30">in your bag</p>
          </div>
        </div>
        <div className="border-2 border-white/20 rounded-2xl p-6 flex items-start capitalize gap-5">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-blue-500/10 text-blue-400 ">
            <TrendingUp />
          </div>
          <div>
            <h3 className="text-white text-3xl font-syne">0</h3>
            <p className="text-sm text-muted">Cart items </p>
            <p className="text-xs text-white/30">in your bag</p>
          </div>
        </div>
        <div className="border-2 border-white/20 rounded-2xl p-6 flex items-start capitalize gap-5">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-purple-500/10 text-purple-400 ">
            <Star />
          </div>
          <div>
            <h3 className="text-white text-3xl font-syne">0</h3>
            <p className="text-sm text-muted">Cart items </p>
            <p className="text-xs text-white/30">in your bag</p>
          </div>
        </div>
        <div className="border-2 border-white/20 rounded-2xl p-6 flex items-start capitalize gap-5">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-amber-500/10 text-amber-400 ">
            <Tag />
          </div>
          <div>
            <h3 className="text-white text-3xl font-syne">0</h3>
            <p className="text-sm text-muted">Cart items </p>
            <p className="text-xs text-white/30">in your bag</p>
          </div>
        </div>
      </div>

      {/* Shop by category section */}
      <section className="mb-10 text-white">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-syne text-2xl font-semibold">Shop By Category</h2>
          <p className=" flex items-center gap-2 font-thin text-primary cursor-pointer">
            View all <ArrowRight size={14} />
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          <CategoryCards />
          <CategoryCards />
          <CategoryCards />
          <CategoryCards />
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 text-white">
        <div className="p-6 rounded-3xl border-2 border-white/5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-syne text-xl font-semibold flex items-center">
              <Star fill="yellow" size={20} stroke="3" />
              <span>Top Rated</span>
            </h2>
            <p className=" flex items-center gap-2 font-thin text-primary cursor-pointer">
              View all <ArrowRight size={14} />
            </p>
          </div>
          <div className="bg-muted rounded-xl p-6 flex items-end gap-5">
            <div className="img-container w-10 h-10 overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product image"
              className="object-cover object-center"
              />
              </div>
              <h4 className="font-syne text-xl flex-1 text-white/70">&#8377;1299</h4>
              <div className="">
              <div className="rounded-xl bg-[#c8f400]/50 w-10 h-10 flex items-center justify-center opacity-[0.4]"><ShoppingBag size={20} strokeWidth={3} color="#c8f400" /></div>
              </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl border-2 border-white/5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-syne text-xl font-semibold flex items-center">
              <Zap fill="yellow" size={20} stroke="3" />
              <span>New Arrivals</span>
            </h2>
            <p className=" flex items-center gap-2 font-thin text-primary cursor-pointer">
              See all <ArrowRight size={14} />
            </p>
          </div>
          
             <div className="bg-muted rounded-xl p-6 flex items-end gap-5 ">
            <div className="img-container w-10 h-10 overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product image"
              className="object-cover object-center"
              />
              </div>
              <h4 className="font-syne text-xl flex-1 text-white/70">&#8377;1299</h4>
              <div className="">
              <div className="rounded-xl bg-[#c8f400]/50 w-10 h-10 flex items-center justify-center opacity-[0.4]"><ShoppingBag size={20} strokeWidth={3} color="#c8f400" /></div>
              </div>
          </div>
        </div>
      </div>
       <div className=" grid sm:grid-cols-3 grid-cols-1 gap-5">
          <div className="bg-[#111]  text-primary border border-white/8 rounded-2xl p-5 flex items-center gap-4">
            <Zap size={24} />
            <div>
              <p className="font-body font-semibold text-white/80 text-sm">Fast Delivery</p>
              <p className="text-white/30 text-xs">Same-day on select items</p>
            </div>
          </div>
          <div className="bg-[#111] text-primary border border-white/8 rounded-2xl p-5 flex items-center gap-4">
            <Zap size={24} />
            <div>
              <p className="font-body font-semibold text-white/80 text-sm">Fast Delivery</p>
              <p className="text-white/30 text-xs">Same-day on select items</p>
            </div>
          </div>
          <div className="bg-[#111] text-primary border border-white/8 rounded-2xl p-5 flex items-center gap-4">
            <Zap size={24} />
            <div>
              <p className="font-body font-semibold text-white/80 text-sm">Fast Delivery</p>
              <p className="text-white/30 text-xs">Same-day on select items</p>
            </div>
          </div>
        </div>
    </div>
    
  );
};

export default Home;
