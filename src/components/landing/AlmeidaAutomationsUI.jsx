import React from "react";
import Logo from '../../assets/logo.png'

function IconBase({ children, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <IconBase className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </IconBase>
  );
}

function SparklesIcon({ className = "h-5 w-5" }) {
  return (
    <IconBase className={className}>
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
      <path d="M5 14l1.1 2.4L8.5 17l-2.4.6L5 20l-1.1-2.4L1.5 17l2.4-.6L5 14Z" />
    </IconBase>
  );
}

function CheckCircleIcon({ className = "h-4 w-4" }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  );
}

function BotIcon({ className = "h-5 w-5" }) {
  return (
    <IconBase className={className}>
      <rect x="5" y="8" width="14" height="11" rx="3" />
      <path d="M12 4v4" />
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M9 16h6" />
    </IconBase>
  );
}

function WorkflowIcon({ className = "h-5 w-5" }) {
  return (
    <IconBase className={className}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 6h8" />
      <path d="M18 8v8" />
      <path d="M8 7.5 16.5 16" />
    </IconBase>
  );
}

function MessageIcon({ className = "h-5 w-5" }) {
  return (
    <IconBase className={className}>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H10l-4 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-7Z" />
      <path d="M8 8h8" />
      <path d="M8 11h5" />
    </IconBase>
  );
}

function FilterIcon({ className = "h-5 w-5" }) {
  return (
    <IconBase className={className}>
      <path d="M4 6h16" />
      <path d="M7 12h10" />
      <path d="M10 18h4" />
    </IconBase>
  );
}

function ChartIcon({ className = "h-5 w-5" }) {
  return (
    <IconBase className={className}>
      <path d="M4 20h16" />
      <path d="M7 16V9" />
      <path d="M12 16V5" />
      <path d="M17 16v-6" />
    </IconBase>
  );
}

function ZapIcon({ className = "h-5 w-5" }) {
  return (
    <IconBase className={className}>
      <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z" />
    </IconBase>
  );
}

const solutions = [
  {
    icon: FilterIcon,
    title: "Base de contatos e prospecção",
    description:
      "Disponibilização de contatos segmentados e estruturados para prospecção ativa, alinhados ao perfil ideal de cliente (ICP) e preparados para abordagem comercial.",
  },
  {
    icon: BotIcon,
    title: "Qualificação e priorização de leads",
    description:
      "Classificação inteligente de leads com base em critérios comerciais e comportamentais, consolidando scoring, ICP e análise de perfil em um único modelo de priorização.",
  },
  {
    icon: MessageIcon,
    title: "Abordagem automatizada",
    description:
      "Execução de abordagem inicial com uso de inteligência artificial, estruturando comunicação, follow-up e contato em escala de forma padronizada e eficiente.",
  },
  {
    icon: WorkflowIcon,
    title: "Distribuição e gestão comercial",
    description:
      "Organização e distribuição de leads para equipes comerciais, garantindo velocidade de resposta, priorização e melhor aproveitamento das oportunidades.",
  },
  {
    icon: ChartIcon,
    title: "Monitoramento e performance",
    description:
      "Acompanhamento de métricas operacionais e comerciais para identificar gargalos, perdas e oportunidades de otimização contínua.",
  },
  {
    icon: ZapIcon,
    title: "Soluções sob medida",
    description:
      "Desenvolvimento de sistemas personalizados para estruturação de processos comerciais, automação e aumento de eficiência operacional.",
  },
];

const metrics = [
  { k: "+32%", t: "aumento médio em conversão" },
  { k: "-47%", t: "redução no tempo de resposta" },
  { k: "+2.1x", t: "ganho de throughput operacional" },
  { k: "-28%", t: "queda em perdas por etapa" },
];

const cases = [
  {
    name: "Crédito consignado",
    results: [
      "Latência média caiu de 18min para 2min",
      "+29% em taxa de contato efetivo",
      "-22% em leads perdidos por fila",
    ],
    beforeAfter: [
      "Entrada caótica → Pipeline estruturado",
      "Atendimento manual → Automação + SLA",
      "Sem prioridade → Scoring dinâmico",
    ],
  },
  {
    name: "Infoprodutos",
    results: [
      "+18% em conversão de checkout",
      "Redução de abandono no meio da operação",
      "Follow-up automatizado em escala",
    ],
    beforeAfter: [
      "Leads dispersos → Pipeline centralizado",
      "Resposta tardia → Resposta imediata",
      "Sem sequência → Sequência automatizada",
    ],
  },
  {
    name: "Serviços locais",
    results: [
      "+35% em agendamentos",
      "Aumento de resposta inicial",
      "Menor perda de leads quentes",
    ],
    beforeAfter: [
      "Contato manual → Atendimento automático",
      "Sem priorização → Fila inteligente",
      "Tempo alto → Resposta instantânea",
    ],
  },
];

