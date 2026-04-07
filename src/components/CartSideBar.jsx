import {  PackageOpen,  ShoppingBag, X } from "lucide-react";
import { UseShop } from "../context/ShopContext";
import CartCard from "./CartCard";

const CartSideBar = () => {
  // const navigate = useNavigate()
  const { setIsCartOpen } = UseShop();
  const { cartItems} = UseShop();

  return (
    <aside
      className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#111] border-l border-white/10
                         z-50 flex flex-col transition-transform duration-300 ease-out
                         translate-x-0 animate-slide-in"
    >
      <div className="flex items-center justify-between px-6 py-5 h-16 border-b border-white/8">
        <div className="flex items-center text-white font-syne gap-3">
          <ShoppingBag color="#c8f400" />
          <h2 className="font-heading font-bold text-lg">Cart</h2>
        </div>
        <button
          onClick={() => setIsCartOpen(false)}
          className="p-2 hover:bg-white/8 rounded-xl transition-colors
            text-white/50 hover:text-white"
        >
          <X />
        </button>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((elem) => <CartCard key={elem.id} item={elem} />)
      ) : (
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center">
              <PackageOpen color="#ffffff20" size={44} />
            </div>
            <div>
              <p className="font-heading font-semibold text-white/70 text-lg">Cart is empty</p>
              <p className="text-white/30 text-sm mt-1">Go shop something cool!</p>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="bg-secondary font-syne font-semibold rounded-2xl py-3
                px-5 mt-2"
            >
              Browse Products
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default CartSideBar;
