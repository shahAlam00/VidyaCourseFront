import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Code,
  Palette,
  BrainCircuit,
  TrendingUp,
  Star,
  BookOpen,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";

const POPULAR_COURSES = [
  {
    title: "Full Stack Web Development",
    category: "Tech & Coding",
    icon: Code,
    color: "from-[#1d5ed2] to-blue-700",
    badge: "Most Popular",
    rating: "4.9",
  },
  {
    title: "UI/UX Product Design Masterclass",
    category: "Design",
    icon: Palette,
    color: "from-[#f47920] to-orange-600",
    badge: "Job Ready",
    rating: "4.8",
  },
  {
    title: "Python, AI & Data Science",
    category: "Data & AI",
    icon: BrainCircuit,
    color: "from-amber-600 to-[#f47920]",
    badge: "Trending",
    rating: "4.9",
  },
  {
    title: "Performance & Digital Marketing",
    category: "Business",
    icon: TrendingUp,
    color: "from-emerald-600 to-teal-600",
    badge: "Practical",
    rating: "4.7",
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const rightCardRef = useRef(null);
  const statRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-anim-item", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
      }).from(
        rightCardRef.current,
        { x: 40, opacity: 0, duration: 1 },
        "-=0.6"
      );

      // Count-up stat numbers
      statRefs.current.forEach((el) => {
        if (!el) return;
        const target = Number(el.dataset.target);
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 1.6,
          delay: 0.5,
          ease: "power1.out",
          onUpdate: () => {
            el.textContent =
              el.dataset.suffix === "k"
                ? Math.floor(counter.val) + "k+"
                : Math.floor(counter.val) + (el.dataset.suffix || "");
          },
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-b from-[var(--color-bg-surface)] via-[var(--color-bg-main)] to-[var(--color-bg-surface)] pt-32 pb-24 text-[var(--color-text)]"
    >
      {/* Soft Ambient Modern Background Glows using Theme Colors */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[150px]" />
        <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-[var(--color-accent)]/10 blur-[150px]" />
        <div className="absolute bottom-0 left-10 h-[350px] w-[350px] rounded-full bg-[var(--color-primary)]/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-2">
        
        {/* LEFT COLUMN: Text & CTAs */}
        <div className="flex flex-col items-start text-left">
          
          {/* Polished Clean Badge */}
          <div className="hero-anim-item mb-6 inline-flex items-center gap-2.5 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary-soft)] px-4 py-2 text-xs font-semibold tracking-wide text-[var(--color-primary)] shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
            <span className="flex items-center gap-1.5">
              <Sparkles size={13} className="text-[var(--color-primary)]" /> New Course Live · Enroll & Learn Today
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-anim-item text-4xl font-black tracking-tight text-[var(--color-heading)] sm:text-5xl lg:text-6xl leading-[1.08]">
            Build your future with{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] via-blue-600 to-[var(--color-accent)] bg-clip-text text-transparent">
              industry-ready courses.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="hero-anim-item mt-6 text-lg leading-relaxed text-[var(--color-muted)] max-w-xl font-normal">
            We provide top-tier, project-based courses designed and taught by elite industry experts. Gain hands-on practical skills, live mentorship, and dedicated placement support to fast-track your career.
          </p>

          {/* CTA Buttons */}
          <div className="hero-anim-item mt-8 flex flex-col w-full gap-3.5 sm:flex-row sm:w-auto">
            <Link
              to="/courses"
              className="group relative flex items-center justify-center gap-3 rounded-[var(--radius-btn)] bg-[var(--color-primary)] px-7 py-4 font-bold text-white shadow-xl shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-2xl active:translate-y-0"
            >
              Explore All Courses
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1.5"
              />
            </Link>

            {/* Book Free Counselor External Button */}
            <a
              href="https://vidyaudbhav.com/our-counsellors"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-6 py-4 font-semibold text-[var(--color-text)] shadow-sm transition-all duration-200 hover:border-[var(--color-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-heading)]"
            >
              <PhoneCall size={20} className="text-[var(--color-primary)]" />
              Book Free Counselor
            </a>
          </div>

          {/* Key Perks Checkmarks */}
          <div className="hero-anim-item mt-8 flex flex-wrap gap-y-2.5 gap-x-6 text-xs font-semibold text-[var(--color-text)]">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--color-success)] shrink-0" />
              <span>100% Practical Curriculum</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--color-success)] shrink-0" />
              <span>1-on-1 Mentorship</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--color-success)] shrink-0" />
              <span>Verified Certificates</span>
            </div>
          </div>

          {/* Stat Row */}
          <div className="hero-anim-item mt-10 grid grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-6 w-full">
            <div>
              <p className="font-mono text-2xl font-black text-[var(--color-heading)]">
                <span ref={(el) => (statRefs.current[0] = el)} data-target="150" data-suffix="k">0k+</span>
              </p>
              <p className="mt-1 text-xs font-semibold text-[var(--color-muted)]">Active Learners</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-black text-[var(--color-heading)]">
                <span ref={(el) => (statRefs.current[1] = el)} data-target="94" data-suffix="%">0%</span>
              </p>
              <p className="mt-1 text-xs font-semibold text-[var(--color-muted)]">Placement Rate</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-black text-[var(--color-heading)]">
                <span ref={(el) => (statRefs.current[2] = el)} data-target="350" data-suffix="+">0+</span>
              </p>
              <p className="mt-1 text-xs font-semibold text-[var(--color-muted)]">Expert Mentors</p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Course Catalog Visual Card */}
        <div ref={rightCardRef} className="relative mt-6 lg:mt-0">
          <div className="relative rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg-surface)]/90 p-6 shadow-2xl shadow-slate-200/60 backdrop-blur-2xl ring-1 ring-slate-900/5">
            
            {/* Header inside Card */}
            <div className="mb-5 flex items-center justify-between border-b border-[var(--color-border)] pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] border border-[var(--color-primary)]/20 text-[var(--color-primary)]">
                  <BookOpen size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-[var(--color-muted)] uppercase">Top Featured Programs</p>
                  <p className="text-sm sm:text-base font-bold text-[var(--color-heading)]">Choose Your Career Path</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700">
                Live Cohorts
              </span>
            </div>

            {/* List of Courses */}
            <div className="space-y-3.5">
              {POPULAR_COURSES.map((course, index) => {
                const IconComponent = course.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-center justify-between rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg-main)]/70 p-4 transition-all duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-bg-surface)] hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-gradient-to-br ${course.color} text-white shadow-md`}>
                        <IconComponent size={22} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[var(--color-muted)]">{course.category}</span>
                          <span className="h-1 w-1 rounded-full bg-[var(--color-border)]" />
                          <span className="flex items-center gap-1 text-xs font-bold text-[var(--color-accent)]">
                            <Star size={12} fill="currentColor" /> {course.rating}
                          </span>
                        </div>
                        <h3 className="mt-0.5 text-sm sm:text-base font-bold text-[var(--color-heading)] group-hover:text-[var(--color-primary)] transition-colors">
                          {course.title}
                        </h3>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block rounded-lg bg-[var(--color-primary-soft)] border border-[var(--color-primary)]/20 px-2.5 py-1 text-[11px] font-semibold text-[var(--color-primary)]">
                      {course.badge}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Footer banner inside card */}
            <div className="mt-5 flex items-center justify-between rounded-[var(--radius-card)] border border-[var(--color-primary)]/20 bg-gradient-to-r from-[var(--color-primary-soft)] to-orange-50/40 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent)] text-white font-bold text-xs shadow-md">
                  🔥
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--color-heading)]">Looking for something else?</p>
                  <p className="text-[11px] text-[var(--color-muted)]">Browse 20+ specialized tech & business courses</p>
                </div>
              </div>
              <Link
                to="/courses"
                className="text-xs font-bold text-[var(--color-primary)] hover:text-blue-700 flex items-center gap-1 transition-colors"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}