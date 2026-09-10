import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaBookOpen,
  FaCertificate,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaQuoteLeft,
  FaFire,
  FaTrophy,
  FaRocket,
  FaCheck,
  FaBriefcase,
  FaCode,
  FaChartLine,
  FaPlay,
  FaChevronRight,
  FaBullseye,
  FaLightbulb,
  FaLayerGroup,
  FaUsers,
} from "react-icons/fa";

const stories = [
  {
    name: "Aman Verma",
    role: "Frontend Developer",
    before: "HTML, CSS aur basic JavaScript",
    after: "React + API Integration",
    course: "Full Stack Web Development",
    result: "3 portfolio projects",
    duration: "4 months",
    package: "Placed @ Product Startup",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85",
    quote:
      "Pehle mujhe samajh nahi aata tha ki real project kaise start karna hai. Course ke projects complete karne ke baad mujhe apna portfolio confidently build karna aaya.",
  },
  {
    name: "Neha Sharma",
    role: "Digital Marketing Executive",
    before: "Social media basics",
    after: "SEO + Meta Ads + Analytics",
    course: "Digital Marketing Mastery",
    result: "First client project",
    duration: "3 months",
    package: "Freelancing & Agency Growth",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85",
    quote:
      "Mere liye sabse useful part practical assignments the. Sirf theory nahi thi, mujhe campaigns aur analytics ko practically samajhne ka chance mila.",
  },
  {
    name: "Rahul Singh",
    role: "Backend Developer",
    before: "Basic Node.js",
    after: "Node.js + MongoDB + REST APIs",
    course: "Backend Development with Node.js",
    result: "Job-ready API projects",
    duration: "5 months",
    package: "Software Engineer Trainee",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85",
    quote:
      "Mujhe backend interesting lagta tha but production-level concepts clear nahi the. Projects ke through authentication, APIs aur database handling properly samajh aayi.",
  },
];

const stats = [
  {
    number: "50,000+",
    label: "Active Learners",
    icon: <FaUserGraduate />,
  },
  {
    number: "92%",
    label: "Career Transition Rate",
    icon: <FaTrophy />,
  },
  {
    number: "4.9/5",
    label: "Average Rating",
    icon: <FaStar />,
  },
  {
    number: "150+",
    label: "Hiring Partners",
    icon: <FaRocket />,
  },
];

const journey = [
  {
    number: "01",
    title: "Learn",
    description:
      "Structured lessons that help you understand the fundamentals clearly.",
    icon: <FaBookOpen />,
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Solve practical exercises and strengthen your technical thinking.",
    icon: <FaCode />,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn your knowledge into real-world projects and portfolio work.",
    icon: <FaLayerGroup />,
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Use your skills, projects and confidence to move your career forward.",
    icon: <FaChartLine />,
  },
];

const roadmapItems = [
  {
    title: "HTML, CSS & Tailwind",
    status: "Completed",
    done: true,
  },
  {
    title: "JavaScript & Modern ES6+",
    status: "Completed",
    done: true,
  },
  {
    title: "React & State Management",
    status: "Completed",
    done: true,
  },
  {
    title: "Node.js & REST APIs",
    status: "In Progress",
    done: false,
  },
  {
    title: "Production Capstone Project",
    status: "Upcoming",
    done: false,
  },
];

