export default function Experience() {
  const researchTracks = [
    {
      number: "01",
      title: "AI Healthcare — ERM Segmentation",
      date: "Mar 2026 — Present",
      subtitle: "Surgical Video · Computer Vision · Medical AI",
      category: "Computer Vision · Medical AI",
      description:
        "Developing computer-vision and data-engineering workflows for retinal surgical-video analysis and semantic-segmentation research, transforming raw surgical video into structured, quality-controlled, annotation-ready, and training-ready datasets.",
      responsibilities: [
        {
          title: "Video & Image Processing",
          description:
            "Develop Python preprocessing workflows for frame extraction, SSIM-based duplicate filtering, blur and quality checks, cropping, resizing, and image processing.",
        },
        {
          title: "Segmentation Dataset Engineering",
          description:
            "Structure surgical cases, generate metadata and training artifacts, and prepare case-level train, validation, and test splits designed to prevent data leakage.",
        },
        {
          title: "Annotation & Mask Workflows",
          description:
            "Support annotation and segmentation workflows involving surgical structures and instruments, mask preparation, annotation previews, phase tagging, and dataset validation.",
        },
        {
          title: "ML Experimentation",
          description:
            "Support semantic-segmentation experimentation, augmentation, training workflows, model checkpoints, and evaluation using segmentation metrics including Dice and IoU.",
        },
      ],
      technologies: [
        "Python",
        "OpenCV",
        "FFmpeg",
        "SSIM",
        "Supervisely",
        "Semantic Segmentation",
        "U-Net++",
        "Mask2Former",
        "Dice / IoU",
      ],
    },
    {
      number: "02",
      title: "VSI-VERIFY — Multi-View Visual Dataset Research",
      date: "Jul 2026 — Present",
      subtitle: "Visual Data · AI Research Engineering",
      category: "Applied AI · Research Systems",
      description:
        "Contributing to the development of VSI-VERIFY Dataset v1 through structured multi-view and multi-state image collection, metadata management, quality-control procedures, and reproducible dataset preparation for AI and computer vision research.",
      responsibilities: [
        {
          title: "Image Capture & Collection",
          description:
            "Develop reproducible image capture workflows and support standardized collection protocols for consistent visual data acquisition across different viewpoints and functional states.",
        },
        {
          title: "Dataset & Metadata Engineering",
          description:
            "Organize structured visual datasets using standardized file structures, naming conventions, metadata schemas, and consistent records supporting traceability and reproducibility.",
        },
        {
          title: "Verification & Quality Control",
          description:
            "Support dataset validation and quality-control procedures to identify collection inconsistencies, incomplete metadata, and data-quality issues before downstream experimentation.",
        },
        {
          title: "Research Reproducibility",
          description:
            "Document collection protocols, technical workflows, and research artifacts while collaborating with researchers to prepare organized datasets for future AI and computer vision research.",
        },
      ],
      technologies: [
        "Python",
        "Computer Vision",
        "Multi-View Imaging",
        "Dataset Engineering",
        "Metadata",
        "Data Validation",
        "Quality Control",
        "Git / GitHub",
      ],
    },
    {
      number: "03",
      title: "AI Medical Imaging & AR/VR Visualization",
      date: "Sep 2026 — Present",
      subtitle: "Medical Imaging · Deep Learning · Extended Reality",
      category: "Medical AI · AR / VR",
      description:
        "Collaborating on an interdisciplinary research project integrating AI-based CT image segmentation with immersive AR/VR visualization. Supporting anatomical segmentation, 3D medical image processing, and interactive visualization workflows for medical imaging research.",
      responsibilities: [
        {
          title: "AI-Based CT Segmentation",
          description:
            "Explore pretrained deep learning models for anatomical segmentation of CT scans, focusing on organs including the liver, spleen, and kidneys.",
        },
        {
          title: "Segmentation Evaluation",
          description:
            "Support comparison of AI-generated anatomical segmentations with reference annotations from the Beyond the Cranial Vault (BTCV) dataset to assess segmentation quality.",
        },
        {
          title: "3D Medical Image Processing",
          description:
            "Support workflows for processing segmented CT images and preparing 3D anatomical models using 3D Slicer for visualization and integration into Unity.",
        },
        {
          title: "AR/VR Visualization",
          description:
            "Contribute to interactive anatomical visualization workflows using Unity and Meta Quest 3, including model selection, visibility controls, rotation, reset functionality, and comparison of AI-generated and reference structures.",
        },
      ],
      technologies: [
        "Python",
        "Medical Imaging",
        "CT Segmentation",
        "Deep Learning",
        "3D Slicer",
        "Unity",
        "Meta Quest 3",
        "AR / VR",
        "3D Visualization",
        "BTCV Dataset",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="border-t border-[var(--border)] pt-10 pb-24 sm:pt-12 sm:pb-32"
    >
      {/* SECTION HEADER */}

      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[var(--accent)]" />
        <span className="section-label">Experience</span>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="section-label">Professional Experience</p>

          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-[2.15rem] lg:text-4xl">
            Experience across research engineering and software development.
          </h2>
        </div>

        <div className="max-w-2xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
          <p>
            Professional experience applying software engineering, data,
            machine learning, computer vision, medical imaging, and
            web-development skills across academic research and industry
            environments.
          </p>
        </div>
      </div>

      {/* EXPERIENCE 01 — UNDERGRADUATE RESEARCH ASSISTANT */}

      <article className="mt-14 border-t border-[var(--border)] py-14">
        <div className="grid gap-10 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
          {/* Left Column */}

          <div>
            <p className="section-label">01 / Research Engineering</p>

            <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
              Mar 2026 — Present
            </p>
          </div>

          {/* Main Content */}

          <div>
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
              Contributing to interdisciplinary AI and computer-vision
              research through medical image analysis, structured dataset
              development, Python-based research engineering, and immersive
              AR/VR visualization. Supporting reproducible workflows across
              retinal surgical video analysis, multi-view visual datasets,
              and AI-driven anatomical imaging.
            </p>

            {/* RESEARCH TRACKS */}

            {researchTracks.map((track) => (
              <div
                key={track.number}
                className="mt-12 border-t border-[var(--border)] pt-9"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="section-label">
                      Research Track {track.number}
                    </p>

                    <h4 className="mt-3 text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                      {track.title}
                    </h4>

                    <p className="mt-2 text-sm text-[var(--foreground-subtle)]">
                      {track.subtitle}
                    </p>

                    <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                      {track.date}
                    </p>
                  </div>

                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                    {track.category}
                  </span>
                </div>

                <p className="mt-6 max-w-3xl text-[0.95rem] leading-7 text-[var(--foreground-muted)]">
                  {track.description}
                </p>

                {/* Engineering Responsibilities */}

                <div className="mt-8">
                  <p className="section-label">
                    Engineering Responsibilities
                  </p>

                  <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                    {track.responsibilities.map((responsibility) => (
                      <div
                        key={responsibility.title}
                        className="border-l border-[var(--border-light)] pl-5"
                      >
                        <p className="text-sm font-medium">
                          {responsibility.title}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                          {responsibility.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}

                <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[var(--foreground-subtle)]">
                  {track.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            ))}

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

      {/* EXPERIENCE 02 — WEB DEVELOPMENT */}

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
              Website Developer Intern
            </h3>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--foreground-muted)]">
              <span>Web Development &amp; Digital Operations</span>
              <span className="hidden sm:inline">·</span>
              <span>Hyderabad, India</span>
            </div>

            <p className="mt-6 max-w-3xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
              Contributed to the company's web and digital presence
              through website development, frontend updates, responsive
              design, technical troubleshooting, SEO optimization, and
              digital content management.
            </p>

            {/* Core Responsibilities */}

            <div className="mt-10">
              <p className="section-label">Core Responsibilities</p>

              <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-3">
                <div className="border-l border-[var(--border-light)] pl-5">
                  <p className="text-sm font-medium">
                    Web Development
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                    Maintained and updated company websites while
                    supporting frontend development, responsive design,
                    and improvements to usability and website performance.
                  </p>
                </div>

                <div className="border-l border-[var(--border-light)] pl-5">
                  <p className="text-sm font-medium">
                    Testing &amp; Maintenance
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                    Performed technical troubleshooting, website testing,
                    content updates, and routine maintenance to support
                    reliable website functionality.
                  </p>
                </div>

                <div className="border-l border-[var(--border-light)] pl-5">
                  <p className="text-sm font-medium">
                    SEO &amp; Digital Content
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                    Supported SEO optimization, social media, and digital
                    communication initiatives to improve online visibility,
                    audience engagement, and website reach.
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
              <span>SEO</span>
              <span>Testing</span>
              <span>Content Management</span>
            </div>
          </div>
        </div>
      </article>

      {/* TECHNICAL FOUNDATION */}

      <div className="border-t border-[var(--border)] pt-10">
        <p className="section-label">Technical Foundation</p>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--foreground-subtle)]">
          <span>Software Development</span>
          <span>Research Engineering</span>
          <span>Python</span>
          <span>JavaScript</span>
          <span>Computer Vision</span>
          <span>Machine Learning</span>
          <span>Medical Imaging</span>
          <span>Data Engineering</span>
          <span>Research Pipelines</span>
          <span>AR / VR</span>
          <span>Unity</span>
          <span>Git / GitHub</span>
        </div>
      </div>
    </section>
  );
}