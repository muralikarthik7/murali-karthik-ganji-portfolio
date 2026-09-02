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
        <span className="section-label">03 / Experience</span>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Heading */}
        <div>
          <p className="section-label">Professional Experience</p>

          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-[2.15rem] lg:text-4xl">
            Experience across research engineering and software development.
          </h2>
        </div>

        {/* Introduction */}
        <div className="max-w-2xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
          <p>
            Professional experience applying software engineering, data,
            machine learning, computer vision, and web-development skills
            across academic research and industry environments.
          </p>
        </div>
      </div>

      {/* =========================================================
          EXPERIENCE 01
          UNDERGRADUATE RESEARCH ASSISTANT
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
            {/* Position */}
            <p className="section-label">University of Arizona</p>

            <h3 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
              Undergraduate Research Assistant
            </h3>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--foreground-muted)]">
              <span>Electrical &amp; Computer Engineering</span>
              <span className="hidden sm:inline">·</span>
              <span>Tucson, Arizona</span>
            </div>

            <p className="mt-6 max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
              Contributing to applied AI and computer-vision research through
              Python-based research engineering, data pipelines, dataset
              development, automation, validation, and reproducible
              machine-learning workflows.
            </p>

            {/* =====================================================
                RESEARCH TRACK 01
                VSI VERIFY
            ====================================================== */}
            <div className="mt-12 border-t border-[var(--border)] pt-9">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="section-label">Research Track 01</p>

                  <h4 className="mt-3 text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                    VSI Verify
                  </h4>

                  <p className="mt-2 text-sm text-[var(--foreground-subtle)]">
                    Visual Data &amp; AI Research Engineering
                  </p>
                </div>

                <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                  Applied AI · Research Systems
                </span>
              </div>

              <p className="mt-6 max-w-3xl text-[0.95rem] leading-7 text-[var(--foreground-muted)]">
                Supporting an applied AI research initiative through the
                engineering of reliable visual-data workflows, research
                tooling, structured dataset preparation, and reproducible
                processes for downstream experimentation.
              </p>

              {/* VSI Engineering Responsibilities */}
              <div className="mt-8">
                <p className="section-label">Engineering Responsibilities</p>

                <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      Python &amp; Pipeline Development
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Develop Python-based workflows and automation supporting
                      repeatable research-data collection, processing,
                      organization, and preparation.
                    </p>
                  </div>

                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      Dataset &amp; Metadata Engineering
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Maintain structured datasets, metadata, and consistent
                      records supporting traceability, validation, and
                      reproducible research workflows.
                    </p>
                  </div>

                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      Verification &amp; Quality Control
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Build validation and quality-control workflows for
                      identifying data inconsistencies, collection failures,
                      and issues before downstream experimentation.
                    </p>
                  </div>

                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      Research Reproducibility
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Document technical workflows, failure cases, and research
                      artifacts while supporting organized and reproducible
                      handoff between research stages.
                    </p>
                  </div>
                </div>
              </div>

              {/* VSI Technologies */}
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[var(--foreground-subtle)]">
                <span>Python</span>
                <span>Automation</span>
                <span>Data Pipelines</span>
                <span>Dataset Engineering</span>
                <span>Metadata</span>
                <span>Data Validation</span>
                <span>Quality Control</span>
                <span>Git / GitHub</span>
              </div>
            </div>

            {/* =====================================================
                RESEARCH TRACK 02
                AI HEALTHCARE / ERM
            ====================================================== */}
            <div className="mt-12 border-t border-[var(--border)] pt-9">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="section-label">Research Track 02</p>

                  <h4 className="mt-3 text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                    AI Healthcare — ERM Segmentation
                  </h4>

                  <p className="mt-2 text-sm text-[var(--foreground-subtle)]">
                    Surgical Video · Computer Vision · Medical AI
                  </p>
                </div>

                <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                  Computer Vision · Medical AI
                </span>
              </div>

              <p className="mt-6 max-w-3xl text-[0.95rem] leading-7 text-[var(--foreground-muted)]">
                Developing computer-vision and data-engineering workflows for
                retinal surgical-video analysis and semantic-segmentation
                research, transforming raw surgical video into structured,
                quality-controlled, annotation-ready, and training-ready
                datasets.
              </p>

              {/* ERM Engineering Responsibilities */}
              <div className="mt-8">
                <p className="section-label">Engineering Responsibilities</p>

                <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      Video &amp; Image Processing
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Develop Python preprocessing workflows for frame
                      extraction, SSIM-based duplicate filtering, blur and
                      quality checks, cropping, resizing, and image processing.
                    </p>
                  </div>

                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      Segmentation Dataset Engineering
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Structure surgical cases, generate metadata and training
                      artifacts, and prepare case-level train, validation, and
                      test splits designed to prevent data leakage.
                    </p>
                  </div>

                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      Annotation &amp; Mask Workflows
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Support annotation and segmentation workflows involving
                      surgical structures and instruments, mask preparation,
                      annotation previews, phase tagging, and dataset
                      validation.
                    </p>
                  </div>

                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      ML Experimentation
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Support semantic-segmentation experimentation,
                      augmentation, training workflows, model checkpoints, and
                      evaluation using segmentation metrics including Dice and
                      IoU.
                    </p>
                  </div>
                </div>
              </div>

              {/* ERM Technologies */}
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[var(--foreground-subtle)]">
                <span>Python</span>
                <span>OpenCV</span>
                <span>FFmpeg</span>
                <span>SSIM</span>
                <span>Supervisely</span>
                <span>Semantic Segmentation</span>
                <span>U-Net++</span>
                <span>Mask2Former</span>
                <span>Dice / IoU</span>
              </div>
            </div>

            {/* Research Link */}
            <div className="mt-10">
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
          WEB DEVELOPMENT
      ========================================================== */}
      <article className="border-t border-[var(--border)] py-14">
        <div className="grid gap-10 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
          {/* Left Column */}
          <div>
            <p className="section-label">02 / Web Development</p>

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

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--foreground-muted)]">
              <span>Web Development &amp; Digital Operations</span>
              <span className="hidden sm:inline">·</span>
              <span>Hyderabad, India</span>
            </div>

            <p className="mt-6 max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
              Contributed to the company&apos;s web and digital presence
              through website development, front-end updates, testing,
              maintenance, and digital-content support while collaborating
              with the team on improvements to its online platforms.
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
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[var(--foreground-subtle)]">
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
          TECHNICAL FOUNDATION
      ========================================================== */}
      <div className="border-t border-[var(--border)] pt-10">
        <p className="section-label">Technical Foundation</p>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--foreground-subtle)]">
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