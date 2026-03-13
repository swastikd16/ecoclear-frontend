function AuthInput({
  label,
  icon: Icon,
  error,
  className = "",
  inputClassName = "",
  ...props
}) {
  return (
    <label className={`block space-y-2 ${className}`}>
      <span className="block text-sm font-medium text-slate-700">{label}</span>
      <span className="relative block">
        {Icon ? (
          <Icon className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
        ) : null}
        <input
          className={`auth-input-base ${Icon ? "pl-12" : ""} ${error ? "border-rose-300 focus:border-rose-500 focus:ring-rose-500/10" : ""} ${inputClassName}`}
          {...props}
        />
      </span>
      {error ? <span className="text-xs font-medium text-rose-600">{error}</span> : null}
    </label>
  );
}

export default AuthInput;
