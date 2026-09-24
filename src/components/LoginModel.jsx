import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaTimes,
  FaGraduationCap,
  FaUserGraduate,
  FaChartLine,
} from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import toast from "react-hot-toast";
import API from "../utils/axios.js";

export default function LoginModel({ isOpen, onClose, initialMode = true }) {
  const navigate = useNavigate();

  // State to toggle between Login (true) and Register (false)
  const [isLogin, setIsLogin] = useState(initialMode);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Separate states for Login and Register to keep them completely isolated and clean initially
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    general: "",
  });

  // Agar modal open nahi hai, toh kuch render mat karo
  if (!isOpen) return null;

  // Handle Login input changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    if (errors[name] || errors.general) {
      setErrors({ ...errors, [name]: "", general: "" });
    }
  };

  // Handle Register input changes with strict validation filters
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Full name: allow only alphabets and spaces
    if (name === "name") {
      updatedValue = value.replace(/[^A-Za-z\s]/g, "");
    }

    // Phone number: allow only numbers and restrict up to 10 digits
    if (name === "phone") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setRegisterData({ ...registerData, [name]: updatedValue });
    if (errors[name] || errors.general) {
      setErrors({ ...errors, [name]: "", general: "" });
    }
  };

  const toggleAuthMode = (loginMode) => {
    setIsLogin(loginMode);
    setErrors({ name: "", email: "", phone: "", password: "", general: "" });
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = { name: "", email: "", phone: "", password: "", general: "" };
    let isValid = true;

    if (isLogin) {
      // Login Validations
      if (!loginData.email) {
        newErrors.email = "Email address is required.";
        isValid = false;
      } else if (!loginData.email.includes("@") || !loginData.email.includes(".")) {
        newErrors.email = "Please enter a valid email address.";
        isValid = false;
      }

      if (!loginData.password) {
        newErrors.password = "Password is required.";
        isValid = false;
      }
    } else {
      // Register Validations
      if (!registerData.name.trim()) {
        newErrors.name = "Full name is required.";
        isValid = false;
      }

      if (!registerData.email) {
        newErrors.email = "Email address is required.";
        isValid = false;
      } else if (!registerData.email.includes("@") || !registerData.email.includes(".")) {
        newErrors.email = "Please enter a valid email address.";
        isValid = false;
      }

      if (!registerData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
        isValid = false;
      } else if (registerData.phone.length < 10) {
        newErrors.phone = "Please enter a valid 10-digit phone number.";
        isValid = false;
      }

      if (!registerData.password) {
        newErrors.password = "Password is required.";
        isValid = false;
      } else if (registerData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters long.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    if (!isValid) return;

    try {
      setLoading(true);
      const endpoint = isLogin ? "/auth/login" : "/auth/register";
      const payload = isLogin ? loginData : registerData;

      const response = await API.post(endpoint, payload);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      toast.success(isLogin ? "Login successful!" : "Account created successfully!");
      onClose(); // Success hone par modal close ho jayega
      navigate(isLogin ? "/" : "/student/dashboard");
    } catch (err) {
      const errorMsg = err.response?.data?.message || (isLogin ? "Invalid email or password." : "Registration failed. Try again.");
      setErrors((prev) => ({ ...prev, general: errorMsg }));
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto selection:bg-[#1d5ed2] selection:text-white mt-20">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <FaTimes size={16} />
        </button>

        {/* =========================================================
            LEFT SIDE: BRANDING & INFO PANEL
        ========================================================== */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-sky-50/70 border-r border-sky-100 text-slate-900 flex-col justify-between p-8">
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#1d5ed2] font-semibold">
              Learn • Grow • Achieve
            </span>
          </div>

          <div className="relative z-10 my-auto py-6 space-y-6">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">
                VidyaUdbhav <span className="text-[#1d5ed2]">Academy</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Empowering learners with industry-relevant skills, expert mentors, and real-world learning experiences.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-sky-200 text-[#1d5ed2] shadow-sm">
                  <FaGraduationCap size={15} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Expert-Led Courses</h4>
                  <p className="text-[11px] text-slate-600">Learn directly from industry professionals.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-sky-200 text-[#1d5ed2] shadow-sm">
                  <FaUserGraduate size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Flexible Learning</h4>
                  <p className="text-[11px] text-slate-600">Study at your own pace with structured modules.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-sky-200 text-[#1d5ed2] shadow-sm">
                  <FaChartLine size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Career Growth</h4>
                  <p className="text-[11px] text-slate-600">Build practical skills for a brighter future.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-sky-200/60">
            <blockquote className="text-[11px] text-slate-600 italic">
              "Education is the most powerful weapon which you can use to change the world."
            </blockquote>
            <p className="text-[10px] text-[#1d5ed2] font-medium mt-0.5">— Nelson Mandela</p>
          </div>
        </div>

        {/* =========================================================
            RIGHT SIDE: FORMS CONTAINER WITH SLIDING ANIMATION
        ========================================================== */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-8 sm:px-10 relative bg-white overflow-hidden">
          
          <div className="mx-auto w-full max-w-sm relative overflow-hidden">
            
            <div
              className={`flex transition-transform duration-500 ease-in-out w-[200%] ${
                isLogin ? "translate-x-0" : "-translate-x-1/2"
              }`}
            >
              
              {/* ================= FORM 1: LOGIN ================= */}
              <div className="w-1/2 pr-4">
                <div className="mb-5">
                  <h2 className="text-2xl font-black tracking-tight text-slate-900">
                    Welcome Back
                  </h2>
                  <p className="mt-1 text-xs text-slate-600">
                    Sign in to continue your learning journey.
                  </p>
                </div>

                {errors.general && isLogin && (
                  <div className="mb-3 rounded-xl bg-red-50 border border-red-200 p-2.5 text-center text-xs font-medium text-red-600">
                    {errors.general}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3.5" autoComplete="off" noValidate>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <FaEnvelope size={14} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        autoComplete="off"
                        placeholder="Enter your email"
                        className={`w-full rounded-xl bg-slate-50 pl-10 pr-4 py-2.5 text-xs text-slate-900 border outline-none transition-all ${
                          errors.email && isLogin ? "border-red-500" : "border-slate-200 focus:border-[#1d5ed2]"
                        }`}
                      />
                    </div>
                    {errors.email && isLogin && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                        Password
                      </label>
                      <Link to="/forgot-password" onClick={onClose} className="text-[11px] font-medium text-[#1d5ed2]">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <FaLock size={14} />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        autoComplete="new-password"
                        placeholder="Enter your password"
                        className={`w-full rounded-xl bg-slate-50 pl-10 pr-10 py-2.5 text-xs text-slate-900 border outline-none transition-all ${
                          errors.password && isLogin ? "border-red-500" : "border-slate-200 focus:border-[#1d5ed2]"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 cursor-pointer"
                      >
                        {showPassword ? <HiEyeOff size={16} /> : <HiEye size={16} />}
                      </button>
                    </div>
                    {errors.password && isLogin && <p className="mt-1 text-[11px] text-red-500">{errors.password}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-[#1d5ed2] px-4 py-3 text-xs font-bold text-white shadow-lg shadow-[#1d5ed2]/25 transition-all hover:bg-[#154bb3] mt-1 cursor-pointer"
                  >
                    {loading && isLogin ? "Signing In..." : "Sign In →"}
                  </button>
                </form>

                <div className="mt-5 text-center text-xs text-slate-600">
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
                <div className="mb-4">
                  <h2 className="text-2xl font-black tracking-tight text-slate-900">
                    Create an Account
                  </h2>
                  <p className="mt-1 text-xs text-slate-600">
                    Join VidyaUdbhav Academy and start your learning.
                  </p>
                </div>

                {errors.general && !isLogin && (
                  <div className="mb-3 rounded-xl bg-red-50 border border-red-200 p-2.5 text-center text-xs font-medium text-red-600">
                    {errors.general}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3" autoComplete="off" noValidate>
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <FaUser size={14} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={registerData.name}
                        onChange={handleRegisterChange}
                        autoComplete="off"
                        placeholder="Your Name"
                        className={`w-full rounded-xl bg-slate-50 pl-10 pr-4 py-2 text-xs text-slate-900 border outline-none transition-all ${
                          errors.name && !isLogin ? "border-red-500" : "border-slate-200 focus:border-[#1d5ed2]"
                        }`}
                      />
                    </div>
                    {errors.name && !isLogin && <p className="mt-0.5 text-[11px] text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <FaEnvelope size={14} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        autoComplete="off"
                        placeholder="you@example.com"
                        className={`w-full rounded-xl bg-slate-50 pl-10 pr-4 py-2 text-xs text-slate-900 border outline-none transition-all ${
                          errors.email && !isLogin ? "border-red-500" : "border-slate-200 focus:border-[#1d5ed2]"
                        }`}
                      />
                    </div>
                    {errors.email && !isLogin && <p className="mt-0.5 text-[11px] text-red-500">{errors.email}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <FaPhone size={14} />
                      </div>
                      <input
                        type="text"
                        inputMode="numeric"
                        name="phone"
                        value={registerData.phone}
                        onChange={handleRegisterChange}
                        autoComplete="off"
                        maxLength={10}
                        placeholder="Your Phone Number"
                        className={`w-full rounded-xl bg-slate-50 pl-10 pr-4 py-2 text-xs text-slate-900 border outline-none transition-all ${
                          errors.phone && !isLogin ? "border-red-500" : "border-slate-200 focus:border-[#1d5ed2]"
                        }`}
                      />
                    </div>
                    {errors.phone && !isLogin && <p className="mt-0.5 text-[11px] text-red-500">{errors.phone}</p>}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                        <FaLock size={14} />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        autoComplete="new-password"
                        placeholder="••••••••"
                        className={`w-full rounded-xl bg-slate-50 pl-10 pr-10 py-2 text-xs text-slate-900 border outline-none transition-all ${
                          errors.password && !isLogin ? "border-red-500" : "border-slate-200 focus:border-[#1d5ed2]"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 cursor-pointer"
                      >
                        {showPassword ? <HiEyeOff size={16} /> : <HiEye size={16} />}
                      </button>
                    </div>
                    {errors.password && !isLogin && <p className="mt-0.5 text-[11px] text-red-500">{errors.password}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-[#1d5ed2] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#1d5ed2]/25 transition-all hover:bg-[#154bb3] mt-1 cursor-pointer"
                  >
                    {loading && !isLogin ? "Creating Account..." : "Create Account"}
                  </button>
                </form>

                <div className="mt-4 text-center text-xs text-slate-600">
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
    </div>
  );
}