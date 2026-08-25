export default function Footer() {
    return (
      <footer className="border-t border-[var(--border)]">
        <div className="page-shell">
          <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
  
            {/* Identity */}
            <div>
              <p className="text-sm font-medium">
                Murali Karthik Ganji
              </p>
  
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[var(--foreground-subtle)]">
                Software · AI/ML · Data
              </p>
            </div>
  
            {/* Center */}
            <p className="text-xs text-[var(--foreground-subtle)]">
              © 2026 Murali Karthik Ganji
            </p>
  
            {/* Back to top */}
            <a
              href="#top"
              className="font-mono text-xs text-[var(--foreground-muted)] transition hover:text-[var(--foreground)]"
            >
              Back to top ↑
            </a>
  
          </div>
        </div>
      </footer>
    );
  }