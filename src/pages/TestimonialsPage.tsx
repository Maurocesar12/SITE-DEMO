import { ArrowLeft, MessageCircle, Star } from "lucide-react";
import { commentFeed, testimonials, videoTestimonials } from "../content";
import { SectionEyebrow } from "../components/SectionEyebrow";

type TestimonialsPageProps = {
  onBackHome: () => void;
};

export function TestimonialsPage({ onBackHome }: TestimonialsPageProps) {
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
              <SectionEyebrow>O que contam da gente</SectionEyebrow>
              <h1 className="font-display text-6xl leading-none md:text-8xl">
                Histórias que mostram a escola por quem vive a experiência.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink/62">
              Uma página dedicada a depoimentos ajuda a transformar confiança em decisão. Aqui entram
              relatos de pais, alunos, vídeos de bastidores e comentários curtos que reforçam a
              metodologia, o cuidado e a evolução dos alunos.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="container-wide grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => {
            const Icon = item.icon;
            return (
              <article className="clean-card group overflow-hidden rounded-3xl" data-reveal key={item.name}>
                <img
                  className="image-clean h-60 w-full object-cover transition duration-700 group-hover:scale-105"
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-6">
                  <Icon className="mb-6 h-7 w-7 text-wine" />
                  <p className="text-lg leading-8 text-ink/72">“{item.text}”</p>
                  <div className="mt-8 border-t border-ink/10 pt-5">
                    <strong className="block">{item.name}</strong>
                    <span className="text-sm text-ink/50">{item.role}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-wide">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div data-reveal>
              <SectionEyebrow>Vídeos</SectionEyebrow>
              <h2 className="max-w-3xl font-display text-5xl leading-none md:text-7xl">
                Relatos em vídeo para dar vida à apresentação.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-ink/62">
              Os cards abaixo simulam uma área de vídeos. No projeto real, podem abrir YouTube,
              Instagram, Vimeo ou vídeos hospedados no próprio site.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {videoTestimonials.map((item) => {
              const Icon = item.icon;
              return (
                <article className="group overflow-hidden rounded-3xl border border-ink/10 bg-porcelain" data-reveal key={item.title}>
                  <div className="relative">
                    <img
                      className="image-clean h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                      src={item.image}
                      alt={item.title}
                    />
                    <button
                      className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-wine shadow-soft transition group-hover:scale-110"
                      type="button"
                      aria-label={`Reproduzir ${item.title}`}
                    >
                      <Icon className="h-7 w-7 fill-current" />
                    </button>
                    <span className="absolute bottom-4 right-4 rounded-full bg-ink/75 px-3 py-1 text-xs font-black text-white backdrop-blur">
                      {item.duration}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-3xl leading-none">{item.title}</h3>
                    <p className="mt-4 leading-7 text-ink/62">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-28" data-reveal>
            <SectionEyebrow>Comentários</SectionEyebrow>
            <h2 className="font-display text-5xl leading-none md:text-7xl">
              Comentários curtos para reforçar prova social.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {commentFeed.map((comment) => (
              <article className="clean-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1" data-reveal key={comment.author}>
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-wine text-white">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div className="flex gap-1 text-wine">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star className="h-4 w-4 fill-current" key={index} />
                    ))}
                  </div>
                </div>
                <p className="leading-7 text-ink/68">{comment.text}</p>
                <strong className="mt-6 block">{comment.author}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
