import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { UseShop } from "../context/ShopContext";

const CartCard = ({ item }) => {
  const {directRemoveCart,minusCart,addCart} = UseShop()
  return (
    <div className="flex gap-4 p-3 bg-white/4 border border-white/8 rounded-2xl text-white">
      <div className="w-18 h-18 w-[72px] h-[72px] bg-white rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2">
        <img src={item.thumbnail} alt="Professional Camera Lens" className="w-full h-full object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white/80 font-body clamp-2 leading-snug">{item.title}</p>
        <p className="text-volt font-heading font-bold text-base mt-1">${Number(item.price * item.cartQuantity).toFixed(2)}</p>
        <p className="text-white/30 text-xs">${item.price} each</p>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={() =>minusCart(item)} className="w-7 h-7 flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10">
            <Minus size={20} />
          </button>
          <span className="text-sm font-bold font-body w-5 text-center">{item.cartQuantity}</span>
          <button onClick={() =>addCart(item)} className="w-7 h-7 flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10">
            <Plus size={20} />
          </button>
          <button onClick={() =>directRemoveCart(item)} className="ml-auto text-red-400/60 hover:text-red-400 transition-colors">
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
