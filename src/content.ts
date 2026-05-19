import {
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Camera,
  ClipboardList,
  Clock,
  FileText,
  Headphones,
  HeartHandshake,
  KeyRound,
  MessageCircle,
  Mic2,
  Music2,
  Piano,
  PlayCircle,
  Quote,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
  Award,
  WandSparkles
} from "lucide-react";

export const navItems = [
  { label: "Cursos", id: "cursos" },
  { label: "Musicalizacao", id: "cursos" },
  { label: "Espetaculos", id: "espetaculos" },
  { label: "O que contam da gente", id: "depoimentos" },
  { label: "Contato", id: "contato" }
];

export const schoolMenuItems = [
  { label: "Quem Somos", id: "experiencia" },
  { label: "Equipe", id: "equipe" },
  { label: "Nossos Valores", id: "projeto" }
];

export const highlights = [
  { label: "Navegacao pensada para familias", value: "Clareza" },
  { label: "Cursos com narrativa propria", value: "7+" },
  { label: "Experiencia artistica e familiar", value: "Arte" },
  { label: "Area reservada para alunos", value: "Portal" }
];

export const journeySteps = [
  {
    title: "Descoberta",
    text: "A familia entende rapidamente a proposta da escola, os cursos e a metodologia.",
    image: "/site-images/shantala-familia.jpg"
  },
  {
    title: "Escolha do curso",
    text: "Cada modalidade apresenta idade, objetivo, linguagem e caminho para contato.",
    image: "/site-images/musicalizacao-3-a-5.jpeg"
  },
  {
    title: "Aula experimental",
    text: "O formulario organiza interesse, perfil do aluno e WhatsApp antes da conversa.",
    image: "/site-images/musicalizacao-5-a-7.jpeg"
  },
  {
    title: "Relacionamento",
    text: "Depois da matricula, o portal concentra agenda, materiais, recados e suporte.",
    image: "/site-images/musicalizacao-7-a-10.jpeg"
  }
];

export const currentSiteFindings = [
  {
    title: "HTTPS e confianca",
    text: "O site atual abre em HTTP e a tentativa de HTTPS apresentou bloqueio no navegador. A nova versao deve nascer com certificado, redirecionamento seguro e validacao tecnica.",
    icon: ShieldCheck
  },
  {
    title: "Conteudo valioso pouco escaneavel",
    text: "A escola tem uma proposta pedagogica rica, mas o texto pode ser organizado em blocos mais comerciais, com caminhos claros para pais, alunos e responsaveis.",
    icon: FileText
  },
  {
    title: "Conversao precisa ser mais forte",
    text: "O site possui chamada de contato, mas pode evoluir para formulario segmentado por curso, WhatsApp com contexto e fluxo para aula experimental.",
    icon: TrendingUp
  },
  {
    title: "Estrutura pronta para evoluir",
    text: "As secoes atuais Home, Agnes Moco, Musicalizacao, Espetaculos, Coral, Depoimentos e Contato podem virar uma experiencia moderna sem perder identidade.",
    icon: SearchCheck
  }
];

export const courses = [
  {
    title: "Musicalizacao infantil",
    text: "A partir dos seis meses, com vivencias musicais, corporais, espaciais e linguisticas para cada fase da infancia.",
    tag: "6 meses+",
    metric: "familia",
    image: "/site-images/musicalizacao-1-a-2.jpeg",
    icon: Sparkles,
    tone: "from-white via-porcelain to-pearl/70"
  },
  {
    title: "Musica em Familia",
    text: "Programa para levar a metodologia da escola para dentro de casa, aproximando responsaveis e criancas pela arte.",
    tag: "metodologia",
    metric: "afeto",
    image: "/site-images/shantala-familia.jpg",
    icon: HeartHandshake,
    tone: "from-white via-porcelain to-pearl/70"
  },
  {
    title: "Piano",
    text: "Tecnica, percepcao, leitura e repertorio com acompanhamento individual para criancas, adolescentes e adultos.",
    tag: "individual",
    metric: "tecnica",
    image: "/site-images/musicalizacao-5-a-7.jpeg",
    icon: Piano,
    tone: "from-white via-porcelain to-pearl/70"
  },
  {
    title: "Canto particular",
    text: "Desenvolvimento vocal, interpretacao, repertorio e confianca para apresentar melhor a propria voz.",
    tag: "voz",
    metric: "palco",
    image: "/site-images/musicalizacao-7-a-10.jpeg",
    icon: Mic2,
    tone: "from-white via-porcelain to-pearl/70"
  },
  {
    title: "Coral",
    text: "Experiencia coletiva para escuta, harmonia, expressao artistica e construcao de repertorio em grupo.",
    tag: "grupo",
    metric: "coral",
    image: "/site-images/musicalizacao-3-a-5.jpeg",
    icon: UsersRound,
    tone: "from-white via-porcelain to-pearl/70"
  },
  {
    title: "Percepcao musical",
    text: "Escalas, ditados, solfejos, reconhecimento de sons, intervalos e consciencia ritmica.",
    tag: "base",
    metric: "escuta",
    image: "/site-images/musicalizacao-2-a-3.jpeg",
    icon: Music2,
    tone: "from-white via-porcelain to-pearl/70"
  }
];

