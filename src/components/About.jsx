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

  // Mouse-following background
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
      className="relative min-h-screen overflow-hidden text-white selection:bg-indigo-500 selection:text-white"
      style={{
        background: `
          radial-gradient(
            circle at ${mouse.x}% ${mouse.y}%,
            rgba(99, 102, 241, 0.18),
            transparent 24%
          ),
          radial-gradient(
            circle at 10% 20%,
            rgba(124, 58, 237, 0.16),
            transparent 28%
          ),
          radial-gradient(
            circle at 90% 70%,
            rgba(37, 99, 235, 0.13),
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #07112f 0%,
            #0a1230 35%,
            #111338 65%,
            #080d25 100%
          )
        `,
      }}
    >
      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Moving mouse glow */}
        <div
          className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-[left,top] duration-500 ease-out"
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
            background:
              "radial-gradient(circle, rgba(99,102,241,0.16), rgba(124,58,237,0.07) 40%, transparent 70%)",
          }}
        />

        {/* Floating bubble 1 */}
        <div className="absolute left-[7%] top-[18%] h-28 w-28 rounded-full bg-indigo-500/10 blur-xl animate-[float_8s_ease-in-out_infinite]" />

        {/* Floating bubble 2 */}
        <div className="absolute right-[10%] top-[25%] h-40 w-40 rounded-full bg-violet-500/10 blur-2xl animate-[float_11s_ease-in-out_infinite_reverse]" />

        {/* Floating bubble 3 */}
        <div className="absolute bottom-[20%] left-[15%] h-36 w-36 rounded-full bg-blue-500/10 blur-2xl animate-[float_10s_ease-in-out_infinite]" />

        {/* Floating bubble 4 */}
        <div className="absolute bottom-[10%] right-[18%] h-24 w-24 rounded-full bg-indigo-400/10 blur-xl animate-[float_7s_ease-in-out_infinite_reverse]" />

        {/* Tiny particles */}
        <span className="absolute left-[22%] top-[35%] h-1.5 w-1.5 rounded-full bg-indigo-300/60 animate-pulse" />
        <span className="absolute left-[72%] top-[16%] h-1 w-1 rounded-full bg-violet-300/60 animate-pulse" />
        <span className="absolute left-[84%] top-[55%] h-1.5 w-1.5 rounded-full bg-blue-300/50 animate-pulse" />
        <span className="absolute left-[34%] top-[70%] h-1 w-1 rounded-full bg-indigo-300/50 animate-pulse" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Top glow */}
        <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[130px]" />
      </div>

      {/* =========================================================
          VIDEO BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            className="h-full w-full object-cover opacity-[0.07] scale-105"
          >
            <source src={videoBg} type="video/mp4" />
          </video>
        ) : null}

        <div className="absolute inset-0 bg-[#07112f]/35" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <main className="relative z-10">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative px-5 pb-20 pt-20 sm:pb-28 sm:pt-28">

          <div className="mx-auto max-w-5xl text-center">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-300 backdrop-blur-xl shadow-lg shadow-indigo-900/10">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20">
                <FaGraduationCap size={11} />
              </span>

              About DigiCampus
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">

              Building Skills.
              <br />

              <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-blue-300 bg-clip-text text-transparent">
                Building Futures.
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
              DigiCampus is a modern learning platform designed to help
              ambitious learners develop practical skills, build real
              projects and become ready for the modern digital world.
            </p>

            {/* Hero buttons */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/courses"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-900/30 transition duration-300 hover:-translate-y-1 hover:from-indigo-500 hover:to-violet-500 hover:shadow-indigo-500/25"
              >
                Explore Courses

                <FaArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.07] hover:text-white"
              >
                Start Learning
              </Link>

            </div>

            {/* Small trust line */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">

              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-indigo-400" />
                Practical Learning
              </span>

              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-indigo-400" />
                Expert Mentorship
              </span>

              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-indigo-400" />
                Career Focused
              </span>

            </div>
          </div>
        </section>


        {/* =====================================================
            STATS
        ====================================================== */}

        <section className="px-5 pb-24">

          <div className="mx-auto max-w-6xl">

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">

              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/25 hover:bg-white/[0.06] sm:p-6"
                >

                  {/* Hover glow */}
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition duration-500 group-hover:bg-indigo-500/20" />

                  <div className="relative">

                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                      {stat.icon}
                    </div>

                    <div className="text-2xl font-black tracking-tight text-white sm:text-3xl">
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
        ====================================================== */}

        <section className="px-5 pb-24">

          <div className="mx-auto max-w-6xl">

            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_.9fr]">

              {/* Story */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-2xl sm:p-10">

                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

                <div className="relative">

                  <div className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-300">
                    <span className="h-px w-8 bg-indigo-400/60" />
                    Our Story
                  </div>

                  <h2 className="max-w-xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                    Education should prepare you for the
                    <span className="text-indigo-300">
                      {" "}real world.
                    </span>
                  </h2>

                  <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
                    Traditional learning often focuses on completing
                    courses. We believe learning should go further.
                    Students should understand concepts, practice them,
                    build with them and confidently use them in real
                    situations.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                    That's why DigiCampus brings structured courses,
                    practical projects, mentorship and career preparation
                    together in one learning ecosystem.
                  </p>

                  <div className="mt-7 flex items-center gap-3">

                    <div className="flex -space-x-2">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#101634] bg-indigo-500 text-xs font-bold">
                        D
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#101634] bg-violet-500 text-xs font-bold">
                        C
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#101634] bg-blue-500 text-xs font-bold">
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
              <div className="relative overflow-hidden rounded-[2rem] border border-indigo-400/15 bg-gradient-to-br from-indigo-500/[0.10] via-violet-500/[0.06] to-white/[0.02] p-7 backdrop-blur-2xl sm:p-9">

                <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="relative">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                    <FaLightbulb size={22} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-white">
                    Our Learning Philosophy
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    Learn the concept. Practice the skill. Build something.
                    Get feedback. Improve. Repeat.
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
                        className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-black/10 p-3"
                      >
                        <span className="text-xs font-black text-indigo-400">
                          {num}
                        </span>

                        <span className="text-sm font-bold text-slate-200">
                          {title}
                        </span>

                        <FaChevronRight
                          className="ml-auto text-slate-700"
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
        ====================================================== */}

        <section className="px-5 pb-24">

          <div className="mx-auto max-w-6xl">

            <div className="mx-auto mb-12 max-w-2xl text-center">

              <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-indigo-300">
                Why DigiCampus
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                More than just an
                <span className="text-indigo-300"> online course.</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
                Everything you need to turn knowledge into practical,
                career-ready skills.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {whyDigiCampus.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-3xl border border-white/[0.07] bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/25 hover:bg-indigo-500/[0.05]"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300 transition duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            MISSION + FEATURES
        ====================================================== */}

        <section className="px-5 pb-24">

          <div className="mx-auto max-w-6xl">

            <div className="grid gap-7 lg:grid-cols-2">

              {/* Mission */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-xl sm:p-10">

                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="relative">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                    <FaBullseye />
                  </div>

                  <h2 className="text-2xl font-black text-white sm:text-3xl">
                    Our Mission
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                    We believe quality technical education should be
                    accessible, practical and aligned with the real
                    demands of the modern job market.
                  </p>

                  <div className="mt-7 space-y-4">

                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >

                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-300">
                          <FaCheckCircle size={12} />
                        </div>

                        <span className="text-sm leading-6 text-slate-300">
                          {feature}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>
              </div>


              {/* Vision */}
              <div className="relative overflow-hidden rounded-[2rem] border border-indigo-400/15 bg-gradient-to-br from-indigo-600/[0.12] via-violet-600/[0.08] to-blue-600/[0.05] p-7 backdrop-blur-xl sm:p-10">

                <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

                <div className="relative">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                    <FaLayerGroup />
                  </div>

                  <h2 className="text-2xl font-black text-white sm:text-3xl">
                    Our Vision
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                    To create a learning ecosystem where anyone with
                    curiosity and ambition can gain valuable skills,
                    build meaningful projects and confidently pursue
                    their career goals.
                  </p>

                  <div className="mt-8 rounded-2xl border border-white/[0.08] bg-black/10 p-5">

                    <FaQuoteLeft
                      className="text-indigo-400/60"
                      size={18}
                    />

                    <p className="mt-4 text-sm font-semibold leading-7 text-slate-200">
                      "Don't just complete a course. Build the skills
                      that change what you're capable of."
                    </p>

                    <div className="mt-4 flex items-center gap-2">

                      <div className="h-1 w-8 rounded-full bg-indigo-500" />

                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        DigiCampus
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
        ====================================================== */}

        <section className="px-5 pb-28">

          <div className="mx-auto max-w-6xl">

            <div className="mx-auto mb-12 max-w-2xl text-center">

              <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-indigo-300">
                Your Learning Journey
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                From curious learner to
                <span className="text-indigo-300"> confident builder.</span>
              </h2>

            </div>


            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              {journey.map((item, index) => (
                <div
                  key={index}
                  className="group relative"
                >

                  <div className="h-full rounded-3xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/25">

                    <div className="flex items-center justify-between">

                      <span className="text-xs font-black tracking-widest text-indigo-400">
                        {item.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
                        {item.icon}
                      </div>

                    </div>

                    <h3 className="mt-7 text-base font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      {item.text}
                    </p>

                  </div>

                  {/* Connector */}
                  {index !== journey.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-20 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-indigo-400/10 bg-[#0c1435] text-indigo-400 lg:flex">
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
        ====================================================== */}

        <section className="px-5 pb-24">

          <div className="mx-auto max-w-5xl">

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-r from-indigo-500/[0.08] via-violet-500/[0.06] to-blue-500/[0.08] p-8 text-center backdrop-blur-xl sm:p-12">

              <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

              <div className="relative">

                <div className="mb-5 flex justify-center gap-1 text-indigo-300">

                  {[1, 2, 3, 4, 5].map((item) => (
                    <FaStar key={item} size={13} />
                  ))}

                </div>

                <FaQuoteLeft
                  className="mx-auto text-indigo-400/40"
                  size={22}
                />

                <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-200 sm:text-2xl sm:leading-10">
                  Learning becomes powerful when knowledge turns into
                  something you can actually build.
                </p>

                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">
                  The DigiCampus Approach
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="px-5 pb-20">

          <div className="mx-auto max-w-6xl">

            <div className="relative overflow-hidden rounded-[2.5rem] border border-indigo-400/20 bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-blue-600/10 px-7 py-12 text-center shadow-2xl shadow-indigo-950/30 sm:px-12 sm:py-16">

              {/* CTA glows */}
              <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

              <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />

              <div className="relative">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                  <FaRocket size={21} />
                </div>

                <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl">
                  Ready to build your future?
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  Join thousands of learners building practical skills,
                  real projects and better career opportunities with
                  DigiCampus.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                  <Link
                    to="/courses"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-900/30 transition duration-300 hover:-translate-y-1 hover:bg-indigo-500"
                  >
                    Explore Courses

                    <FaArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
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
          CUSTOM ANIMATION
      ========================================================== */}

      <style>{`
        @keyframes float {
          0%,
          100% {
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
          background: rgba(99, 102, 241, 0.45);
          color: white;
        }

        /* Premium scrollbar */
        ::-webkit-scrollbar {
          width: 7px;
        }

        ::-webkit-scrollbar-track {
          background: #07112f;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.35);
          border-radius: 999px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.6);
        }
      `}</style>
    </div>
  );
}