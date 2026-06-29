import { CLIENT_BRANDS } from "../constants/data";

export default function Clients() {
  return (
    <section className="py-12 px-8 md:px-16 bg-primary border-b border-secondary/10 flex items-center overflow-hidden">
      <div className="w-64 shrink-0 pr-8 flex items-center gap-2 border-r border-secondary/10 hidden md:flex">
        <div className="w-5 h-5 text-accent1">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
          </svg>
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-secondary/50 w-48 text-balance">
          Trusted by 500+ global brands.
        </span>
      </div>

      <div className="flex-1 overflow-hidden relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...CLIENT_BRANDS, ...CLIENT_BRANDS, ...CLIENT_BRANDS].map((brand, i) => (
            <div key={i} className="mx-12 md:mx-16 flex items-center justify-center shrink-0">
              <img 
                src={`https://cdn.simpleicons.org/${brand}`} 
                alt={`${brand} logo`} 
                className="h-8 md:h-10 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
