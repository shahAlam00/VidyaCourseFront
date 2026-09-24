import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
  FaAward,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaRocket,
  FaCode,
  FaBriefcase,
  FaChalkboardTeacher,
  FaCertificate,
  FaLightbulb,
  FaBullseye,
  FaLayerGroup,
  FaQuoteLeft,
  FaStar,
  FaChevronRight,
} from "react-icons/fa";

import videoBg from "../assets/video1.mp4";

export default function About() {
  const [videoError, setVideoError] = useState(false);
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

  const stats = [
    {
      label: "Active Learners",
      value: "15,000+",
      icon: <FaUsers size={21} />,
    },
    {
      label: "Expert Courses",
      value: "120+",
      icon: <FaLaptopCode size={21} />,
    },
    {
      label: "Placement Rate",
      value: "94%",
      icon: <FaAward size={21} />,
    },
    {
      label: "Certified Mentors",
      value: "50+",
      icon: <FaGraduationCap size={21} />,
    },
  ];

  const features = [
    "Industry-standard Full Stack & UI/UX curriculums",
    "Live interactive classes & real-world project building",
    "1-on-1 mentorship from experienced professionals",
    "Comprehensive career support & mock interviews",
  ];

  const whyDigiCampus = [
    {
      icon: <FaLaptopCode />,
      title: "Learn by Building",
      text: "Move beyond theory. Build real-world projects that strengthen your skills and portfolio.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Mentorship",
      text: "Get practical guidance from mentors who understand modern technology and industry expectations.",
    },
    {
      icon: <FaBriefcase />,
      title: "Career Focused",
      text: "Prepare for real opportunities with interview preparation, projects and career guidance.",
    },
    {
      icon: <FaCertificate />,
      title: "Skill Certification",
      text: "Showcase your learning journey with certificates that represent your completed courses.",
    },
  ];

  const journey = [
    {
      number: "01",
      icon: <FaBullseye />,
      title: "Choose Your Path",
      text: "Explore courses designed around today's most valuable digital and technology skills.",
    },
    {
      number: "02",
      icon: <FaPlay />,
      title: "Learn & Practice",
      text: "Follow structured lessons, attend classes and strengthen your knowledge through practice.",
    },
    {
      number: "03",
      icon: <FaCode />,
      title: "Build Real Projects",
      text: "Turn your knowledge into practical projects that demonstrate what you can actually build.",
    },
    {
      number: "04",
      icon: <FaRocket />,
      title: "Launch Your Career",
      text: "Use your skills, projects and preparation to confidently move toward your career goals.",
    },
  ];

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
        {/* Moving mouse glow */}
        <div
          className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-[left,top] duration-500 ease-out"
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
            background:
              "radial-gradient(circle, rgba(29,94,210,0.08), rgba(244,121,32,0.04) 40%, transparent 70%)",
          }}
        />

        {/* Floating bubble 1 */}
        <div className="absolute left-[7%] top-[18%] h-28 w-28 rounded-full bg-[#1d5ed2]/5 blur-xl animate-[float_8s_ease-in-out_infinite]" />

        {/* Floating bubble 2 */}
        <div className="absolute right-[10%] top-[25%] h-40 w-40 rounded-full bg-[#f47920]/5 blur-2xl animate-[float_11s_ease-in-out_infinite_reverse]" />

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

      {/* =========================================================
          VIDEO BACKGROUND (Soft Opacity for Light Mode)
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            className="h-full w-full object-cover opacity-[0.03] scale-105"
          >
            <source src={videoBg} type="video/mp4" />
          </video>
        ) : null}
        <div className="absolute inset-0 bg-white/60" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <main className="relative z-10">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative px-5 pb-20 pt-20 sm:pb-28 sm:pt-28">
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#1d5ed2]/20 bg-[#eef4ff] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1d5ed2] shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1d5ed2]/10">
                <FaGraduationCap size={11} />
              </span>
              About VidyaUdbhav Academy
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Building Skills.
              <br />
              <span className="bg-gradient-to-r from-[#1d5ed2] via-[#2d74e8] to-[#f47920] bg-clip-text text-transparent">
                Building Futures.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">
              VidyaUdbhav Academy is a modern learning platform designed to help
              ambitious learners develop practical skills, build real
              projects and become ready for the modern digital world.
            </p>

            {/* Hero buttons */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#1d5ed2] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1d5ed2]/25 transition duration-300 hover:-translate-y-1 hover:bg-[#154bb3]"
              >
                Explore Courses
                <FaArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-bold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-[#1d5ed2]/30 hover:bg-[#eef4ff] hover:text-[#1d5ed2]"
              >
                Start Learning
              </Link>
            </div>

            {/* Small trust line */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-[#1d5ed2]" />
                Practical Learning
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-[#1d5ed2]" />
                Expert Mentorship
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-[#1d5ed2]" />
                Career Focused
              </span>
            </div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ===================================================== */}
        <section className="px-5 pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#1d5ed2]/30 hover:shadow-md sm:p-6"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#1d5ed2]/5 blur-2xl transition duration-500 group-hover:bg-[#1d5ed2]/10" />

                  <div className="relative">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1d5ed2]/20 bg-[#eef4ff] text-[#1d5ed2]">
                      {stat.icon}
                    </div>

                    <div className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-[11px] font-medium text-slate-500 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR STORY
        ===================================================== */}
        <section className="px-5 pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_.9fr]">
              {/* Story */}
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-10">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#1d5ed2]/5 blur-3xl" />

                <div className="relative">
                  <div className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1d5ed2]">
                    <span className="h-px w-8 bg-[#1d5ed2]/60" />
                    Our Story
                  </div>

                  <h2 className="max-w-xl text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                    Education should prepare you for the
                    <span className="text-[#1d5ed2]"> real world.</span>
                  </h2>

                  <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
                    Traditional learning often focuses on completing courses. We
                    believe learning should go further. Students should
                    understand concepts, practice them, build with them and
                    confidently use them in real situations.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    That's why VidyaUdbhav Academy brings structured courses, practical
                    projects, mentorship and career preparation together in one
                    learning ecosystem.
                  </p>

                  <div className="mt-7 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#1d5ed2] text-xs font-bold text-white">
                        D
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#f47920] text-xs font-bold text-white">
                        C
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-800 text-xs font-bold text-white">
                        +
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">
                      A growing community of ambitious learners
                    </span>
                  </div>
                </div>
              </div>

              {/* Philosophy Card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-[#1d5ed2]/20 bg-gradient-to-br from-[#eef4ff] via-white to-orange-50/30 p-7 shadow-sm sm:p-9">
                <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#f47920]/10 blur-3xl" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#1d5ed2]/20 bg-[#eef4ff] text-[#1d5ed2]">
                    <FaLightbulb size={22} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-slate-900">
                    Our Learning Philosophy
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Learn the concept. Practice the skill. Build something. Get
                    feedback. Improve. Repeat.
                  </p>

                  <div className="mt-7 space-y-4">
                    {[
                      ["01", "Understand"],
                      ["02", "Practice"],
                      ["03", "Build"],
                      ["04", "Grow"],
                    ].map(([num, title]) => (
                      <div
                        key={num}
                        className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-3 shadow-xs"
                      >
                        <span className="text-xs font-black text-[#1d5ed2]">
                          {num}
                        </span>
                        <span className="text-sm font-bold text-slate-800">
                          {title}
                        </span>
                        <FaChevronRight
                          className="ml-auto text-slate-400"
                          size={10}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY DIGICAMPUS
        ===================================================== */}
        <section className="px-5 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1d5ed2]">
                Why VidyaUdbhav Academy
              </div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                More than just an
                <span className="text-[#1d5ed2]"> online course.</span>
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                Everything you need to turn knowledge into practical,
                career-ready skills.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyDigiCampus.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#1d5ed2]/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1d5ed2]/20 bg-[#eef4ff] text-[#1d5ed2] transition duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            MISSION + FEATURES
        ===================================================== */}
        <section className="px-5 pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-7 lg:grid-cols-2">
              {/* Mission */}
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-10">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#f47920]/5 blur-3xl" />

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f47920]/20 bg-orange-50 text-[#f47920]">
                    <FaBullseye />
                  </div>

                  <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                    Our Mission
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                    We believe quality technical education should be accessible,
                    practical and aligned with the real demands of the modern
                    job market.
                  </p>

                  <div className="mt-7 space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[#1d5ed2]">
                          <FaCheckCircle size={12} />
                        </div>
                        <span className="text-sm leading-6 text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="relative overflow-hidden rounded-[2rem] border border-[#1d5ed2]/20 bg-gradient-to-br from-[#eef4ff] via-white to-orange-50/20 p-7 shadow-sm sm:p-10">
                <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#1d5ed2]/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1d5ed2]/20 bg-[#eef4ff] text-[#1d5ed2]">
                    <FaLayerGroup />
                  </div>

                  <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                    Our Vision
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                    To create a learning ecosystem where anyone with curiosity
                    and ambition can gain valuable skills, build meaningful
                    projects and confidently pursue their career goals.
                  </p>

                  <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
                    <FaQuoteLeft className="text-[#1d5ed2]/60" size={18} />
                    <p className="mt-4 text-sm font-semibold leading-7 text-slate-800">
                      "Don't just complete a course. Build the skills that
                      change what you're capable of."
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-1 w-8 rounded-full bg-[#1d5ed2]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        VidyaUdbhav Academy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LEARNING JOURNEY
        ===================================================== */}
        <section className="px-5 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#1d5ed2]">
                Your Learning Journey
              </div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                From curious learner to
                <span className="text-[#1d5ed2]"> confident builder.</span>
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {journey.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="h-full rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#1d5ed2]/30 hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black tracking-widest text-[#1d5ed2]">
                        {item.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ff] text-[#1d5ed2]">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="mt-7 text-base font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>

                  {/* Connector */}
                  {index !== journey.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-20 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1d5ed2] lg:flex shadow-xs">
                      <FaArrowRight size={8} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TESTIMONIAL / TRUST
        ===================================================== */}
        <section className="px-5 pb-24">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-gradient-to-r from-[#eef4ff] via-white to-orange-50/40 p-8 text-center shadow-sm sm:p-12">
              <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-[#1d5ed2]/5 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex justify-center gap-1 text-[#f47920]">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <FaStar key={item} size={13} />
                  ))}
                </div>

                <FaQuoteLeft
                  className="mx-auto text-[#1d5ed2]/30"
                  size={22}
                />

                <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-800 sm:text-2xl sm:leading-10">
                  Learning becomes powerful when knowledge turns into something
                  you can actually build.
                </p>

                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-400">
                  The VidyaUdbhav Academy Approach
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#1d5ed2]/20 bg-gradient-to-br from-[#1d5ed2] via-[#154bb3] to-[#f47920] px-7 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16">
              {/* CTA glows */}
              <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

              <div className="relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
                  <FaRocket size={21} />
                </div>

                <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl">
                  Ready to build your future?
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                  Join thousands of learners building practical skills, real
                  projects and better career opportunities with VidyaUdbhav Academy.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    to="/courses"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#1d5ed2] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
                  >
                    Explore Courses
                    <FaArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
                  >
                    Create Free Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          CUSTOM ANIMATIONS & STYLES
      ========================================================== */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          25% {
            transform: translate3d(20px, -25px, 0) scale(1.04);
          }
          50% {
            transform: translate3d(-15px, -45px, 0) scale(0.97);
          }
          75% {
            transform: translate3d(-25px, -15px, 0) scale(1.02);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: #1d5ed2;
          color: white;
        }

        /* Premium scrollbar */
        ::-webkit-scrollbar {
          width: 7px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(29, 94, 210, 0.35);
          border-radius: 999px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(29, 94, 210, 0.6);
        }
      `}</style>
    </div>
  );
}