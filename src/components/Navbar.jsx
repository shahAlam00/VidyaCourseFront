import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";

import Logo from "../assets/Logo.png";
import API from "../utils/axios.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // =========================
  // AUTH CHECK
  // =========================
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);

      const savedName = localStorage.getItem("userName");

      if (savedName) {
        setUserName(savedName);
      } else {
        API.get("/auth/profile")
          .then((res) => {
            const name =
              res.data?.name ||
              res.data?.user?.name ||
              "";

            if (name) {
              setUserName(name);
              localStorage.setItem("userName", name);
            }
          })
          .catch(() => {});
      }
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }

    setDropdownOpen(false);
    setOpen(false);
  }, [location]);

  // =========================
  // CLOSE DROPDOWN OUTSIDE
  // =========================
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");

    setIsLoggedIn(false);
    setUserName("");
    setDropdownOpen(false);
    setOpen(false);

    navigate("/login");
  };

  // =========================
  // ACTIVE NAV
  // =========================
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname === path;
  };

  // =========================
  // USER INITIAL
  // =========================
  const getInitial = () => {
    if (userName && userName.trim().length > 0) {
      return userName.trim().charAt(0).toUpperCase();
    }

    return null;
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Courses",
      path: "/courses",
    },
    {
      name: "Success Stories",
      path: "/success/stories",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <div
        className="
          mx-auto
          flex
          h-[76px]
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-slate-200
          bg-white
          px-5
          shadow-[0_8px_30px_rgba(15,23,42,0.07)]
          lg:px-7
        "
      >
        {/* =====================================================
            LOGO / BRAND
        ====================================================== */}
        <Link
          to="/"
          className="group flex items-center gap-2.5"
        >
          {/* Logo */}
          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              transition-transform
              duration-300
              group-hover:scale-105
            "
          >
            <img
              src={Logo}
              alt="Vidya Udbhav Academy"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Brand Name */}
          <div className="flex flex-col justify-center">
            <div
              className="
                text-[16px]
                font-extrabold
                leading-none
                tracking-[-0.02em]
                text-[#111827]
              "
            >
              VIDYA UDBHAV
            </div>

            <div
              className="
                mt-1.5
                text-[9px]
                font-bold
                leading-none
                tracking-[0.30em]
                text-[#1D5ED2]
              "
            >
              ACADEMY
            </div>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav
          className="
            hidden
            items-center
            gap-1
            md:flex
          "
        >
          {navItems.map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  rounded-lg
                  px-4
                  py-2.5
                  text-[14px]
                  font-semibold
                  transition-all
                  duration-200

                  ${
                    active
                      ? `
                        bg-[#F3EEFF]
                        text-[#1D5ED2]
                      `
                      : `
                        text-[#475569]
                        hover:bg-[#F8F6FF]
                        hover:text-[#1D5ED2]
                      `
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* =====================================================
            DESKTOP ACTIONS
        ====================================================== */}
        <div className="hidden items-center gap-3 md:flex">
          {/* LOGIN / PROFILE */}
          {isLoggedIn ? (
            <div
              className="relative"
              ref={dropdownRef}
            >
              <button
                onClick={() =>
                  setDropdownOpen(!dropdownOpen)
                }
                className="
                  flex
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  py-1.5
                  pl-1.5
                  pr-3
                  text-sm
                  font-semibold
                  text-slate-700
                  shadow-sm
                  transition-all
                  hover:border-[#D8CCFF]
                  hover:bg-[#FAF9FF]
                "
              >
                {/* Avatar */}
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#5B3CC4]
                    text-xs
                    font-bold
                    text-white
                  "
                >
                  {getInitial() || <User size={15} />}
                </div>

                <span>
                  {userName
                    ? userName.split(" ")[0]
                    : "Account"}
                </span>

                <ChevronDown
                  size={14}
                  className={`
                    text-slate-400
                    transition-transform
                    duration-200
                    ${
                      dropdownOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {/* PROFILE DROPDOWN */}
              {dropdownOpen && (
                <div
                  className="
                    absolute
                    right-0
                    mt-2
                    w-52
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-1.5
                    shadow-[0_15px_40px_rgba(15,23,42,0.12)]
                  "
                >
                  <Link
                    to="/student/dashboard"
                    onClick={() =>
                      setDropdownOpen(false)
                    }
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      px-3
                      py-2.5
                      text-sm
                      font-semibold
                      text-slate-700
                      transition
                      hover:bg-[#F3EEFF]
                      hover:text-[#5B3CC4]
                    "
                  >
                    <User size={16} />
                    Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-lg
                      px-3
                      py-2.5
                      text-left
                      text-sm
                      font-semibold
                      text-red-600
                      transition
                      hover:bg-red-50
                    "
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="
                px-3
                py-2
                text-sm
                font-semibold
                text-slate-700
                transition
                hover:text-[#5B3CC4]
              "
            >
              Login
            </Link>
          )}

          {/* ENROLL BUTTON */}
          <Link
            to="/courses"
            className="
              group
              flex
              items-center
              gap-2
              rounded-xl
              bg-[#1D5ED2]
              px-5
              py-2.5
              text-sm
              font-bold
              text-white
              shadow-[0_8px_20px_rgba(91,60,196,0.22)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#4D32AA]
              hover:shadow-[0_10px_25px_rgba(91,60,196,0.30)]
            "
          >
            Enroll Now

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          onClick={() => setOpen(!open)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            text-slate-800
            shadow-sm
            transition
            hover:border-[#D8CCFF]
            hover:bg-[#F8F6FF]
            hover:text-[#5B3CC4]
            md:hidden
          "
          aria-label="Toggle Menu"
        >
          {open ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      {open && (
        <div
          className="
            absolute
            left-4
            right-4
            top-[88px]
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-4
            shadow-[0_20px_50px_rgba(15,23,42,0.12)]
            md:hidden
          "
        >
          <div className="flex flex-col gap-1.5">
            {/* NAV ITEMS */}
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    transition

                    ${
                      active
                        ? "bg-[#F3EEFF] text-[#5B3CC4]"
                        : "text-slate-700 hover:bg-[#F8F6FF] hover:text-[#5B3CC4]"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* DIVIDER */}
            <div className="my-2 h-px bg-slate-100" />

            {/* PROFILE / LOGIN */}
            {isLoggedIn ? (
              <>
                <Link
                  to="/student/dashboard"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-slate-700
                    transition
                    hover:bg-[#F8F6FF]
                    hover:text-[#5B3CC4]
                  "
                >
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#5B3CC4]
                      text-xs
                      font-bold
                      text-white
                    "
                  >
                    {getInitial() || (
                      <User size={14} />
                    )}
                  </div>

                  <span>
                    Profile
                    {userName
                      ? ` (${userName})`
                      : ""}
                  </span>
                </Link>

                <button
                  onClick={() => {
                    setOpen(false);
                    handleLogout();
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    text-left
                    text-sm
                    font-semibold
                    text-red-600
                    transition
                    hover:bg-red-50
                  "
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-slate-700
                  transition
                  hover:bg-[#F8F6FF]
                  hover:text-[#5B3CC4]
                "
              >
                Login
              </Link>
            )}

            {/* MOBILE ENROLL */}
            <Link
              to="/courses"
              onClick={() => setOpen(false)}
              className="
                mt-2
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#5B3CC4]
                px-5
                py-3.5
                text-center
                text-sm
                font-bold
                text-white
                shadow-[0_8px_20px_rgba(91,60,196,0.22)]
                transition
                hover:bg-[#4D32AA]
              "
            >
              Enroll Now

              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}