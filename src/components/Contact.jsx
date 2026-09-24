import React, { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  // Mouse-following background glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear inline error as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { name: "", email: "", subject: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
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

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log("Contact form submitted with:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden text-slate-800 bg-[#ffffff] selection:bg-[#1d5ed2] selection:text-white"
      style={{
        background: `
          radial-gradient(
            circle at ${mouse.x}% ${mouse.y}%,
            rgba(29, 94, 210, 0.08),
            transparent 24%
          ),
          radial-gradient(
            circle at 10% 20%,
            rgba(244, 121, 32, 0.06),
            transparent 28%
          ),
          #ffffff
        `,
      }}
    >
      {/* =========================================================
          ANIMATED BACKGROUND ACCENTS
      ========================================================== */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-[left,top] duration-500 ease-out"
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
            background:
              "radial-gradient(circle, rgba(29,94,210,0.08), rgba(244,121,32,0.04) 40%, transparent 70%)",
          }}
        />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(29, 94, 210, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(29, 94, 210, 0.03) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <main className="relative z-10">
        {/* Header Section */}
        <div className="relative overflow-hidden px-5 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl text-center relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1d5ed2]/20 bg-[#eef4ff] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1d5ed2] shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1d5ed2]/10">
                <FaGraduationCap size={11} />
              </span>{" "}
              Get In Touch
            </div>

            <h1 className="text-4xl font-black tracking-tight leading-tight sm:text-6xl text-slate-900">
              We'd Love to Hear From{" "}
              <span className="bg-gradient-to-r from-[#1d5ed2] via-[#2d74e8] to-[#f47920] bg-clip-text text-transparent">
                You
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
              Have questions about our courses, admissions, or corporate
              training? Reach out to our team and we'll get back to you shortly.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="mx-auto max-w-6xl px-5 pb-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Side: Contact Info & Support Cards */}
            <div className="space-y-6">
              {/* Quick Info Box */}
              <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#1d5ed2]/20 bg-[#eef4ff] text-[#1d5ed2]">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Chat with us
                      </div>
                      <div className="text-sm font-semibold text-slate-800 mt-1">
                        info@vidyaudbhav.com

                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#1d5ed2]/20 bg-[#eef4ff] text-[#1d5ed2]">
                      <FaPhoneAlt size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Call us
                      </div>
                      <div className="text-sm font-semibold text-slate-800 mt-1">
                       +91 8796917029
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#1d5ed2]/20 bg-[#eef4ff] text-[#1d5ed2]">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Our Office
                      </div>
                      <div className="text-sm font-semibold text-slate-800 mt-1">
                        Gaur City Center, 8th Floor, Greater Noida
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Hours Card */}
              <div className="rounded-[2rem] border border-slate-100 bg-gradient-to-br from-[#eef4ff] via-white to-orange-50/20 p-6 shadow-sm">
                <div className="flex items-center gap-3 text-[#1d5ed2] mb-3">
                  <FaClock size={20} />
                  <h4 className="font-bold text-slate-900 text-base">
                    Support Hours
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Monday to Saturday: 9:00 AM – 7:00 PM IST.
                  <br />
                  Sunday: Closed (Emails monitored periodically)
                </p>
              </div>
            </div>

            {/* Right Side: Interactive Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-[2rem] border border-slate-100 bg-white p-7 sm:p-10 shadow-sm relative">
                {submitted && (
                  <div className="mb-6 flex items-center gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-700 text-sm font-medium">
                    <FaCheckCircle size={20} className="shrink-0" />
                    <span>
                      Thank you! Your message has been sent successfully. We
                      will get back to you soon.
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-sm text-slate-600 mb-8">
                  Fill out the form below and our team will respond within 24
                  hours.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                  autoComplete="off"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="Rahul Sharma"
                        className={`w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 border transition-all outline-none ${
                          errors.name
                            ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                            : "border-slate-200 focus:border-[#1d5ed2] focus:ring-2 focus:ring-[#1d5ed2]/20"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="you@example.com"
                        className={`w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 border transition-all outline-none ${
                          errors.email
                            ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                            : "border-slate-200 focus:border-[#1d5ed2] focus:ring-2 focus:ring-[#1d5ed2]/20"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      autoComplete="off"
                      placeholder="Course Inquiry / Technical Support"
                      className={`w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 border transition-all outline-none ${
                        errors.subject
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                          : "border-slate-200 focus:border-[#1d5ed2] focus:ring-2 focus:ring-[#1d5ed2]/20"
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className={`w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 border transition-all outline-none resize-none ${
                        errors.message
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                          : "border-slate-200 focus:border-[#1d5ed2] focus:ring-2 focus:ring-[#1d5ed2]/20"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-[#1d5ed2] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1d5ed2]/25 transition-all duration-200 hover:-translate-y-1 hover:bg-[#154bb3] active:scale-[0.98]"
                  >
                    <FaPaperPlane size={14} /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}