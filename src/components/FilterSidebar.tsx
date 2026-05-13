const filters = [
  { label: "Free/Paid", values: ["Free", "Freemium", "Paid"] },
  { label: "Best for", values: ["Freelancers", "Agencies", "Creators", "Developers"] },
  { label: "Platform", values: ["Web", "Mobile", "Desktop", "API"] },
  { label: "Region", values: ["Works in Pakistan", "Urdu support"] }
];

export function FilterSidebar() {
  return (
    <aside className="glass-card h-fit p-5 lg:sticky lg:top-24" aria-label="Tool filters">
      <h2 className="font-heading text-xl font-bold text-white">Filters</h2>
      <div className="mt-6 space-y-6">
        {filters.map((filter) => (
          <fieldset key={filter.label}>
            <legend className="text-sm font-semibold text-white/76">{filter.label}</legend>
            <div className="mt-3 space-y-2">
              {filter.values.map((value) => (
                <label key={value} className="flex items-center gap-3 text-sm text-white/62">
                  <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-black/30 accent-cyan-300" />
                  {value}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
    </aside>
  );
}
