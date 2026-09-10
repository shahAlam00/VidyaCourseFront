import { Link } from "react-router-dom";
import { FaCheckCircle, FaBookReader, FaArrowRight } from "react-icons/fa";

export default function Success() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-4 pt-28 relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="bg-white/95 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl max-w-md w-full text-center space-y-6 border border-white/20 relative z-10 transform transition-all">
        
        {/* Animated Success Icon */}
        <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-75" />
          <div className="relative w-20 h-20 bg-gradient-to-tr from-emerald-500 to-teal-400 text-white rounded-2xl shadow-lg shadow-emerald-500/30 flex items-center justify-center transform rotate-3 hover:rotate-6 transition">
            <FaCheckCircle size={36} />
          </div>
        </div>

        {/* Heading & Description */}
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-600 text-xs font-bold uppercase tracking-widest">
            Payment Confirmed
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            You're Enrolled Successfully! 🎉
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed px-2">
            Your transaction was completed seamlessly. Your course access has been unlocked and added to your profile.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 space-y-3">
          <Link
            to="/student/dashboard"
            className="group flex items-center justify-center gap-2 w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-indigo-600/25 hover:bg-indigo-700 hover:shadow-indigo-600/40 transition-all transform active:scale-[0.98]"
          >
            <FaBookReader size={16} /> Go to My Courses <FaArrowRight size={12} className="group-hover:translate-x-1 transition" />
          </Link>
          <Link
            to="/courses"
            className="block w-full py-3.5 bg-slate-100 text-slate-700 rounded-2xl font-bold text-sm hover:bg-slate-200 transition active:scale-[0.98]"
          >
            Explore More Courses
          </Link>
        </div>

      </div>
    </div>
  );
}