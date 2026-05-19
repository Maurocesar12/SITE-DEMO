import { proposalBenefits } from "../content";
import { SectionEyebrow } from "../components/SectionEyebrow";

export function BenefitsSection() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-12 max-w-4xl" data-reveal>
          <SectionEyebrow>Valor da proposta</SectionEyebrow>
          <h2 className="font-display text-5xl leading-none md:text-7xl">
            O redesign resolve problemas diferentes para cada publico.
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {proposalBenefits.map((item) => {
            const Icon = item.icon;
            return (
              <article className="rounded-3xl border border-ink/10 bg-white p-7 shadow-[0_18px_60px_rgba(36,36,36,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-soft" data-reveal key={item.title}>
                <div className="mb-10 grid h-14 w-14 place-items-center rounded-2xl bg-sage text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-4xl leading-none">{item.title}</h3>
                <p className="mt-4 leading-7 text-ink/64">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
