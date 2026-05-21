import { courses } from "../content";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { ResponsiveImage } from "../components/ResponsiveImage";

export function CoursesSection() {
  return (
    <section className="bg-porcelain px-4 py-16 text-ink sm:px-6 md:px-8 md:py-28" id="cursos">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end" data-reveal>
          <div>
            <SectionEyebrow>Cursos e metodologia</SectionEyebrow>
            <h2 className="mobile-safe-title max-w-4xl font-display text-4xl leading-none sm:text-5xl md:text-7xl">
              Do conteudo atual para uma vitrine clara de modalidades.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-ink/62">
            Cada curso vira uma porta de entrada com linguagem propria, chamada de conversao
            e contexto pedagogico para responsaveis entenderem valor antes de perguntar preco.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <article
                className={`group min-h-[330px] rounded-3xl border border-ink/10 bg-gradient-to-br ${course.tone} p-6 text-ink shadow-[0_18px_55px_rgba(36,36,36,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-soft`}
                data-reveal
                key={course.title}
              >
                <div className="mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
                  <ResponsiveImage
                    className="image-clean h-44 w-full object-cover transition duration-700 group-hover:scale-105"
                    src={course.image}
                    alt={course.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-porcelain text-wine shadow-sm">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-ink/62">
                    {course.tag}
                  </span>
                </div>
                <div className="mt-12">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-wine/70">{course.metric}</span>
                  <h3 className="mt-3 font-display text-4xl leading-none">{course.title}</h3>
                  <p className="mt-4 leading-7 text-ink/64">{course.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
