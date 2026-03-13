function AuthPageLayout({ header, children, footer, aside }) {
  return (
    <div className="auth-shell relative min-h-screen overflow-hidden bg-[#f5f7f6]">
      <div className="pointer-events-none absolute bottom-[-7rem] right-[-5rem] h-72 w-72 rounded-full bg-[#d8efe3] blur-3xl" />
      <div className="pointer-events-none absolute left-[-4rem] top-[-4rem] h-56 w-56 rounded-full bg-white/80 blur-3xl" />

      {header}

      <main className="relative z-10 flex min-h-[calc(100vh-160px)] items-center justify-center px-6 py-10 sm:px-8 lg:px-10">
        <div
          className={`grid w-full max-w-7xl gap-8 ${
            aside ? "xl:grid-cols-[1.02fr_0.92fr]" : ""
          }`}
        >
          {children}
          {aside}
        </div>
      </main>

      {footer}
    </div>
  );
}

export default AuthPageLayout;
