import { currentSiteFindings } from "../content";
import { SectionEyebrow } from "../components/SectionEyebrow";

export function DiagnosisSection() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28" id="diagnostico">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end" data-reveal>
          <div>
            <SectionEyebrow>Diagnostico do site atual</SectionEyebrow>
            <h2 className="mobile-safe-title font-display text-4xl leading-none sm:text-5xl md:text-7xl">
              A escola tem conteudo forte, mas a experiencia pode vender muito mais.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink/62">
            O site atual ja comunica a essencia da escola: musicalizacao, arte, familia,
            espetaculos, coral e depoimentos. A reformulacao deve preservar essa alma e corrigir
            os pontos tecnicos e comerciais que impedem o site de parecer tao forte quanto a escola.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {currentSiteFindings.map((item) => {
            const Icon = item.icon;
            return (
              <article className="rounded-3xl border border-ink/10 bg-white p-6 shadow-[0_18px_60px_rgba(36,36,36,0.08)]" data-reveal key={item.title}>
                <div className="mb-8 grid h-13 w-13 place-items-center rounded-2xl bg-wine text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-3xl leading-none">{item.title}</h3>
                <p className="mt-4 leading-7 text-ink/62">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
