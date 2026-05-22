import { Cloud, Bot, BarChart3, Workflow, Code2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Servico {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

export interface Projeto {
  title: string
  client: string
  category: string
  description: string
  techs: string[]
  result: string
  image: string
}

export interface StackCategoria {
  name: string
  items: string[]
}

export interface Diferencial {
  title: string
  description: string
}

export const servicos: Servico[] = [
  {
    icon: Workflow,
    title: 'Automação de Processos',
    description: 'Eliminamos tarefas manuais e repetitivas com fluxos inteligentes — integrando ERPs, CRMs, planilhas e qualquer sistema existente.',
    tags: ['n8n', 'Make', 'Zapier', 'Python'],
  },
  {
    icon: Bot,
    title: 'Soluções com IA',
    description: 'Implementamos modelos de linguagem, visão computacional e agentes inteligentes adaptados ao contexto real do seu negócio.',
    tags: ['LLMs', 'RAG', 'Agentes IA', 'OpenAI'],
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Analytics',
    description: 'Transformamos dados brutos em painéis claros e acionáveis — integrando múltiplas fontes e automatizando relatórios.',
    tags: ['Power BI', 'Metabase', 'SQL', 'ETL'],
  },
  {
    icon: Code2,
    title: 'Sistemas Customizados',
    description: 'Desenvolvemos aplicações web e APIs sob medida quando as ferramentas prontas não atendem — foco em performance e escalabilidade.',
    tags: ['.NET', 'React', 'PostgreSQL', 'Docker'],
  },
  {
    icon: Cloud,
    title: 'Integrações & APIs',
    description: 'Conectamos sistemas legados e plataformas modernas via APIs REST, webhooks e conectores nativos, sem fricção.',
    tags: ['REST', 'Webhooks', 'OAuth', 'GraphQL'],
  },
]

export const projetos: Projeto[] = [
  {
    title: 'Mecaflow',
    client: 'Oficinas Mecânicas',
    category: 'SaaS + Automação',
    description: 'Plataforma SaaS para oficinas com bot de WhatsApp, agendamento automático, CRM de clientes e dashboard operacional — tudo em uma tela. Elimina planilhas, reduz tempo de resposta e aumenta captação de agendamentos.',
    techs: ['FastAPI', 'React', 'Supabase', 'Redis', 'WAHA', 'Docker'],
    result: 'Atendimento centralizado e agendamentos automatizados',
    image: '/projetos/Dashboard.PNG',
  },
  {
    title: 'Clínica Simioni — Sistema',
    client: 'Clínica Simioni',
    category: 'SaaS Clínico',
    description: 'Sistema SaaS multi-tenant para clínicas com bot de IA no WhatsApp, agenda por profissional, prontuários e perfis de acesso para secretaria e equipe clínica. Reduz faltas, elimina retrabalho e melhora a experiência do paciente.',
    techs: ['FastAPI', 'React', 'Supabase', 'Claude API', 'WAHA', 'Docker'],
    result: 'Operação clínica digitalizada com IA',
    image: '/projetos/Simione_Sistema.PNG',
  },
  {
    title: 'Site Institucional — Clínica Simioni',
    client: 'Clínica Simioni',
    category: 'Site Institucional',
    description: 'Site moderno para clínica com 40+ anos de tradição — especialidades, equipe, convênios e agendamento direto pelo WhatsApp. Design editorial com animações, SEO otimizado e deploy em produção.',
    techs: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Docker', 'Nginx'],
    result: 'Presença digital com foco em conversão',
    image: '/projetos/Site.PNG',
  },
  {
    title: 'Automação de Instagram',
    client: 'Biscogy',
    category: 'Automação',
    description: 'Automação que monitora comentários em posts do Instagram, responde automaticamente por palavras-chave e dispara DMs personalizadas para cada interação. Orquestrado via n8n para lojas que vendem pelo Instagram.',
    techs: ['n8n', 'Instagram API', 'Webhooks'],
    result: 'Respostas automáticas 24/7 no Instagram',
    image: '/projetos/BiscogyPNG.PNG',
  },
]

export const stackCategorias: StackCategoria[] = [
  { name: 'Automação',     items: ['n8n', 'Make', 'Zapier', 'Power Automate', 'Python'] },
  { name: 'IA & ML',       items: ['OpenAI', 'LangChain', 'Pinecone', 'HuggingFace', 'Ollama'] },
  { name: 'Backend',       items: ['.NET Core', 'Node.js', 'FastAPI', 'PostgreSQL', 'Redis'] },
  { name: 'Frontend',      items: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'Vite'] },
  { name: 'Infra & Cloud', items: ['Docker', 'GitHub Actions', 'Azure', 'Supabase', 'Vercel'] },
]

export const diferenciais: Diferencial[] = [
  { title: 'Diagnóstico antes de qualquer proposta',    description: 'Entendemos profundamente seu processo antes de sugerir tecnologia.' },
  { title: 'Soluções que realmente escalam',           description: 'Construímos pensando no crescimento, não apenas na entrega imediata.' },
  { title: 'Integração com o que você já usa',         description: 'Sem big bang: conectamos ao ERP, CRM e ferramentas existentes.' },
  { title: 'Time técnico, não só consultoria',         description: 'Codamos, implementamos e entregamos — não apenas recomendamos.' },
  { title: 'Foco em ROI mensurável',                   description: 'Cada projeto tem métricas claras de retorno desde o início.' },
  { title: 'Suporte e iteração contínua',              description: 'Não sumimos após a entrega — evoluímos junto com seu negócio.' },
  { title: 'Preço justo e escopo transparente',        description: 'Sem surpresas: escopo claro, prazo definido, custo previsível.' },
]

export const stats = [
  { value: 4,    suffix: '+', label: 'Projetos Entregues' },
  { value: 100,  suffix: '%', label: 'Satisfação' },
  { value: 5,    suffix: '',  label: 'Frentes Técnicas' },
]

export const contato = {
  email:    'contato@cloudysolutions.com.br',
  telefone: '(11) 99999-9999',
  site:     'cloudysolutions.com.br',
  linkedin: 'linkedin.com/company/cloudysolutions',
}
