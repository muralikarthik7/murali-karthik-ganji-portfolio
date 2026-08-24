export default function Experience() {
    return (
      <section
        id="experience"
        className="border-t border-[var(--border)] pt-10 pb-24 sm:pt-12 sm:pb-32"
      >
        {/* =========================================================
            SECTION HEADER
        ========================================================== */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[var(--accent)]" />
          <span className="section-label">05 / Experience</span>
        </div>
  
        {/* =========================================================
            EXPERIENCE INTRODUCTION
        ========================================================== */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left */}
        <div>
            <p className="section-label">Professional Experience</p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-[2.15rem] lg:text-4xl">
            Experience across research engineering and software development.
            </h2>
        </div>

        {/* Right */}
        <div className="flex items-end">
            <p className="max-w-2xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
            Professional experience applying software engineering, data,
            machine learning, and web-development skills across academic research
            and industry environments.
            </p>
        </div>
        </div>
  
        {/* =========================================================
            EXPERIENCE 01
            UNIVERSITY OF ARIZONA
        ========================================================== */}
        <article className="mt-14 border-t border-[var(--border)] py-14">
          <div className="grid gap-10 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
            {/* Left Column */}
            <div>
              <p className="section-label">01 / Research Engineering</p>
  
              <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                Jul 2026 — Present
              </p>
            </div>
  
            {/* Main Content */}
            <div>
              <p className="section-label">University of Arizona</p>
  
              <h3 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
                Undergraduate Research Assistant
              </h3>
  
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-[var(--foreground-muted)]">
                  Electrical &amp; Computer Engineering
                </p>
  
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                  Tucson, AZ
                </p>
              </div>
  
              {/* Role Overview */}
              <p className="mt-7 max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
                Contributing to applied AI and computer-vision research through
                Python-based engineering workflows, research tooling, data
                processing, dataset development, validation, and reproducible
                machine-learning infrastructure.
              </p>
  
              <p className="mt-4 max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
                Current work spans retinal surgical-video segmentation research
                and an additional visual-data research effort involving
                programmatic data collection, dataset organization, metadata
                generation, verification, quality control, and development of
                reproducible research pipelines.
              </p>
  
              {/* =====================================================
                  RESPONSIBILITY AREAS
              ====================================================== */}
              <div className="mt-10">
                <p className="section-label">Engineering Responsibilities</p>
  
                <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                  {/* Research Engineering */}
                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">Research Engineering</p>
  
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Develop Python scripts, preprocessing pipelines,
                      automation, and technical tooling supporting applied AI
                      experiments and research workflows.
                    </p>
                  </div>
  
                  {/* Computer Vision */}
                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      Computer Vision &amp; Image Processing
                    </p>
  
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Build image and video processing workflows supporting
                      frame extraction, quality filtering, annotation, dataset
                      preparation, and segmentation-oriented research.
                    </p>
                  </div>
  
                  {/* Data Engineering */}
                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      Research Data Engineering
                    </p>
  
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Structure research datasets, metadata, validation
                      procedures, quality-control processes, and reproducible
                      data pipelines for machine-learning experimentation.
                    </p>
                  </div>
  
                  {/* Applied AI Systems */}
                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      Applied AI Systems
                    </p>
  
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Support experimental AI systems through programmatic data
                      workflows, verification tooling, testing, documentation,
                      and reproducible engineering practices.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Technologies */}
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--foreground-subtle)]">
                <span>Python</span>
                <span>OpenCV</span>
                <span>FFmpeg</span>
                <span>Computer Vision</span>
                <span>Machine Learning</span>
                <span>Data Pipelines</span>
                <span>Dataset Engineering</span>
                <span>Metadata</span>
                <span>Data Validation</span>
                <span>Git / GitHub</span>
              </div>
  
              {/* Link */}
              <div className="mt-8">
                <a
                  href="#research"
                  className="text-sm font-medium transition hover:text-[var(--accent-soft)]"
                >
                  Explore Research ↗
                </a>
              </div>
            </div>
          </div>
        </article>
  
        {/* =========================================================
            EXPERIENCE 02
            SUSAMPADA DEVELOPERS
        ========================================================== */}
        <article className="border-t border-[var(--border)] py-14">
          <div className="grid gap-10 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
            {/* Left Column */}
            <div>
              <p className="section-label">02 / Software Development</p>
  
              <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                May 2023 — Jul 2023
              </p>
            </div>
  
            {/* Main Content */}
            <div>
              <p className="section-label">Susampada Developers</p>
  
              <h3 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
                Web Developer &amp; Social Media Intern
              </h3>
  
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-[var(--foreground-muted)]">
                  Web Development &amp; Digital Operations
                </p>
  
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                  Hyderabad, India
                </p>
              </div>
  
              <p className="mt-7 max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
                Contributed to the company&apos;s web and digital presence through
                website development, front-end updates, testing, maintenance,
                and digital-content support while collaborating with the team on
                improvements to its online platforms.
              </p>
  
              {/* Responsibilities */}
              <div className="mt-10">
                <p className="section-label">Core Responsibilities</p>
  
                <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-3">
                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">Web Development</p>
  
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Supported development and updates to web pages,
                      user-facing components, and website content.
                    </p>
                  </div>
  
                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      Testing &amp; Maintenance
                    </p>
  
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Reviewed website functionality and supported maintenance,
                      testing, content updates, and iterative improvements.
                    </p>
                  </div>
  
                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">Digital Content</p>
  
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Assisted with digital and social-media content supporting
                      the company&apos;s online presence and communication.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Technologies */}
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--foreground-subtle)]">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Web Development</span>
                <span>Frontend Development</span>
                <span>Testing</span>
                <span>Content Management</span>
              </div>
            </div>
          </div>
        </article>
  
        {/* =========================================================
            PROFESSIONAL FOUNDATION
        ========================================================== */}
        <div className="border-t border-[var(--border)] pt-9">
          <p className="section-label">Technical Foundation</p>
  
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--foreground-subtle)]">
            <span>Software Development</span>
            <span>Research Engineering</span>
            <span>Python</span>
            <span>JavaScript</span>
            <span>Computer Vision</span>
            <span>Machine Learning</span>
            <span>Data Engineering</span>
            <span>Research Pipelines</span>
            <span>Git / GitHub</span>
          </div>
        </div>
      </section>
    );
  }