import { ArrowRight, ChevronRight, Star } from "lucide-react";

type HeroSectionProps = {
  onNavigate: (id: string) => void;
  onOpenLogin: () => void;
};

export function HeroSection({ onNavigate, onOpenLogin }: HeroSectionProps) {
  return (
    <section
      className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-hero-stage bg-cover bg-center px-4 pb-10 pt-32 text-white md:px-8 md:pb-16"
      id="inicio"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,36,36,.10)_0%,rgba(36,36,36,.36)_45%,rgba(36,36,36,.86)_100%)]" />
      <div className="animate-float-soft absolute right-[5vw] top-32 hidden w-[23rem] rounded-3xl border border-white/20 bg-white/14 p-4 shadow-soft backdrop-blur-xl xl:block">
        <div className="aspect-[4/3] rounded-2xl bg-piano-room bg-cover bg-center" />
        <div className="mt-4 grid gap-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-pearl">Proposta visual</p>
              <strong className="font-display text-3xl leading-none">Novo site + portal</strong>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-wine">
              <Star className="h-5 w-5 fill-current" />
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold text-white/72">
            <span className="rounded-2xl bg-white/10 p-3">Cursos</span>
            <span className="rounded-2xl bg-white/10 p-3">Eventos</span>
            <span className="rounded-2xl bg-white/10 p-3">Login</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[88rem] gap-12 xl:grid-cols-[minmax(0,1fr)_28rem] xl:items-end">
        <div className="max-w-5xl">
              <p className="animate-rise mb-4 inline-flex rounded-full border border-white/25 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/85 backdrop-blur">
                Redesign limpo para apresentacao comercial
              </p>
              <h1 className="animate-rise-delay max-w-5xl font-display text-[clamp(3.4rem,8vw,7.8rem)] font-semibold leading-[0.9] tracking-normal">
                Escola de Musica Agnes Moco
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/82 md:text-xl">
            Uma reformulacao para posicionar a escola acima do comum no ramo: navegacao clara,
            imagens reais, prova social, captacao de alunos, agenda artistica e area de login em
            uma experiencia continua.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-black text-ink shadow-glow transition hover:-translate-y-0.5"
              onClick={() => onNavigate("diagnostico")}
              type="button"
            >
              Ver diagnostico
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 px-6 font-bold text-white backdrop-blur transition hover:bg-white/10"
              onClick={onOpenLogin}
              type="button"
            >
              Abrir login demo
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
