import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { journeySteps } from "../content";

export function UserJourneySection() {
  return (
    <section className="section-shell bg-white" id="jornada">
      <div className="container-wide">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end" data-reveal>
          <div>
            <SectionEyebrow>Experiencia do usuario</SectionEyebrow>
            <h2 className="font-display text-5xl leading-none md:text-7xl">
              Uma jornada mais clara que a maioria dos sites de escola.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink/62">
            A diferenca esta em guiar cada publico sem confusao: familias entendem a proposta,
            alunos visualizam pertencimento e a escola transforma visita em relacionamento.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {journeySteps.map((step, index) => (
            <article
              className="group clean-card overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-1"
              data-reveal
              key={step.title}
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <div className="relative overflow-hidden">
                <img
                  className="image-clean h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                  src={step.image}
                  alt={step.title}
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-ink backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl leading-none">{step.title}</h3>
                <p className="mt-4 leading-7 text-ink/62">{step.text}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-black text-wine">
                  Avancar na jornada
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
