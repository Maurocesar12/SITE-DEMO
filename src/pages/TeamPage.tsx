import { ArrowLeft } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { teamMembers } from "../content";

type TeamPageProps = {
  onBackHome: () => void;
};

export function TeamPage({ onBackHome }: TeamPageProps) {
  return (
    <main className="bg-porcelain pt-28">
      <section className="section-shell pb-14">
        <div className="container-wide">
          <button
            className="mb-10 inline-flex h-11 items-center gap-2 rounded-full border border-ink/10 bg-white px-4 text-sm font-black text-ink/70 transition hover:-translate-y-0.5 hover:text-ink"
            onClick={onBackHome}
            type="button"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o site
          </button>

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end" data-reveal>
            <div>
              <SectionEyebrow>Equipe</SectionEyebrow>
              <h1 className="font-display text-6xl leading-none md:text-8xl">
                Pessoas que sustentam a experiência musical.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink/62">
              Uma página de equipe ajuda famílias a reconhecerem quem conduz o processo pedagógico,
              artístico e administrativo da escola antes mesmo do primeiro contato.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="container-wide grid gap-4 md:grid-cols-2">
          {teamMembers.map((member) => {
            const Icon = member.icon;
            return (
              <article className="clean-card grid overflow-hidden rounded-3xl lg:grid-cols-[0.72fr_1fr]" data-reveal key={member.name}>
                <img
                  className="image-clean h-80 w-full object-cover lg:h-full"
                  src={member.image}
                  alt={member.name}
                />
                <div className="flex flex-col justify-between p-7">
                  <div className="mb-12 flex items-center justify-between">
                    <span className="rounded-full bg-porcelain px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-ink/54">
                      {member.role}
                    </span>
                    <Icon className="h-6 w-6 text-wine" />
                  </div>
                  <div>
                    <h2 className="font-display text-4xl leading-none">{member.name}</h2>
                    <p className="mt-4 leading-7 text-ink/62">{member.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
