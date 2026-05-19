import { ArrowRight, CalendarCheck, Clock3, MessageCircle } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";

const courseOptions = [
  "Musicalizacao infantil",
  "Musica em Familia",
  "Piano",
  "Canto particular",
  "Coral",
  "Percepcao musical"
];

const studentProfiles = [
  "Crianca",
  "Adolescente",
  "Adulto",
  "Responsavel buscando informacoes"
];

export function ContactSection() {
  return (
    <section className="px-4 pb-20 md:px-8 md:pb-28" id="contato">
      <div className="mx-auto grid max-w-[88rem] gap-10 rounded-3xl border border-ink/10 bg-white p-5 text-ink shadow-soft md:grid-cols-[0.9fr_1.1fr] md:p-10" data-reveal>
        <div className="flex flex-col justify-between rounded-2xl bg-piano-room bg-cover bg-center p-7 text-white">
          <div>
          <SectionEyebrow className="text-white/80">Conversao</SectionEyebrow>
            <h2 className="font-display text-5xl leading-none md:text-6xl">
              Aula experimental com fluxo comercial mais inteligente.
            </h2>
          </div>
          <div className="mt-16 grid gap-3 text-sm text-white/78">
            <span className="inline-flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-brass" />
              Captura de interesse por curso
            </span>
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-brass" />
              Direcionamento para WhatsApp com contexto
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-brass" />
              Melhor organizacao para secretaria
            </span>
          </div>
        </div>

        <form className="grid gap-4 rounded-[1.4rem] bg-white p-5 text-ink md:p-7">
          <label className="grid gap-2 text-sm font-black text-ink/62">
            Nome do responsavel
            <input className="h-12 rounded-2xl border border-ink/10 bg-porcelain px-4 font-medium outline-none ring-brass/30 transition focus:ring-4" placeholder="Digite o nome" type="text" />
          </label>
          <label className="grid gap-2 text-sm font-black text-ink/62">
            Interesse musical
            <select className="h-12 rounded-2xl border border-ink/10 bg-porcelain px-4 font-medium outline-none ring-brass/30 transition focus:ring-4">
              {courseOptions.map((course) => (
                <option key={course}>{course}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-black text-ink/62">
            Perfil do aluno
            <select className="h-12 rounded-2xl border border-ink/10 bg-porcelain px-4 font-medium outline-none ring-brass/30 transition focus:ring-4">
              {studentProfiles.map((profile) => (
                <option key={profile}>{profile}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-black text-ink/62">
            WhatsApp
            <input className="h-12 rounded-2xl border border-ink/10 bg-porcelain px-4 font-medium outline-none ring-brass/30 transition focus:ring-4" placeholder="(21) 99999-9999" type="tel" />
          </label>
          <button className="mt-2 inline-flex h-13 min-h-12 items-center justify-center gap-2 rounded-full bg-wine px-6 font-black text-white transition hover:-translate-y-0.5" type="button">
            Solicitar aula experimental
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
