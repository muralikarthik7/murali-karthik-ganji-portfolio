export default function About() {
    return (
      <section
        id="about"
        className="border-t border-[var(--border)] pt-10 pb-24 sm:pt-12 sm:pb-32"
      >
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]" />
            <span className="section-label">02 / About</span>
          </div>
  
          <div className="w-full">
            <p className="section-label">Engineering Profile</p>
  
            <h2 className="mt-8 max-w-6xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-[3.15rem] lg:text-4xl">
              Building at the intersection of software, data, and intelligent
              systems
            </h2>
          </div>
        </div>
  
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
            <p>
              I&apos;m a Computer Science student at the University of Arizona
              with a technical foundation spanning software engineering,
              machine learning, data engineering, analytics, and computer vision.
              I enjoy applying these areas together to build practical systems
              and solve complex technical problems.
            </p>
  
            <p>
              I enjoy working across the full engineering process—from designing
              applications and backend workflows to processing data, building
              machine-learning pipelines, evaluating models, and developing
              systems that turn raw information into useful products and
              decisions.
            </p>
          </div>
  
          <div className="space-y-4 text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
            <p>
              In my current research, I develop Python-based workflows for
              retinal surgical-video analysis and computer-vision dataset
              preparation, including preprocessing, quality control, metadata
              generation, annotation support, and semantic-segmentation data
              preparation.
            </p>
  
            <p>
              Beyond research, I&apos;ve built full-stack web applications,
              large-scale forecasting systems, ETL pipelines, statistical
              analysis tools, and mobile applications using technologies across
              Python, JavaScript, SQL, R, Swift, databases, cloud tools, and
              modern development workflows.
            </p>
          </div>
        </div>
  
        <div className="mt-10 border-y border-[var(--border)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-[var(--border)] py-8 sm:border-r lg:border-b-0">
              <p className="section-label">01 / Software</p>
  
              <p className="mt-4 text-base font-medium">
                Software Engineering
              </p>
  
              <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                Applications
                <br />
                Backend Systems
                <br />
                REST APIs
                <br />
                OOP &amp; Architecture
              </p>
            </div>
  
            <div className="border-b border-[var(--border)] py-8 sm:pl-8 lg:border-b-0 lg:border-r">
              <p className="section-label">02 / Intelligence</p>
  
              <p className="mt-4 text-base font-medium">
                AI &amp; Machine Learning
              </p>
  
              <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                Machine Learning
                <br />
                Computer Vision
                <br />
                Time-Series Models
                <br />
                Model Evaluation
              </p>
            </div>
  
            <div className="border-b border-[var(--border)] py-8 sm:border-r lg:border-b-0 lg:pl-8">
              <p className="section-label">03 / Data</p>
  
              <p className="mt-4 text-base font-medium">
                Data Engineering
              </p>
  
              <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                ETL Pipelines
                <br />
                SQL &amp; Databases
                <br />
                Data Validation
                <br />
                Feature Engineering
              </p>
            </div>
  
            <div className="py-8 sm:pl-8">
              <p className="section-label">04 / Analysis</p>
  
              <p className="mt-4 text-base font-medium">
                Data &amp; Analytics
              </p>
  
              <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                Statistical Analysis
                <br />
                Visualization
                <br />
                Python / R / SQL
                <br />
                Data Interpretation
              </p>
            </div>
          </div>
        </div>
  
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--foreground-subtle)]">
          <span>Python</span>
          <span>Java</span>
          <span>JavaScript</span>
          <span>SQL</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Docker</span>
          <span>AWS</span>
          <span>Git</span>
          <span>Linux</span>
        </div>
      </section>
    );
  }