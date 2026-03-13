function CheckboxField({ checked, onChange, label, error }) {
  return (
    <label className="block space-y-2">
      <span className="flex items-start gap-3">
        <input
          checked={checked}
          className="mt-0.5 h-[18px] w-[18px] rounded border-slate-300 text-[#124734] focus:ring-[#124734]/20"
          onChange={onChange}
          type="checkbox"
        />
        <span className="text-sm leading-6 text-slate-600">{label}</span>
      </span>
      {error ? <span className="text-xs font-medium text-rose-600">{error}</span> : null}
    </label>
  );
}

export default CheckboxField;
