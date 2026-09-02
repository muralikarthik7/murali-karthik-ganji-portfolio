export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[rgba(10,13,18,0.94)] backdrop-blur-md">
      <div className="page-shell">
        <div className="grid h-[76px] grid-cols-[1fr_auto_1fr] items-center">

          {/* Logo */}
          <a
            href="#top"
            className="justify-self-start font-mono text-sm font-semibold tracking-[-0.02em] transition hover:text-[var(--accent-soft)]"
          >
            MKG.
          </a>

          {/* Navigation Links */}
          <div className="hidden items-center gap-9 text-sm text-[var(--foreground-muted)] md:flex">
            <a
              href="#about"
              className="transition hover:text-[var(--foreground)]"
            >
              About
            </a>

            <a
              href="#experience"
              className="transition hover:text-[var(--foreground)]"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="transition hover:text-[var(--foreground)]"
            >
              Projects
            </a>

            <a
              href="#research"
              className="transition hover:text-[var(--foreground)]"
            >
              Research
            </a>

            <a
              href="#contact"
              className="transition hover:text-[var(--foreground)]"
            >
              Contact
            </a>
          </div>

          {/* Resume Download */}
          <a
            href="/Murali Karthik Ganji Resume.pdf"
            download="Murali_Karthik_Ganji_Resume.pdf"
            className="justify-self-end rounded-md border border-[var(--border-light)] px-4 py-2 text-sm font-medium transition hover:border-[var(--foreground-subtle)] hover:bg-[var(--surface)]"
          >
            Résumé ↓
          </a>

        </div>
      </div>
    </nav>
  );
}