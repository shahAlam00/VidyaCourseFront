import React from "react";
import { Link } from "react-router-dom";
import { Cookie, Shield, Settings, HelpCircle, Mail, ChevronRight } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text)] pt-32 pb-24">
      
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Header Banner Section */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary-soft)] px-4 py-2 text-xs font-semibold tracking-wide text-[var(--color-primary)] mb-4 shadow-sm">
            <Cookie size={14} className="text-[var(--color-primary)]" />
            <span>Transparency & Cookies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-heading)] leading-tight">
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-muted)] max-w-2xl mx-auto">
            Learn how Vidya Udbhav uses cookies and similar tracking technologies to enhance your browsing experience and secure your interactions.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-[var(--color-muted)]">
            <span>Last Updated: June 2, 2026</span>
            <span>•</span>
            <span>Vidya Udbhav Academy</span>
          </div>
        </div>

        {/* Main Content Card Container */}
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 sm:p-10 shadow-xl shadow-slate-200/50">
            
            {/* Introduction Box */}
            <div className="mb-8 rounded-[var(--radius-card)] border border-[var(--color-primary)]/20 bg-[var(--color-primary-soft)] p-5 text-sm leading-relaxed text-[var(--color-text)]">
              Welcome to <strong>Vidya Udbhav</strong> (<a href="https://course.vidyaudbhav.com/" target="_blank" rel="noreferrer" className="text-[var(--color-primary)] underline font-semibold">https://course.vidyaudbhav.com/</a>). This Cookie Policy explains how we use cookies, web beacons, and similar tracking technologies when you visit our website or use our educational counseling platform. By continuing to browse our site, you agree to our use of cookies as described in this policy.
            </div>

            <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[var(--color-text)]">
              
              {/* Section 1: What Are Cookies */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    01
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    1. What Are Cookies?
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently, remember user preferences, and provide analytical data to website owners regarding user interaction patterns.
                </p>
              </section>

              {/* Section 2: Types of Cookies We Use */}
              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    02
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    2. Types of Cookies We Use
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  We deploy various categories of cookies depending on their function and purpose on our platform:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-main)] p-4">
                    <h3 className="font-bold text-[var(--color-heading)] text-sm mb-1">Essential / Strictly Necessary</h3>
                    <p className="text-xs text-[var(--color-muted)]">Required for core website operations, secure student portal login, session management, and authentication.</p>
                  </div>

                  <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-main)] p-4">
                    <h3 className="font-bold text-[var(--color-heading)] text-sm mb-1">Performance & Analytics</h3>
                    <p className="text-xs text-[var(--color-muted)]">Collect anonymous data on how visitors navigate our platform to help us improve page response and usability.</p>
                  </div>

                  <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-main)] p-4">
                    <h3 className="font-bold text-[var(--color-heading)] text-sm mb-1">Functional Preferences</h3>
                    <p className="text-xs text-[var(--color-muted)]">Remember choices you make (such as language, region, or customized form states) to provide a tailored user experience.</p>
                  </div>

                  <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-main)] p-4">
                    <h3 className="font-bold text-[var(--color-heading)] text-sm mb-1">Targeting & Marketing</h3>
                    <p className="text-xs text-[var(--color-muted)]">Used to track user visits across websites to deliver relevant counseling packages or educational updates.</p>
                  </div>
                </div>
              </section>

              {/* Section 3: How We Use Cookies */}
              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    03
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    3. How We Use Cookie Data
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  The data gathered through cookies assists us in several core functions:
                </p>
                <ul className="space-y-2.5 text-sm text-[var(--color-text)]">
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                    <span><strong>Maintaining Secure Sessions:</strong> Keeping you logged in securely while you navigate different sections of the student advisory platform.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                    <span><strong>Understanding Traffic Flow:</strong> Analyzing which career courses, web pages, and guides are most visited to improve educational content.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                    <span><strong>Optimizing Performance:</strong> Identifying technical bottlenecks, broken links, or display errors across devices.</span>
                  </li>
                </ul>
              </section>

              {/* Section 4: Managing and Disabling Cookies */}
              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    04
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    4. Managing and Disabling Cookies
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  You have the right to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, please note that disabling essential cookies may impact your ability to log in or use certain interactive features of our website.
                </p>
              </section>

              {/* Section 5: Contact Support */}
              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    05
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    5. Contact Us Regarding Cookies
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  If you have any questions or concerns about our use of cookies or tracking technologies, please feel free to reach out to our support team:
                </p>
                
                {/* Contact Info Callout */}
                <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-primary)]/30 bg-gradient-to-r from-[var(--color-primary-soft)] to-blue-50/30 p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary)] text-white shadow-md">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-heading)] text-sm sm:text-base">Privacy & Cookie Support Desk</h3>
                      <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1">
                        For inquiries regarding data privacy or cookie management, email us directly at{" "}
                        <a href="mailto:info@vidyaudbhav.com" className="text-[var(--color-primary)] font-bold underline hover:text-blue-700">
                          info@vidyaudbhav.com
                        </a>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Footer Back action link */}
            <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex items-center justify-between">
              <Link 
                to="/" 
                className="text-xs font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1"
              >
                ← Back to Home
              </Link>
              <span className="text-xs text-[var(--color-muted)]">Vidya Udbhav Academy © {new Date().getFullYear()}</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}