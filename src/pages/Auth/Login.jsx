import { Zap, ArrowRight, Eye, Lock, Mail, EyeClosed } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { UseAuth } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
  const { AllUser, setLoggedInUser } = UseAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const navigate = useNavigate();
  const handleInput = (data) => {
    const user = AllUser.find((elem) => elem.email === data.email && elem.password === data.password);
    // console.log(user);
    if (!user) {
      console.log("userNotFound");
      toast.error("User Not Found");
      return;
    }
    toast.success('Login Success')
    localStorage.setItem("LoggedInUser", JSON.stringify(user));
    setLoggedInUser(user);
    reset()
    navigate("/");
  };

  return (
    <div className="w-full max-w-md">
      <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
        <div className="w-9 h-9 bg-secondary rounded-xl flex items-center justify-center">
          <Zap size={20} fill="black" />
        </div>
        <span className="text-white font-syne font-bold text-xl">
          Deep<span className="text-[#c8f400]">Mart</span>
        </span>
      </div>
      <div className="auth-card text-white bg-muted border border-white/20 rounded-2xl p-8">
        <h2 className="font-heading font-bold text-2xl font-syne mb-1">Sign in</h2>
        <p className="text-white/40 text-sm font-body mb-8">Enter your credentials to continue</p>
        <form className="space-y-4" onSubmit={handleSubmit(handleInput)}>
          {(errors.email || errors.password) && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl mb-6 font-body">
              {errors.email?.message} <br />
              {errors.password?.message}
            </div>
          )}
          <div className="relative">
            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              name="email"
              placeholder="Email address"
              className="flex-1 bg-white/10 py-6 w-full h-10 p-3 border border-white/50 rounded-2xl focus:border-[#C8F400] outline-none pl-10 pr-10 transition-all"
              autoComplete="email"
              style={{}}
            />
          </div>
          <div className="relative" style={{}}>
            <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
            <input
              {...register("password", { required: "Password is required" })}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="flex-1 bg-white/10 py-6 w-full h-10 p-3 border border-white/50 rounded-2xl focus:border-[#C8F400] outline-none pl-10 pr-10 transition-all"
              autoComplete="current-password"
              style={{}}
            />
            <button
              type="button"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="font-syne bg-secondary rounded-xl text-black w-full flex items-center justify-center gap-2 py-3.5 mt-2 text-base font-heading font-bold hover:bg-[#e6fc85] active:scale-[.95] transition-all"
          >
            Sign in <ArrowRight />
          </button>
        </form>
        <p className="text-center text-white/30 text-sm font-body mt-6">
          Don't have an account?{" "}
          <NavLink
            to={"/Auth/Signup"}
            className="text-[#c8f400] hover:text-[#c8f400]-light font-semibold transition-colors cursor-pointer"
          >
            Create one
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