export const experienceItems = [
  {
    icon: ShieldCheck,
    title: "Base tecnica segura",
    text: "HTTPS, performance, estrutura responsiva e boas praticas para reduzir atritos tecnicos."
  },
  {
    icon: CalendarDays,
    title: "Agenda viva",
    text: "Eventos, recitais, aulas abertas e comunicados organizados dentro do site."
  },
  {
    icon: KeyRound,
    title: "Login do aluno",
    text: "Area reservada para materiais, avisos, suporte e futuras integracoes administrativas."
  },
  {
    icon: Headphones,
    title: "Suporte integrado",
    text: "Canal para secretaria receber solicitacoes com contexto, reduzindo conversas soltas."
  }
];

export const experienceModules = [
  {
    title: "Agnes Moco",
    text: "Pagina institucional com historia, metodologia, posicionamento artistico e autoridade da professora/escola.",
    image: "/site-images/shantala-familia.jpg"
  },
  {
    title: "Espetaculos",
    text: "Area visual para recitais, apresentacoes, bastidores e galerias pos-evento para gerar prova social.",
    image: "/site-images/musicalizacao-7-a-10.jpeg"
  },
  {
    title: "Depoimentos",
    text: "Relatos de pais, alunos e familias com layout de credibilidade e chamadas para aula experimental.",
    image: "/site-images/musicalizacao-3-a-5.jpeg"
  }
];

export const referenceGallery = [
  { title: "Musicalizacao 1 a 2", image: "/site-images/musicalizacao-1-a-2.jpeg" },
  { title: "Musicalizacao 2 a 3", image: "/site-images/musicalizacao-2-a-3.jpeg" },
  { title: "Musicalizacao 3 a 5", image: "/site-images/musicalizacao-3-a-5.jpeg" },
  { title: "Musicalizacao 5 a 7", image: "/site-images/musicalizacao-5-a-7.jpeg" },
  { title: "Musicalizacao 7 a 10", image: "/site-images/musicalizacao-7-a-10.jpeg" },
  { title: "Shantala e familia", image: "/site-images/shantala-familia.jpg" }
];

export const testimonials = [
  {
    name: "Mariana Alves",
    role: "Mae de aluna da musicalizacao",
    text: "A escola trouxe a musica para dentro da rotina da nossa casa. Minha filha ficou mais confiante, mais atenta e espera a aula com muita alegria.",
    image: "/site-images/musicalizacao-1-a-2.jpeg",
    icon: Quote
  },
  {
    name: "Roberto Lima",
    role: "Responsavel por aluno de piano",
    text: "O acompanhamento e muito humano. A evolucao tecnica aparece, mas o mais bonito e ver a crianca criando relacao afetiva com a musica.",
    image: "/site-images/musicalizacao-5-a-7.jpeg",
    icon: Quote
  },
  {
    name: "Carolina Mendes",
    role: "Aluna de canto",
    text: "As aulas me ajudaram a vencer a inseguranca e entender minha voz. A experiencia de apresentacao mudou completamente minha relacao com o palco.",
    image: "/site-images/musicalizacao-7-a-10.jpeg",
    icon: Quote
  }
];

export const videoTestimonials = [
  {
    title: "Relato de responsavel",
    description: "Video curto para apresentar a evolucao, a rotina de estudos e a experiencia familiar com a escola.",
    image: "/site-images/shantala-familia.jpg",
    duration: "1:24",
    icon: PlayCircle
  },
  {
    title: "Bastidores de apresentacao",
    description: "Depoimento visual com alunos preparando repertorio, palco e momentos de convivencia.",
    image: "/site-images/musicalizacao-7-a-10.jpeg",
    duration: "0:58",
    icon: PlayCircle
  },
  {
    title: "Experiencia na musicalizacao",
    description: "Conteudo ideal para mostrar aos pais como a metodologia funciona em diferentes faixas etarias.",
    image: "/site-images/musicalizacao-3-a-5.jpeg",
    duration: "1:12",
    icon: PlayCircle
  }
];

export const commentFeed = [
  {
    author: "Fernanda R.",
    text: "A comunicacao da escola sempre foi carinhosa e muito clara. A proposta do portal vai ajudar bastante os pais."
  },
  {
    author: "Juliana P.",
    text: "Meu filho ganhou disciplina e alegria com as aulas. A parte dos recitais e uma memoria linda para a familia."
  },
  {
    author: "Andre S.",
    text: "Gostei muito da ideia de ter materiais e agenda em uma area do aluno. Facilita o acompanhamento semanal."
  },
  {
    author: "Patricia M.",
    text: "A escola tem uma metodologia muito sensivel. Um site mais moderno ajuda a mostrar melhor esse cuidado."
  }
];

