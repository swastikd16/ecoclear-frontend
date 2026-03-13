function FooterLinks() {
  return (
    <footer className="relative z-10 border-t border-slate-200/80 px-6 py-5 text-center sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        <span>(c) 2024 CECB Raipur</span>
        <a className="transition hover:text-slate-700" href="#privacy-policy">
          Privacy Policy
        </a>
        <a className="transition hover:text-slate-700" href="#terms-of-use">
          Terms of Use
        </a>
      </div>
    </footer>
  );
}

export default FooterLinks;