function CaseCarousel() {
  const [index, setIndex] = React.useState(0);
  const current = cases[index];

  const prev = () => setIndex((i) => (i === 0 ? cases.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === cases.length - 1 ? 0 : i + 1));

  return (
    <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
      <button
        type="button"
        onClick={prev}
        aria-label="Caso anterior"
        className="absolute -left-6 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 transition hover:bg-white/10 md:-left-10"
      >
        ←
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Próximo caso"
        className="absolute -right-6 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 transition hover:bg-white/10 md:-right-10"
      >
        →
      </button>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Caso</p>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{current.name}</h2>
        <ul className="space-y-3 text-sm text-zinc-400">
          {current.results.map((result) => (
            <li key={result}>• {result}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
        <p className="text-sm text-zinc-300">Antes → Depois</p>
        <div className="mt-4 space-y-2 text-xs text-zinc-400">
          {current.beforeAfter.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowCard() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: false,
    email: false,
    company: false,
    message: false,
  });

  const handleChange = (field) => (event) => {
    const value = event.target.value;

    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: false,
    }));
  };

  const validate = () => {
    const nextErrors = {
      name: !form.name.trim(),
      email: !form.email.trim(),
      company: !form.company.trim(),
      message: !form.message.trim(),
    };

    setErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const { name, email, company, message } = form;
    const whatsappMessage = [
      "Olá, vim pelo site da Almeida Automations.",
      "",
      `Nome: ${name}`,
      `Email: ${email}`,
      `Empresa: ${company}`,
      `Mensagem: ${message}`,
    ].join("\n");

    const url = `https://wa.me/5511910937039?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const baseFieldClassName =
    "w-full rounded-2xl border bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:bg-black/50";

  const getFieldClassName = (hasError) =>
    `${baseFieldClassName} ${
      hasError
        ? "border-red-500/80 focus:border-red-500/80"
        : "border-white/10 focus:border-cyan-400/40"
    }`;

  return (
    <div className="mt-10 self-start h-fit rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-cyan-400/10 to-transparent p-5 pb-10 shadow-2xl">
      <div className="space-y-5">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.14em] text-zinc-500">Nome</label>
          <input
            value={form.name}
            onChange={handleChange("name")}
            className={getFieldClassName(errors.name)}
            placeholder="Seu nome"
          />
          {errors.name && <p className="text-xs text-red-400">Preencha seu nome.</p>}
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.14em] text-zinc-500">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            className={getFieldClassName(errors.email)}
            placeholder="seu@email.com"
          />
          {errors.email && <p className="text-xs text-red-400">Preencha seu email.</p>}
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.14em] text-zinc-500">Empresa</label>
          <input
            value={form.company}
            onChange={handleChange("company")}
            className={getFieldClassName(errors.company)}
            placeholder="Nome da empresa"
          />
          {errors.company && (
            <p className="text-xs text-red-400">Preencha o nome da empresa.</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.14em] text-zinc-500">Mensagem</label>
          <textarea
            value={form.message}
            onChange={handleChange("message")}
            className={getFieldClassName(errors.message)}
            rows={2}
            placeholder="Descreva brevemente sua operação"
          />
          {errors.message && <p className="text-xs text-red-400">Preencha sua mensagem.</p>}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-sm font-medium text-black transition hover:brightness-110"
        >
          Entrar em contato
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function AlmeidaAutomationsUI() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f1a] via-[#0a0d16] to-black text-zinc-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b0f1a]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 items-center overflow-hidden">
              <img src={Logo} alt="Almeida Solutions" className="h-16 w-auto object-contain object-left" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
                Almeida Automations
              </p>
              <p className="text-xs text-zinc-400">Revenue Systems</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#inicio" className="transition hover:text-white">
              Início
            </a>
            <a href="#prova" className="transition hover:text-white">
              Resultados
            </a>
            <a href="#solucoes" className="transition hover:text-white">
              Soluções
            </a>
            <a href="#cta" className="transition hover:text-white">
              Diagnóstico
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="border-b border-white/10">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Escale sua operação comercial e eleve a qualidade da sua prospecção.
              </h1>

              <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
                Atuamos na estruturação de operações comerciais combinando geração de contatos,
                qualificação inteligente e abordagem automatizada. O foco é transformar volume em
                oportunidades consistentes, com maior precisão na prospecção e melhor aproveitamento
                do esforço comercial.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#solucoes"
                  className="inline-block rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-zinc-200 transition hover:bg-white/10"
                >
                  Ver como funciona
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 text-xs text-zinc-400">
                <span className="inline-flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-cyan-400" />
                  Sem lock-in
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-cyan-400" />
                  Integra com seu CRM
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-cyan-400" />
                  Implantação rápida
                </span>
              </div>
            </div>

            <FlowCard />
          </div>
        </section>

        <section id="prova" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Resultados</p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Impacto operacional mensurável
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.t}
                  className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6"
                >
                  <p className="text-3xl font-semibold text-cyan-300">{metric.k}</p>
                  <p className="text-sm text-zinc-400">{metric.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <CaseCarousel />
        </section>

        <section id="solucoes" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Produtos e serviços</p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Produtos e serviços para geração e conversão de oportunidades
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <div
                    key={solution.title}
                    className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition hover:-translate-y-1 hover:border-indigo-400/40"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-indigo-300 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-white">{solution.title}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{solution.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        

        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Avaliação</p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Resultados percebidos após implementação
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6">
                <p className="text-sm text-zinc-300">
                  "Depois da implementação, finalmente conseguimos ter controle real sobre os
                  leads. Antes era tudo disperso."
                </p>
                <p className="text-xs text-zinc-500">Operação comercial</p>
              </div>

              <div className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6">
                <p className="text-sm text-zinc-300">
                  "A velocidade de resposta mudou completamente o jogo. Leads que antes
                  esfriavam agora convertem."
                </p>
                <p className="text-xs text-zinc-500">Equipe de vendas</p>
              </div>

              <div className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6">
                <p className="text-sm text-zinc-300">
                  "Não é só automação, é organização. Hoje sabemos exatamente onde estamos
                  perdendo dinheiro."
                </p>
                <p className="text-xs text-zinc-500">Gestão</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a0d16]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Almeida Automations</p>
          <p>Revenue engineering para operações orientadas a leads.</p>
        </div>
      </footer>
    </div>
  );
}
