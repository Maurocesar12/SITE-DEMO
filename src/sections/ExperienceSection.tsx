import { experienceItems, experienceModules } from "../content";
import { SectionEyebrow } from "../components/SectionEyebrow";

export function ExperienceSection() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28" id="experiencia">
      <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
          <SectionEyebrow>Experiencia completa</SectionEyebrow>
          <h2 className="mobile-safe-title font-display text-4xl leading-none sm:text-5xl md:text-7xl">
            Uma arquitetura para mostrar autoridade e gerar desejo.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/62">
            A demo organiza a escola em paginas e blocos que uma familia espera encontrar:
            quem e a Agnes Moco, como funciona a metodologia, quais cursos existem, o que os
            alunos vivem no palco e como entrar em contato.
          </p>
          <div className="mt-8 grid gap-3">
            {experienceItems.map((item) => {
              const Icon = item.icon;
              return (
                <div className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-soft" data-reveal key={item.title}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brass text-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <p className="mt-1 text-sm leading-6 text-ink/58">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5">
          {experienceModules.map((item, index) => (
            <article className="grid overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft md:grid-cols-[0.8fr_1fr]" data-reveal key={item.title}>
              <div
                className="image-clean min-h-64 bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(23,19,16,.05), rgba(23,19,16,.55)), url(${item.image})` }}
              />
              <div className="flex flex-col justify-between p-7">
                <span className="w-fit rounded-full bg-wine px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white">
                  Modulo {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mt-12">
                  <h3 className="font-display text-4xl leading-none">{item.title}</h3>
                  <p className="mt-4 leading-7 text-ink/62">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
