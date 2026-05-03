import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { SlideLayout, SlideTitle } from "./SlideLayout";
import {
  Workflow, Bot, Plug, Code2, BarChart3, Search, Layers, Hammer, TestTube2, TrendingUp,
  MessageSquare, Boxes, Brain, Globe, Phone, Mail, Linkedin, ArrowRight,
  CheckCircle2, AlertCircle, Sparkles, Zap, Target, Shield
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

/* ========== 1. CAPA ========== */
export const Slide1 = ({ i, t }: { i: number; t: number }) => (
  <SlideLayout index={i} total={t} variant="hero" label="Capa">
    <div className="flex-1 flex items-center">
      <div className="max-w-5xl">
        <motion.div {...fade(0.1)}>
          <Logo size={88} />
        </motion.div>
        <motion.div {...fade(0.3)} className="mt-16 font-mono text-sm uppercase tracking-[0.4em] text-primary">
          Apresentação Institucional · 2026
        </motion.div>
        <motion.h1 {...fade(0.5)} className="font-display text-[8rem] font-semibold leading-[0.95] tracking-tighter mt-6">
          <span className="text-gradient">Operação</span>
          <br />
          <span className="text-gradient-brand">inteligente.</span>
        </motion.h1>
        <motion.p {...fade(0.7)} className="text-2xl text-muted-foreground mt-10 max-w-3xl leading-relaxed">
          Automação, IA e sistemas sob medida para empresas que querem operar
          melhor e crescer com eficiência.
        </motion.p>
      </div>
    </div>
    <motion.div {...fade(0.9)} className="absolute bottom-32 right-32">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-full border border-primary/40 pulse-ring" />
        <div className="absolute inset-4 rounded-full border border-primary/30 pulse-ring" style={{ animationDelay: "0.6s" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-12 h-12 text-primary" />
        </div>
      </div>
    </motion.div>
  </SlideLayout>
);

/* ========== 2. QUEM SOMOS ========== */
export const Slide2 = ({ i, t }: { i: number; t: number }) => {
  const blocks = [
    { icon: Workflow, label: "Automação de processos" },
    { icon: Brain, label: "IA aplicada" },
    { icon: Plug, label: "Integrações" },
    { icon: Code2, label: "Sistemas sob medida" },
    { icon: BarChart3, label: "Dashboards & operação" },
  ];
  return (
    <SlideLayout index={i} total={t} label="Quem somos">
      <SlideTitle kicker="01 — Quem somos" title="Tecnologia com visão de operação." />
      <div className="grid grid-cols-12 gap-12 flex-1">
        <div className="col-span-7 space-y-7 text-xl text-muted-foreground leading-relaxed max-w-2xl">
          <motion.p {...fade(0.2)}>
            A <span className="text-foreground font-medium">CloudySolutions</span> é especializada em
            automações inteligentes, agentes de IA, integrações e sistemas sob medida para negócios
            que precisam ganhar produtividade e estruturar operações com eficiência.
          </motion.p>
          <motion.p {...fade(0.4)}>
            Unimos visão de negócio e execução técnica, criando soluções que realmente funcionam
            no dia a dia das empresas.
          </motion.p>
        </div>
        <div className="col-span-5 grid grid-cols-2 gap-4 content-start">
          {blocks.map((b, idx) => (
            <motion.div key={b.label} {...fade(0.3 + idx * 0.08)}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-all">
              <b.icon className="w-7 h-7 text-primary mb-4" />
              <div className="font-medium text-base">{b.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

/* ========== 3. PROBLEMA ========== */
export const Slide3 = ({ i, t }: { i: number; t: number }) => {
  const pains = [
    "Retrabalho", "Demora no atendimento", "Perda de oportunidades",
    "Falhas operacionais", "Dificuldade de controle", "Baixa escalabilidade",
    "Dependência de tarefas repetitivas",
  ];
  return (
    <SlideLayout index={i} total={t} label="O Problema">
      <SlideTitle
        kicker="02 — Diagnóstico"
        title="Operações que funcionam com esforço demais."
        sub="Processos manuais, atendimento descentralizado e pouca integração entre ferramentas geram custos invisíveis todos os dias."
      />
      <div className="grid grid-cols-3 gap-4 mt-8">
        {pains.map((p, idx) => (
          <motion.div key={p} {...fade(0.2 + idx * 0.06)}
            className="glass rounded-xl p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-destructive" />
            </div>
            <span className="text-lg font-medium">{p}</span>
          </motion.div>
        ))}
      </div>
      <motion.div {...fade(0.8)} className="mt-12 text-2xl font-display text-gradient max-w-3xl">
        O resultado é uma operação que funciona com esforço demais — e eficiência de menos.
      </motion.div>
    </SlideLayout>
  );
};

/* ========== 4. VALOR ========== */
export const Slide4 = ({ i, t }: { i: number; t: number }) => {
  const values = [
    { icon: Zap, label: "Redução de tarefas manuais" },
    { icon: TrendingUp, label: "Ganho de produtividade" },
    { icon: Target, label: "Melhor tempo de resposta" },
    { icon: Shield, label: "Padronização operacional" },
    { icon: BarChart3, label: "Mais controle de processos" },
    { icon: Plug, label: "Integração entre áreas" },
  ];
  return (
    <SlideLayout index={i} total={t} label="Como agregamos valor">
      <SlideTitle
        kicker="03 — Impacto"
        title="Operação como vantagem competitiva."
        sub="Soluções que tornam a operação mais inteligente, previsível e escalável."
      />
      <div className="grid grid-cols-3 gap-5 mt-6">
        {values.map((v, idx) => (
          <motion.div key={v.label} {...fade(0.2 + idx * 0.07)}
            className="glass rounded-2xl p-7 group hover:border-primary/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center mb-5 group-hover:glow-blue transition-all">
              <v.icon className="w-6 h-6 text-primary-glow" />
            </div>
            <div className="text-lg font-medium leading-snug">{v.label}</div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
};

/* ========== 5. O QUE FAZEMOS ========== */
export const Slide5 = ({ i, t }: { i: number; t: number }) => {
  const services = [
    { icon: Workflow, title: "Automação de processos", desc: "Tarefas repetitivas, administrativas e operacionais automatizadas para reduzir retrabalho." },
    { icon: Bot, title: "Agentes de IA", desc: "Assistentes que atendem, qualificam, respondem e organizam fluxos com inteligência aplicada." },
    { icon: Plug, title: "Integrações", desc: "Conectamos sistemas, APIs, CRMs, canais e bancos de dados em um fluxo único." },
    { icon: Code2, title: "Sistemas sob medida", desc: "Soluções específicas com foco em usabilidade, controle e crescimento." },
    { icon: BarChart3, title: "Dashboards", desc: "Painéis e indicadores para acompanhamento operacional e tomada de decisão." },
  ];
  return (
    <SlideLayout index={i} total={t} label="O que fazemos">
      <SlideTitle kicker="04 — Serviços" title="Cinco frentes. Uma operação inteira." />
      <div className="grid grid-cols-5 gap-4 mt-4 flex-1">
        {services.map((s, idx) => (
          <motion.div key={s.title} {...fade(0.2 + idx * 0.08)}
            className="glass rounded-2xl p-6 flex flex-col hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="font-display text-xl font-semibold mb-3">{s.title}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
};

/* ========== 6. ABORDAGEM ========== */
export const Slide6 = ({ i, t }: { i: number; t: number }) => {
  const steps = [
    { icon: Search, title: "Diagnóstico", desc: "Entendemos a operação, gargalos e objetivos do negócio." },
    { icon: Layers, title: "Arquitetura", desc: "Desenhamos a melhor estrutura funcional e técnica." },
    { icon: Hammer, title: "Desenvolvimento", desc: "Construímos com foco em eficiência e aplicabilidade." },
    { icon: TestTube2, title: "Testes & ajustes", desc: "Validamos o fluxo e refinamos a entrega." },
    { icon: TrendingUp, title: "Evolução", desc: "A solução cresce junto com a operação do cliente." },
  ];
  return (
    <SlideLayout index={i} total={t} label="Nossa abordagem">
      <SlideTitle kicker="05 — Método" title="Como conduzimos os projetos." />
      <div className="relative mt-8">
        <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="grid grid-cols-5 gap-6">
          {steps.map((s, idx) => (
            <motion.div key={s.title} {...fade(0.2 + idx * 0.1)} className="relative">
              <div className="relative z-10 w-16 h-16 rounded-full bg-[hsl(var(--brand-deep))] border-2 border-primary flex items-center justify-center mx-auto mb-6 glow-blue">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-mono text-xs text-primary mb-2">0{idx + 1}</div>
                <div className="font-display text-2xl font-semibold mb-3">{s.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed px-2">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

/* ========== 7. CASES ========== */
export const Slide7 = ({ i, t }: { i: number; t: number }) => {
  const cases = [
    { icon: MessageSquare, tag: "Automação · WhatsApp", title: "Atendimento automatizado", desc: "Triagem e respostas com integração entre fluxos, regras de negócio e canais.", value: "Mais agilidade e padronização." },
    { icon: Boxes, tag: "Sistema sob medida", title: "Controle de estoque", desc: "Solução personalizada para gestão de itens, inventário e operação organizada.", value: "Maior controle e eficiência." },
    { icon: Brain, tag: "IA aplicada", title: "Cadastro & classificação", desc: "IA para automatizar etapas antes manuais, acelerando análise e registro.", value: "Ganho de produtividade." },
    { icon: Globe, tag: "Portais customizados", title: "Sistemas sob medida", desc: "Interface, back-end, banco de dados e regras integrados à realidade do cliente.", value: "Aderência e evolução contínua." },
  ];
  return (
    <SlideLayout index={i} total={t} label="Cases">
      <SlideTitle kicker="06 — Prova" title="Projetos entregues. Valor gerado." />
      <div className="grid grid-cols-2 gap-5 mt-4 flex-1">
        {cases.map((c, idx) => (
          <motion.div key={c.title} {...fade(0.2 + idx * 0.1)}
            className="glass rounded-2xl p-7 flex gap-5 hover:border-primary/40 transition-all">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center shrink-0">
              <c.icon className="w-7 h-7 text-primary-glow" />
            </div>
            <div className="flex-1">
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-2">{c.tag}</div>
              <div className="font-display text-2xl font-semibold mb-2">{c.title}</div>
              <div className="text-sm text-muted-foreground leading-relaxed mb-3">{c.desc}</div>
              <div className="flex items-center gap-2 text-sm text-primary-glow font-medium pt-3 border-t border-border/60">
                <CheckCircle2 className="w-4 h-4" /> {c.value}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
};

/* ========== 8. CAPACIDADE TÉCNICA ========== */
export const Slide8 = ({ i, t }: { i: number; t: number }) => {
  const stack = [
    ".NET / C#", "Angular", "Python", "n8n",
    "APIs / Integrações", "WhatsApp", "SQL / Supabase",
    "Dashboards", "IA Aplicada",
  ];
  return (
    <SlideLayout index={i} total={t} label="Capacidade técnica">
      <SlideTitle
        kicker="07 — Stack"
        title="Base técnica para soluções robustas."
        sub="Tecnologias modernas e escaláveis combinando desenvolvimento, automação e IA."
      />
      <div className="flex flex-wrap gap-3 mt-8 max-w-5xl">
        {stack.map((s, idx) => (
          <motion.div key={s} {...fade(0.15 + idx * 0.05)}
            className="glass rounded-full px-7 py-4 font-mono text-base hover:border-primary/60 hover:text-primary-glow transition-all">
            {s}
          </motion.div>
        ))}
      </div>
      <motion.div {...fade(0.8)} className="mt-12 grid grid-cols-3 gap-6 max-w-5xl">
        {[
          { n: "100%", l: "Soluções sob medida" },
          { n: "5+", l: "Frentes técnicas integradas" },
          { n: "24/7", l: "Operação automatizada" },
        ].map((s) => (
          <div key={s.l} className="border-l-2 border-primary pl-5">
            <div className="font-display text-5xl font-semibold text-gradient-brand">{s.n}</div>
            <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </SlideLayout>
  );
};

/* ========== 9. DIFERENCIAIS ========== */
export const Slide9 = ({ i, t }: { i: number; t: number }) => {
  const diffs = [
    "Visão prática de negócio e operação",
    "Execução técnica real",
    "Soluções personalizadas, não genéricas",
    "Experiência com automação, IA e sistemas",
    "Integração de diferentes tecnologias",
    "Foco em eficiência e escalabilidade",
    "Proximidade com o cliente",
  ];
  return (
    <SlideLayout index={i} total={t} label="Diferenciais">
      <SlideTitle kicker="08 — Por quê" title="Mais do que software. Solução que faz sentido." />
      <div className="grid grid-cols-2 gap-x-12 gap-y-4 mt-6 max-w-5xl">
        {diffs.map((d, idx) => (
          <motion.div key={d} {...fade(0.15 + idx * 0.07)}
            className="flex items-center gap-4 py-4 border-b border-border/60">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl">{d}</span>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
};

/* ========== 10. COMO PODEMOS AJUDAR ========== */
export const Slide10 = ({ i, t }: { i: number; t: number }) => {
  const fronts = [
    "Automação de processos internos",
    "Organização e padronização operacional",
    "Atendimento inteligente",
    "Integração entre sistemas e canais",
    "Dashboards e visibilidade gerencial",
    "Soluções específicas para gargalos",
  ];
  return (
    <SlideLayout index={i} total={t} label="Sua empresa">
      <SlideTitle
        kicker="09 — Aplicação"
        title="Onde podemos gerar valor no seu cenário."
        sub="A partir do entendimento da sua operação, desenhamos a solução certa para ela."
      />
      <div className="grid grid-cols-3 gap-4 mt-8">
        {fronts.map((f, idx) => (
          <motion.div key={f} {...fade(0.15 + idx * 0.08)}
            className="glass rounded-2xl p-7 hover:border-primary/50 transition-all group">
            <div className="font-mono text-xs text-primary mb-4">0{idx + 1}</div>
            <div className="text-xl font-medium leading-snug">{f}</div>
            <ArrowRight className="w-5 h-5 text-primary mt-6 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
};

/* ========== 11. PRÓXIMOS PASSOS ========== */
export const Slide11 = ({ i, t }: { i: number; t: number }) => {
  const steps = [
    "Diagnóstico inicial",
    "Proposta de solução",
    "Escopo de implementação",
    "Cronograma de execução",
  ];
  return (
    <SlideLayout index={i} total={t} label="Próximos passos">
      <SlideTitle
        kicker="10 — Continuidade"
        title="Próximos passos."
        sub="Vamos identificar juntos onde a CloudySolutions pode gerar mais impacto no seu negócio."
      />
      <div className="flex items-center gap-6 mt-12 flex-wrap">
        {steps.map((s, idx) => (
          <motion.div key={s} {...fade(0.2 + idx * 0.1)} className="flex items-center gap-6">
            <div className="glass rounded-2xl px-8 py-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-semibold text-primary-foreground">
                {idx + 1}
              </div>
              <span className="text-xl font-medium">{s}</span>
            </div>
            {idx < steps.length - 1 && <ArrowRight className="w-6 h-6 text-primary/60" />}
          </motion.div>
        ))}
      </div>
      <motion.div {...fade(0.9)} className="mt-auto">
        <div className="glass rounded-2xl p-10 max-w-3xl bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">Vamos conversar</div>
          <div className="font-display text-3xl">Agende uma reunião de diagnóstico.</div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

/* ========== 12. ENCERRAMENTO ========== */
export const Slide12 = ({ i, t }: { i: number; t: number }) => (
  <SlideLayout index={i} total={t} variant="hero" label="Contato">
    <div className="flex-1 flex flex-col justify-center max-w-5xl">
      <motion.div {...fade(0.1)}>
        <Logo size={88} />
      </motion.div>
      <motion.h2 {...fade(0.3)} className="font-display text-7xl font-semibold leading-[1.05] tracking-tight text-gradient mt-14 max-w-4xl">
        Automação, inteligência e sistemas que ajudam empresas a operar melhor.
      </motion.h2>
      <motion.div {...fade(0.6)} className="grid grid-cols-2 gap-4 mt-16 max-w-3xl">
        {[
          { icon: Phone, label: "Telefone", value: "+55 (00) 00000-0000" },
          { icon: Mail, label: "E-mail", value: "contato@cloudysolutions.com" },
          { icon: Globe, label: "Site", value: "cloudysolutions.com" },
          { icon: Linkedin, label: "LinkedIn", value: "/cloudysolutions" },
        ].map((c) => (
          <div key={c.label} className="glass rounded-2xl p-6 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <c.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{c.label}</div>
              <div className="text-lg font-medium mt-1">{c.value}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </SlideLayout>
);

export const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12];
