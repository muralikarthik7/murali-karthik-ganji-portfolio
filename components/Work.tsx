export default function Work() {
    return (
      <section
        id="work"
        className="border-t border-[var(--border)] pt-10 pb-24 sm:pt-12 sm:pb-32"
      >
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[var(--accent)]" />
  
          <span className="section-label">03 / Selected Work</span>
        </div>
  
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="section-label">Projects &amp; Systems</p>
  
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-[2.15rem] lg:text-4xl">
              Selected projects across software, data, and machine learning.
            </h2>
          </div>
  
          <div className="max-w-2xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
            <p>
              A selection of projects spanning software engineering, machine
              learning, data engineering, analytics, and application development.
              These projects reflect my experience building end-to-end systems,
              working with large datasets, and applying engineering and
              data-driven approaches to practical problems.
            </p>
          </div>
        </div>
  
        {/* Projects */}
        <div className="mt-14 border-t border-[var(--border)]">
          {/* Project 01 */}
          <article className="grid gap-8 border-b border-[var(--border)] py-10 lg:grid-cols-[0.28fr_1fr_0.42fr] lg:gap-12">
            <div>
              <p className="section-label">01 / ML + Data</p>
  
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                Time-Series Forecasting
              </p>
            </div>
  
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                Wikipedia Traffic Forecasting
              </h3>
  
              <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
                Developed a large-scale forecasting pipeline for more than
                145,000 Wikipedia pages, combining scalable preprocessing,
                lag-based feature engineering, and machine-learning and
                deep-learning models for time-series prediction.
              </p>
  
              <div className="mt-7 flex flex-wrap gap-x-10 gap-y-5">
                <div>
                  <p className="text-xl font-medium">145K+</p>
                  <p className="mt-1 section-label">Pages</p>
                </div>
  
                <div>
                  <p className="text-xl font-medium">~7%</p>
                  <p className="mt-1 section-label">SMAPE Improvement</p>
                </div>
              </div>
  
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
            </div>
  
            <div className="lg:text-right">
              <p className="section-label">Technologies</p>
  
              <div className="mt-4 space-y-2 text-sm text-[var(--foreground-muted)]">
                <p>Python</p>
                <p>Pandas / NumPy</p>
                <p>LightGBM</p>
                <p>LSTM</p>
                <p>Time-Series Forecasting</p>
              </div>
            </div>
          </article>
  
          {/* Project 02 */}
          <article className="grid gap-8 border-b border-[var(--border)] py-10 lg:grid-cols-[0.28fr_1fr_0.42fr] lg:gap-12">
            <div>
              <p className="section-label">02 / Software</p>
  
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                Full-Stack Development
              </p>
            </div>
  
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                CineTicket
              </h3>
  
              <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
                Built a full-stack movie ticket reservation platform with
                authentication, session management, booking history, asynchronous
                movie browsing, and persistent database integration.
              </p>
  
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <a
                    href="https://github.com/muralikarthik7/cineticket-web-page/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium transition hover:text-[var(--accent-soft)]"
                >
                    View Project ↗
                </a>

                <a
                    href="https://drive.google.com/file/d/1Hby2joWXrIofyxzGoJLD6_LqnLDgW0-S/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground-muted)] transition hover:text-[var(--foreground)]"
                >
                    Video Demo ↗
                </a>

                <a
                    href="https://github.com/muralikarthik7/cineticket-web-page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground-muted)] transition hover:text-[var(--foreground)]"
                >
                    GitHub ↗
                </a>
                </div>
            </div>
  
            <div className="lg:text-right">
              <p className="section-label">Technologies</p>
  
              <div className="mt-4 space-y-2 text-sm text-[var(--foreground-muted)]">
                <p>JavaScript</p>
                <p>Node.js</p>
                <p>Express.js</p>
                <p>MongoDB</p>
                <p>REST APIs</p>
              </div>
            </div>
          </article>
  
          {/* Project 03 */}
          <article className="grid gap-8 border-b border-[var(--border)] py-10 lg:grid-cols-[0.28fr_1fr_0.42fr] lg:gap-12">
            <div>
              <p className="section-label">03 / Mobile</p>
  
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                Product Engineering
              </p>
            </div>
  
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                FinTrack
              </h3>
  
              <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
                Developed an iOS personal-finance application for expense
                tracking, budgeting, and financial reporting, with local data
                storage and interactive visualizations built around practical
                money-management workflows.
              </p>
  
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <a
                    href="https://github.com/muralikarthik7/Fintrack-iOS-Application/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium transition hover:text-[var(--accent-soft)]"
                >
                View Project ↗
                </a>

                <a
                    href="https://drive.google.com/file/d/1DWJAZjMI7yap7XmtTKWIV-aTEBUJHWD-/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground-muted)] transition hover:text-[var(--foreground)]"
                >
                Video Demo ↗
                </a>
  
                <a
                   href="https://github.com/muralikarthik7/Fintrack-iOS-Application"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-[var(--foreground-muted)] transition hover:text-[var(--foreground)]"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
  
            <div className="lg:text-right">
              <p className="section-label">Technologies</p>
  
              <div className="mt-4 space-y-2 text-sm text-[var(--foreground-muted)]">
                <p>Swift</p>
                <p>SwiftUI</p>
                <p>Local Data Storage</p>
                <p>Charts</p>
                <p>iOS Development</p>
              </div>
            </div>
          </article>
  
          {/* Project 04 */}
          <article className="grid gap-8 border-b border-[var(--border)] py-10 lg:grid-cols-[0.28fr_1fr_0.42fr] lg:gap-12">
            <div>
              <p className="section-label">04 / Data</p>
  
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                Data Engineering
              </p>
            </div>
  
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                Research Data Engineering Pipeline
              </h3>
  
              <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
                Designed an end-to-end pipeline to collect, clean, transform, and
                analyze datasets related to social-media usage and student
                well-being, with automated ETL workflows for reproducible data
                preparation.
              </p>
  
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <a
                    href="https://github.com/muralikarthik7/ISTA322_Final_Project/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium transition hover:text-[var(--accent-soft)]"
                >
                    View Project ↗
                </a>

                <a
                    href="https://github.com/muralikarthik7/ISTA322_Final_Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground-muted)] transition hover:text-[var(--foreground)]"
                >
                    GitHub ↗
                </a>
              </div>
            </div>
  
            <div className="lg:text-right">
              <p className="section-label">Technologies</p>
  
              <div className="mt-4 space-y-2 text-sm text-[var(--foreground-muted)]">
                <p>Python</p>
                <p>ETL</p>
                <p>Data Cleaning</p>
                <p>Data Transformation</p>
                <p>Visualization</p>
              </div>
            </div>
          </article>
  
          {/* Project 05 */}
          <article className="grid gap-8 border-b border-[var(--border)] py-10 lg:grid-cols-[0.28fr_1fr_0.42fr] lg:gap-12">
            <div>
              <p className="section-label">05 / ML</p>
  
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--foreground-subtle)]">
                Predictive Analytics
              </p>
            </div>
  
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                Student Performance Prediction
              </h3>
  
              <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--foreground-muted)]">
                BuiltDeveloped an end-to-end machine-learning system for predicting student 
                academic performance using Decision Tree and Random Forest regression, 
                model comparison, cross-validation, and hyperparameter tuning. 
                Built an interactive Streamlit application around the final Random 
                Forest model, achieving an R² of 0.81 and MAE of 1.17 grade points on 
                held-out data.
              </p>
  
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <a
                  href="https://student-performance-forecast.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition hover:text-[var(--accent-soft)]"
                >
                  View Project ↗
                </a>
  
                <a
                  href="https://github.com/muralikarthik7/student-performance-prediction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground-muted)] transition hover:text-[var(--foreground)]"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
  
            <div className="lg:text-right">
              <p className="section-label">Technologies</p>
  
              <div className="mt-4 space-y-2 text-sm text-[var(--foreground-muted)]">
                <p>Python</p>
                <p>scikit-learn</p>
                <p>Decision Tree</p>
                <p>Random Forest</p>
                <p>MAE / R²</p>
              </div>
            </div>
          </article>
        </div>
  
        {/* All Projects Link */}
        <div className="mt-8 flex justify-end">
          <a
            href="https://github.com/muralikarthik7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--foreground-muted)] transition hover:text-[var(--foreground)]"
          >
            View all projects on GitHub ↗
          </a>
        </div>
      </section>
    );
  }