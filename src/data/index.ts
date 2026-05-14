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
    title: 'CRM Automatizado',
    client: 'Empresa de Saúde',
    category: 'Automação + CRM',
    description: 'Integração entre WhatsApp, agenda médica e CRM próprio com qualificação automática de leads via IA.',
    techs: ['n8n', 'OpenAI', 'PostgreSQL', 'React'],
    result: 'Redução de 70% no tempo de agendamento',
  },
  {
    title: 'Dashboard Financeiro',
    client: 'Rede de Franquias',
    category: 'Analytics',
    description: 'Painel consolidado com dados de 12 unidades — faturamento, estoque e margem em tempo real com alertas automáticos.',
    techs: ['Power BI', 'Python', 'SQL Server', 'Azure'],
    result: 'Visibilidade total em tempo real',
  },
  {
    title: 'Agente de Atendimento IA',
    client: 'E-commerce',
    category: 'IA Generativa',
    description: 'Chatbot RAG treinado com catálogo e políticas da empresa — resolve 80% das dúvidas sem intervenção humana.',
    techs: ['LangChain', 'OpenAI', 'Pinecone', 'Next.js'],
    result: '80% de resolução automática',
  },
  {
    title: 'Pipeline de Dados ETL',
    client: 'Indústria',
    category: 'Data Engineering',
    description: 'Pipeline ETL automatizado que consolida dados de 5 fontes distintas em um data warehouse para análise gerencial.',
    techs: ['Python', 'Airflow', 'dbt', 'BigQuery'],
    result: 'Relatórios automáticos diários',
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
