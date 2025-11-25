const pt = {
  common: {
    nav: {
      home: 'Início',
      projects: 'Projetos',
      certificates: 'Certificados',
      blog: 'Blog',
      contact: 'Contato',
      faq: 'FAQ'
    },
    logoAlt: 'Logo do portfólio de Luiz Felippe',
    menu: 'Menu',
    close: 'Fechar',
    states: {
      loading: 'Carregando...',
      error: 'Não foi possível carregar os dados.',
      empty: 'Ainda não há itens por aqui.',
      updating: '· atualizando…'
    },
    pagination: {
      previous: '← Anterior',
      next: 'Próxima →',
      page: 'Página {{page}}'
    },
    footer: {
      title: 'Portfólio Futurista',
      description: 'Construído com React, Three.js, Tailwind e muito café.',
      badge: 'Sempre em beta ∞',
      ctaTitle: 'Pronto para a próxima release?',
      ctaSubtitle: 'Pipelines, observabilidade e interfaces imersivas rodando 24/7.',
      primaryCta: 'Falar com o Luiz',
      secondaryCta: 'Abrir admin',
    linksTitle: 'Atalhos',
    links: {
      projects: 'Projetos',
      labs: 'Labs beta',
      admin: 'Painel admin',
      faq: 'FAQ',
      terms: 'Termos',
      privacy: 'Privacidade'
    },
      signature: 'Desenvolvido por Luiz Felippe',
      rights: 'Todos os direitos reservados.',
      stats: {
        uptime: 'Disponibilidade',
        deployments: 'Deploys (trimestre)',
        automations: 'Automação / mês'
      }
    }
  },
  hero: {
    subtitle: 'Engenharia de Software · Estácio',
    badges: [
      'Full-stack + automações',
      'Código desde os 12 anos',
      'Cloud & realtime',
      'UX imersiva'
    ],
    title: {
      prefix: 'Engenheiro de Software em formação que resolve problemas difíceis',
      highlight: 'com automação, nuvem e interfaces 3D cinemáticas'
    },
    description:
      'Estudante de Engenharia de Software (faltam ~2 anos), comecei com uma calculadora em Python aos 12 e hoje enfrento desafios complexos: arquiteturas distribuídas, integrações difíceis, automações em escala, dados em tempo real e UIs premium. Entrego front-end, back-end, bancos, APIs, automações e observabilidade com código organizado, resiliente e pronto para crescer.',
    highlights: [
      {
        title: 'Full-stack avançado',
        description: 'React, Three.js e Node em experiências ricas e responsivas.'
      },
      {
        title: 'Sistemas em tempo real',
        description: 'WebSockets, analytics e instrumentação completa.'
      },
      {
        title: 'Qualidade e DX',
        description: 'CI/CD, testes automatizados e documentação enxuta.'
      }
    ],
    stats: [
      { value: '48+', label: 'Projetos imersivos', detail: 'Dashboards 3D & realtime' },
      { value: '120k+', label: 'Automations', detail: 'Eventos monitorados por mês' },
      { value: '120ms', label: 'Latência média', detail: 'Chats e notificações WebSocket' }
    ]
  },
  cta: {
    primary: 'Explorar projetos',
    secondary: 'Conversar agora'
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Como trabalho com empresas',
    subtitle: 'Resposta rápida sobre contratação, prazos, stack e suporte pós-entrega.',
    items: [
      {
        icon: 'engagement',
        question: 'Como funciona a contratação?',
        answer: 'Posso atuar por projeto fechado ou alocação parcial (“engenharia sob demanda”). Sempre começo por discovery para alinhar objetivos e riscos.'
      },
      {
        icon: 'timeline',
        question: 'Quais os prazos típicos?',
        answer: 'MVPs levam 4–8 semanas; integrações e evolução contínua seguem ciclos quinzenais. Definimos marcos e entregas visíveis a cada sprint.'
      },
      {
        icon: 'stack',
        question: 'Qual stack utilizo?',
        answer: 'Front: React/Next, Vite, Tailwind, Three/Framer. Back: Node/Nest, REST/GraphQL, Redis, Postgres/Mongo. Cloud: AWS/GCP/Cloudflare, CI/CD com GitHub Actions.'
      },
      {
        icon: 'support',
        question: 'E o suporte pós-entrega?',
        answer: 'Handoff com documentação, playbooks e monitoramento básico (logs/alertas). Podemos manter um plano de evolução e hotfixes com horas mensais.'
      },
      {
        icon: 'contact',
        question: 'Como as empresas avaliam meu trabalho?',
        answer: 'Disponibilizo demos, admin protegido, changelogs e métricas públicas (uptime, deploys). Também faço walkthrough com stakeholders.'
      }
    ]
  },
  termsPage: {
    eyebrow: 'Termos',
    title: 'Termos de uso',
    subtitle: 'Diretrizes para uso do portfólio e acesso a demos/admin.',
    intro: 'Ao acessar este site você concorda em respeitar a propriedade intelectual e não abusar de demos ou endpoints protegidos.',
    items: {
      scope: 'Conteúdo e assets servem apenas para apresentação e avaliação.',
      rights: 'Marcas, códigos e mídias pertencem a Luiz Felippe, salvo indicação.',
      usage: 'Não redistribuir ou reproduzir sem autorização.',
      liability: 'Sem garantias; uso de demos e APIs é por sua conta e risco.',
      changes: 'Os termos podem ser atualizados; uso contínuo implica aceite.'
    },
    outro: 'Para permissões especiais ou propostas de parceria, fale comigo direto.'
  },
  privacyPage: {
    eyebrow: 'Privacidade',
    title: 'Privacidade & Dados',
    subtitle: 'Como trato dados coletados em formulários e analytics.',
    intro: 'Coleto apenas o necessário para responder mensagens e melhorar a experiência.',
    items: {
      data: 'Dados de contato (nome/email/mensagem) são armazenados com segurança e usados apenas para retorno.',
      cookies: 'Cookies opcionais podem guardar idioma/tema e coletar analytics.',
      security: 'Áreas admin exigem autenticação; dados sensíveis não são expostos publicamente.',
      sharing: 'Não vendo nem compartilho seus dados, exceto com provedores (email/infra) estritamente para este site.',
      contact: 'Você pode solicitar exclusão ou exportação dos envios de contato a qualquer momento.'
    },
    outro: 'Dúvidas? Envie um email e esclareço qualquer preocupação de privacidade.'
  },
  about: {
    badge: 'DNA do estúdio',
    title: 'Estratégia, design e engenharia alinhados a resultados',
    description:
      'Opero uma prática solo de alto toque que funciona como squad embarcada. Tem discovery, framing, blueprint de arquitetura, design imersivo e entrega rigorosa. Cada projeto fecha com documentação, playbooks de handoff e dashboards vivos.',
    chips: ['Leadership fracionada', 'Ponte design + engenharia', 'Graduação em Eng. de Software'],
    highlights: [
      {
        title: 'Formação em Engenharia de Software',
        description: 'Curso superior em Engenharia de Software com foco em arquitetura avançada, sistemas orientados a dados e liderança de UX. Os projetos acadêmicos alimentam entregas reais.',
        metrics: 'Graduação em andamento'
      },
      {
        title: 'Stack em camadas',
        description: 'Experiência combinando micro front-ends, Node/Nest, filas e grafos em tempo real.',
        metrics: '15 stacks produtivas'
      },
      {
        title: 'Observabilidade e DX',
        description: 'Pipelines com tracing, logs estruturados e automação de QA, tudo versionado.',
        metrics: '120k+ eventos monitorados/mês'
      },
      {
        title: 'Mentorias & liderança',
        description: 'Conduzi squads e formei devs em programas de aceleração com foco em qualidade.',
        metrics: '60+ mentorias entregues'
      }
    ]
  },
  experience: {
    badge: 'Experiências',
    title: 'Linha do tempo profissional',
    description: 'Produto, arquitetura, liderança e mentorias guiando squads em diferentes mercados.',
    items: [
      {
        company: 'Nebula Labs',
        role: 'Staff Software Engineer · Produto DataViz',
        period: '2022 — atual',
        stack: ['React 19', 'Three.js', 'Node.js', 'Kafka', 'AWS'],
        achievements: [
          'Projetei dashboards 3D e painéis responsivos com dados em streaming.',
          'Implementei pipelines de telemetria com Grafana/Prometheus e alertas inteligentes.',
          'Liderei a migração para um design system tipado, reduzindo tempo de entrega em 35%.'
        ]
      },
      {
        company: 'Atlas Cloud',
        role: 'Senior Full-Stack Engineer',
        period: '2019 — 2022',
        stack: ['Next.js', 'NestJS', 'Redis Streams', 'PostgreSQL', 'Kubernetes'],
        achievements: [
          'Criei experiências realtime para analytics financeiro com websockets redundantes.',
          'Automatizei o provisionamento multi-tenant com IaC e pipelines GitHub Actions.',
          'Otimizei APIs de 400ms para 120ms de p95 introduzindo caching inteligente.'
        ]
      },
      {
        company: 'Futurio Studio',
        role: 'Product Engineer',
        period: '2016 — 2019',
        stack: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
        achievements: [
          'Entreguei portfolios interativos para marcas globais com foco em storytelling.',
          'Implementei sistemas headless com GraphQL e feature flags.',
          'Trabalhei próximo a designers para alinhar microinterações e performance.'
        ]
      }
    ]
  },
  servicesSection: {
    eyebrow: 'Serviços',
    title: 'Serviços de estúdio para marcas ambiciosas',
    description:
      'Atuo como studio boutique para founders, CMOs e operações que precisam de produtos digitais premium. Estratégia, liderança de UX e engenharia full-stack caminham juntas do discovery ao cuidado contínuo.',
    cards: [
      {
        title: 'Estratégia & discovery',
        detail: 'Workshops, roadmap e governança traduzindo metas em plano mensurável.',
        items: ['Product framing', 'Alinhamento com stakeholders', 'Workshops de experiência']
      },
      {
        title: 'Engenharia de plataformas',
        detail: 'Entrega end-to-end de dashboards imersivos, APIs realtime e admins seguros.',
        items: ['Full-stack builds', 'Realtime copilots', 'Playbooks de CI/CD + IaC']
      },
      {
        title: 'Care & growth',
        detail: 'Fico por perto após o lançamento com observabilidade, experimentos e mentoring.',
        items: ['Observabilidade e alertas', 'Feature flags / testes A/B', 'Mentoring & enablement']
      }
    ],
    ctaPrimary: 'Solicitar proposta',
    ctaSecondary: 'Ver estudos de caso'
  },
  skills: {
    badge: 'Stack conectado',
    title: 'Tecnologias pulsando em tempo real',
    description:
      'Stacks web, realtime e cloud com telemetria 24/7. Os loops abaixo mostram as tecnologias que mantenho ativas dia após dia.',
    pillars: [
      {
        title: 'frontend sensorial',
        description: 'Interfaces cinematográficas com microinterações, 3D e acessibilidade.',
        tools: ['React 19', 'Next.js', 'Three.js', 'Framer Motion']
      },
      {
        title: 'plataformas em escala',
        description: 'APIs tipadas, filas e dados em tempo real com observabilidade.',
        tools: ['Node.js', 'NestJS', 'Redis Streams', 'Socket.IO']
      },
      {
        title: 'cloud & automation',
        description: 'Pipelines CI/CD, infraestrutura como código e monitoramento contínuo.',
        tools: ['Docker', 'GitHub Actions', 'AWS', 'Grafana/Prometheus']
      }
    ]
  },
  projectsSection: {
    eyebrow: 'Destaques',
    title: 'Projetos em produção',
    description:
      'Stacks reais com dashboards interativos, pipelines de dados e experiências sensoriais. Cada card resume parte do laboratório que uso para clientes.',
    cta: 'Ver todos'
  },
  systemStatus: {
    eyebrow: 'Painel de comando',
    title: 'Snapshot da plataforma',
    description: 'Endpoints públicos mantêm esses contadores sempre atualizados. Publicou pelo admin? Os cartões abaixo sincronizam na hora.',
    cards: {
      projects: {
        label: 'Projetos online',
        hint: 'Cases em destaque'
      },
      blog: {
        label: 'Artigos publicados',
        hint: 'Explorações técnicas'
      },
      certificates: {
        label: 'Certificados validados',
        hint: 'Conquistas verificadas'
      },
      labs: {
        label: 'Labs ativos',
        hint: 'Módulos em beta'
      }
    },
    cta: 'Abrir painel admin'
  },
  certificatesSection: {
    eyebrow: 'Formação contínua',
    title: 'Certificações recentes',
    description: 'Pesos pesados em cloud e design sistêmico que alimentam meus projetos de portfólio futurista.',
    cta: 'Ver certificados'
  },
  labsSection: {
    eyebrow: 'Labs beta',
    title: 'Experimentos quase prontos',
    description: 'Automação em tempo real, alertas e motor de layouts rodando dentro do admin. Escolha os módulos que deseja testar primeiro.',
    cta: 'Quero ser avisado',
    subscribed: 'Acompanhando',
    actions: {
      toggle: 'Ativar lab',
      learn: 'Saber mais'
    }
  },
  blogSection: {
    eyebrow: 'Conteúdo',
    title: 'Últimos artigos',
    description: 'Logs semanais sobre experimentos com WebGL, arquiteturas realtime, automações e UX imersiva.',
    cta: 'Blog completo'
  },
  contactSection: {
    eyebrow: 'Dispon?vel agora',
    headline: 'Bora criar algo fora da curva?',
    subheadline: 'Contato direto por email para projetos enterprise, automa??o em escala e produtos cr?ticos.',
    responseBadge: 'Responde em <2h',
    chips: ['Contato direto', 'Projetos enterprise', 'Resposta r?pida', 'Design system vivo'],
    quickCards: [
      {
        title: 'Arquitetura pronta para escala.',
        detail: 'Sprints curtos, automa??o forte e foco em disponibilidade.'
      },
      {
        title: 'C?digo e design alinhados.',
        detail: 'UI dev, sistemas de design, observabilidade e conte?do.'
      }
    ],
    tags: ['Dashboards enterprise', 'Observabilidade', 'Copilotos realtime', 'SRE/DevOps'],
    primaryCta: 'Enviar mensagem',
    secondaryCta: 'Portf?lio completo',
    metrics: [
      { label: 'SLA de resposta', value: '< 2h', detail: 'Janela m?dia com monitoramento ativo.' },
      { label: 'Fusos atendidos', value: 'LATAM | EU | US', detail: 'Slots di?rios para sync independente do pa?s.' },
      { label: 'Atualiza??es de stack', value: 'Semanal', detail: 'Status reports e release notes autom?ticos.' }
    ],
    commitmentsHeading: 'Fluxo de engajamento',
    commitments: [
      {
        title: 'Discovery & briefing',
        detail: 'Mapeamos metas, KPIs, stakeholders e telemetria antes mesmo do design.'
      },
      {
        title: 'Blueprint de arquitetura',
        detail: 'Infra, hospedagem, automa??o e integra??es aprovadas antes de codar.'
      },
      {
        title: 'Loop de QA realtime',
        detail: 'Feature flags, links de preview e CI/CD para revis?es instant?neas.'
      },
      {
        title: 'Handoff & cuidado cont?nuo',
        detail: 'Acesso ao admin, documenta??o e alertas seguem mantidos ap?s a entrega.'
      }
    ],
    personal: {
      title: 'Luiz responde pessoalmente.',
      detail: 'Nada de fila ou bot: email ou DM cai direto comigo.',
      cta: 'Chamar o Luiz'
    },
    channels: {
      email: {
        label: 'Email',
        hint: 'Inbox direta monitorada 24/7',
        action: 'Copiar email'
      },
      social: {
        label: 'Instagram',
        hint: 'DMs abertas para syncs r?pidos',
        action: 'Abrir perfil'
      }
    },
    status: {
      label: 'Malha de notifica??es',
      message: 'SMTP + alertas no admin j? configurados.',
      detail: 'Cada envio dispara logs de analytics e confirma??o de entrega.'
    },
    copyState: {
      success: 'Copiado!'
    },
    note: 'Stack realtime e design system vivo prontos. Vamos arquitetar algo juntos.'
  },
  settings: {
    label: 'Configurações',
    title: 'Central de controle',
    subtitle: 'Ajuste idioma, temas e futuros labs.',
    language: 'Idioma',
    theme: 'Tema',
    betaLanguages: 'Idiomas em beta',
    beta: 'Em breve',
    labsTitle: 'Labs beta',
    labsDescription: 'Experimentos quase prontos para lançar.',
    labsItems: {
      alertMatrix: {
        title: 'Matriz de alertas realtime',
        description: 'Regras no-code para broadcast instantâneo de anomalias.',
        status: 'Prévia realtime'
      },
      layoutPresets: {
        title: 'Presets de layout',
        description: 'Salve e recupere configurações completas de dashboard.',
        status: 'Lab de design'
      },
      aiAutomation: {
        title: 'Automações avancadas',
        description: 'Dispare builds e scripts a partir de sinais.',
        status: 'Beta privado'
      }
    },
    labsNotify: 'Quero ser avisado',
    labsFollowing: 'Acompanhando',
    comingSoon: 'Quero ser avisado'
  },
  projectsPage: {
    eyebrow: 'Explorar',
    title: 'Todos os projetos',
    heroTitle: 'Dashboards imersivos e labs em tempo real',
    heroSubtitle: 'Construções futuristas para experiências premium',
    heroDescription: 'Cada projeto une UI cinematográfica, APIs resilientes e observabilidade. Escolha uma categoria para explorar as stacks deste portfólio.',
    searchPlaceholder: 'Buscar por tecnologia, stack, impacto...',
    filterAll: 'Todos',
    loadError: 'Não foi possível carregar os projetos.',
    views: '{{count}} visualizações',
    liveLink: 'Projeto ao vivo',
    repoLink: 'Repositório',
    detailsLink: 'Detalhes',
    galleryButton: 'Galeria',
    galleryHeading: 'Snapshots',
    caseStudy: 'Estudo de caso'
  },
  blogPage: {
    eyebrow: 'Insights',
    title: 'Blog técnico e diário de bordo',
    subtitle: 'Relatos de lançamento, experimentos e observabilidade na prática.',
    searchPlaceholder: 'Buscar artigos...',
    filterAll: 'Todos',
    loadError: 'Não foi possível carregar o blog.',
    readCta: 'Ler artigo',
    stats: {
      total: 'Publicados',
      readTime: 'Tempo médio',
      topTag: 'Tag em alta'
    },
    attachment: 'Anexo'
  },
  certificatesPage: {
    eyebrow: 'Evolução',
    title: 'Certificados & especializações',
    subtitle: 'Conquistas com links verificáveis e stacks comprovadas.',
    filterAll: 'Todos',
    loadError: 'Erro ao carregar certificados.',
    attachment: 'Anexo'
  },
  contactPage: {
    eyebrow: 'Disponível',
    title: 'Participe da próxima imersão digital',
    description: 'Conte mais sobre o projeto, stack desejada e objetivos. Responderei em até 24h com uma proposta personalizada.',
    email: 'luizfelippeandrade@outlook.com',
    social: '@luizfelippe.dev',
    placeholders: {
      name: 'Seu nome',
      email: 'Email profissional',
      message: 'Descreva o desafio, prazos, entregáveis...'
    },
    form: {
      companyLabel: 'Empresa / organização',
      companyPlaceholder: 'Agência, startup, enterprise...',
      serviceLabel: 'Foco do projeto',
      serviceOptions: ['Entrega completa', 'Experiência / Front-end', 'Back-end & integrações', 'Consultoria / mentoring'],
      budgetLabel: 'Faixa de orçamento',
      budgetPlaceholder: 'ex. R$ 50k - 150k',
      timelineLabel: 'Início desejado',
      timelineOptions: ['Imediato (0-1 mês)', 'Próximo ciclo (1-3 meses)', 'Planejamento (3+ meses)']
    },
    actions: {
      send: 'Enviar mensagem',
      sending: 'Enviando...'
    },
    feedback: {
      success: 'Mensagem enviada. Obrigado!',
      error: 'Algo deu errado. Tente novamente.'
    }
  },
  admin: {
    auth: {
      eyebrow: 'Autenticação Admin',
      title: 'Entrar no painel',
      sessionTitle: 'Sessão autenticada',
      description: 'Use o e-mail e senha configurados no backend para testar fluxo de login. Tokens ficam em cookies httpOnly.',
      sessionDescription: 'Você já pode visualizar os indicadores e endpoints protegidos.',
      sessionCard: {
        description: 'Sessão válida. Caso os dados não atualizem automaticamente, utilize o botão abaixo.'
      },
      placeholders: {
        email: 'admin@domain.com',
        password: 'senha segura'
      },
      actions: {
        refresh: 'Recarregar métricas',
        logout: 'Encerrar sessão',
        authenticating: 'Autenticando...',
        checking: 'Verificando sessão...',
        enter: 'Entrar'
      },
      messages: {
        success: 'Login realizado! Cookies de sessão foram configurados.',
        error: 'Erro ao autenticar: {{message}}',
        genericError: 'Não foi possível autenticar.',
        logout: 'Sessão encerrada.'
      }
    },
    metrics: {
      labels: {
        projects: 'Projetos publicados',
        certificates: 'Certificados emitidos',
        posts: 'Posts publicados',
        requestsPerMinute: 'Requests/min',
        activeUsers: 'Usuários ativos',
        uptime: 'Uptime',
        status: 'Status da API'
      },
      values: {
        syncing: 'Sincronizando…',
        synced: 'Sincronizado'
      },
      recents: 'Últimas atividades',
      alertsTitle: 'Alertas em tempo real',
      alertsActive: '{{count}} ouvintes online',
      defaults: {
        stats: {
          apis: 'APIs Monitoradas',
          latency: 'Tempo médio de resposta',
          errors: 'Erros nas últimas 24h'
        },
        activity: {
          deploy: 'Deploy v2.3 finalizado',
          newsletter: 'Job de newsletter agendado',
          admin: 'Novo admin cadastrado',
          generic: 'Atividade registrada',
          twoHours: 'Há 2 horas',
          fourHours: 'Há 4 horas',
          yesterday: 'Ontem',
          now: 'Agora'
        }
      }
    },
    manager: {
      tabs: {
        projects: 'Projetos',
        blog: 'Artigos',
        certificates: 'Certificados',
        labs: 'Labs beta'
      },
      descriptions: {
        projects: 'Cadastre novos cases, gerencie destaque e mantenha o portfólio vivo.',
        blog: 'Publique notas técnicas, fixe assuntos importantes e mantenha o diário atualizado.',
        certificates: 'Atualize conquistas e mantenha os selos mais relevantes em destaque.',
        labs: 'Controle os experimentos do Labs, altere status, ícones e CTAs expostos no site.'
      },
      form: {
        title: 'Criar novo {{resource}}',
        helper: 'Preencha os campos, anexe mídia e publique em poucos segundos.'
      },
      resources: {
        projects: 'projeto',
        blog: 'artigo',
        certificates: 'certificado',
        labs: 'lab'
      },
      fields: {
        title: 'Título',
        slug: 'Slug',
        description: 'Descrição',
        category: 'Categoria',
        liveUrl: 'URL do projeto ao vivo',
        repositoryUrl: 'URL do repositório',
        technologies: 'Tecnologias',
        excerpt: 'Resumo',
        content: 'Conteúdo',
        tags: 'Tags',
        categories: 'Categorias',
        readTime: 'Tempo de leitura (min)',
        published: 'Publicar imediatamente',
        featured: 'Fixar em destaque',
        issuer: 'Instituição emissora',
        issueDate: 'Data de emissão',
        expiryDate: 'Data de validade',
        level: 'Nível',
        skills: 'Skills relacionadas',
        credentialId: 'ID da credencial',
        credentialUrl: 'URL da credencial',
        highlights: 'Destaques',
        metricsStars: 'Estrelas',
        metricsDownloads: 'Deploys',
        metricsViews: 'Visualizações',
        labStatus: 'Etiqueta de status',
        icon: 'Ícone',
        gradient: 'Gradiente',
        ctaUrl: 'URL do CTA',
        active: 'Ativo',
        beta: 'Mostrar como beta'
      },
      placeholders: {
        projectTitle: 'ex: Plataforma holográfica',
        slug: 'ex: portfolio-3d',
        projectDescription: 'Resumo do impacto e stack principal',
        category: 'ex: DataViz',
        liveUrl: 'https://projeto.com',
        repositoryUrl: 'https://github.com/usuario/repositorio',
        technologies: 'React, Node, Redis...',
        blogTitle: 'ex: Orquestrando WebGL com React 19',
        excerpt: 'Resumo curto do artigo',
        content: 'Conteúdo em Markdown ou HTML',
        readTime: '10',
        tags: 'Realtime, WebGL...',
        categories: 'Design System, Arquitetura...',
        certificateTitle: 'ex: AWS Data Engineer',
        issuer: 'AWS, Google, Alura...',
        skills: 'Cloud, IaC, Observability...',
        credentialId: 'ex: ABC-123',
        credentialUrl: 'https://verify.cert/abc',
        highlights: 'Liderança, Multi-cloud...',
        labStatus: 'ex: Prévia realtime',
        icon: 'activity, grid, cpu...',
        gradient: 'linear-gradient(135deg,#22c55e,#facc15)',
        ctaUrl: 'https://labs.seusite.com'
      },
      helpers: {
        tags: 'Separe itens com vírgula.',
        date: 'Selecione a data de emissão.'
      },
      options: {
        icon: {
          activity: 'Activity',
          grid: 'Grid',
          cpu: 'CPU',
          signal: 'Signal',
          stack: 'Stack',
          zap: 'Zap'
        }
      },
      media: {
        title: 'Galeria e arquivos',
        helper: 'Envie imagens, PDFs ou vídeos MP4 para ilustrar o conteúdo.',
        upload: 'Enviar arquivos',
        uploading: 'Enviando...',
        cover: 'Definir capa',
        coverLabel: 'Capa',
        coverPreview: 'Prévia da capa',
        coverInstruction: 'Clique no card ou use o botão para trocar a capa.',
        coverCurrent: 'Capa atual',
        remove: 'Remover',
        limit: 'Até {{max}} arquivos.',
        empty: 'Nenhum arquivo enviado ainda.',
        errorUpload: 'Falha ao enviar arquivos.'
      },
      categories: {
        cloud: 'Cloud',
        frontend: 'Frontend',
        backend: 'Backend',
        design: 'Design',
        data: 'Dados',
        devops: 'DevOps',
        softSkills: 'Soft skills',
        other: 'Outros'
      },
      levels: {
        beginner: 'Iniciante',
        intermediate: 'Intermediário',
        advanced: 'Avançado'
      },
      actions: {
        create: 'Publicar item',
        delete: 'Excluir',
        feature: 'Fixar',
        unfeature: 'Desfixar',
        reset: 'Limpar formulário'
      },
      summary: {
        total: '{{count}} itens',
        refresh: 'Atualizar lista',
        updating: 'Atualizando…',
        hint: 'Todos os envios passam por validação.'
      },
      status: {
        featured: 'Fixado',
        noMedia: 'Sem mídia'
      },
      messages: {
        created: 'Item publicado com sucesso.',
        deleted: 'Item removido.',
        featured: 'Item fixado nos destaques.',
        unfeatured: 'Item removido dos destaques.',
        empty: 'Nenhum item cadastrado ainda.',
        error: 'Não foi possível concluir a ação.'
      }
    }
  }
  ,
      patchNotes: {
    headline: 'PatchNotes - performance, SEO e DX.',
    summary: 'Split de pacotes, lazy load, metas SEO, robots/sitemap, foco visivel e motion reduzido.',
    highlights: [
      'Manual chunks para vendor/router/query/motion/i18n e remocao do three.js nao usado.',
      'Secoes da home em lazy load com Suspense para reduzir o first paint.',
      'SEO: meta description/OG/robots + sitemap.xml e robots.txt.',
      'A11y: focus-visible e suporte a prefers-reduced-motion.'
    ],
    changes: [
      'Bundle inicial menor.',
      'Cartoes de contato com hover/badges limpos.',
      'CTA de contato mantem email e Instagram ativos.'
    ],
    fixes: [
      'Remocoes recentes aplicadas.',
      'Texto/meta limpos para evitar caracteres quebrados.'
    ],
    next: [
      'Separar react-icons ou usar SVG inline para reduzir vendor.',
      'Hospedar ou reduzir fontes para duas familias.',
      'Otimizar favicon.png ou trocar para WebP.'
    ]
  },
  patchNotesHistory: [
    {
      version: 'v1.4.1',
      date: '22 Nov 2025',
      headline: 'PatchNotes - performance, SEO e DX.',
      summary: 'Split de pacotes, lazy load, metas SEO, robots/sitemap, foco visivel e motion reduzido.',
      highlights: [
        'Manual chunks para vendor/router/query/motion/i18n e remocao do three.js nao usado.',
        'Secoes da home em lazy load com Suspense para reduzir o first paint.',
        'SEO: meta description/OG/robots + sitemap.xml e robots.txt.',
        'A11y: focus-visible e suporte a prefers-reduced-motion.'
      ],
      changes: [
        'Bundle inicial menor.',
        'Cartoes de contato com hover/badges limpos.',
        'CTA de contato mantem email e Instagram ativos.'
      ],
      fixes: [
        'Remocoes recentes aplicadas.',
        'Texto/meta limpos para evitar caracteres quebrados.'
      ],
      next: [
        'Separar react-icons ou usar SVG inline para reduzir vendor.',
        'Hospedar ou reduzir fontes para duas familias.',
        'Otimizar favicon.png ou trocar para WebP.'
      ]
    },
    {
      version: 'v1.3.0',
      date: '05 Nov 2025',
      headline: 'PatchNotes - UI e mobilidade.',
      summary: 'Aviso mobile com persistencia, contraste melhor e carga mais leve.',
      highlights: [
        'Barra mobile com fechar e persistencia.',
        'Banner flutuante mais leve e responsivo.',
        'Contraste melhor para claro/escuro.'
      ],
      changes: [
        'Home: fundo animado otimizado para reduzir GPU.',
        'UI: cores via tema para manter contraste.',
        'Layout: banner mobile com CTA para patch notes.',
        'Acessibilidade: foco visivel no CTA e botao de fechar.'
      ],
      fixes: [
        'Corrigido overlap do botao X no aviso mobile.',
        'Tipografia ajustada para evitar caracteres quebrados.',
        'Sombras suavizadas em cartoes pequenos.'
      ],
      next: [
        'Ativar dark/light automatico pelo sistema.',
        'Adicionar card de status de uptime em tempo real.',
        'Publicar guia de estilo para componentes interativos.'
      ]
    }
  ],

};

export default pt;
