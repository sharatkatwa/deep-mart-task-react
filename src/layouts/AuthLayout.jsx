import { ArrowRight, Eye, Lock, Mail, Zap } from "lucide-react";
import React from "react";
import Login from "../pages/Auth/Login";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthLayout = () => {
  return (<>
  <ToastContainer/>
    <div className="min-h-screen flex bg-primary">
      <div className="hidden lg:flex flex-col w-1/2 bg-[#111] border-r border-white/8 p-12 relative overflow-hidden">
        <div
          className="absolute top-1/4 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(#c7f4004f, rgba(200, 244, 0, 0.2))" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(#c7f40001, rgba(200, 244, 0, 0.1))" }}
        ></div>

        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-secondary rounded-2xl flex items-center justify-center">
            <Zap fill={"black"} stroke="2" />
          </div>
          <span className="text-white font-bold text-2xl">
            Deep<span className="text-primary">Mart</span>
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-center relative z-10">
          <p className="text-primary text-sm font-dmsans font-medium mb-4 tracking-widest uppercase">Welcome back</p>
          <h1 className="font-heading font-syne text-white font-bold text-5xl leading-tight mb-6">
            Shop the future.
            <br />
            <span className="text-primary">Today.</span>
          </h1>
          <p className="text-white/40 font-sembold max-w-sm leading-relaxed">
            Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="bg-white/4 border border-white/8 rounded-2xl p-4 text-center">
              <p className="font-heading font-bold text-xl text-primary">20K+</p>
              <p className="text-white/40 text-xs font-body mt-1">Products</p>
            </div>
            <div className="bg-white/4 border border-white/8 rounded-2xl p-4 text-center">
              <p className="font-heading font-bold text-xl text-primary">50K+</p>
              <p className="text-white/40 text-xs font-body mt-1">Users</p>
            </div>
            <div className="bg-white/4 border border-white/8 rounded-2xl p-4 text-center">
              <p className="font-heading font-bold text-xl text-primary">4.9★</p>
              <p className="text-white/40 text-xs font-body mt-1">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Outlet/>
      </div>
    </div>
  </>
    
  );
};

export default AuthLayout;
