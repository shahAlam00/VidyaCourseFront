import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaBookOpen,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaQuoteLeft,
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

/* =========================================================
   DATA
========================================================= */

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

const features = [
  "Hands-on Projects",
  "Expert Mentorship",
  "Real-world Case Studies",
  "Career Preparation",
];

/* =========================================================
   SMALL REUSABLE COMPONENTS
========================================================= */

function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-[var(--color-primary)]" />

      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] sm:text-xs">
        {children}
      </span>
    </div>
  );
}

function StatCard({ stat, index }) {
  return (
    <div
      className={`group p-6 transition-all duration-300 hover:bg-[var(--color-primary-soft)] sm:p-8 ${
        index !== 0
          ? "border-l border-[var(--color-border)]"
          : ""
      } ${
        index >= 2
          ? "border-t border-[var(--color-border)] lg:border-t-0"
          : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--color-primary)]/10 bg-[var(--color-primary-soft)] text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110">
          {stat.icon}
        </div>

        <div>
          <div className="text-2xl font-black tracking-tight text-[var(--color-heading)] sm:text-3xl">
            {stat.number}
          </div>

          <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[var(--color-muted)] sm:text-[10px]">
            {stat.label}
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessStoryCard({ story }) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)]/30 hover:shadow-[0_20px_50px_rgba(29,94,210,0.13)]">
      <div className="h-1 w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />

      <div className="p-6 sm:p-7">
        {/* Profile */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative shrink-0">
              <img
                src={story.image}
                alt={story.name}
                loading="lazy"
                className="h-14 w-14 rounded-2xl object-cover ring-2 ring-[var(--color-primary)]/10"
              />

              <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[var(--color-success)] text-[8px] text-white">
                <FaCheck />
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold text-[var(--color-heading)]">
                {story.name}
              </h3>

              <p className="mt-0.5 text-[10px] font-semibold text-[var(--color-primary)]">
                {story.role}
              </p>
            </div>
          </div>

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
            <FaQuoteLeft size={12} />
          </div>
        </div>

        {/* Outcome */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary-soft)] px-3 py-1.5 text-[10px] font-bold text-[var(--color-primary)]">
          <FaTrophy size={10} />
          {story.package}
        </div>

        {/* Quote */}
        <p className="mt-5 text-sm leading-7 text-[var(--color-text)]">
          "{story.quote}"
        </p>

        {/* Transformation */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-main)]">
          <div className="border-b border-[var(--color-border)] px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                Transformation
              </span>

              <span className="text-[9px] font-bold text-[var(--color-primary)]">
                {story.duration}
              </span>
            </div>
          </div>

          <div className="space-y-4 p-4">
            {/* Before */}
            <div className="flex gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[8px] font-bold text-slate-500">
                01
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  Started with
                </p>

                <p className="mt-1 text-xs font-semibold leading-5 text-[var(--color-text)]">
                  {story.before}
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="ml-[9px] h-3 border-l border-dashed border-[var(--color-primary)]/30" />

            {/* After */}
            <div className="flex gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[8px] font-bold text-[var(--color-primary)]">
                02
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                  Built with DigiCampus
                </p>

                <p className="mt-1 text-xs font-bold leading-5 text-[var(--color-heading)]">
                  {story.after}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--color-border)] bg-white p-3">
            <div className="flex items-center gap-2 text-[var(--color-muted)]">
              <FaBriefcase size={9} />

              <span className="text-[8px] font-bold uppercase tracking-wider">
                Outcome
              </span>
            </div>

            <p className="mt-2 truncate text-[11px] font-bold text-[var(--color-heading)]">
              {story.result}
            </p>
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-white p-3">
            <div className="flex items-center gap-2 text-[var(--color-muted)]">
              <FaChartLine size={9} />

              <span className="text-[8px] font-bold uppercase tracking-wider">
                Duration
              </span>
            </div>

            <p className="mt-2 text-[11px] font-bold text-[var(--color-heading)]">
              {story.duration}
            </p>
          </div>
        </div>

        {/* Course */}
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-4">
          <span className="truncate text-[10px] font-semibold text-[var(--color-muted)]">
            {story.course}
          </span>

          <FaChevronRight
            size={9}
            className="shrink-0 text-[var(--color-primary)]"
          />
        </div>
      </div>
    </article>
  );
}

function JourneyCard({ item, index }) {
  return (
    <div className="group relative">
      <div className="h-full rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)]/30 hover:shadow-[var(--shadow-soft)]">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black tracking-[0.2em] text-[var(--color-primary)]">
            {item.number}
          </span>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110">
            {item.icon}
          </div>
        </div>

        <h3 className="mt-7 text-base font-bold text-[var(--color-heading)]">
          {item.title}
        </h3>

        <p className="mt-3 text-xs leading-6 text-[var(--color-muted)]">
          {item.description}
        </p>
      </div>

      {index !== journey.length - 1 && (
        <div className="absolute -right-3 top-1/2 z-20 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-primary)] shadow-sm lg:flex">
          <FaArrowRight size={8} />
        </div>
      )}
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function SuccessStory() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[var(--color-text)]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative px-5 pb-20 pt-24 sm:pb-24 sm:pt-32">
        {/* Background decoration */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--color-primary-soft)] opacity-70 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/15 bg-[var(--color-primary-soft)] px-4 py-2">
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-sm">
              <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-primary)]/10" />

              <FaTrophy size={10} className="relative" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-primary)] sm:text-xs">
              Learner Success Stories
            </span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[var(--color-heading)] sm:text-6xl lg:text-7xl">
            Learn skills.
            <br />

            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
              Build your success.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8 lg:text-lg">
            Real learners. Real learning journeys. Real outcomes.
            <br className="hidden sm:block" />
            See how DigiCampus helps learners turn knowledge into practical
            skills, projects and career opportunities.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/courses"
              className="group inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-primary)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_15px_35px_rgba(29,94,210,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#174fae] hover:shadow-[0_20px_45px_rgba(29,94,210,0.28)]"
            >
              Explore Courses

              <FaArrowRight
                size={11}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/register"
              className="group inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--color-heading)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary-soft)]"
            >
              Start Your Journey

              <FaChevronRight
                size={9}
                className="text-[var(--color-primary)] transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {[
              "Practical Learning",
              "Expert Mentorship",
              "Career Focused",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[10px] font-semibold text-[var(--color-muted)] sm:text-xs"
              >
                <FaCheckCircle
                  className="text-[var(--color-success)]"
                  size={11}
                />

                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)]">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION INTRO
      ====================================================== */}
      <section className="px-5 pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>Learner Journeys</SectionLabel>

              <h2 className="max-w-3xl text-3xl font-black tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
                From learning goals to{" "}
                <span className="text-[var(--color-primary)]">
                  real outcomes.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[var(--color-muted)]">
              Har learner ka background alag hai. Lekin right learning path,
              practical work aur consistency ke saath progress possible hai.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SUCCESS STORIES
      ====================================================== */}
      <section className="px-5 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {stories.map((story) => (
              <SuccessStoryCard key={story.name} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING JOURNEY
      ====================================================== */}
      <section className="bg-[var(--color-bg-main)] px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              The DigiCampus Method
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[var(--color-heading)] sm:text-4xl">
              Success isn't one step.
              <span className="text-[var(--color-primary)]">
                {" "}
                It's a journey.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--color-muted)]">
              We help learners move from understanding concepts to confidently
              applying them in real situations.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((item, index) => (
              <JourneyCard
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED LEARNING EXPERIENCE
      ====================================================== */}
      <section className="px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-primary)]/15 bg-[var(--color-primary-soft)] shadow-[var(--shadow-soft)]">
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />

            <div className="relative grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_.9fr] lg:p-14">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/15 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)] shadow-sm">
                  <FaRocket size={9} />
                  Built for real-world learning
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
                  Don't just complete
                  <span className="text-[var(--color-primary)]">
                    {" "}
                    courses.
                  </span>
                  <br />
                  Build something real.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  DigiCampus focuses on practical learning — projects,
                  assignments, mentorship and career-focused skills that help
                  you move beyond passive video watching.
                </p>

                {/* Features */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {features.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-3.5"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                        <FaCheck size={10} />
                      </div>

                      <span className="text-xs font-semibold text-[var(--color-text)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/courses"
                  className="group mt-8 inline-flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] transition hover:text-[#174fae]"
                >
                  Explore learning paths

                  <FaArrowRight
                    size={9}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* Roadmap */}
              <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-5 shadow-xl sm:p-6">
                <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] pb-5">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Sample Learning Path
                    </p>

                    <h3 className="mt-1 text-base font-bold text-[var(--color-heading)] sm:text-lg">
                      Full Stack Career Track
                    </h3>
                  </div>

                  <div className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[9px] font-bold text-[var(--color-primary)]">
                    85% Complete
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-[10px] font-bold">
                    <span className="text-[var(--color-muted)]">
                      Overall Progress
                    </span>

                    <span className="text-[var(--color-primary)]">85%</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[85%] rounded-full bg-[var(--color-primary)]" />
                  </div>
                </div>

                {/* Roadmap */}
                <div className="mt-7 space-y-3">
                  {roadmapItems.map((item, index) => (
                    <div
                      key={item.title}
                      className="group/row flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-white p-3 transition hover:border-[var(--color-primary)]/20 hover:bg-[var(--color-primary-soft)]"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ${
                            item.done
                              ? "bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
                              : "bg-slate-100 text-[var(--color-muted)]"
                          }`}
                        >
                          {item.done ? (
                            <FaCheck size={9} />
                          ) : (
                            index + 1
                          )}
                        </div>

                        <span className="truncate text-[10px] font-semibold text-[var(--color-text)] sm:text-xs">
                          {item.title}
                        </span>
                      </div>

                      <span
                        className={`shrink-0 rounded-full px-2 py-1 text-[8px] font-bold ${
                          item.done
                            ? "bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
                            : item.status === "In Progress"
                            ? "bg-orange-50 text-[var(--color-accent)]"
                            : "bg-slate-100 text-[var(--color-muted)]"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                  <div className="flex items-center gap-2 text-[9px] font-semibold text-[var(--color-muted)]">
                    <FaPlay size={8} />
                    Learn at your own pace
                  </div>

                  <div className="flex items-center gap-1 text-[9px] font-bold text-[var(--color-primary)]">
                    View Track
                    <FaChevronRight size={7} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ====================================================== */}
      <section className="bg-[var(--color-bg-main)] px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <FaBullseye />
              </div>

              <h3 className="mt-5 text-sm font-bold text-[var(--color-heading)]">
                Skills First
              </h3>

              <p className="mt-3 text-xs leading-6 text-[var(--color-muted)]">
                Focus on practical skills that learners can actually apply
                beyond the classroom.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[var(--color-accent)]">
                <FaLightbulb />
              </div>

              <h3 className="mt-5 text-sm font-bold text-[var(--color-heading)]">
                Learn by Doing
              </h3>

              <p className="mt-3 text-xs leading-6 text-[var(--color-muted)]">
                Concepts become stronger when you practice, experiment and
                build real projects.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[var(--color-success)]">
                <FaUsers />
              </div>

              <h3 className="mt-5 text-sm font-bold text-[var(--color-heading)]">
                Grow Together
              </h3>

              <p className="mt-3 text-xs leading-6 text-[var(--color-muted)]">
                Learn with mentors and a community that helps you keep moving
                forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--color-primary)]/15 bg-[var(--color-primary)] px-7 py-14 text-center shadow-[0_30px_80px_rgba(29,94,210,0.20)] sm:px-12 sm:py-20">
            {/* Decorative shapes */}
            <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[var(--color-accent)]/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20">
                <FaRocket size={20} />
              </div>

              <div className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">
                Your journey starts here
              </div>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                Ready to create your own{" "}
                <span className="text-orange-200">
                  success story?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                Choose a course, build practical skills, work on real projects
                and take the next step towards your goals.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/courses"
                  className="group inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--color-primary)] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50"
                >
                  Explore Courses

                  <FaArrowRight
                    size={10}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-[var(--radius-btn)] border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  Start Learning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GLOBAL PAGE STYLES
      ====================================================== */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(29, 94, 210, 0.18);
          color: #0f172a;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f8fafc;
        }

        ::-webkit-scrollbar {
          width: 7px;
        }

        ::-webkit-scrollbar-track {
          background: #f8fafc;
        }

        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 999px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}

export default SuccessStory;