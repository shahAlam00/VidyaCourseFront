import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaArrowLeft,
  FaGraduationCap,
  FaUserGraduate,
  FaChartLine,
} from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import toast from "react-hot-toast";
import API from "../utils/axios.js";

export default function AuthContainer() {
  const navigate = useNavigate();

  // State to toggle between 'login' and 'register'
  const [isLogin, setIsLogin] = useState(true);

  // Common UI states
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // Errors State
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    general: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name] || errors.general) {
      setErrors({ ...errors, [name]: "", general: "" });
    }
  };

  // Toggle mode switch handler (resets errors when switching)
  const toggleAuthMode = (loginMode) => {
    setIsLogin(loginMode);
    setErrors({ name: "", email: "", phone: "", password: "", general: "" });
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = { name: "", email: "", phone: "", password: "", general: "" };
    let isValid = true;

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Full name is required.";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email address is required.";
      isValid = false;
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!isLogin) {
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
        isValid = false;
      } else if (formData.phone.trim().length < 10) {
        newErrors.phone = "Please enter a valid phone number.";
        isValid = false;
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    try {
      setLoading(true);
      const endpoint = isLogin ? "/auth/login" : "/auth/register";
      
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, phone: formData.phone, password: formData.password };

      const response = await API.post(endpoint, payload);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      toast.success(isLogin ? "Login successful!" : "Account created successfully!");
      navigate(isLogin ? "/" : "/student/dashboard");
    } catch (err) {
      const errorMsg = err.response?.data?.message || (isLogin ? "Invalid email or password." : "Registration failed.");
      setErrors((prev) => ({ ...prev, general: errorMsg }));
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-white text-slate-900 selection:bg-[#1d5ed2] selection:text-white overflow-hidden">
      
      {/* =========================================================
          LEFT SIDE: BRANDING & INFO PANEL (Static & Smooth)
      ========================================================== */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-sky-50/70 border-r border-sky-100 text-slate-900 flex-col justify-between p-12 overflow-hidden">
        
        {/* Top: Back to Home */}
        <div className="relative z-10 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition-all hover:bg-slate-50 shadow-sm"
          >
            <FaArrowLeft size={12} />
            <span>Back to Home</span>
          </Link>
          <span className="text-xs uppercase tracking-widest text-[#1d5ed2] font-semibold">
            Learn • Grow • Achieve
          </span>
        </div>

        {/* Middle: Brand Info */}
        <div className="relative z-10 my-auto py-12 space-y-8 max-w-lg">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              VidyaUdbhav <span className="text-[#1d5ed2]">Academy</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Empowering learners with industry-relevant skills, expert mentors, and real-world learning experiences.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-sky-200 text-[#1d5ed2] shadow-sm">
                <FaGraduationCap size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Expert-Led Courses</h4>
                <p className="text-xs text-slate-600">Learn directly from industry professionals.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-sky-200 text-[#1d5ed2] shadow-sm">
                <FaUserGraduate size={16} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Flexible Learning</h4>
                <p className="text-xs text-slate-600">Study at your own pace with structured modules.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-sky-200 text-[#1d5ed2] shadow-sm">
                <FaChartLine size={16} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Career Growth</h4>
                <p className="text-xs text-slate-600">Build practical skills for a brighter future.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="relative z-10 pt-6 border-t border-sky-200/60">
          <blockquote className="text-xs text-slate-600 italic">
            "Education is the most powerful weapon which you can use to change the world."
          </blockquote>
          <p className="text-[11px] text-[#1d5ed2] font-medium mt-1">— Nelson Mandela</p>
        </div>
      </div>

      {/* =========================================================
          RIGHT SIDE: SLIDING ANIMATION CONTAINER FOR FORMS
      ========================================================== */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20 relative bg-white overflow-y-auto">
        
        {/* Mobile Back Button */}
        <div className="absolute top-6 left-6 lg:hidden">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-100 border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 transition-all hover:bg-slate-200"
          >
            <FaArrowLeft size={12} />
            <span>Home</span>
          </Link>
        </div>

        <div className="mx-auto w-full max-w-md relative overflow-hidden">
          
          {/* SLIDING WRAPPER CONTAINER */}
          <div
            className={`flex transition-transform duration-500 ease-in-out w-[200%] ${
              isLogin ? "translate-x-0" : "-translate-x-1/2"
            }`}
          >
            
            {/* ================= FORM 1: LOGIN ================= */}
            <div className="w-1/2 pr-4">
              <div className="mb-8">
                <h2 className="text-3xl font-black tracking-tight text-slate-900">
                  Welcome Back
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Sign in to continue your learning journey with VidyaUdbhav Academy.
                </p>
              </div>

              {errors.general && isLogin && (
                <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-3 text-center text-xs font-medium text-red-600">
                  {errors.general}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate autoComplete="off">
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                      <FaEnvelope size={15} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={isLogin ? formData.email : ""}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`w-full rounded-xl bg-slate-50 pl-11 pr-4 py-3 text-sm text-slate-900 border outline-none transition-all ${
                        errors.email && isLogin ? "border-red-500" : "border-slate-200 focus:border-[#1d5ed2]"
                      }`}
                    />
                  </div>
                  {errors.email && isLogin && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Password
                    </label>
                    <Link to="/forgot-password" className="text-xs font-medium text-[#1d5ed2]">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                      <FaLock size={15} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={isLogin ? formData.password : ""}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className={`w-full rounded-xl bg-slate-50 pl-11 pr-12 py-3 text-sm text-slate-900 border outline-none transition-all ${
                        errors.password && isLogin ? "border-red-500" : "border-slate-200 focus:border-[#1d5ed2]"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400"
                    >
                      {showPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
                    </button>
                  </div>
                  {errors.password && isLogin && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-[#1d5ed2] px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1d5ed2]/25 transition-all hover:bg-[#154bb3] mt-2"
                >
                  {loading && isLogin ? "Signing In..." : "Sign In →"}
                </button>
              </form>

              {/* Toggle to Register */}
              <div className="mt-8 text-center text-sm text-slate-600">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => toggleAuthMode(false)}
                  className="font-bold text-[#1d5ed2] hover:underline cursor-pointer"
                >
                  Create account
                </button>
              </div>
            </div>


            {/* ================= FORM 2: REGISTER ================= */}
            <div className="w-1/2 pl-4">
              <div className="mb-6">
                <h2 className="text-3xl font-black tracking-tight text-slate-900">
                  Create an Account
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Join VidyaUdbhav Academy and start your learning journey today.
                </p>
              </div>

              {errors.general && !isLogin && (
                <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-3 text-center text-xs font-medium text-red-600">
                  {errors.general}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5" noValidate autoComplete="off">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                      <FaUser size={15} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={!isLogin ? formData.name : ""}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
                      className={`w-full rounded-xl bg-slate-50 pl-11 pr-4 py-2.5 text-sm text-slate-900 border outline-none transition-all ${
                        errors.name && !isLogin ? "border-red-500" : "border-slate-200 focus:border-[#1d5ed2]"
                      }`}
                    />
                  </div>
                  {errors.name && !isLogin && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                      <FaEnvelope size={15} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={!isLogin ? formData.email : ""}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full rounded-xl bg-slate-50 pl-11 pr-4 py-2.5 text-sm text-slate-900 border outline-none transition-all ${
                        errors.email && !isLogin ? "border-red-500" : "border-slate-200 focus:border-[#1d5ed2]"
                      }`}
                    />
                  </div>
                  {errors.email && !isLogin && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                      <FaPhone size={15} />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={!isLogin ? formData.phone : ""}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className={`w-full rounded-xl bg-slate-50 pl-11 pr-4 py-2.5 text-sm text-slate-900 border outline-none transition-all ${
                        errors.phone && !isLogin ? "border-red-500" : "border-slate-200 focus:border-[#1d5ed2]"
                      }`}
                    />
                  </div>
                  {errors.phone && !isLogin && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                      <FaLock size={15} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={!isLogin ? formData.password : ""}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className={`w-full rounded-xl bg-slate-50 pl-11 pr-12 py-2.5 text-sm text-slate-900 border outline-none transition-all ${
                        errors.password && !isLogin ? "border-red-500" : "border-slate-200 focus:border-[#1d5ed2]"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400"
                    >
                      {showPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
                    </button>
                  </div>
                  {errors.password && !isLogin && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-[#1d5ed2] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-[#1d5ed2]/25 transition-all hover:bg-[#154bb3] mt-2"
                >
                  {loading && !isLogin ? "Creating Account..." : "Create Account"}
                </button>
              </form>

              {/* Toggle to Login */}
              <div className="mt-6 text-center text-sm text-slate-600">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => toggleAuthMode(true)}
                  className="font-bold text-[#1d5ed2] hover:underline cursor-pointer"
                >
                  Sign in
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}