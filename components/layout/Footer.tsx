"use client";

import { useEffect, useState } from "react";
import { GitHub, LinkedIn } from "@/components/common/Icons";

export default function Footer() {
  const [year, setYear] = useState<number | string>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/10 py-10 max-w-[1200px] mx-auto px-7 mt-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-xs">
          © {year} Arun Nuthikattu. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-slate-400">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GitHub size={17} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedIn size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
