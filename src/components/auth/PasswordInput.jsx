import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

function PasswordInput({ label, error, className = "", ...props }) {
  const [visible, setVisible] = useState(false);

  return (
    <label className={`block space-y-2 ${className}`}>
      <span className="block text-sm font-medium text-slate-700">{label}</span>
      <span className="relative block">
        <Lock className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
        <input
          className={`auth-input-base pl-12 pr-12 ${error ? "border-rose-300 focus:border-rose-500 focus:ring-rose-500/10" : ""}`}
          type={visible ? "text" : "password"}
          {...props}
        />
        <button
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          onClick={() => setVisible((current) => !current)}
          type="button"
        >
          {visible ? (
            <EyeOff className="h-[18px] w-[18px]" />
          ) : (
            <Eye className="h-[18px] w-[18px]" />
          )}
        </button>
      </span>
      {error ? <span className="text-xs font-medium text-rose-600">{error}</span> : null}
    </label>
  );
}

export default PasswordInput;
