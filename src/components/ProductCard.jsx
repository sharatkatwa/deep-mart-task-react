import { Check, ShoppingCart, Star } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import { UseShop } from "../context/ShopContext";

const ProductCard = ({ product }) => {
  const { addCart, cartItems, setIsCartOpen } = UseShop();
  const inCart = cartItems.find((item) => (item.id === product.id ? true : false));
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${product.id}`)}
      className="product-card flex flex-col group border border-white/10 transition-all rounded-2xl overflow-hidden cursor-pointer hover:border-[#C8F400]/40"
    >
      <div className="relative aspect-square bg-muted overflow-hidden">
        <img
          src={product.thumbnail}
          alt="Product Image"
          loading="lazy"
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 rounded-full px-2 py-1 bg-black/60 text-white/80 backdrop-blur-sm capitalize text-[10px]">
          {product.category}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <p className="text-white/30 text-[10px] uppercase tracking-widest font-body capitalize">{product.category}</p>
        <h3 className="font-body font-medium text-white/85 text-sm leading-snug clamp-2 flex-1">{product.title}</h3>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            <Star fill="gold" size={15} />
            <Star fill="gold" size={15} />
            <Star fill="gold" size={15} />
            <Star fill="gold" size={15} />
            <Star fill="gray" size={15} />
          </div>
          <span className="text-white/30 text-[10px]">({product.reviews.length})</span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/6">
          <span className="font-heading font-bold text-primary text-lg">${product.price}</span>
          {inCart ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsCartOpen(true);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-body transition-all duration-200 active:scale-95 bg-green-500/15 text-green-400 border border-green-500/20"
            >
              <Check size={20} />
              Added
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addCart(product);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-secondary
                        transition-all duration-200 active:scale-95
                        hover:bg-[#e8fc93]"
            >
              <ShoppingCart size={15} />
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
