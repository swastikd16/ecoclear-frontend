import { Globe, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

function BrandHeader({
  subtitle = "CONSERVATION BOARD",
  helperLabel = "Help & Support",
  rightContent,
}) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-200/80 px-6 py-5 sm:px-8 lg:px-10">
      <Link className="flex items-center gap-3" to="/">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#124734] text-white shadow-[0_14px_28px_rgba(18,71,52,0.18)]">
          <Leaf className="h-5 w-5" />
        </span>
        <span className="min-w-0">
          <span className="block text-xl font-semibold tracking-tight text-[#0f2138]">
            EcoClear
          </span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {subtitle}
          </span>
        </span>
      </Link>

      {rightContent ?? (
        <div className="flex items-center gap-3">
          <button
            className="hidden text-sm font-medium text-slate-500 transition hover:text-slate-700 sm:inline-flex"
            type="button"
          >
            {helperLabel}
          </button>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-slate-300 hover:text-slate-700"
            type="button"
          >
            <Globe className="h-[18px] w-[18px]" />
          </button>
        </div>
      )}
    </header>
  );
}

export default BrandHeader;
