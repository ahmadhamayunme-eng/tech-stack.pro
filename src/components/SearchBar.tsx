type SearchBarProps = {
  placeholder?: string;
  buttonLabel?: string;
  chips?: string[];
};

export function SearchBar({ placeholder = "What do you want to do with AI?", buttonLabel = "Find Tools", chips = [] }: SearchBarProps) {
  return (
    <form action="/search" className="mx-auto max-w-3xl" aria-label="Find AI tools">
      <div className="glass-card p-2 sm:p-3">
        <div className="flex flex-col gap-3 rounded-[1.35rem] bg-black/20 p-2 ring-1 ring-white/10 sm:flex-row sm:items-center sm:p-3">
          <label htmlFor="ai-search" className="sr-only">
            {placeholder}
          </label>
          <input id="ai-search" name="q" type="search" placeholder={placeholder} className="min-h-14 flex-1 bg-transparent px-4 text-base text-white placeholder:text-white/40 outline-none" />
          <button type="submit" className="primary-button min-h-12 justify-center">
            {buttonLabel}
          </button>
        </div>
        {chips.length ? (
          <div className="flex flex-wrap gap-2 px-3 pb-3 pt-4">
            {chips.map((chip) => (
              <button key={chip} type="button" className="chip">
                {chip}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </form>
  );
}
