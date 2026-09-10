import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaPlayCircle,
  FaCheckCircle,
  FaBars,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import API from "../utils/axios";

function getYoutubeEmbedUrl(url) {
  if (!url) return "";

  let embedUrl = url;

  if (!url.includes("youtube.com/embed")) {
    try {
      const parsed = new URL(url);

      if (parsed.hostname.includes("youtu.be")) {
        embedUrl = `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
      } else {
        const v = parsed.searchParams.get("v");

        if (v) {
          embedUrl = `https://www.youtube.com/embed/${v}`;
        }
      }
    } catch {}
  } else {
    embedUrl = url.split("?")[0];
  }

  return `${embedUrl}?modestbranding=1&rel=0&iv_load_policy=3&controls=1`;
}

export default function CoursePlayer() {
  const { courseId } = useParams();

  /*
   * Sidebar starts open.
   * It can now slide in/out on BOTH desktop and mobile.
   */
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [course, setCourse] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [marking, setMarking] = useState(false);
  const [subtitles, setSubtitles] = useState(false);
  const [quality, setQuality] = useState("hd1080");
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const [showDoubtModal, setShowDoubtModal] = useState(false);
  const [doubtForm, setDoubtForm] = useState({ title: "", description: "", priority: "Normal" });
  const [submittingDoubt, setSubmittingDoubt] = useState(false);

  const QUALITIES = [
    { label: "1080p HD", value: "hd1080" },
    { label: "720p HD", value: "hd720" },
    { label: "480p", value: "large" },
    { label: "360p", value: "medium" },
    { label: "240p", value: "small" },
  ];

  /*
   * Prevent background page scrolling
   */
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /*
   * Close quality menu when clicking anywhere outside
   */
  useEffect(() => {
    if (!showQualityMenu) return;

    const close = () => setShowQualityMenu(false);

    document.addEventListener("click", close);

    return () => document.removeEventListener("click", close);
  }, [showQualityMenu]);

  /*
   * Fetch course
   */
  useEffect(() => {
    if (!courseId) return;

    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError("");

        const courseRes = await API.get(`/courses/${courseId}`);
        const c = courseRes.data.data;

        if (!c) {
          setError("Course not found.");
          return;
        }

        setCourse(c);

        /*
         * Set first lesson as active
         */
        if (
          c.modules?.length > 0 &&
          c.modules[0].lessons?.length > 0
        ) {
          setActiveLesson(c.modules[0].lessons[0]);
        } else if (c.youtubeUrl || c.videoFile) {
          setActiveLesson({
            _id: "main-video",
            title: c.title,
            videoUrl: c.youtubeUrl || c.videoFile,
            videoType: c.videoType || "youtube",
            duration: c.duration || "",
            isFree: false,
          });
        }

        /*
         * Get student's purchased courses
         * and completed lessons
         */
        try {
          const profileRes = await API.get("/auth/profile");

          const purchased =
            profileRes.data.data?.purchasedCourses || [];

          const enrollment = purchased.find(
            (pc) =>
              pc.course?._id?.toString() === courseId ||
              pc.course?.toString() === courseId ||
              pc._id?.toString() === courseId
          );

          if (enrollment) {
            const cl = enrollment.completedLessons;

            setCompletedLessons(
              Array.isArray(cl) ? cl : []
            );
          }
        } catch {}
      } catch (err) {
        console.error("Course fetch error:", err);

        setError(
          err.response?.data?.message ||
            "Failed to load course."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  /*
   * Mark current lesson as complete
   */
  const handleMarkComplete = async () => {
    if (
      !activeLesson ||
      marking ||
      activeLesson._id === "main-video"
    ) {
      return;
    }

    try {
      setMarking(true);

      const { data } = await API.post(
        "/auth/lesson-complete",
        {
          courseId,
          lessonId: activeLesson._id,
        }
      );

      setCompletedLessons(
        data.completedLessons || []
      );
    } catch (err) {
      console.error(err);
    } finally {
      setMarking(false);
    }
  };

  /*
   * Check whether course has modules
   */
  const hasModules =
    course?.modules?.length > 0 &&
    course.modules.some(
      (m) => m.lessons.length > 0
    );

  /*
   * Total lessons
   */
  const totalLessons = hasModules
    ? course.modules.reduce(
        (s, m) => s + m.lessons.length,
        0
      )
    : 1;

  /*
   * Course progress
   */
  const progress =
    totalLessons > 0
      ? Math.round(
          (completedLessons.length / totalLessons) * 100
        )
      : 0;

  /*
   * Check completed lesson
   */
  const isCompleted = (lessonId) =>
    Array.isArray(completedLessons) &&
    completedLessons.includes(
      lessonId?.toString()
    );

  /*
   * Build YouTube URL
   */
  const buildYoutubeUrl = (url) => {
    const base = getYoutubeEmbedUrl(url);

    if (!base) return "";

    const params = new URLSearchParams({
      modestbranding: "1",
      rel: "0",
      iv_load_policy: "3",
      controls: "1",
      cc_load_policy: subtitles ? "1" : "0",
      cc_lang_pref: "en",
      vq: quality,
    });

    return `${base.split("?")[0]}?${params.toString()}`;
  };

  /*
   * Current video URL
   */
  const videoUrl = activeLesson
    ? activeLesson.videoType === "youtube"
      ? buildYoutubeUrl(activeLesson.videoUrl)
      : activeLesson.videoUrl
    : "";

  /*
   * When selecting a lesson:
   *
   * Desktop:
   * Keep drawer open so user can continue browsing lessons.
   *
   * Mobile:
   * Close drawer so video gets full screen.
   */
  const handleLessonSelect = (lesson) => {
    setActiveLesson(lesson);

    /*
     * On small screens automatically close drawer
     */
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  /*
   * ---------- LOADING ----------
   */
  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#050a1f] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />

          <p className="text-slate-400 font-semibold text-sm">
            Loading course...
          </p>
        </div>
      </div>
    );
  }

  /*
   * ---------- ERROR ----------
   */
  if (error || !course) {
    return (
      <div className="fixed inset-0 bg-[#050a1f] flex items-center justify-center z-50">
        <div className="text-center max-w-md px-6">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-red-400 text-3xl">
            ✕
          </div>

          <h2 className="text-white font-black text-xl mb-2">
            Course Not Available
          </h2>

          <p className="text-slate-400 text-sm mb-6">
            {error ||
              "This course could not be loaded."}
          </p>

          <Link
            to="/student/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition"
          >
            <FaArrowLeft size={12} />
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  /*
   * ---------- MAIN PLAYER ----------
   */
  return (
    <div className="fixed inset-0 bg-[#050a1f] text-slate-100 flex flex-col z-50 overflow-hidden">

      {/* =========================================================
          HEADER
      ========================================================== */}

      <header className="h-14 bg-[#03071b]/95 backdrop-blur-xl border-b border-white/[0.07] px-3 sm:px-6 flex items-center justify-between shrink-0 z-50">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 min-w-0">

          <Link
            to="/student/dashboard"
            className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/[0.06] text-slate-300 hover:bg-indigo-500/10 hover:border-indigo-500/20 hover:text-white text-xs font-bold transition"
          >
            <FaArrowLeft size={11} />

            <span className="hidden xs:inline">
              Dashboard
            </span>

            <span className="xs:hidden">
              Back
            </span>
          </Link>

          <div className="h-5 w-px bg-white/[0.08] hidden sm:block" />

          <h1 className="text-xs sm:text-sm font-bold text-white truncate max-w-[180px] sm:max-w-[420px]">
            {course.title}
          </h1>

        </div>


        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">

          {/* Progress */}
          <div className="hidden sm:flex items-center gap-2">

            <span className="text-[11px] text-slate-400">
              {progress}% Complete
            </span>

            <div className="w-20 sm:w-28 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

          </div>


          {/* MOBILE / GENERAL SIDEBAR BUTTON */}
          <button
            onClick={() =>
              setSidebarOpen((prev) => !prev)
            }
            aria-label={
              sidebarOpen
                ? "Close course content"
                : "Open course content"
            }
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition-all duration-300"
          >
            {sidebarOpen ? (
              <>
                <FaTimes size={13} />

                <span className="hidden sm:inline text-[10px] font-bold">
                  Close Lessons
                </span>
              </>
            ) : (
              <>
                <FaBars size={13} />

                <span className="hidden sm:inline text-[10px] font-bold">
                  Lessons
                </span>
              </>
            )}
          </button>

        </div>

      </header>


      {/* =========================================================
          BODY
      ========================================================== */}

      <div className="relative flex-1 flex overflow-hidden">


        {/* =======================================================
            VIDEO AREA
        ======================================================== */}

        <div className="flex-1 flex flex-col overflow-y-auto min-w-0">

          {activeLesson && videoUrl ? (
            <>
              {/* =================================================
                  VIDEO PLAYER
              ================================================== */}

              <div
                className="w-full bg-black flex-shrink-0 relative"
                style={{
                  aspectRatio: "16/9",
                  maxHeight: "72vh",
                }}
              >

                {activeLesson.videoType === "youtube" ? (
                  <>
                    <iframe
                      key={`${activeLesson._id}-${subtitles}-${quality}`}
                      src={videoUrl}
                      title={activeLesson.title}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />


                    {/* =================================================
                        VIDEO CONTROLS BAR
                    ================================================== */}

                    <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent z-10">

                      {/* SUBTITLES */}
                      <button
                        onClick={() =>
                          setSubtitles((p) => !p)
                        }
                        title={
                          subtitles
                            ? "Turn off subtitles"
                            : "Turn on subtitles"
                        }
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                          subtitles
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                            : "bg-white/10 text-white hover:bg-white/20"
                        }`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9 8H5v-2h6v2zm8 0h-6v-2h6v2zm-8 4H5v-2h6v2zm8 0h-6v-2h6v2z" />
                        </svg>

                        CC
                      </button>


                      {/* QUALITY */}
                      <div className="relative">

                        <button
                          onClick={(e) => {
                            e.stopPropagation();

                            setShowQualityMenu(
                              (p) => !p
                            );
                          }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 text-white hover:bg-white/20 transition"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                          </svg>

                          <span className="hidden sm:inline">
                            {
                              QUALITIES.find(
                                (q) =>
                                  q.value === quality
                              )?.label
                            }
                          </span>

                          <span className="sm:hidden">
                            HD
                          </span>
                        </button>


                        {showQualityMenu && (
                          <div className="absolute bottom-10 left-0 bg-[#0b122e] border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl shadow-black/50 z-30 min-w-[120px]">

                            {QUALITIES.map((q) => (
                              <button
                                key={q.value}
                                onClick={() => {
                                  setQuality(q.value);
                                  setShowQualityMenu(
                                    false
                                  );
                                }}
                                className={`w-full text-left px-4 py-2.5 text-xs font-semibold transition ${
                                  quality === q.value
                                    ? "bg-indigo-600 text-white"
                                    : "text-slate-300 hover:bg-white/[0.05]"
                                }`}
                              >
                                {q.label}
                              </button>
                            ))}

                          </div>
                        )}

                      </div>

                    </div>
                  </>
                ) : (
                  <video
                    key={activeLesson._id}
                    src={videoUrl}
                    controls
                    autoPlay
                    className="absolute inset-0 w-full h-full"
                  />
                )}

              </div>


              {/* =================================================
                  LESSON INFO
              ================================================== */}

              <div className="p-5 sm:p-6 max-w-5xl w-full mx-auto flex-1">

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-white/[0.07]">

                  <div>

                    <h2 className="text-base sm:text-lg font-black text-white leading-snug">
                      {activeLesson.title}
                    </h2>

                    {activeLesson.duration && (
                      <p className="text-xs text-slate-500 mt-1">
                        ⏱ {activeLesson.duration}
                      </p>
                    )}

                  </div>


                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        setDoubtForm({ title: `Doubt about: ${activeLesson.title}`, description: "", priority: "Normal" });
                        setShowDoubtModal(true);
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-600 hover:text-white transition"
                    >
                      <FaCommentDots size={13} /> Ask Doubt
                    </button>

                    {activeLesson._id !== "main-video" && (
                      <button
                        onClick={handleMarkComplete}
                        disabled={marking || isCompleted(activeLesson._id)}
                        className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                          isCompleted(activeLesson._id)
                            ? "bg-emerald-600/15 border border-emerald-500/30 text-emerald-400 cursor-default"
                            : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20"
                        }`}
                      >
                        <FaCheckCircle size={13} />
                        {isCompleted(activeLesson._id) ? "Completed ✓" : marking ? "Saving..." : "Mark as Complete"}
                      </button>
                    )}
                  </div>

                </div>


                {/* COURSE META */}

                <div className="mt-4 flex flex-wrap gap-3 sm:gap-4 text-xs text-slate-500">

                  <span className="flex items-center gap-1.5">
                    📚 {course.category}
                  </span>

                  <span className="flex items-center gap-1.5">
                    👨‍🏫 {course.instructor}
                  </span>

                  {course.level && (
                    <span className="flex items-center gap-1.5">
                      📊 {course.level}
                    </span>
                  )}

                  {course.language && (
                    <span className="flex items-center gap-1.5">
                      🌐 {course.language}
                    </span>
                  )}

                </div>

              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">

              <div className="w-20 h-20 bg-white/[0.04] border border-white/[0.06] rounded-full flex items-center justify-center mb-4 text-4xl">
                📭
              </div>

              <p className="text-slate-300 font-bold text-lg">
                No video available
              </p>

              <p className="text-slate-500 text-sm mt-2">
                The instructor hasn't added any
                video content yet.
              </p>

              <Link
                to="/student/dashboard"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition"
              >
                <FaArrowLeft size={11} />
                Back to Dashboard
              </Link>

            </div>
          )}

        </div>


        {/* =======================================================
            SIDEBAR BACKDROP
            Appears when drawer is open.
        ======================================================== */}

        {sidebarOpen && (
          <button
            aria-label="Close course content"
            onClick={() => setSidebarOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-30 lg:bg-black/20"
          />
        )}


        {/* =======================================================
            COURSE CONTENT DRAWER
        ======================================================== */}

        <aside
          className={`
            absolute
            right-0
            top-0
            h-full
            w-[85vw]
            max-w-[340px]
            sm:w-[340px]
            bg-[#070d24]
            border-l
            border-white/[0.08]
            flex
            flex-col
            z-40
            shadow-[-20px_0_60px_rgba(0,0,0,0.35)]
            transition-transform
            duration-300
            ease-out

            ${
              sidebarOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >

          {/* =====================================================
              SIDEBAR HEADER
          ====================================================== */}

          <div className="p-4 border-b border-white/[0.07] flex items-center justify-between shrink-0 bg-[#080e27]/95 backdrop-blur-xl">

            <div className="min-w-0">

              <h3 className="text-xs font-black uppercase tracking-wider text-slate-200">
                Course Content
              </h3>

              <p className="text-[10px] text-slate-600 mt-1">
                Continue your learning journey
              </p>

            </div>


            <div className="flex items-center gap-2">

              <span className="text-[10px] font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/10 px-2 py-1 rounded-full whitespace-nowrap">
                {totalLessons} lesson
                {totalLessons !== 1
                  ? "s"
                  : ""}
              </span>


              {/* CLOSE BUTTON */}
              <button
                onClick={() =>
                  setSidebarOpen(false)
                }
                aria-label="Close course content"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:bg-indigo-500/10 hover:border-indigo-500/20 hover:text-white transition"
              >
                <FaTimes size={12} />
              </button>

            </div>

          </div>


          {/* =====================================================
              PROGRESS
          ====================================================== */}

          <div className="px-4 py-3 border-b border-white/[0.06] bg-[#050a20]">

            <div className="flex items-center justify-between mb-2">

              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Your Progress
              </span>

              <span className="text-[10px] font-black text-indigo-300">
                {progress}%
              </span>

            </div>

            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">

              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>


          {/* =====================================================
              LESSON LIST
          ====================================================== */}

          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">

            {/* SINGLE VIDEO COURSE */}

            {!hasModules && activeLesson && (
              <button
                onClick={() =>
                  handleLessonSelect(
                    activeLesson
                  )
                }
                className="w-full text-left px-4 py-4 flex items-start gap-3 bg-indigo-600/10 border-l-2 border-indigo-500 hover:bg-indigo-600/15 transition"
              >

                <FaPlayCircle
                  className="text-indigo-400 mt-0.5 shrink-0"
                  size={15}
                />

                <div className="flex-1 min-w-0">

                  <p className="text-xs font-semibold text-white leading-snug truncate">
                    {course.title}
                  </p>

                  <p className="text-[10px] text-slate-500 mt-1">
                    Full Course Video
                  </p>

                </div>

              </button>
            )}


            {/* MODULES */}

            {hasModules &&
              course.modules?.map(
                (mod, mIdx) => (
                  <div key={mod._id}>

                    {/* SECTION HEADER */}

                    <div className="px-4 py-3 bg-[#0b122e] border-b border-white/[0.06] sticky top-0 z-10">

                      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-indigo-400">
                        Section {mIdx + 1}
                      </p>

                      <p className="text-xs font-bold text-slate-200 mt-1 leading-snug">
                        {mod.title}
                      </p>

                      <p className="text-[10px] text-slate-600 mt-1">
                        {mod.lessons.length} lesson
                        {mod.lessons.length !==
                        1
                          ? "s"
                          : ""}
                      </p>

                    </div>


                    {/* LESSONS */}

                    <div className="divide-y divide-white/[0.04]">

                      {mod.lessons.map(
                        (lesson, lIdx) => {

                          const active =
                            activeLesson?._id ===
                            lesson._id;

                          const done =
                            isCompleted(
                              lesson._id
                            );

                          return (
                            <button
                              key={lesson._id}
                              onClick={() =>
                                handleLessonSelect(
                                  lesson
                                )
                              }
                              className={`
                                w-full
                                text-left
                                px-4
                                py-3.5
                                flex
                                items-start
                                gap-3
                                transition-all
                                duration-200
                                border-l-2
                                ${
                                  active
                                    ? "bg-indigo-600/15 border-indigo-500"
                                    : "hover:bg-white/[0.035] border-transparent"
                                }
                              `}
                            >

                              {/* NUMBER / STATUS */}

                              <div className="mt-0.5 shrink-0">

                                {done ? (
                                  <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500/10">
                                    <FaCheckCircle
                                      className="text-emerald-400"
                                      size={13}
                                    />
                                  </div>
                                ) : active ? (
                                  <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-indigo-500/15">
                                    <FaPlayCircle
                                      className="text-indigo-400"
                                      size={13}
                                    />
                                  </div>
                                ) : (
                                  <div className="w-[18px] h-[18px] rounded-full border border-slate-700 flex items-center justify-center text-[8px] text-slate-500 font-bold">
                                    {lIdx + 1}
                                  </div>
                                )}

                              </div>


                              {/* LESSON INFO */}

                              <div className="flex-1 min-w-0">

                                <p
                                  className={`
                                    text-xs
                                    font-semibold
                                    leading-snug
                                    ${
                                      active
                                        ? "text-white"
                                        : done
                                        ? "text-slate-400"
                                        : "text-slate-400"
                                    }
                                  `}
                                >
                                  {lesson.title}
                                </p>


                                <div className="flex items-center gap-2 mt-1.5">

                                  {lesson.duration && (
                                    <span className="text-[10px] text-slate-600">
                                      {lesson.duration}
                                    </span>
                                  )}


                                  {lesson.isFree && (
                                    <span className="text-[9px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/10 px-1.5 py-0.5 rounded">
                                      FREE
                                    </span>
                                  )}

                                </div>

                              </div>


                              {/* ACTIVE INDICATOR */}

                              {active && (
                                <FaChevronRight
                                  className="text-indigo-400 mt-1 shrink-0"
                                  size={9}
                                />
                              )}

                            </button>
                          );
                        }
                      )}

                    </div>

                  </div>
                )
              )}


            {/* NO CONTENT */}

            {!hasModules &&
              !activeLesson && (
                <div className="p-6 text-center">

                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-3">
                    📚
                  </div>

                  <p className="text-xs text-slate-500">
                    No content added yet.
                  </p>

                </div>
              )}

          </div>

        </aside>


        {/* =======================================================
            FLOATING DRAWER ARROW
            This stays visible even when drawer is closed.
        ======================================================== */}

        <button
          onClick={() =>
            setSidebarOpen((prev) => !prev)
          }
          aria-label={
            sidebarOpen
              ? "Close course lessons"
              : "Open course lessons"
          }
          className={`
            absolute
            top-1/2
            -translate-y-1/2
            z-50
            flex
            items-center
            justify-center
            h-11
            w-8
            sm:h-12
            sm:w-9
            rounded-l-xl
            border
            border-indigo-400/20
            bg-[#101936]/95
            backdrop-blur-xl
            text-indigo-300
            shadow-[-5px_0_25px_rgba(0,0,0,0.3)]
            hover:bg-indigo-600
            hover:text-white
            hover:border-indigo-400/40
            transition-all
            duration-300
            ${
              sidebarOpen
                ? "right-[85vw] sm:right-[340px] lg:right-[340px]"
                : "right-0"
            }
          `}
        >
          {sidebarOpen ? (
            <FaChevronRight size={11} />
          ) : (
            <FaChevronLeft size={11} />
          )}
        </button>

      </div>

      {/* DOUBT MODAL */}
      {showDoubtModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-[#0B1022] shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <FaCommentDots />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Ask a Doubt</h2>
                  <p className="text-[11px] text-slate-500 mt-0.5 truncate max-w-[220px]">{activeLesson?.title}</p>
                </div>
              </div>
              <button onClick={() => setShowDoubtModal(false)}
                className="h-8 w-8 flex items-center justify-center rounded-xl border border-slate-800 text-slate-500 hover:text-white hover:bg-slate-800 transition">
                <FaTimes size={13} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Your Question *</label>
                <input type="text" value={doubtForm.title}
                  onChange={(e) => setDoubtForm((p) => ({ ...p, title: e.target.value }))}
                  placeholder="Write a short title for your question"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-200 outline-none placeholder:text-slate-600 focus:border-indigo-500 transition" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Explain in detail *</label>
                <textarea rows={4} value={doubtForm.description}
                  onChange={(e) => setDoubtForm((p) => ({ ...p, description: e.target.value }))}
                  placeholder="Describe your problem in detail..."
                  className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm leading-6 text-slate-200 outline-none placeholder:text-slate-600 focus:border-indigo-500 transition" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Normal", "Important"].map((p) => (
                  <button key={p} type="button" onClick={() => setDoubtForm((prev) => ({ ...prev, priority: p }))}
                    className={`rounded-xl border px-4 py-2.5 text-left text-xs font-semibold transition ${
                      doubtForm.priority === p
                        ? "border-indigo-500/40 bg-indigo-500/10 text-indigo-300"
                        : "border-slate-800 bg-slate-950 text-slate-500 hover:border-slate-700"
                    }`}>
                    {p}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 pt-1">
                <button type="button" onClick={() => setShowDoubtModal(false)}
                  className="flex-1 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-900 transition">
                  Cancel
                </button>
                <button type="button" disabled={submittingDoubt}
                  onClick={async () => {
                    if (!doubtForm.title.trim() || !doubtForm.description.trim()) {
                      alert("Please fill all required fields.");
                      return;
                    }
                    try {
                      setSubmittingDoubt(true);
                      await API.post("/doubts", {
                        courseId,
                        lesson: activeLesson?.title || "",
                        title: doubtForm.title,
                        description: doubtForm.description,
                        priority: doubtForm.priority,
                      });
                      setShowDoubtModal(false);
                    } catch (err) {
                      alert(err.response?.data?.message || "Failed to submit doubt.");
                    } finally {
                      setSubmittingDoubt(false);
                    }
                  }}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-xs font-bold text-white hover:from-indigo-500 hover:to-violet-500 transition disabled:opacity-50">
                  <FaPaperPlane size={11} />
                  {submittingDoubt ? "Submitting..." : "Submit Doubt"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}