export const showsDone = [
  {
    title: "Sarau de Musicalizacao",
    period: "Realizado em 2024",
    description: "Apresentacao com alunos da musicalizacao infantil e participacao das familias.",
    image: "/site-images/musicalizacao-3-a-5.jpeg",
    icon: CalendarDays
  },
  {
    title: "Recital de Piano e Canto",
    period: "Realizado em 2023",
    description: "Encontro artistico para repertorios individuais, canto particular e pratica de palco.",
    image: "/site-images/musicalizacao-7-a-10.jpeg",
    icon: Music2
  },
  {
    title: "Mostra Musica em Familia",
    period: "Realizado em 2022",
    description: "Vivencia musical com criancas, responsaveis e atividades de conexao afetiva.",
    image: "/site-images/shantala-familia.jpg",
    icon: HeartHandshake
  }
];

export const upcomingShows = [
  {
    title: "Recital de Inverno",
    date: "Julho de 2026",
    description: "Espetaculo para apresentar a evolucao dos alunos no primeiro semestre.",
    status: "Em planejamento",
    icon: Clock
  },
  {
    title: "Semana de Aulas Abertas",
    date: "Agosto de 2026",
    description: "Evento de captacao para familias conhecerem metodologia, professores e espacos.",
    status: "Inscricoes em breve",
    icon: Award
  },
  {
    title: "Sarau de Fim de Ano",
    date: "Dezembro de 2026",
    description: "Grande encontro de encerramento com alunos, familiares, coral e repertorios especiais.",
    status: "Calendario anual",
    icon: Sparkles
  }
];

export const teamMembers = [
  {
    name: "Agnes Moco",
    role: "Direcao artistica e pedagogica",
    description: "Responsavel pela metodologia, acompanhamento musical e proposta artistica da escola.",
    image: "/site-images/shantala-familia.jpg",
    icon: Award
  },
  {
    name: "Equipe de Musicalizacao",
    role: "Educacao musical infantil",
    description: "Profissionais dedicados ao desenvolvimento de escuta, ritmo, corpo, afeto e criatividade.",
    image: "/site-images/musicalizacao-1-a-2.jpeg",
    icon: Sparkles
  },
  {
    name: "Professores de Instrumento",
    role: "Piano, canto e percepcao",
    description: "Acompanhamento individual para tecnica, repertorio, interpretacao e evolucao de cada aluno.",
    image: "/site-images/musicalizacao-5-a-7.jpeg",
    icon: Piano
  },
  {
    name: "Secretaria e Atendimento",
    role: "Relacionamento com familias",
    description: "Organizacao de horarios, comunicados, suporte e contato com responsaveis e alunos.",
    image: "/site-images/musicalizacao-2-a-3.jpeg",
    icon: Headphones
  }
];

export const timeline = [
  {
    phase: "01",
    title: "Reposicionamento visual",
    text: "Home premium, identidade refinada, navegacao nova e narrativa clara para pais, alunos e responsaveis.",
    icon: WandSparkles
  },
  {
    phase: "02",
    title: "Conteudo e captacao",
    text: "Cursos, metodologia, espetaculos, coral, depoimentos e formulario de aula experimental com WhatsApp segmentado.",
    icon: ClipboardList
  },
  {
    phase: "03",
    title: "Portal do aluno",
    text: "Login, comunicados, materiais, agenda, suporte, documentos e base para futuras integracoes.",
    icon: KeyRound
  },
  {
    phase: "04",
    title: "Evolucao continua",
    text: "SEO local, performance, seguranca, analytics e melhorias mensais orientadas por dados.",
    icon: BadgeCheck
  }
];

export const portalCards = [
  { label: "Proxima aula", value: "Piano | Terca, 15h", icon: Piano },
  { label: "Material liberado", value: "Escalas maiores e repertorio", icon: BookOpen },
  { label: "Comunicado", value: "Sarau dos alunos em junho", icon: Music2 },
  { label: "Financeiro", value: "Mensalidade e recibos", icon: FileText },
  { label: "Suporte", value: "Falar com secretaria", icon: Headphones },
  { label: "Galeria", value: "Fotos das apresentacoes", icon: Camera }
];

export const studentUpdates = [
  "Material da aula de piano liberado pela professora",
  "Confirmar presenca no recital de junho",
  "Enviar duvida para secretaria sobre reposicao",
  "Acessar comunicado para responsaveis"
];

export const proposalBenefits = [
  {
    title: "Para a escola",
    text: "Menos dependencia de mensagens soltas, site mais confiavel, imagem mais profissional e base para crescimento.",
    icon: UserRoundCheck
  },
  {
    title: "Para os alunos",
    text: "Acesso facil a materiais, agenda, comunicados e suporte em uma area reservada e organizada.",
    icon: BookOpen
  },
  {
    title: "Para novos clientes",
    text: "Caminho claro para entender cursos, confiar na escola e solicitar aula experimental em poucos cliques.",
    icon: MessageCircle
  }
];
