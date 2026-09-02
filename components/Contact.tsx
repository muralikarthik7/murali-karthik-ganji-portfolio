export default function Contact() {
    return (
      <section
        id="contact"
        className="border-t border-[var(--border)] pt-10 pb-20 sm:pt-12 sm:pb-24"
      >
        {/* =========================================================
            SECTION HEADER
        ========================================================== */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[var(--accent)]" />
          <span className="section-label">Contact</span>
        </div>
  
        {/* =========================================================
            CONTACT INTRO
        ========================================================== */}
        <div className="mt-10">
        <p className="section-label">Let&apos;s Connect</p>

        <h2 className="mt-4 max-w-5xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-[2.15rem] lg:text-4xl">
            Open to software, AI/ML, data, and research opportunities.
        </h2>

        <p className="mt-6 max-w-4xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
            I&apos;m interested in opportunities where I can contribute across
            software engineering, machine learning, data engineering, applied AI,
            and technical research. Feel free to reach out regarding roles,
            projects, research, or collaboration.
        </p>
        </div>
  
        {/* =========================================================
            CONTACT DETAILS
        ========================================================== */}
        <div className="mt-14 border-y border-[var(--border)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Email */}
            <div className="border-b border-[var(--border)] py-8 sm:border-r lg:border-b-0">
              <p className="section-label">Email</p>
  
              <a
                href="mailto:muralikarthikganji@gmail.com"
                className="mt-4 block text-sm font-medium transition hover:text-[var(--accent-soft)]"
              >
                muralikarthikganji@gmail.com
              </a>
            </div>
  
            {/* LinkedIn */}
            <div className="border-b border-[var(--border)] py-8 sm:pl-8 lg:border-b-0 lg:border-r">
              <p className="section-label">LinkedIn</p>
  
              <a
                href="https://www.linkedin.com/in/murali-karthik-ganji"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-sm font-medium transition hover:text-[var(--accent-soft)]"
              >
                LinkedIn ↗
              </a>
            </div>
  
            {/* GitHub */}
            <div className="border-b border-[var(--border)] py-8 sm:border-r lg:border-b-0 lg:pl-8">
              <p className="section-label">GitHub</p>
  
              <a
                href="https://github.com/muralikarthik7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-sm font-medium transition hover:text-[var(--accent-soft)]"
              >
                Github ↗
              </a>
            </div>
  
            {/* Location */}
            <div className="py-8 sm:pl-8">
              <p className="section-label">Location</p>
  
              <p className="mt-4 text-sm leading-6 text-[var(--foreground-muted)]">
                Tucson, Arizona
                <br />
                Open to Opportunities
              </p>
            </div>
          </div>
        </div>
  
        {/* =========================================================
            CONTACT CTA
        ========================================================== */}
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-medium">
              Interested in working together?
            </p>
  
            <p className="mt-2 text-sm text-[var(--foreground-muted)]">
              Reach out by email or connect with me on LinkedIn.
            </p>
          </div>
  
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:muralikarthikganji@gmail.com"
              className="primary-button"
            >
              Send Email
            </a>
  
            <a
              href="https://www.linkedin.com/in/murali-karthik-ganji"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[var(--border-light)] px-5 py-3 text-sm font-medium transition hover:bg-[var(--surface)]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    );
  }