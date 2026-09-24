import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  FaComments,
  FaPlus,
  FaClock,
  FaCheckCircle,
  FaTimes,
  FaPaperPlane,
  FaChevronRight,
} from "react-icons/fa";
import API from "../utils/axios";

function DoubtSupport({ purchasedCourses = [] }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedDoubt, setSelectedDoubt] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [doubts, setDoubts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [replyMsg, setReplyMsg] = useState("");
  const [sendingReply, setSendingReply] = useState(false);

  const [form, setForm] = useState({
    courseId: "",
    lesson: "",
    title: "",
    description: "",
    priority: "Normal",
  });

  // Fetch doubts
  useEffect(() => {
    fetchDoubts();
  }, []);

  // Lock body scroll while modal is open
  useEffect(() => {
    const modalOpen = showForm || selectedDoubt;
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showForm, selectedDoubt]);

  const fetchDoubts = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/doubts");
      setDoubts(data.data || []);
    } catch (err) {
      console.error("Failed to fetch doubts:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchDoubtById = async (id) => {
    try {
      const { data } = await API.get(`/doubts/${id}`);
      setSelectedDoubt(data.data);
    } catch (err) {
      console.error("Failed to fetch doubt:", err);
    }
  };

  const pendingDoubts = doubts.filter((d) => d.status === "Pending").length;
  const answeredDoubts = doubts.filter((d) => d.status === "Answered").length;

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const openForm = () => {
    setForm({
      courseId: purchasedCourses?.[0]?._id || "",
      lesson: "",
      title: "",
      description: "",
      priority: "Normal",
    });
    setShowForm(true);
  };

  const closeForm = () => {
    if (submitting) return;
    setShowForm(false);
    setForm({ courseId: "", lesson: "", title: "", description: "", priority: "Normal" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.courseId || !form.title.trim() || !form.description.trim()) {
      alert("Please fill all required fields.");
      return;
    }
    try {
      setSubmitting(true);
      await API.post("/doubts", {
        courseId: form.courseId,
        lesson: form.lesson,
        title: form.title,
        description: form.description,
        priority: form.priority,
      });
      await fetchDoubts();
      setShowForm(false);
      setForm({ courseId: "", lesson: "", title: "", description: "", priority: "Normal" });
    } catch (err) {
      alert(err.response?.data?.message || "Unable to submit doubt.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSendReply = async () => {
    if (!replyMsg.trim() || !selectedDoubt) return;
    try {
      setSendingReply(true);
      const { data } = await API.post(`/doubts/${selectedDoubt._id}/messages`, {
        message: replyMsg.trim(),
      });
      setSelectedDoubt(data.data);
      setReplyMsg("");
      setDoubts((prev) =>
        prev.map((d) => (d._id === data.data._id ? { ...d, status: data.data.status } : d))
      );
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send message.");
    } finally {
      setSendingReply(false);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  };

  return (
    <>
      {/* =========================
          MAIN DOUBT SUPPORT
      ========================== */}
      <div className="space-y-6">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <FaComments />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Doubt Support
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Ask questions and get help from our support team
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={openForm}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 hover:from-indigo-500 hover:to-violet-500 transition"
          >
            <FaPlus size={12} />
            Ask a Doubt
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SupportStat icon={<FaComments />} label="Total Doubts" value={doubts.length} color="indigo" />
          <SupportStat icon={<FaClock />} label="Pending" value={pendingDoubts} color="amber" />
          <SupportStat icon={<FaCheckCircle />} label="Answered" value={answeredDoubts} color="emerald" />
        </div>

        {/* INFO */}
        <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-5">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <FaComments size={15} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                How Doubt Support works
              </h3>
              <p className="mt-1 text-xs text-slate-500 leading-5">
                Submit your question → Our support team reviews it → You receive the answer here in your dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* QUESTIONS LIST */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">

          <div className="px-6 py-5 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">My Questions</h3>
                <p className="text-xs text-slate-500 mt-1">Track all your submitted doubts</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
                {doubts.length} Total
              </span>
            </div>
          </div>

          {loading ? (
            <div className="py-16 text-center text-slate-500 text-sm">
              Loading doubts...
            </div>
          ) : doubts.length === 0 ? (
            <EmptyState onClick={openForm} />
          ) : (
            <div className="divide-y divide-slate-100">
              {doubts.map((doubt) => (
                <DoubtItem
                  key={doubt._id}
                  doubt={doubt}
                  formatDate={formatDate}
                  onClick={() => fetchDoubtById(doubt._id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* =========================
          ASK DOUBT MODAL
      ========================== */}
      {showForm &&
        createPortal(
          <DoubtFormModal
            form={form}
            submitting={submitting}
            purchasedCourses={purchasedCourses}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onClose={closeForm}
          />,
          document.body
        )}

      {/* =========================
          DETAIL MODAL
      ========================== */}
      {selectedDoubt &&
        createPortal(
          <DoubtDetailModal
            doubt={selectedDoubt}
            replyMsg={replyMsg}
            sendingReply={sendingReply}
            onReplyChange={setReplyMsg}
            onSendReply={handleSendReply}
            onClose={() => setSelectedDoubt(null)}
            formatDate={formatDate}
          />,
          document.body
        )}
    </>
  );
}


/* =====================================================
   SUPPORT STAT
===================================================== */

function SupportStat({ icon, label, value, color }) {
  const colors = {
    indigo: "bg-indigo-50 border-indigo-200 text-indigo-600",
    amber: "bg-amber-50 border-amber-200 text-amber-600",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className={`h-10 w-10 rounded-xl border flex items-center justify-center ${colors[color]}`}>
          {icon}
        </div>
        <span className="text-2xl font-extrabold text-slate-900">{value}</span>
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
    </div>
  );
}


/* =====================================================
   DOUBT ITEM
===================================================== */

function DoubtItem({ doubt, onClick, formatDate }) {
  const courseTitle = doubt.course?.title || doubt.course || "";

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left p-5 hover:bg-slate-50 transition group"
    >
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 shrink-0 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500">
          <FaComments size={14} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h4 className="text-sm font-bold text-slate-800 truncate group-hover:text-slate-900 transition">
              {doubt.title}
            </h4>
            <StatusBadge status={doubt.status} />
          </div>

          <p className="mt-1 text-xs text-indigo-600 font-medium">{courseTitle}</p>

          {doubt.lesson && (
            <p className="mt-1 text-xs text-slate-400">{doubt.lesson}</p>
          )}

          <p className="mt-3 text-xs text-slate-500 line-clamp-2 leading-5">
            {doubt.description}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-[10px] text-slate-400">{formatDate(doubt.createdAt)}</span>
            <PriorityBadge priority={doubt.priority} />
          </div>
        </div>

        <FaChevronRight
          size={12}
          className="mt-3 text-slate-300 group-hover:text-indigo-400 transition"
        />
      </div>
    </button>
  );
}


/* =====================================================
   ASK DOUBT MODAL
===================================================== */

function DoubtFormModal({ form, submitting, purchasedCourses, onChange, onSubmit, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[99999] w-screen h-[100dvh] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !submitting) onClose();
      }}
    >
      <div
        className="relative flex w-full max-w-2xl max-h-[calc(100dvh-32px)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <FaComments />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Ask a Doubt</h2>
              <p className="text-xs text-slate-500">Our support team will review your question</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={submitting}
            className="h-9 w-9 shrink-0 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition disabled:opacity-40"
          >
            <FaTimes />
          </button>
        </div>

        {/* SCROLLABLE FORM CONTENT */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <form onSubmit={onSubmit} className="p-6 space-y-5">

            {/* COURSE */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Course *
              </label>
              <select
                value={form.courseId}
                onChange={(e) => onChange("courseId", e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition"
              >
                <option value="">Select your purchased course</option>
                {purchasedCourses.map((course) => (
                  <option key={course._id} value={course._id}>{course.title}</option>
                ))}
              </select>
            </div>

            {/* LESSON */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Lesson / Topic
              </label>
              <input
                type="text"
                value={form.lesson}
                onChange={(e) => onChange("lesson", e.target.value)}
                placeholder="e.g. Facebook Ads, React Hooks, MongoDB..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition"
              />
            </div>

            {/* TITLE */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                What is your doubt? *
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => onChange("title", e.target.value)}
                placeholder="Write a short title for your question"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Explain your doubt *
              </label>
              <textarea
                rows={5}
                value={form.description}
                onChange={(e) => onChange("description", e.target.value)}
                placeholder="Explain your problem in detail..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition"
              />
            </div>

            {/* PRIORITY */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Priority
              </label>
              <div className="grid grid-cols-2 gap-3">
                <PriorityButton
                  active={form.priority === "Normal"}
                  title="Normal"
                  description="General question"
                  onClick={() => onChange("priority", "Normal")}
                />
                <PriorityButton
                  active={form.priority === "Important"}
                  title="Important"
                  description="Blocking your learning"
                  onClick={() => onChange("priority", "Important")}
                />
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2 pb-1">
              <button
                type="button"
                onClick={onClose}
                disabled={submitting}
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition disabled:opacity-40"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 hover:from-indigo-500 hover:to-violet-500 transition disabled:opacity-50"
              >
                <FaPaperPlane size={13} />
                {submitting ? "Submitting..." : "Submit Doubt"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}


/* =====================================================
   PRIORITY BUTTON
===================================================== */

function PriorityButton({ active, title, description, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-3 text-left transition ${active
          ? "border-indigo-300 bg-indigo-50 text-indigo-700"
          : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300"
        }`}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-[10px] opacity-70">{description}</p>
    </button>
  );
}


/* =====================================================
   DETAIL MODAL
===================================================== */

function DoubtDetailModal({ doubt, replyMsg, sendingReply, onReplyChange, onSendReply, onClose, formatDate }) {
  const messagesEndRef = useRef(null);
  const courseTitle = doubt.course?.title || doubt.course || "";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [doubt.messages]);

  return (
    <div className="fixed inset-0 z-[99999] w-screen h-[100dvh] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-4">
      <div className="w-full max-w-xl max-h-[calc(100dvh-32px)] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl flex flex-col">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-slate-900">Doubt Details</h2>
              <StatusBadge status={doubt.status} />
            </div>
            <p className="mt-1 text-xs text-slate-500">{courseTitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-9 w-9 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition"
          >
            <FaTimes />
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto p-6">

          {/* QUESTION */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 mb-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-indigo-600">
                  Your Question
                </p>
                <h3 className="mt-2 text-base font-bold text-slate-900">{doubt.title}</h3>
              </div>
              <PriorityBadge priority={doubt.priority} />
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-7">{doubt.description}</p>
            <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400">
              <FaClock size={10} />
              {formatDate(doubt.createdAt)}
            </div>
          </div>

          {/* CONVERSATION */}
          <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-4">
            Conversation
          </p>

          <div className="space-y-4">
            {doubt.messages?.map((msg, idx) => (
              <div
                key={msg._id || idx}
                className={`flex ${msg.senderRole === "student" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.senderRole === "student"
                      ? "bg-indigo-600 text-white rounded-br-md"
                      : "bg-slate-100 border border-slate-200 text-slate-700 rounded-bl-md"
                    }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`text-[10px] font-bold ${msg.senderRole === "student" ? "text-indigo-200" : "text-violet-600"
                        }`}
                    >
                      {msg.senderRole === "student" ? "You" : "DigiCampus Support"}
                    </span>
                    <span className="text-[9px] text-slate-400">
                      {new Date(msg.createdAt).toLocaleTimeString("en-IN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p className="text-sm leading-6">{msg.message}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* REPLY BOX */}
        {doubt.status !== "Closed" && (
          <div className="border-t border-slate-100 px-6 py-4 shrink-0">
            <div className="flex gap-3">
              <input
                type="text"
                value={replyMsg}
                onChange={(e) => onReplyChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    onSendReply();
                  }
                }}
                placeholder="Type a follow-up message..."
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-500 transition"
              />
              <button
                type="button"
                onClick={onSendReply}
                disabled={!replyMsg.trim() || sendingReply}
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-500 transition disabled:opacity-40"
              >
                <FaPaperPlane size={13} />
                {sendingReply ? "..." : "Send"}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}


/* =====================================================
   STATUS BADGE
===================================================== */

function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-amber-50 border-amber-200 text-amber-600",
    "In Review": "bg-blue-50 border-blue-200 text-blue-600",
    Answered: "bg-emerald-50 border-emerald-200 text-emerald-600",
    Closed: "bg-slate-100 border-slate-200 text-slate-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-semibold ${styles[status] || styles.Pending
        }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}


/* =====================================================
   PRIORITY BADGE
===================================================== */

function PriorityBadge({ priority }) {
  if (priority === "Important") {
    return (
      <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-[9px] font-semibold text-amber-600">
        Important
      </span>
    );
  }
  return (
    <span className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-2 py-1 text-[9px] font-semibold text-slate-500">
      Normal
    </span>
  );
}


/* =====================================================
   EMPTY STATE
===================================================== */

function EmptyState({ onClick }) {
  return (
    <div className="py-16 px-6 text-center">
      <div className="h-16 w-16 mx-auto rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-300">
        <FaComments size={25} />
      </div>
      <h3 className="mt-5 text-sm font-bold text-slate-900">No doubts yet</h3>
      <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
        Stuck somewhere in your course? Ask a question and our support team will help you.
      </p>
      <button
        type="button"
        onClick={onClick}
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition"
      >
        <FaPlus size={10} />
        Ask Your First Doubt
      </button>
    </div>
  );
}

export default DoubtSupport;
