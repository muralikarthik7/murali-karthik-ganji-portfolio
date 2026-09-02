import Image from "next/image";

export default function Overview() {
  return (
    <section className="flex min-h-[calc(100vh-81px)] items-center py-20 sm:py-24">
      <div className="w-full">
        <div className="grid items-center gap-14 lg:grid-cols-[1.38fr_0.82fr] lg:gap-16">
          {/* Overview Content */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />

              <span className="section-label">
                Software Engineering / AI &amp; ML / Data Engineering /
                Analytics
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[4.55rem] xl:text-[5rem]">
              Murali Karthik Ganji
            </h1>

            <h2 className="mt-8 max-w-4xl text-2xl font-normal leading-snug tracking-[-0.025em] text-[var(--foreground-muted)] sm:text-3xl lg:text-[2.2rem]">
              Building software, intelligent systems, and data-driven
              solutions.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-7 text-[var(--foreground-muted)] sm:text-lg">
              Computer Science student and Undergraduate Research Assistant at
              the University of Arizona, working across software development,
              machine learning, computer vision, data engineering, and
              analytics.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#work" className="primary-button">
                Explore Work
              </a>

              <a
                href="#research"
                className="rounded-md border border-[var(--border-light)] px-5 py-3 text-sm font-medium transition hover:bg-[var(--surface)]"
              >
                Research
              </a>

              <div className="ml-0 flex gap-5 text-sm text-[var(--foreground-muted)] sm:ml-4">
                <a
                  href="https://github.com/muralikarthik7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground-muted)] transition hover:text-[var(--foreground)]"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/murali-karthik-ganji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[var(--foreground)]"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="mx-auto w-full max-w-[400px] lg:mx-0 lg:justify-self-end">
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--border-light)] bg-[var(--surface)]">
              <Image
                src="/murali-profile.jpg"
                alt="Murali Karthik Ganji"
                fill
                priority
                className="object-cover object-[50%_61%]"
                sizes="(max-width: 1024px) 80vw, 400px"
              />
            </div>

            <div className="flex items-center justify-between border-x border-b border-[var(--border-light)] px-4 py-3">
              <span className="section-label">Murali Karthik Ganji</span>

              <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                Hyderabad, IN
              </span>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-[var(--border)] pt-6 sm:grid-cols-3 lg:max-w-5xl">
          <div>
            <p className="section-label">Currently</p>

            <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
              Undergraduate Research Assistant
              <br />
              University of Arizona
            </p>
          </div>

          <div>
            <p className="section-label">Education</p>

            <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
              B.S. Computer Science
              <br />
              December 2026
            </p>
          </div>

          <div>
            <p className="section-label">Based In</p>

            <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
              Tucson, Arizona
              <br />
              Open to Opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}