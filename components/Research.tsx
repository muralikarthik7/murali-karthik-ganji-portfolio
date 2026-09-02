export default function Research() {
    return (
      <section
        id="research"
        className="border-t border-[var(--border)] pt-10 pb-24 sm:pt-12 sm:pb-32"
      >
        {/* =========================================================
            SECTION HEADER
        ========================================================== */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[var(--accent)]" />
          <span className="section-label">05 / Research</span>
        </div>
  
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.15fr] lg:gap-16">
        {/* Research Heading */}
        <div>
            <p className="section-label">Research &amp; Applied AI</p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-[2rem] lg:text-[2.15rem]">
            Engineering research systems for computer vision and data-driven AI.
            </h2>
        </div>

        {/* Research Introduction */}
        <div className="max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
            <p>
            My research work combines software engineering, machine learning,
            computer vision, and data engineering to build reproducible pipelines,
            structured datasets, and experimental systems for applied AI.
            </p>

            <p className="mt-4">
            I focus on translating research requirements into practical engineering
            workflows—from data acquisition and preprocessing to dataset preparation,
            model experimentation, evaluation, and reproducibility.
            </p>
        </div>
        </div>
  
        {/* =========================================================
            RESEARCH POSITION
        ========================================================== */}
        <div className="mt-14 border-y border-[var(--border)] py-7">
          <div className="grid gap-7 sm:grid-cols-3">
            <div>
              <p className="section-label">Institution</p>
  
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                University of Arizona
                <br />
                Electrical &amp; Computer Engineering
              </p>
            </div>
  
            <div>
              <p className="section-label">Role</p>
  
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                Undergraduate Research Assistant
              </p>
            </div>
  
            <div>
              <p className="section-label">Research Focus</p>
  
              <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                Computer Vision · Applied AI
                <br />
                Research Data Engineering
              </p>
            </div>
          </div>
        </div>
  
        {/* =========================================================
            RESEARCH 01
            RETINAL SURGICAL VIDEO SEGMENTATION
        ========================================================== */}
        <article className="py-14">
          <div className="grid gap-10 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
            {/* Left Column */}
            <div>
              <p className="section-label">01 / Computer Vision</p>
  
              <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                Medical AI
              </p>
            </div>
  
            {/* Main Content */}
            <div>
              <p className="section-label">Primary Research Project</p>
  
              <h3 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
                Retinal Surgical Video Segmentation
              </h3>
  
              <p className="mt-6 max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
                Developing computer-vision and data-engineering workflows for
                retinal surgical-video analysis and semantic-segmentation
                research. The pipeline transforms raw surgical video into
                structured, quality-controlled, annotation-ready, and
                training-ready datasets for machine-learning experimentation.
              </p>
  
              {/* Engineering Contributions */}
              <div className="mt-11">
                <p className="section-label">Engineering Contributions</p>
  
                <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                  {/* Contribution 01 */}
                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      Video &amp; Image Processing
                    </p>
  
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Developed Python-based preprocessing workflows for video
                      frame extraction, SSIM-based duplicate filtering, blur and
                      quality checks, image processing, cropping, and resizing.
                    </p>
                  </div>
  
                  {/* Contribution 02 */}
                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">Dataset Engineering</p>
  
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Organized surgical cases into structured datasets,
                      generated metadata and training artifacts, and supported
                      reproducible case-level train, validation, and test splits
                      designed to prevent data leakage.
                    </p>
                  </div>
  
                  {/* Contribution 03 */}
                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      Annotation &amp; Mask Workflows
                    </p>
  
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Supported Supervisely-based annotation workflows for
                      surgical structures and instruments, including mask
                      preparation, annotation previews, phase tagging, and
                      segmentation-data validation.
                    </p>
                  </div>
  
                  {/* Contribution 04 */}
                  <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                      ML Experimentation &amp; Evaluation
                    </p>
  
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      Supporting semantic-segmentation experimentation,
                      augmentation and training workflows, checkpointed model
                      development, and evaluation using segmentation metrics such
                      as Dice and IoU.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Research Pipeline */}
              <div className="mt-12">
                <p className="section-label">Research Pipeline</p>
  
                <div className="mt-6 grid grid-cols-2 border-y border-[var(--border)] sm:grid-cols-4 lg:grid-cols-7">
                  <div className="border-b border-r border-[var(--border)] px-3 py-5 lg:border-b-0">
                    <p className="font-mono text-[0.65rem] text-[var(--foreground-subtle)]">
                      01
                    </p>
  
                    <p className="mt-2 text-sm">Video</p>
                  </div>
  
                  <div className="border-b border-[var(--border)] px-3 py-5 sm:border-r lg:border-b-0">
                    <p className="font-mono text-[0.65rem] text-[var(--foreground-subtle)]">
                      02
                    </p>
  
                    <p className="mt-2 text-sm">Frames</p>
                  </div>
  
                  <div className="border-b border-r border-[var(--border)] px-3 py-5 lg:border-b-0">
                    <p className="font-mono text-[0.65rem] text-[var(--foreground-subtle)]">
                      03
                    </p>
  
                    <p className="mt-2 text-sm">Quality Control</p>
                  </div>
  
                  <div className="border-b border-[var(--border)] px-3 py-5 sm:border-r lg:border-b-0">
                    <p className="font-mono text-[0.65rem] text-[var(--foreground-subtle)]">
                      04
                    </p>
  
                    <p className="mt-2 text-sm">Annotation</p>
                  </div>
  
                  <div className="border-b border-r border-[var(--border)] px-3 py-5 sm:border-b-0">
                    <p className="font-mono text-[0.65rem] text-[var(--foreground-subtle)]">
                      05
                    </p>
  
                    <p className="mt-2 text-sm">Dataset</p>
                  </div>
  
                  <div className="border-r border-[var(--border)] px-3 py-5">
                    <p className="font-mono text-[0.65rem] text-[var(--foreground-subtle)]">
                      06
                    </p>
  
                    <p className="mt-2 text-sm">Training</p>
                  </div>
  
                  <div className="px-3 py-5">
                    <p className="font-mono text-[0.65rem] text-[var(--foreground-subtle)]">
                      07
                    </p>
  
                    <p className="mt-2 text-sm">Evaluation</p>
                  </div>
                </div>
              </div>
  
              {/* Technical Stack */}
              <div className="mt-10 grid gap-8 border-t border-[var(--border)] pt-8 sm:grid-cols-3">
                <div>
                  <p className="section-label">Data Pipeline</p>
  
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                    Python · FFmpeg
                    <br />
                    OpenCV · SSIM
                    <br />
                    Supervisely
                  </p>
                </div>
  
                <div>
                  <p className="section-label">Computer Vision</p>
  
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                    Semantic Segmentation
                    <br />
                    Image Processing
                    <br />
                    Mask Preparation
                  </p>
                </div>
  
                <div>
                  <p className="section-label">ML Engineering</p>
  
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                    U-Net++ · TernausNet
                    <br />
                    Mask2Former
                    <br />
                    Dice · IoU
                  </p>
                </div>
              </div>
  
              {/* Additional Technical Foundation */}
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--foreground-subtle)]">
                <span>Metadata</span>
                <span>Case-Level Splitting</span>
                <span>Data Validation</span>
                <span>Augmentation</span>
                <span>Reproducibility</span>
                <span>Git / GitHub</span>
                <span>Testing</span>
              </div>
            </div>
          </div>
        </article>
  
        {/* =========================================================
            RESEARCH 02
            EMERGING RESEARCH
        ========================================================== */}
        <article className="border-t border-[var(--border)] py-14">
        <div className="grid gap-10 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
            {/* Left Column */}
            <div>
            <p className="section-label">02 / Research Engineering</p>

            <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                Emerging Research
            </p>
            </div>

            {/* Main Content */}
            <div>
            <p className="section-label">Additional Research Work</p>

            <h3 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
                Visual Data &amp; AI Research Engineering
            </h3>

            <p className="mt-6 max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
                Contributing to an early-stage applied AI research effort with a focus
                on research engineering, data-pipeline development, automation, and
                reliable dataset preparation for computer-vision and machine-learning
                workflows.
            </p>

            <p className="mt-4 max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
                My responsibilities include developing and operating technical
                collection workflows, maintaining structured metadata, implementing
                quality-control and validation tooling, documenting failures, and
                preparing reproducible research data for downstream experimentation
                and handoff.
            </p>

            {/* Engineering Responsibilities */}
            <div className="mt-11">
                <p className="section-label">
                Engineering &amp; Coding Responsibilities
                </p>

                <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">Pipeline Development</p>

                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                    Developing Python-based workflows and supporting automation for
                    repeatable research-data collection, organization, and
                    processing.
                    </p>
                </div>

                <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">Metadata Engineering</p>

                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                    Maintaining structured metadata and consistent dataset records
                    to support traceability, validation, and reproducible research
                    workflows.
                    </p>
                </div>

                <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                    Quality Control &amp; Validation
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                    Implementing automated and manual validation workflows to detect
                    data-quality issues, inconsistencies, and collection failures
                    before downstream use.
                    </p>
                </div>

                <div className="border-l border-[var(--border-light)] pl-5">
                    <p className="text-sm font-medium">
                    Research Documentation &amp; Handoff
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                    Documenting workflows, technical issues, and failure cases while
                    preparing organized research artifacts that can be reproduced and
                    continued by other researchers.
                    </p>
                </div>
                </div>
            </div>

            {/* Technical Focus */}
            <div className="mt-10 border-y border-[var(--border)] py-7">
                <div className="grid gap-7 sm:grid-cols-4">
                <div>
                    <p className="section-label">01</p>
                    <p className="mt-3 text-sm">Python Automation</p>
                </div>

                <div>
                    <p className="section-label">02</p>
                    <p className="mt-3 text-sm">Data Pipelines</p>
                </div>

                <div>
                    <p className="section-label">03</p>
                    <p className="mt-3 text-sm">Validation &amp; QC</p>
                </div>

                <div>
                    <p className="section-label">04</p>
                    <p className="mt-3 text-sm">Reproducibility</p>
                </div>
                </div>
            </div>

            {/* Technologies / Focus */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--foreground-subtle)]">
                <span>Python</span>
                <span>Automation</span>
                <span>Dataset Engineering</span>
                <span>Metadata</span>
                <span>Data Validation</span>
                <span>Quality Control</span>
                <span>Failure Analysis</span>
                <span>Documentation</span>
                <span>Reproducibility</span>
                <span>Applied AI</span>
            </div>
            </div>
        </div>
        </article>
  
        {/* =========================================================
            RESEARCH-ORIENTED PROJECTS
        ========================================================== */}
        <div className="border-t border-[var(--border)] pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
            {/* Left Column */}
            <div>
              <p className="section-label">Research-Oriented Projects</p>
            </div>
  
            {/* Project */}
            <div>
              <p className="section-label">03 / ML Experimentation</p>
  
              <h3 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
                Wikipedia Web Traffic Forecasting
              </h3>
  
              <p className="mt-6 max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
                Developed and evaluated machine-learning and deep-learning
                approaches for large-scale time-series forecasting across more
                than 145,000 Wikipedia pages. The project combines scalable data
                preprocessing, time-series feature engineering, LightGBM and LSTM
                modeling, ensemble forecasting, and SMAPE-based evaluation.
              </p>
  
              {/* Research Attributes */}
              <div className="mt-10 grid grid-cols-2 gap-6 border-y border-[var(--border)] py-7 sm:grid-cols-4">
                <div>
                  <p className="text-xl font-medium">145K+</p>
                  <p className="mt-2 section-label">Pages</p>
                </div>
  
                <div>
                  <p className="text-sm font-medium">LightGBM</p>
                  <p className="mt-2 section-label">ML Model</p>
                </div>
  
                <div>
                  <p className="text-sm font-medium">LSTM</p>
                  <p className="mt-2 section-label">Deep Learning</p>
                </div>
  
                <div>
                  <p className="text-sm font-medium">SMAPE</p>
                  <p className="mt-2 section-label">Evaluation</p>
                </div>
              </div>
  
              {/* Technical Areas */}
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--foreground-subtle)]">
                <span>Python</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>LightGBM</span>
                <span>LSTM</span>
                <span>Time-Series</span>
                <span>Feature Engineering</span>
                <span>Ensemble Modeling</span>
              </div>
  
              {/* Links */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <a
                  href="https://github.com/muralikarthik7/wikipedia-traffic-forecasting/blob/main/ReadMe.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition hover:text-[var(--accent-soft)]"
                >
                  View Project ↗
                </a>
  
                <a
                  href="https://github.com/muralikarthik7/wikipedia-traffic-forecasting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground-muted)] transition hover:text-[var(--foreground)]"
                >
                  GitHub ↗
                </a>
              </div>
  
              <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                Academic research-oriented project · CSC 480
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }