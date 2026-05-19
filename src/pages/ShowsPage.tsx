import { ArrowLeft, CalendarDays } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { showsDone, upcomingShows } from "../content";

type ShowsPageProps = {
  onBackHome: () => void;
};

export function ShowsPage({ onBackHome }: ShowsPageProps) {
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
              <SectionEyebrow>Espetaculos</SectionEyebrow>
              <h1 className="font-display text-6xl leading-none md:text-8xl">
                Um arquivo vivo das apresentações da escola.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink/62">
              Esta página foi pensada para registrar espetáculos já realizados e divulgar os
              próximos eventos, fortalecendo memória, prova social e desejo de participação.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="container-wide">
          <div className="mb-8 flex items-center gap-3" data-reveal>
            <CalendarDays className="h-5 w-5 text-wine" />
            <h2 className="font-display text-4xl leading-none">Espetáculos realizados</h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {showsDone.map((show) => {
              const Icon = show.icon;
              return (
                <article className="clean-card group overflow-hidden rounded-3xl" data-reveal key={show.title}>
                  <img
                    className="image-clean h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                    src={show.image}
                    alt={show.title}
                  />
                  <div className="p-6">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="rounded-full bg-porcelain px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-ink/54">
                        {show.period}
                      </span>
                      <Icon className="h-5 w-5 text-wine" />
                    </div>
                    <h3 className="font-display text-4xl leading-none">{show.title}</h3>
                    <p className="mt-4 leading-7 text-ink/62">{show.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-wide">
          <div className="mb-10 max-w-3xl" data-reveal>
            <SectionEyebrow>Agenda futura</SectionEyebrow>
            <h2 className="font-display text-5xl leading-none md:text-7xl">
              Próximos espetáculos e ações abertas.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {upcomingShows.map((show) => {
              const Icon = show.icon;
              return (
                <article className="rounded-3xl border border-ink/10 bg-porcelain p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft" data-reveal key={show.title}>
                  <div className="mb-12 flex items-start justify-between gap-4">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-ink/54">
                      {show.status}
                    </span>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-wine text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <span className="text-sm font-black text-wine">{show.date}</span>
                  <h3 className="mt-3 font-display text-4xl leading-none">{show.title}</h3>
                  <p className="mt-4 leading-7 text-ink/62">{show.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
