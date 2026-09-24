import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, ChevronRight } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text)] pt-32 pb-24">
      
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Header Banner Section */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary-soft)] px-4 py-2 text-xs font-semibold tracking-wide text-[var(--color-primary)] mb-4 shadow-sm">
            <ShieldCheck size={14} className="text-[var(--color-primary)]" />
            <span>Legal & Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-heading)] leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-muted)] max-w-2xl mx-auto">
            We value your trust and are highly committed to protecting your personal data and ensuring transparency in how we handle your information.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-[var(--color-muted)]">
            <span>Last Updated: June 2, 2026</span>
            <span>•</span>
            <span>Vidya Udbhav Academy</span>
          </div>
        </div>

        {/* Main Content Card Container */}
        <div className="max-w-7xl ">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 sm:p-10 shadow-xl shadow-slate-200/50">
            
            {/* Introduction Box */}
            <div className="mb-8 rounded-[var(--radius-card)] border border-[var(--color-primary)]/20 bg-[var(--color-primary-soft)] p-5 text-sm leading-relaxed text-[var(--color-text)]">
              Welcome to <strong>VidyaUdbhav Academy</strong> (<a href="https://course.vidyaudbhav.com/" target="_blank" rel="noreferrer" className="text-[var(--color-primary)] underline font-semibold">https://course.vidyaudbhav.com/</a>). This Privacy Policy outlines how Vidya Udbhav ("we," "our," or "us") collects, uses, processes, and protects your details when you navigate our platform, sign up for a student profile, or utilize our advanced career counseling and academic admission guidance services.
            </div>

            <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[var(--color-text)]">
              
              {/* Section 1.1 */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    01
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    1.1 Information We Collect
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  We collect personal information that you voluntarily provide directly to us when registering an account, submitting consultation booking forms, or inquiring about our consulting packages. This includes:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-main)] p-4">
                    <h3 className="font-bold text-[var(--color-heading)] text-sm mb-1">Identity & Contact Data</h3>
                    <p className="text-xs text-[var(--color-muted)]">Full Name, Gender, Date of Birth, Email Address, Phone Number, WhatsApp Number, and Location details.</p>
                  </div>

                  <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-main)] p-4">
                    <h3 className="font-bold text-[var(--color-heading)] text-sm mb-1">Academic & Professional</h3>
                    <p className="text-xs text-[var(--color-muted)]">Current educational qualifications, grade transcripts, preferred fields of study, targeted institutions, and aspirations.</p>
                  </div>

                  <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-main)] p-4">
                    <h3 className="font-bold text-[var(--color-heading)] text-sm mb-1">Psychometric Data</h3>
                    <p className="text-xs text-[var(--color-muted)]">Responses and inputs provided during diagnostic career assessments, aptitude evaluations, and behavioral profile analysis.</p>
                  </div>

                  <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-main)] p-4">
                    <h3 className="font-bold text-[var(--color-heading)] text-sm mb-1">Technical Data</h3>
                    <p className="text-xs text-[var(--color-muted)]">IP address, web browser type, browser version, browser cookie strings, and analytical metrics regarding web interactions.</p>
                  </div>
                </div>
              </section>

              {/* Section 1.2 */}
              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    02
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    1.2 How We Use Your Information
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  We use your data strictly for legitimate educational advisory and operational workflows, including:
                </p>
                <ul className="space-y-2.5 text-sm text-[var(--color-text)]">
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                    <span><strong>Profile Maintenance:</strong> Creating, securing, and maintaining your verified user account.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                    <span><strong>Counseling Delivery:</strong> Conducting customized psychometric assessments and generating personalized career roadmaps and reports.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                    <span><strong>University Matching:</strong> Evaluating your eligibility for specific university courses, international/domestic admissions, and eligible scholarships.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                    <span><strong>Direct Communication:</strong> Reaching out via Phone calls, transactional Emails, or WhatsApp alerts regarding advisory timelines and updates.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                    <span><strong>System Improvement:</strong> Improving our core web systems, fixing programmatic errors, and deploying adequate cybersecurity patches.</span>
                  </li>
                </ul>
              </section>

              {/* Section 1.3 */}
              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    03
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    1.3 Data Sharing and Disclosure
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  We strictly respect your privacy and do not sell, rent, or lease your personal data. Your information may only be shared under the following limited conditions:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg-main)] border border-[var(--color-border)]">
                    <h4 className="font-bold text-[var(--color-heading)] text-sm">Academic Partners & Universities</h4>
                    <p className="text-xs text-[var(--color-muted)] mt-1">With your explicit prior consent, relevant components of your student profile may be shared with matching institutions to facilitate admission evaluations and pre-screening.</p>
                  </div>
                  <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg-main)] border border-[var(--color-border)]">
                    <h4 className="font-bold text-[var(--color-heading)] text-sm">Strategic Service Providers</h4>
                    <p className="text-xs text-[var(--color-muted)] mt-1">Third-party technological vendors handling our automated psychometric testing software, web-hosting systems, or SMS/WhatsApp gateway communication (strictly bound by confidentiality clauses).</p>
                  </div>
                  <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg-main)] border border-[var(--color-border)]">
                    <h4 className="font-bold text-[var(--color-heading)] text-sm">Legal Obligations</h4>
                    <p className="text-xs text-[var(--color-muted)] mt-1">When legally mandated by law enforcement bodies, active court mandates, or regulatory compliance under the Indian Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act, 2023.</p>
                  </div>
                </div>
              </section>

              {/* Section 1.4 */}
              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    04
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    1.4 Data Security & Regulatory Compliances
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  We implement industry-standard technical and organizational security measures to shield your sensitive data from unauthorized modifications, sudden exposure, or unlawful extraction. In full compliance with the Digital Personal Data Protection (DPDP) Act of India, you hold clear entitlements to access your data, request updates or absolute erasure, or selectively withdraw your operational processing consent at any time.
                </p>
                
                {/* Grievance Note Callout */}
                <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-primary)]/30 bg-gradient-to-r from-[var(--color-primary-soft)] to-blue-50/30 p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary)] text-white shadow-md">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-heading)] text-sm sm:text-base">Data Protection Grievance Desk</h3>
                      <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1">
                        To formally initiate data erasure requests or address privacy concerns, please transmit a formal request via email directly to our grievance desk at{" "}
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