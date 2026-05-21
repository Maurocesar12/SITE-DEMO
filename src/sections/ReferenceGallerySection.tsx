import { referenceGallery } from "../content";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { SectionEyebrow } from "../components/SectionEyebrow";

export function ReferenceGallerySection() {
  return (
    <section className="section-shell bg-white" id="referencias">
      <div className="container-wide">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-end" data-reveal>
          <div>
            <SectionEyebrow>Imagens reais do site atual</SectionEyebrow>
            <h2 className="mobile-safe-title font-display text-4xl leading-none sm:text-5xl md:text-7xl">
              Referencias reais conectadas a uma nova experiencia.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink/62">
            Em vez de parecer um template generico, a demo reaproveita a memoria visual da escola
            com tratamento mais limpo, menos saturado e mais consistente com uma marca educacional.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {referenceGallery.map((item, index) => (
            <article
              className={index === 5 ? "group overflow-hidden rounded-3xl border border-ink/10 bg-porcelain md:col-span-2" : "group overflow-hidden rounded-3xl border border-ink/10 bg-porcelain"}
              data-reveal
              key={item.title}
            >
              <ResponsiveImage
                className="image-clean h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                src={item.image}
                alt={item.title}
                sizes={index === 5 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
              />
              <div className="flex items-center justify-between p-5">
                <strong>{item.title}</strong>
                <span className="text-xs font-black uppercase tracking-[0.16em] text-ink/42">Referencia</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
