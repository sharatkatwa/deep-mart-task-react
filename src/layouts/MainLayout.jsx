import { Zap, ShoppingCart, LogOut, Menu } from "lucide-react";
import React from "react";
import { NavLink, Outlet } from "react-router";
import { UseAuth } from "../context/AuthContext";
import CartSideBar from "../components/CartSideBar";
import { UseShop} from "../context/ShopContext";

const MainLayout = () => {
const {logoutFun,LoggedInUser} = UseAuth()
const {isCartOpen,setIsCartOpen}=  UseShop()
  

const handleLogout = () =>{
  logoutFun()
  // navigate('/Auth')
  return
}
  return (
    <>
      {isCartOpen &&<CartSideBar />}
      <nav className=" sticky top-0  bg-primary text-white z-40 font-dmsans font-light border-b border-white/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
          <div className="left flex items-center gap-2 font-syne font-bold text-xl">
            <div className="logo bg-secondary rounded-2xl flex items-center justify-center w-10 h-10 p-2">
              <Zap fill="#0D0D0D" stroke="none" size={20} />
            </div>
            <h3>
              Deep<span className="text-primary">Mart</span>
            </h3>
          </div>
          <div className="mid text-center space-x-3 hidden md:block">
            <NavLink to={"/"} className={({ isActive }) => isActive?"text-primary transition-all":''}>
              Home
            </NavLink>
            <NavLink to={"/Products"} className={({ isActive }) => isActive ?"text-primary transition-all":''}>
              Shop
            </NavLink>
            <NavLink to={"/About"} className={({ isActive }) => isActive? "text-primary transition-all":''}>
              About
            </NavLink>
          </div>
          <div className="right flex items-center gap-2 ">
            <div className="profile w-fit h-10 items-center gap-2 border border-white/9 rounded-xl p-2 bg-muted hidden sm:flex">
              <div className="pic w-6 h-6 p-2 text-dark bg-secondary font-syne font-bold rounded-[8px] flex items-center justify-center">
                {LoggedInUser.name.split('')[0].toUpperCase()}
              </div>
              <div className="name text-muted">{LoggedInUser.name}</div>
            </div>
            <div onClick={() =>setIsCartOpen(prev =>!prev)} className="cart border border-white/9 h-10 w-10 p-2 rounded-xl flex items-center justify-center">
              {" "}
              <ShoppingCart size={20} strokeWidth={2} />
            </div>
            <div className="logout border border-white/9 h-10 w-10 p-2 rounded-xl flex items-center justify-center">
              <LogOut onClick={handleLogout} size={20} strokeWidth={2} className="text-muted" />
            </div>
            <div className="logout border border-white/9 h-10 w-10 p-2 rounded-xl flex items-center justify-center md:hidden">
              <Menu size={20} strokeWidth={2} className="text-white" />
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-primary min-h-screen font-dmsans">
        <Outlet />

       
      </div>
      <footer className="bg-primary text-white z-40 font-dmsans font-light border-t-2 border-white/10 text-center p-8">
      <h4 className="font-semibold text-primary font-syne text-xl">SkyMart</h4>
      <p className="text-white/50 text-xs">© 2025 SkyMart • Built with React + axios + data routing</p>
      </footer>
    </>
  );
};

export default MainLayout;
