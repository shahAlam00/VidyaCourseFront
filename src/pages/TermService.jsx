import React from "react";
import { Link } from "react-router-dom";
import { FileText, MapPin, Mail, Phone, ChevronRight } from "lucide-react";

export default function TermService() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text)] pt-32 pb-24">
      
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Header Banner Section */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary-soft)] px-4 py-2 text-xs font-semibold tracking-wide text-[var(--color-primary)] mb-4 shadow-sm">
            <FileText size={14} className="text-[var(--color-primary)]" />
            <span>Legal & Agreements</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-heading)] leading-tight">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-muted)] max-w-2xl mx-auto">
            Please read these Terms & Conditions carefully before utilizing our website and educational consultation services.
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
              Please read these Terms & Conditions ("Terms") carefully before utilizing the web platform <a href="https://course.vidyaudbhav.com/" target="_blank" rel="noreferrer" className="text-[var(--color-primary)] underline font-semibold">https://course.vidyaudbhav.com/</a> ("Website") operated by Vidya Udbhav ("Company", "we", "us"). Your ongoing access to and programmatic use of our physical or digital consulting solutions is stringently conditioned upon your absolute compliance with these binding stipulations.
            </div>

            <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[var(--color-text)]">
              
              {/* Section 2.1 */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    01
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    2.1 Acceptance of Terms & Eligibility
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  By checking registration fields, creating profiles, or completing bookings for any consultation package, you implicitly validate your agreement with these Terms. If you disagree, you must immediately halt platform usage.
                </p>
                <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg-main)] border border-[var(--color-border)]">
                  <h3 className="font-bold text-[var(--color-heading)] text-sm mb-1">Minor Framework</h3>
                  <p className="text-xs text-[var(--color-muted)]">If you are under 18 years of age, you are legally restricted from using this website independently. You must interact with our advisory frameworks only with the explicit consent, active engagement, and direct physical supervision of a parent or legal guardian.</p>
                </div>
              </section>

              {/* Section 2.2 */}
              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    02
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    2.2 Scope of Educational Consultation & Performance Disclaimer
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  Vidya Udbhav provides expert mentorship, high-grade psychometric evaluation models, and strategic educational roadmaps based on available market and institutional data. However, users must formally note the following disclaimers:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg-main)] border border-[var(--color-border)]">
                    <h4 className="font-bold text-[var(--color-heading)] text-sm">Admission Disclaimer</h4>
                    <p className="text-xs text-[var(--color-muted)] mt-1">Vidya Udbhav DOES NOT guarantee final admission to any specific university, college, or targeted academic program. Final selection variables remain at the absolute, exclusive discretion of the corresponding institution's admissions board.</p>
                  </div>
                  <div className="p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg-main)] border border-[var(--color-border)]">
                    <h4 className="font-bold text-[var(--color-heading)] text-sm">Employment Disclaimer</h4>
                    <p className="text-xs text-[var(--color-muted)] mt-1">Any industry statistics, historical salary ranges, placement metrics, or employment outlooks shared during counseling are strictly for structural reference. They do not constitute an explicit or implicit promise of post-study jobs or specific financial packages.</p>
                  </div>
                </div>
              </section>

              {/* Section 2.3 */}
              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    03
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    2.3 Fees, Bookings, and Refund Protocol
                  </h2>
                </div>
                <ul className="space-y-2.5 text-sm text-[var(--color-text)]">
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                    <span><strong>Upfront Payment:</strong> All corporate fees tied to private psychometric testing modules, customized advisory sessions, or long-term profile-building tracks are collected entirely upfront via approved digital payment channels.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                    <span><strong>Refund Exclusion:</strong> Fees allocated for fully completed automated assessments or already executed live counseling slots are structurally non-refundable under any normal circumstances.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                    <span><strong>Rescheduling Criteria:</strong> If an applicant needs to modify or reschedule an appointment slot, they must transmit a request at least 24 hours prior to the original session time. Changes remain subject to consultant schedules.</span>
                  </li>
                </ul>
              </section>

              {/* Section 2.4 */}
              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    04
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    2.4 Intellectual Property Rights
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  All copy, custom graphics, company logos, structural psychometric workflows, diagnostic analytical frameworks, code infrastructure, and textual documentation compiled on this Website remain the absolute, exclusive intellectual property of Vidya Udbhav. Unauthorized redistribution, extraction, or commercial exploitation is prohibited.
                </p>
              </section>

              {/* Section 2.5 */}
              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    05
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    2.5 Governing Law & Legal Dispute Jurisdiction
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  These operational Terms shall be exclusively governed by, interpreted under, and executed in complete agreement with the sovereign federal laws of the Republic of India. Any litigation, legal dispute, or contractual disagreement arising from or related to website interaction or service delivery shall fall under the exclusive legal jurisdiction of the courts located within Gautam Buddha Nagar / Greater Noida, Uttar Pradesh, India.
                </p>
              </section>

              {/* Section 2.6 */}
              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-bold text-sm">
                    06
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                    2.6 Contact and Grievance Support
                  </h2>
                </div>
                <p className="text-[var(--color-muted)]">
                  For any clarifications, administrative issues, or formal notifications regarding these Terms, please contact our administrative desk:
                </p>
                
                {/* Contact Info Card */}
                <div className="mt-4 rounded-[var(--radius-card)] border border-[var(--color-primary)]/30 bg-gradient-to-r from-[var(--color-primary-soft)] to-blue-50/30 p-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[var(--color-primary)] shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-[var(--color-text)]"><strong>Registered Office Address:</strong> Gaur City Center, 8th Floor, Office 0-899, Greater Noida, Uttar Pradesh, India.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[var(--color-primary)] shrink-0" />
                    <span className="text-xs sm:text-sm text-[var(--color-text)]"><strong>Corporate Email:</strong> <a href="mailto:info@vidyaudbhav.com" className="text-[var(--color-primary)] font-bold underline hover:text-blue-700">info@vidyaudbhav.com</a></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[var(--color-primary)] shrink-0" />
                    <span className="text-xs sm:text-sm text-[var(--color-text)]"><strong>Direct Hotline / WhatsApp Support:</strong> <a href="tel:+918796917029" className="text-[var(--color-primary)] font-bold hover:underline">+91 8796917029</a></span>
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