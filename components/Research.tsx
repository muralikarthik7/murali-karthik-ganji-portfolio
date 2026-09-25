
export default function Research() {
  const researchProjects = [
    {
      number: "01",
      category: "Computer Vision",
      field: "Medical AI",
      date: "Mar 2026 — Present",
      label: "Retinal Surgical Video Research",
      title: "Retinal Surgical Video Segmentation",
      description:
        "Developing computer-vision and data-engineering workflows for retinal surgical-video analysis and semantic-segmentation research. The pipeline transforms raw surgical video into structured, quality-controlled, annotation-ready, and training-ready datasets for machine-learning experimentation.",
      contributions: [
        {
          title: "Video & Image Processing",
          description:
            "Developed Python-based preprocessing workflows for video frame extraction, SSIM-based duplicate filtering, blur and quality checks, image processing, cropping, and resizing.",
        },
        {
          title: "Dataset Engineering",
          description:
            "Organized surgical cases into structured datasets, generated metadata and training artifacts, and supported reproducible case-level train, validation, and test splits designed to prevent data leakage.",
        },
        {
          title: "Annotation & Mask Workflows",
          description:
            "Supported Supervisely-based annotation workflows for surgical structures and instruments, including mask preparation, annotation previews, phase tagging, and segmentation-data validation.",
        },
        {
          title: "ML Experimentation & Evaluation",
          description:
            "Supporting semantic-segmentation experimentation, augmentation and training workflows, checkpointed model development, and evaluation using segmentation metrics such as Dice and IoU.",
        },
      ],
      pipeline: [
        "Video",
        "Frames",
        "Quality Control",
        "Annotation",
        "Dataset",
        "Training",
        "Evaluation",
      ],
      technicalAreas: [
        {
          title: "Data Pipeline",
          items: ["Python · FFmpeg", "OpenCV · SSIM", "Supervisely"],
        },
        {
          title: "Computer Vision",
          items: [
            "Semantic Segmentation",
            "Image Processing",
            "Mask Preparation",
          ],
        },
        {
          title: "ML Engineering",
          items: [
            "U-Net++ · TernausNet",
            "Mask2Former",
            "Dice · IoU",
          ],
        },
      ],
      technologies: [
        "Python",
        "OpenCV",
        "FFmpeg",
        "SSIM",
        "Supervisely",
        "Semantic Segmentation",
        "Medical Imaging",
        "Dataset Engineering",
        "Case-Level Splitting",
        "Data Validation",
        "Augmentation",
        "Reproducibility",
        "Git / GitHub",
      ],
    },

    {
      number: "02",
      category: "Research Engineering",
      field: "Visual Data & Applied AI",
      date: "Jul 2026 — Present",
      label: "VSI-VERIFY Dataset v1",
      title: "VSI-VERIFY — Multi-View Visual Dataset Research",
      description:
        "Contributing to the development of VSI-VERIFY Dataset v1 through structured multi-view and multi-state image collection, metadata management, and quality-control procedures. The research focuses on developing reproducible visual data acquisition and organization workflows to support future AI and computer vision research.",
      contributions: [
        {
          title: "Image Capture & Collection",
          description:
            "Develop reproducible image capture workflows and support standardized collection protocols for consistent visual data acquisition across different viewpoints, physical instances, and functional states.",
        },
        {
          title: "Dataset & Metadata Engineering",
          description:
            "Organize structured visual datasets using standardized file structures, naming conventions, metadata schemas, and consistent records supporting traceability and reproducibility.",
        },
        {
          title: "Verification & Quality Control",
          description:
            "Support dataset validation and quality-control procedures to identify collection inconsistencies, incomplete metadata, image-quality issues, and ambiguous visual evidence before downstream experimentation.",
        },
        {
          title: "Research Documentation & Handoff",
          description:
            "Document collection protocols, technical workflows, and research artifacts while collaborating with researchers to prepare organized, high-quality datasets for future AI and computer vision research.",
        },
      ],
      pipeline: [
        "Planning",
        "Image Capture",
        "Metadata",
        "Quality Control",
        "Validation",
        "Dataset",
        "Research Handoff",
      ],
      technicalAreas: [
        {
          title: "Visual Data Collection",
          items: [
            "Multi-View Imaging",
            "Multi-State Capture",
            "Collection Protocols",
          ],
        },
        {
          title: "Dataset Engineering",
          items: [
            "Structured Metadata",
            "Dataset Organization",
            "Data Traceability",
          ],
        },
        {
          title: "Research Quality",
          items: [
            "Quality Control",
            "Evidence Visibility",
            "Reproducibility",
          ],
        },
      ],
      technologies: [
        "Computer Vision",
        "Multi-View Imaging",
        "Dataset Engineering",
        "Metadata Management",
        "Image Acquisition",
        "Data Validation",
        "Quality Control",
        "Research Documentation",
        "Reproducibility",
        "Applied AI",
      ],
    },

    {
      number: "03",
      category: "Medical Imaging & AR/VR",
      field: "AI Healthcare · Extended Reality",
      date: "Sep 2026 — Present",
      label: "AI-Driven Medical Imaging Research",
      title: "AI Medical Imaging & AR/VR Visualization",
      description:
        "Collaborating on an interdisciplinary research project integrating AI-based CT image segmentation with immersive AR/VR visualization for medical imaging applications. The research explores anatomical segmentation, 3D medical image processing, and interactive visualization workflows using Unity and Meta Quest 3.",
      contributions: [
        {
          title: "AI-Based CT Segmentation",
          description:
            "Explore pretrained deep learning models for anatomical segmentation of CT scans, focusing on organs including the liver, spleen, and kidneys.",
        },
        {
          title: "Segmentation Evaluation",
          description:
            "Support the comparison of AI-generated anatomical segmentations with reference annotations from the Beyond the Cranial Vault (BTCV) dataset to assess segmentation quality.",
        },
        {
          title: "3D Medical Image Processing",
          description:
            "Explore workflows for processing segmented CT images and preparing 3D anatomical models using 3D Slicer for visualization and integration into Unity.",
        },
        {
          title: "Interactive AR/VR Visualization",
          description:
            "Contribute to the development of interactive anatomical visualization workflows using Unity and Meta Quest 3, including model selection, visibility controls, rotation, reset functionality, and comparison of AI-generated and reference anatomical structures.",
        },
      ],
      pipeline: [
        "CT Imaging",
        "AI Segmentation",
        "Evaluation",
        "3D Processing",
        "Unity",
        "AR/VR",
        "Visualization",
      ],
      technicalAreas: [
        {
          title: "Medical AI",
          items: [
            "CT Image Segmentation",
            "Deep Learning",
            "BTCV Dataset",
          ],
        },
        {
          title: "3D Medical Imaging",
          items: [
            "3D Slicer",
            "Anatomical Models",
            "3D Visualization",
          ],
        },
        {
          title: "Extended Reality",
          items: [
            "Unity",
            "Meta Quest 3",
            "AR/VR Interaction",
          ],
        },
      ],
      technologies: [
        "Python",
        "Medical Imaging",
        "CT Segmentation",
        "Deep Learning",
        "BTCV Dataset",
        "3D Slicer",
        "Unity",
        "Meta Quest 3",
        "Augmented Reality",
        "Virtual Reality",
        "3D Visualization",
      ],
    },
  ];

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
        <span className="section-label">Research</span>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.15fr] lg:gap-16">
        <div>
          <p className="section-label">
            Research &amp; Applied AI
          </p>

          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-[2rem] lg:text-[2.15rem]">
            Engineering research systems for computer vision,
            medical imaging, and data-driven AI.
          </h2>
        </div>

        <div className="max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
          <p>
            My research at the University of Arizona combines
            software engineering, machine learning, computer
            vision, medical image analysis, and data engineering
            to develop reproducible research workflows and
            structured datasets.
          </p>

          <p className="mt-4">
            My work spans retinal surgical video segmentation,
            multi-view visual dataset development, and
            AI-driven anatomical imaging with AR/VR visualization.
          </p>

          <p className="mt-4">
            I focus on translating research requirements into
            practical engineering solutions, from data acquisition
            and preprocessing to dataset preparation, model
            experimentation, evaluation, and interactive
            visualization.
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
              <br />
              Mar 2026 — Present
            </p>
          </div>

          <div>
            <p className="section-label">Research Focus</p>

            <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
              Computer Vision · Medical AI
              <br />
              Research Data Engineering · AR/VR
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          UNIVERSITY RESEARCH PROJECTS
      ========================================================== */}

      {researchProjects.map((project) => (
        <article
          key={project.number}
          className="border-b border-[var(--border)] py-14"
        >
          <div className="grid gap-10 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
            {/* Left Column */}

            <div>
              <p className="section-label">
                {project.number} / {project.category}
              </p>

              <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                {project.field}
              </p>

              <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                {project.date}
              </p>
            </div>

            {/* Main Content */}

            <div>
              <p className="section-label">
                {project.label}
              </p>

              <h3 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
                {project.title}
              </h3>

              <p className="mt-6 max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
                {project.description}
              </p>

              {/* Engineering Contributions */}

              <div className="mt-11">
                <p className="section-label">
                  Engineering Contributions
                </p>

                <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                  {project.contributions.map((contribution) => (
                    <div
                      key={contribution.title}
                      className="border-l border-[var(--border-light)] pl-5"
                    >
                      <p className="text-sm font-medium">
                        {contribution.title}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                        {contribution.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Pipeline */}

              <div className="mt-12">
                <p className="section-label">
                  Research Pipeline
                </p>

                <div className="mt-6 grid grid-cols-2 border-y border-[var(--border)] sm:grid-cols-4 lg:grid-cols-7">
                  {project.pipeline.map((step, index) => (
                    <div
                      key={step}
                      className="border-b border-r border-[var(--border)] px-3 py-5 lg:border-b-0 last:border-r-0"
                    >
                      <p className="font-mono text-[0.65rem] text-[var(--foreground-subtle)]">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <p className="mt-2 text-sm">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Areas */}

              <div className="mt-10 grid gap-8 border-t border-[var(--border)] pt-8 sm:grid-cols-3">
                {project.technicalAreas.map((area) => (
                  <div key={area.title}>
                    <p className="section-label">
                      {area.title}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                      {area.items.map((item, index) => (
                        <span key={item}>
                          {item}

                          {index < area.items.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies */}

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--foreground-subtle)]">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* =========================================================
          RESEARCH-ORIENTED PROJECTS
      ========================================================== */}

      <div className="pt-14">
        <div className="grid gap-10 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
          {/* Left Column */}

          <div>
            <p className="section-label">
              Research-Oriented Projects
            </p>

            <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
              Academic Machine Learning
            </p>
          </div>

          {/* Main Content */}

          <div>
            <p className="section-label">
              04 / ML Experimentation
            </p>

            <h3 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
              Wikipedia Web Traffic Forecasting
            </h3>

            <p className="mt-6 max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
              Developed and evaluated machine-learning and
              deep-learning approaches for large-scale
              time-series forecasting across more than
              145,000 Wikipedia pages. The project combines
              scalable data preprocessing, time-series feature
              engineering, LightGBM and LSTM modeling,
              ensemble forecasting, and SMAPE-based evaluation.
            </p>

            {/* Research Attributes */}

            <div className="mt-10 grid grid-cols-2 gap-6 border-y border-[var(--border)] py-7 sm:grid-cols-4">
              <div>
                <p className="text-xl font-medium">
                  145K+
                </p>

                <p className="mt-2 section-label">
                  Pages
                </p>
              </div>

              <div>
                <p className="text-sm font-medium">
                  LightGBM
                </p>

                <p className="mt-2 section-label">
                  ML Model
                </p>
              </div>

              <div>
                <p className="text-sm font-medium">
                  LSTM
                </p>

                <p className="mt-2 section-label">
                  Deep Learning
                </p>
              </div>

              <div>
                <p className="text-sm font-medium">
                  SMAPE
                </p>

                <p className="mt-2 section-label">
                  Evaluation
                </p>
              </div>
            </div>

            {/* Technical Areas */}

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--foreground-subtle)]">
              {[
                "Python",
                "Pandas",
                "NumPy",
                "LightGBM",
                "LSTM",
                "Time-Series",
                "Feature Engineering",
                "Ensemble Modeling",
              ].map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            {/* Project Links */}

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
