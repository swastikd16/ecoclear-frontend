function AuthCard({ icon, eyebrow, title, description, children }) {
  return (
    <section className="auth-card-shadow overflow-hidden rounded-[28px] border border-slate-200/80 bg-white">
      <div className="flex items-center gap-3 bg-[#124734] px-6 py-4 text-white">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
          {icon}
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
            {eyebrow}
          </p>
          <h2 className="mt-0.5 text-base font-semibold tracking-tight">{title}</h2>
        </div>
      </div>

      <div className="space-y-6 px-6 py-7 sm:px-8 sm:py-8">
        {description ? (
          <p className="max-w-xl text-sm leading-6 text-slate-500">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export default AuthCard;
