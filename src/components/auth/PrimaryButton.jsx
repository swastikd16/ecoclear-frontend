import { Link } from "react-router-dom";

function PrimaryButton({
  to,
  children,
  icon: Icon,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseClass =
    variant === "secondary"
      ? "inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
      : "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#124734] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(18,71,52,0.18)] transition hover:bg-[#0d3628]";

  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon className="h-[18px] w-[18px]" /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={`${baseClass} ${className}`} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {content}
    </button>
  );
}

export default PrimaryButton;
