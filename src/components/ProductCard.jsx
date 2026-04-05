import { ShoppingCart, Star } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const ProductCard = () => {
    const navigate = useNavigate()
  return (
    <div onClick={() =>navigate('93')} className="product-card flex flex-col group border border-white/10 transition-all rounded-2xl overflow-hidden cursor-pointer hover:border-[#C8F400]/40">
      <div className="relative aspect-square bg-muted overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
          alt="Wireless Bluetooth Headphones"
          loading="lazy"
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 rounded-full px-2 py-1 bg-black/60 text-white/80 backdrop-blur-sm capitalize text-[10px]">
          electronics
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <p className="text-white/30 text-[10px] uppercase tracking-widest font-body capitalize">electronics</p>
        <h3 className="font-body font-medium text-white/85 text-sm leading-snug clamp-2 flex-1">
          Wireless Bluetooth Headphones
        </h3>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            <Star fill="gold" size={15} />
            <Star fill="gold" size={15} />
            <Star fill="gold" size={15} />
            <Star fill="gold" size={15} />
            <Star fill="gray" size={15} />
          </div>
          <span className="text-white/30 text-[10px]">(120)</span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/6">
          <span className="font-heading font-bold text-primary text-lg">&#8377;99.99</span>
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-secondary
                        transition-all duration-200 active:scale-95
                        hover:bg-[#e8fc93]"
          >
            <ShoppingCart size={15} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
