import React from 'react';
import { Link} from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaPinterestP
} from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-surface)] text-[var(--color-text)] pt-16 pb-12 border-t border-[var(--color-border)] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 pb-16 border-b border-[var(--color-border)]">
          
          {/* Column 1: Brand & About (Span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3.5 group">
              <img 
                src={Logo} 
                alt="Vidya Udbhav Academy Logo" 
                className="h-20 w-20 object-contain rounded-xl" 
              />
              <div>
                <div className="text-lg font-black tracking-tight text-[var(--color-heading)] leading-tight">
                  VIDYA UDBHAV
                </div>
                <div className="text-[10px] font-extrabold tracking-[0.25em] text-[var(--color-primary)]">
                  ACADEMY
                </div>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)] max-w-sm">
              Empowering the next generation of developers, designers, and marketers with industry-ready practical courses, expert mentorship, and career-focused programs.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/people/Vidya-Udbhav/61585622267279/" },
                { icon: FaTwitter, href: "https://x.com/vidyaudbhav" },
                { icon: FaInstagram, href: "https://www.instagram.com/vidyaudbhav/" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHklmQFWkntFAAAAaDN2xBoXGTeDpUVA3bmPUUCF1Zz3EJRdWPMQzCu7hI61_nUilP_iXqb--_plfEf0-zIT7iY5WnR98BB9zO3KJNyHoeZnjw6_kSanpdRbjsrRSw0lw3dzrs=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fvidya-udbhav-57b78b3a2" },
                { icon: FaPinterestP, href: "https://www.pinterest.com/00lrjjg0udxmoxo0063xzyvr3ce8xv/?invite_code=3088dbfb0d294fab83ad45c70dbba072&sender=1152077285835529675" },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <a
                    target='_blank'
                    key={idx}
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-bg-main)] border border-[var(--color-border)] text-[var(--color-muted)] transition-all duration-200 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-white"
                  >
                    <IconComp size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-heading)]">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {["Home", "About", "Courses", "Success Stories", "Contact"].map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <li key={item}>
                    <Link
                      to={path}
                      className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)] flex items-center gap-2 group"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-border)] transition-colors group-hover:bg-[var(--color-primary)]" />
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Top Courses */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-heading)]">Top Courses</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "AI Learning Course",
                "Website Development",
                "Frontend React Mastery",
                "Full Stack MERN",
                "Digital Marketing",
              ].map((course, idx) => (
                <li key={idx}>
                  <Link
                    to="/courses"
                    className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)] flex items-center gap-2 group"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-border)] transition-colors group-hover:bg-[var(--color-primary)]" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-heading)]">Contact Us</h3>
            <ul className="mt-4 space-y-3.5 text-sm text-[var(--color-muted)]">
              <li className="flex items-start gap-3">
                <IoLocationSharp size={18} className="text-[var(--color-primary)] shrink-0 mt-1" />
                <span>Gaur City Center, 8th Floor, Greater Noida</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt size={15} className="text-[var(--color-primary)] shrink-0" />
                <span>+91 8796917029</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope size={15} className="text-[var(--color-primary)] shrink-0" />
                <span>info@vidyaudbhav.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[15px] text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} Vidya Udbhav Academy. All rights reserved. Registered Company.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="transition hover:text-[var(--color-heading)]">Privacy Policy</Link>
           
            <Link to="/terms" className="transition hover:text-[var(--color-heading)]">Terms of Service</Link>

            <Link to="/cookie" className="transition hover:text-[var(--color-heading)]">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;