function SuccessStory() {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07102d] text-white">

      {/* =========================================================
          BACKGROUND SYSTEM
      ========================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        {/* Mouse-following glow */}
        <div
          className="absolute h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] transition-all duration-700 ease-out"
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
            background:
              "radial-gradient(circle, rgba(99,102,241,0.14), rgba(124,58,237,0.06) 42%, transparent 72%)",
          }}
        />

        {/* Main background glows */}
        <div className="absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full bg-indigo-600/[0.09] blur-[130px]" />

        <div className="absolute right-[-250px] top-[15%] h-[650px] w-[650px] rounded-full bg-violet-600/[0.08] blur-[140px]" />

        <div className="absolute bottom-[-250px] left-[20%] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.045] blur-[140px]" />

        {/* Floating bubbles */}
        <div className="absolute left-[8%] top-[20%] h-24 w-24 rounded-full bg-indigo-400/[0.06] blur-2xl animate-[floatOne_11s_ease-in-out_infinite]" />

        <div className="absolute right-[13%] top-[25%] h-36 w-36 rounded-full bg-violet-400/[0.05] blur-3xl animate-[floatTwo_14s_ease-in-out_infinite]" />

        <div className="absolute bottom-[25%] left-[10%] h-32 w-32 rounded-full bg-cyan-400/[0.045] blur-3xl animate-[floatThree_12s_ease-in-out_infinite]" />

        <div className="absolute bottom-[12%] right-[15%] h-24 w-24 rounded-full bg-indigo-300/[0.06] blur-2xl animate-[floatOne_10s_ease-in-out_infinite_reverse]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.28)_100%)]" />

      </div>


      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10">

        {/* =======================================================
            HERO
        ======================================================== */}

        <section className="px-5 pb-24 pt-28 sm:pb-32 sm:pt-36">

          <div className="mx-auto max-w-5xl text-center">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/[0.08] px-4 py-2 backdrop-blur-xl">

              <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">

                <span className="absolute inset-0 animate-ping rounded-full bg-indigo-400/10" />

                <FaTrophy
                  size={10}
                  className="relative"
                />

              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-300 sm:text-xs">
                Learner Success Stories
              </span>

            </div>


            {/* Hero heading */}
            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">

              Learn skills.
              <br />

              <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                Build your success.
              </span>

            </h1>


            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:text-lg">

              Real learners. Real learning journeys. Real outcomes.

              <br className="hidden sm:block" />

              See how DigiCampus helps learners turn knowledge into
              practical skills, projects and career opportunities.

            </p>


            {/* CTA */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/courses"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#1D5ED2] px-7 py-3.5 text-sm font-bold shadow-[0_15px_45px_rgba(79,70,229,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(79,70,229,0.35)]"
              >
                Explore Courses

                <FaArrowRight
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

              <Link
                to="/register"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.035] px-7 py-3.5 text-sm font-bold text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.07] hover:text-white"
              >
                Start Your Journey

                <FaChevronRight
                  size={9}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>


            {/* Mini trust row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">

              {[
                "Practical Learning",
                "Expert Mentorship",
                "Career Focused",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[10px] font-semibold text-slate-500 sm:text-xs"
                >
                  <FaCheckCircle
                    className="text-indigo-400"
                    size={11}
                  />

                  {item}
                </div>
              ))}

            </div>

          </div>

        </section>


        {/* =======================================================
            STATS
        ======================================================== */}

        <section className="px-5 pb-28">

          <div className="mx-auto max-w-6xl">

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] backdrop-blur-2xl">

              {/* top line */}
              <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />

              <div className="grid grid-cols-2 lg:grid-cols-4">

                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`group relative p-6 sm:p-8 ${
                      index === 1
                        ? "border-l border-white/[0.06]"
                        : ""
                    } ${
                      index === 2
                        ? "border-l border-t border-white/[0.06] lg:border-t-0"
                        : ""
                    } ${
                      index === 3
                        ? "border-l border-t border-white/[0.06] lg:border-t-0"
                        : ""
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-400/15 bg-indigo-500/[0.08] text-indigo-300 transition duration-300 group-hover:scale-110 group-hover:border-indigo-400/30">
                        {stat.icon}
                      </div>

                      <div>

                        <div className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                          {stat.number}
                        </div>

                        <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[10px]">
                          {stat.label}
                        </div>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =======================================================
            SECTION INTRO
        ======================================================== */}

        <section className="px-5 pb-12">

          <div className="mx-auto max-w-6xl">

            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

              <div>

                <div className="mb-4 flex items-center gap-3">

                  <span className="h-px w-8 bg-indigo-400" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300">
                    Learner Journeys
                  </span>

                </div>

                <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">

                  From learning goals to
                  <span className="text-indigo-300">
                    {" "}real outcomes.
                  </span>

                </h2>

              </div>

              <p className="max-w-md text-sm leading-7 text-slate-500">
                Har learner ka background alag hai. Lekin right
                learning path, practical work aur consistency ke saath
                progress possible hai.
              </p>

            </div>

          </div>

        </section>


        {/* =======================================================
            SUCCESS STORY CARDS
        ======================================================== */}

        <section className="px-5 pb-28">

          <div className="mx-auto max-w-6xl">

            <div className="grid gap-5 lg:grid-cols-3">

              {stories.map((story, index) => (

                <article
                  key={story.name}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/25 hover:bg-white/[0.04]"
                >

                  {/* Gradient top border */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 opacity-70 transition group-hover:opacity-100" />


                  {/* Card glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-500/[0.07] blur-3xl transition duration-500 group-hover:bg-indigo-500/[0.13]" />


                  <div className="relative p-6 sm:p-7">

                    {/* Profile */}
                    <div className="flex items-center justify-between gap-4">

                      <div className="flex items-center gap-3">

                        <div className="relative">

                          <img
                            src={story.image}
                            alt={story.name}
                            className="h-14 w-14 rounded-2xl object-cover ring-2 ring-indigo-400/20"
                          />

                          <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0a1230] bg-indigo-500 text-[8px] text-white">
                            <FaCheck />
                          </div>

                        </div>

                        <div>

                          <h3 className="text-sm font-bold text-white">
                            {story.name}
                          </h3>

                          <p className="mt-0.5 text-[10px] font-semibold text-indigo-300">
                            {story.role}
                          </p>

                        </div>

                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-indigo-300">
                        <FaQuoteLeft size={12} />
                      </div>

                    </div>


                    {/* Outcome badge */}
                    <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-indigo-400/15 bg-indigo-500/[0.07] px-3 py-1.5 text-[10px] font-bold text-indigo-300">

                      <FaTrophy size={10} />

                      {story.package}

                    </div>


                    {/* Quote */}
                    <div className="mt-5">

                      <p className="text-sm leading-7 text-slate-300">
                        "{story.quote}"
                      </p>

                    </div>


                    {/* Transformation */}
                    <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#050b23]/70">

                      <div className="border-b border-white/[0.06] px-4 py-3">

                        <div className="flex items-center justify-between">

                          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                            Transformation
                          </span>

                          <span className="text-[9px] font-bold text-indigo-300">
                            {story.duration}
                          </span>

                        </div>

                      </div>


                      <div className="p-4">

                        {/* Before */}
                        <div className="flex gap-3">

                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 text-[8px] text-slate-500">
                            01
                          </div>

                          <div>

                            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-600">
                              Started with
                            </p>

                            <p className="mt-1 text-xs font-semibold leading-5 text-slate-400">
                              {story.before}
                            </p>

                          </div>

                        </div>


                        {/* Connector */}
                        <div className="ml-[9px] h-5 border-l border-dashed border-indigo-500/30" />


                        {/* After */}
                        <div className="flex gap-3">

                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-[8px] text-indigo-300">
                            02
                          </div>

                          <div>

                            <p className="text-[9px] font-bold uppercase tracking-wider text-indigo-400">
                              Built with DigiCampus
                            </p>

                            <p className="mt-1 text-xs font-bold leading-5 text-indigo-200">
                              {story.after}
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>


                    {/* Result metrics */}
                    <div className="mt-4 grid grid-cols-2 gap-3">

                      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">

                        <div className="flex items-center gap-2 text-slate-600">
                          <FaBriefcase size={9} />

                          <span className="text-[8px] font-bold uppercase tracking-wider">
                            Outcome
                          </span>
                        </div>

                        <p className="mt-2 truncate text-[11px] font-bold text-slate-200">
                          {story.result}
                        </p>

                      </div>


                      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">

                        <div className="flex items-center gap-2 text-slate-600">
                          <FaChartLine size={9} />

                          <span className="text-[8px] font-bold uppercase tracking-wider">
                            Duration
                          </span>
                        </div>

                        <p className="mt-2 text-[11px] font-bold text-slate-200">
                          {story.duration}
                        </p>

                      </div>

                    </div>


                    {/* Course footer */}
                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">

                      <div className="flex min-w-0 items-center gap-2">

                        <FaBookOpen
                          size={11}
                          className="shrink-0 text-indigo-400"
                        />

                        <span className="truncate text-[10px] font-semibold text-slate-500">
                          {story.course}
                        </span>

                      </div>

                      <div className="ml-3 flex shrink-0 items-center gap-1 text-[9px] font-bold text-indigo-300">
                        Learner
                        <FaCheckCircle size={9} />
                      </div>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =======================================================
            LEARNING JOURNEY
        ======================================================== */}

        <section className="px-5 pb-28">

          <div className="mx-auto max-w-6xl">

            <div className="mb-12 text-center">

              <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300">
                The DigiCampus Method
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Success isn't one step.
                <span className="text-indigo-300">
                  {" "}It's a journey.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
                We help learners move from understanding concepts to
                confidently applying them in real situations.
              </p>

            </div>


            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              {journey.map((item, index) => (

                <div
                  key={item.number}
                  className="group relative"
                >

                  <div className="h-full rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/25">

                    <div className="flex items-center justify-between">

                      <span className="text-[10px] font-black tracking-[0.2em] text-indigo-400">
                        {item.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/15 bg-indigo-500/[0.08] text-indigo-300 transition duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>

                    </div>

                    <h3 className="mt-7 text-base font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      {item.description}
                    </p>

                  </div>


                  {index !== journey.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-20 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-indigo-400/10 bg-[#0b1436] text-indigo-400 lg:flex">
                      <FaArrowRight size={8} />
                    </div>
                  )}

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =======================================================
            FEATURED LEARNING EXPERIENCE
        ======================================================== */}

        <section className="px-5 pb-28">

          <div className="mx-auto max-w-6xl">

            <div className="relative overflow-hidden rounded-[2rem] border border-indigo-400/15 bg-gradient-to-br from-indigo-500/[0.10] via-violet-500/[0.055] to-transparent shadow-[0_30px_100px_rgba(30,27,75,0.25)] backdrop-blur-2xl">

              {/* Background glows */}
              <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-indigo-500/[0.10] blur-3xl" />

              <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-violet-500/[0.08] blur-3xl" />


              <div className="relative grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_.9fr] lg:p-14">

                {/* Left */}
                <div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/[0.08] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-indigo-300">

                    <FaRocket size={9} />

                    Built for real-world learning

                  </div>


                  <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">

                    Don't just complete
                    <span className="text-indigo-300">
                      {" "}courses.
                    </span>

                    <br />

                    Build something real.

                  </h2>


                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">

                    DigiCampus focuses on practical learning — projects,
                    assignments, mentorship and career-focused skills
                    that help you move beyond passive video watching.

                  </p>


                  {/* Feature list */}
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">

                    {[
                      "Hands-on Projects",
                      "Expert Mentorship",
                      "Real-world Case Studies",
                      "Career Preparation",
                    ].map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3.5"
                      >

                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300">
                          <FaCheck size={10} />
                        </div>

                        <span className="text-xs font-semibold text-slate-300">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>


                  <Link
                    to="/courses"
                    className="group mt-8 inline-flex items-center gap-2 text-xs font-bold text-indigo-300 transition hover:text-indigo-200"
                  >
                    Explore learning paths

                    <FaArrowRight
                      size={9}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </Link>

                </div>


                {/* Right roadmap */}
                <div className="rounded-[1.75rem] border border-white/[0.08] bg-[#050b23]/80 p-5 shadow-2xl backdrop-blur-xl sm:p-6">

                  <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] pb-5">

                    <div>

                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">
                        Sample Learning Path
                      </p>

                      <h3 className="mt-1 text-base font-bold text-white sm:text-lg">
                        Full Stack Career Track
                      </h3>

                    </div>

                    <div className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-[9px] font-bold text-indigo-300">
                      85% Complete
                    </div>

                  </div>


                  {/* Progress */}
                  <div className="mt-6">

                    <div className="mb-2 flex justify-between text-[10px] font-bold">

                      <span className="text-slate-500">
                        Overall Progress
                      </span>

                      <span className="text-indigo-300">
                        85%
                      </span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                      <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 shadow-[0_0_18px_rgba(99,102,241,0.35)]" />

                    </div>

                  </div>


                  {/* Roadmap */}
                  <div className="mt-7 space-y-3">

                    {roadmapItems.map((item, index) => (

                      <div
                        key={item.title}
                        className="group/row flex items-center justify-between gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3 transition hover:border-indigo-400/15 hover:bg-white/[0.035]"
                      >

                        <div className="flex min-w-0 items-center gap-3">

                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ${
                              item.done
                                ? "border border-indigo-400/20 bg-indigo-500/10 text-indigo-300"
                                : "bg-slate-800 text-slate-500"
                            }`}
                          >

                            {item.done ? (
                              <FaCheck size={9} />
                            ) : (
                              index + 1
                            )}

                          </div>

                          <span className="truncate text-[10px] font-semibold text-slate-300 sm:text-xs">
                            {item.title}
                          </span>

                        </div>


                        <span
                          className={`shrink-0 rounded-full px-2 py-1 text-[8px] font-bold ${
                            item.done
                              ? "border border-indigo-400/15 bg-indigo-500/10 text-indigo-300"
                              : item.status === "In Progress"
                              ? "border border-cyan-400/15 bg-cyan-400/10 text-cyan-300"
                              : "bg-slate-900 text-slate-600"
                          }`}
                        >
                          {item.status}
                        </span>

                      </div>

                    ))}

                  </div>


                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">

                    <div className="flex items-center gap-2 text-[9px] font-semibold text-slate-600">

                      <FaPlay size={8} />

                      Learn at your own pace

                    </div>

                    <div className="flex items-center gap-1 text-[9px] font-bold text-indigo-300">
                      View Track
                      <FaChevronRight size={7} />
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =======================================================
            PHILOSOPHY
        ======================================================== */}

        <section className="px-5 pb-28">

          <div className="mx-auto max-w-5xl">

            <div className="grid gap-5 md:grid-cols-3">

              {/* Card 1 */}
              <div className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 text-center backdrop-blur-xl">

                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/[0.08] text-indigo-300">
                  <FaBullseye />
                </div>

                <h3 className="mt-5 text-sm font-bold">
                  Skills First
                </h3>

                <p className="mt-3 text-xs leading-6 text-slate-500">
                  Focus on practical skills that learners can actually
                  apply beyond the classroom.
                </p>

              </div>


              {/* Card 2 */}
              <div className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 text-center backdrop-blur-xl">

                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/[0.08] text-violet-300">
                  <FaLightbulb />
                </div>

                <h3 className="mt-5 text-sm font-bold">
                  Learn by Doing
                </h3>

                <p className="mt-3 text-xs leading-6 text-slate-500">
                  Concepts become stronger when you practice, experiment
                  and build real projects.
                </p>

              </div>


              {/* Card 3 */}
              <div className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 text-center backdrop-blur-xl">

                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/[0.08] text-cyan-300">
                  <FaUsers />
                </div>

                <h3 className="mt-5 text-sm font-bold">
                  Grow Together
                </h3>

                <p className="mt-3 text-xs leading-6 text-slate-500">
                  Learn with mentors and a community that helps you keep
                  moving forward.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =======================================================
            FINAL CTA
        ======================================================== */}

        <section className="px-5 pb-20">

          <div className="mx-auto max-w-6xl">

            <div className="relative overflow-hidden rounded-[2.5rem] border border-indigo-400/20 bg-gradient-to-br from-indigo-600/[0.16] via-violet-600/[0.08] to-cyan-500/[0.04] px-7 py-14 text-center shadow-[0_30px_100px_rgba(30,27,75,0.35)] sm:px-12 sm:py-20">

              {/* Glows */}
              <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-indigo-500/[0.12] blur-3xl" />

              <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-violet-500/[0.12] blur-3xl" />


              <div className="relative">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-300">
                  <FaRocket size={20} />
                </div>


                <div className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300">
                  Your journey starts here
                </div>


                <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">

                  Ready to create your own
                  <span className="text-indigo-300">
                    {" "}success story?
                  </span>

                </h2>


                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">

                  Choose a course, build practical skills, work on real
                  projects and take the next step towards your goals.

                </p>


                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                  <Link
                    to="/courses"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#1D5ED2] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
                  >
                    Explore Courses

                    <FaArrowRight
                      size={10}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </Link>


                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                  >
                    Start Learning
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>


      {/* =========================================================
          CUSTOM ANIMATIONS
      ========================================================== */}

      <style>{`

        @keyframes floatOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          25% {
            transform: translate3d(25px, -25px, 0) scale(1.04);
          }

          50% {
            transform: translate3d(-15px, -50px, 0) scale(0.96);
          }

          75% {
            transform: translate3d(-30px, -15px, 0) scale(1.02);
          }
        }

        @keyframes floatTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          30% {
            transform: translate3d(-30px, 25px, 0) scale(1.06);
          }

          60% {
            transform: translate3d(20px, 50px, 0) scale(0.94);
          }

          80% {
            transform: translate3d(35px, 10px, 0) scale(1.02);
          }
        }

        @keyframes floatThree {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          40% {
            transform: translate3d(35px, -35px, 0);
          }

          70% {
            transform: translate3d(-20px, -55px, 0);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(99, 102, 241, 0.45);
          color: white;
        }

        ::-webkit-scrollbar {
          width: 7px;
        }

        ::-webkit-scrollbar-track {
          background: #07102d;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.35);
          border-radius: 999px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.55);
        }

      `}</style>

    </main>
  );
}

export default SuccessStory;