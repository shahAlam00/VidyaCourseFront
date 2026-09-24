import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaArrowLeft,
  FaGraduationCap,
  FaUserGraduate,
  FaChartLine,
} from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import toast from "react-hot-toast";
import API from "../utils/axios.js";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name] || errors.general) {
      setErrors({
        ...errors,
        [name]: "",
        general: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {
      email: "",
      password: "",
      general: "",
    };

    let isValid = true;

    if (!formData.email) {
      newErrors.email = "Email address is required.";
      isValid = false;
    } else if (
      !formData.email.includes("@") ||
      !formData.email.includes(".")
    ) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      toast.success("Login successful.... ");
      navigate("/");
    } catch (err) {
      if (err.response?.status === 429) {
        const message =
          err.response?.data?.message ||
          "Too many login attempts. Please try again after 15 minutes.";

        setErrors((prev) => ({
          ...prev,
          general: message,
        }));

        toast.error(message);
        return;
      }

      const errorMsg =
        err.response?.data?.message || "Invalid email or password.";

      setErrors((prev) => ({
        ...prev,
        general: errorMsg,
      }));

      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-white text-slate-900 selection:bg-[#0362fc] selection:text-white">
      
      {/* =========================================================
          LEFT SIDE: BRANDING & INFO PANEL (Light Blue BG)
      ========================================================== */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-sky-50/70 border-r border-sky-100 text-slate-900 flex-col justify-between p-12 overflow-hidden">
        
        {/* Top: Back to Home & Small Tag */}
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

        {/* Middle: Brand Title & Value Props */}
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

        {/* Bottom: Quote */}
        <div className="relative z-10 pt-6 border-t border-sky-200/60">
          <blockquote className="text-xs text-slate-600 italic">
            "Education is the most powerful weapon which you can use to change the world."
          </blockquote>
          <p className="text-[11px] text-[#1d5ed2] font-medium mt-1">— Nelson Mandela</p>
        </div>
      </div>

      {/* =========================================================
          RIGHT SIDE: LOGIN FORM CONTAINER (Pure Solid White BG)
      ========================================================== */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20 relative bg-white">
        
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

        <div className="mx-auto w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Sign in to continue your learning journey with VidyaUdbhav Academy.
            </p>
          </div>

          {/* General Error Banner */}
          {errors.general && (
            <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-3 text-center text-xs font-medium text-red-600">
              {errors.general}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate autoComplete="off">
            {/* Email Field */}
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
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Enter your email address"
                  className={`w-full rounded-xl bg-slate-50 pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 border transition-all outline-none ${
                    errors.email
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-slate-200 focus:border-[#1d5ed2] focus:ring-2 focus:ring-[#1d5ed2]/20"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-[#1d5ed2] hover:text-[#154bb3] transition-colors"
                >
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
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  placeholder="Enter your password"
                  className={`w-full rounded-xl bg-slate-50 pl-11 pr-12 py-3 text-sm text-slate-900 placeholder-slate-400 border transition-all outline-none ${
                    errors.password
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-slate-200 focus:border-[#1d5ed2] focus:ring-2 focus:ring-[#1d5ed2]/20"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#1d5ed2] px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1d5ed2]/25 transition-all duration-200 hover:bg-[#154bb3] hover:shadow-[#1d5ed2]/40 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? "Signing In..." : "Sign In →"}
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-8 text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-[#1d5ed2] hover:text-[#154bb3] transition-colors"
            >
              Create account
            </Link>
          </div>

          {/* Security Notice */}
          <div className="mt-12 text-center text-[11px] text-slate-400">
            🔒 Your data is safe with us. We never share your information.
          </div>
        </div>
      </div>
    </div>
  );
}