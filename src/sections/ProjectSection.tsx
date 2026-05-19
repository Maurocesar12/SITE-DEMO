import { timeline } from "../content";
import { SectionEyebrow } from "../components/SectionEyebrow";

export function ProjectSection() {
  return (
    <section className="bg-pearl px-4 py-20 md:px-8 md:py-28" id="projeto">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-12 max-w-4xl" data-reveal>
          <SectionEyebrow>Projeto avancado</SectionEyebrow>
          <h2 className="font-display text-5xl leading-none md:text-7xl">
            Uma entrega em fases para ficar bonita, funcional e facil de aprovar.
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-4">
          {timeline.map((item) => {
            const Icon = item.icon;
            return (
              <article className="rounded-3xl border border-ink/10 bg-white p-7 shadow-[0_18px_60px_rgba(36,36,36,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-soft" data-reveal key={item.phase}>
                <div className="mb-12 flex items-center justify-between">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-wine font-display text-3xl text-white">
                    {item.phase}
                  </span>
                  <Icon className="h-7 w-7 text-brass" />
                </div>
                <h3 className="font-display text-3xl leading-none">{item.title}</h3>
                <p className="mt-4 leading-7 text-ink/64">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
