import { highlights } from "../content";

export function HighlightsBar() {
  return (
    <section className="border-y border-ink/10 bg-white">
      <div className="mx-auto grid max-w-[88rem] grid-cols-2 md:grid-cols-4">
        {highlights.map((item) => (
          <div className="border-r border-ink/10 p-6 md:p-8" key={item.label}>
            <strong className="block font-display text-4xl text-wine md:text-5xl">{item.value}</strong>
            <span className="mt-2 block text-sm font-semibold text-ink/58">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
