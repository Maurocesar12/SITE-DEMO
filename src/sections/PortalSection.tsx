import { PlayCircle } from "lucide-react";
import { portalCards } from "../content";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { cn } from "../lib/classNames";

type PortalSectionProps = {
  onOpenLogin: () => void;
};

export function PortalSection({ onOpenLogin }: PortalSectionProps) {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 text-ink sm:px-6 md:px-8 md:py-28" id="portal">
      <div className="mx-auto grid max-w-[88rem] gap-12 xl:grid-cols-[0.72fr_1.28fr] xl:items-center">
        <div data-reveal>
          <SectionEyebrow>Area de login</SectionEyebrow>
          <h2 className="mobile-safe-title font-display text-4xl leading-none sm:text-5xl md:text-7xl">
            Portal do aluno para materiais, agenda e suporte.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/62">
            Este bloco e o principal argumento para vender o novo site: ele deixa de ser apenas
            institucional e vira uma ferramenta de relacionamento com alunos e responsaveis.
          </p>
          <button
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-wine px-6 font-black text-white shadow-glow transition hover:-translate-y-0.5"
            onClick={onOpenLogin}
            type="button"
          >
            Abrir simulacao de login
            <PlayCircle className="h-5 w-5" />
          </button>
        </div>

        <div className="animate-rise rounded-3xl border border-ink/10 bg-porcelain p-3 shadow-soft" data-reveal>
          <div className="grid overflow-hidden rounded-2xl bg-white text-ink lg:grid-cols-[220px_1fr]">
            <aside className="bg-ink p-5 text-white">
              <strong className="block font-display text-3xl leading-none">Portal Agnes</strong>
              <div className="mt-8 flex gap-2 overflow-x-auto text-sm font-bold text-white/62 lg:grid lg:overflow-visible">
                {["Inicio", "Materiais", "Agenda", "Financeiro", "Suporte"].map((item, index) => (
                  <span
                    className={cn(
                      "whitespace-nowrap rounded-full px-4 py-3",
                      index === 0 && "bg-white text-ink"
                    )}
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </aside>
            <div className="p-5 md:p-7">
              <div className="rounded-[1.25rem] bg-piano-room bg-cover bg-center p-6 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brass">Aluno</p>
                <h3 className="mt-10 font-display text-4xl leading-none sm:text-5xl">Maria Clara</h3>
                <p className="mt-2 text-white/72">Piano | Terca-feira, 15h | Professora Agnes</p>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {portalCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article className="rounded-2xl border border-ink/10 bg-porcelain p-4 transition duration-300 hover:-translate-y-1 hover:bg-white" key={card.label}>
                      <Icon className="mb-5 h-6 w-6 text-wine" />
                      <span className="text-xs font-black uppercase tracking-[0.16em] text-ink/42">{card.label}</span>
                      <strong className="mt-2 block leading-tight">{card.value}</strong>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
