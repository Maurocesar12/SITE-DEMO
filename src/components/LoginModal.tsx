import { ArrowRight, BookOpen, CalendarDays, LogOut, ShieldCheck, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { portalCards, studentUpdates } from "../content";

type LoginModalProps = {
  onClose: () => void;
};

export function LoginModal({ onClose }: LoginModalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-ink/55 p-4 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="animate-slide-panel grid max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-soft lg:grid-cols-[0.42fr_0.58fr]">
        <aside className="bg-porcelain p-6 text-ink md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-wine">Portal demo</p>
              <h2 className="mt-4 font-display text-5xl leading-none">Area do aluno</h2>
            </div>
            <button
              aria-label="Fechar login demo"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink"
              onClick={onClose}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {!isAuthenticated ? (
            <>
              <form className="mt-10 grid gap-4" onSubmit={(event) => event.preventDefault()}>
                <label className="grid gap-2 text-sm font-black text-ink/62">
                  E-mail do aluno
                  <input
                    className="h-12 rounded-2xl border border-ink/10 bg-white px-4 font-medium text-ink outline-none ring-wine/20 transition placeholder:text-ink/35 focus:ring-4"
                    defaultValue="aluno@agnesmoco.com.br"
                    type="email"
                  />
                </label>
                <label className="grid gap-2 text-sm font-black text-ink/62">
                  Senha
                  <input
                    className="h-12 rounded-2xl border border-ink/10 bg-white px-4 font-medium text-ink outline-none ring-wine/20 transition placeholder:text-ink/35 focus:ring-4"
                    defaultValue="demo123"
                    type="password"
                  />
                </label>
                <button
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-wine px-6 font-black text-white transition hover:-translate-y-0.5"
                  onClick={() => setIsAuthenticated(true)}
                  type="button"
                >
                  Entrar no painel demo
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>

              <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-4 text-sm leading-6 text-ink/62">
                Acesso pronto para apresentacao. Use o botao acima para entrar no painel demonstrativo
                com materiais, agenda, comunicados e suporte.
              </div>
            </>
          ) : (
            <div className="mt-10 grid gap-3">
              {["Inicio", "Materiais", "Agenda", "Financeiro", "Suporte"].map((item, index) => (
                <button
                  className={index === 0 ? "rounded-full bg-wine px-4 py-3 text-left text-sm font-black text-white" : "rounded-full px-4 py-3 text-left text-sm font-bold text-ink/62 hover:bg-white"}
                  key={item}
                  type="button"
                >
                  {item}
                </button>
              ))}
              <button
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-3 text-sm font-black text-ink/70"
                onClick={() => setIsAuthenticated(false)}
                type="button"
              >
                <LogOut className="h-4 w-4" />
                Sair da demo
              </button>
            </div>
          )}
        </aside>

        <section className="overflow-y-auto p-6 md:p-8">
          {isAuthenticated ? <StudentDashboard /> : <LoginPreview />}
        </section>
      </div>
    </div>
  );
}

function LoginPreview() {
  return (
    <div className="grid h-full min-h-[520px] content-between gap-8">
      <div className="rounded-3xl bg-piano-room bg-cover bg-center p-7 text-white">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-white/78">Experiencia do aluno</p>
        <h3 className="mt-16 max-w-md font-display text-5xl leading-none">Materiais, agenda e comunicados em um so lugar.</h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { icon: BookOpen, label: "Materiais" },
          { icon: CalendarDays, label: "Agenda" },
          { icon: ShieldCheck, label: "Acesso seguro" }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div className="rounded-2xl border border-ink/10 bg-porcelain p-5" key={item.label}>
              <Icon className="mb-6 h-6 w-6 text-wine" />
              <strong>{item.label}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StudentDashboard() {
  return (
    <div className="animate-rise">
      <div className="rounded-3xl bg-piano-room bg-cover bg-center p-7 text-white">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/78">Bem-vinda</p>
            <h3 className="mt-8 font-display text-5xl leading-none">Maria Clara</h3>
            <p className="mt-2 text-white/78">Piano | Terca-feira, 15h | Professora Agnes</p>
          </div>
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-wine">
            <ShieldCheck className="h-7 w-7" />
          </span>
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {portalCards.map((card) => {
          const Icon = card.icon;
          return (
            <article className="rounded-2xl border border-ink/10 bg-porcelain p-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft" key={card.label}>
              <Icon className="mb-5 h-6 w-6 text-wine" />
              <span className="text-xs font-black uppercase tracking-[0.16em] text-ink/42">{card.label}</span>
              <strong className="mt-2 block leading-tight">{card.value}</strong>
            </article>
          );
        })}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {studentUpdates.map((item) => (
          <div className="rounded-2xl border border-ink/10 bg-white p-4" key={item}>
            <Sparkles className="mb-5 h-5 w-5 text-wine" />
            <strong className="leading-tight">{item}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
