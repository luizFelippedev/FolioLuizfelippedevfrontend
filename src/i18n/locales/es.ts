const es = {
  common: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      certificates: 'Certificados',
      blog: 'Blog',
      contact: 'Contacto',
      faq: 'FAQ'
    },
    logoAlt: 'Logo del portafolio de Luiz Felippe',
    menu: 'Menú',
    close: 'Cerrar',
    states: {
      loading: 'Cargando...',
      error: 'No se pudieron obtener los datos.',
      empty: 'Aún no hay elementos por aquí.',
      updating: '· actualizando…'
    },
    pagination: {
      previous: '← Anterior',
      next: 'Siguiente →',
      page: 'Página {{page}}'
    },
    footer: {
      title: 'Portafolio Futurista',
      description: 'Construido con React, Three.js, Tailwind y mucho café.',
      badge: 'Siempre en beta ∞',
      ctaTitle: '¿Listo para el próximo release?',
      ctaSubtitle: 'Pipelines, observabilidad e interfaces inmersivas sincronizadas 24/7.',
      primaryCta: 'Hablar con Luiz',
      secondaryCta: 'Abrir admin',
      linksTitle: 'Accesos rápidos',
      links: {
        projects: 'Proyectos',
        labs: 'Labs beta',
        admin: 'Panel admin',
        faq: 'FAQ',
        terms: 'Términos',
        privacy: 'Privacidad'
      },
      signature: 'Desarrollado por Luiz Felippe',
      rights: 'Todos los derechos reservados.',
      stats: {
        uptime: 'Uptime',
        deployments: 'Deploys (trimestre)',
        automations: 'Automatizaciones / mes'
      }
    }
  },
  hero: {
    subtitle: 'Estudio independiente',
    badges: ['Lic. en Ing. de Software', 'Estudio independiente', 'Sistemas realtime'],
    title: {
      prefix: 'Construyo plataformas premium que',
      highlight: 'se sienten vivas para tus clientes'
    },
    description:
      'Estudio boutique que combina UI cinematográfica, datos en tiempo real e infraestructura resiliente. Trabajo con marketing, producto y operaciones para lanzar experiencias con impacto medible, observabilidad y cuidado automatizado.',
    highlights: [
      { title: 'Full-stack avanzado', description: 'React, Three.js y Node con interfaces ricas y responsivas.' },
      { title: 'Sistemas en tiempo real', description: 'WebSockets, pipelines de analytics e instrumentación completa.' },
      { title: 'Calidad y DX', description: 'CI/CD, pruebas automatizadas y documentación precisa.' }
    ],
    stats: [
      { value: '48+', label: 'Proyectos inmersivos', detail: 'Dashboards 3D y apps realtime' },
      { value: '120k+', label: 'Automatizaciones', detail: 'Eventos monitorizados al mes' },
      { value: '120ms', label: 'Latencia media', detail: 'Chats y notificaciones WebSocket' }
    ]
  },
  cta: {
    primary: 'Explorar proyectos',
    secondary: 'Hablar ahora'
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Cómo trabajo con empresas',
    subtitle: 'Contratación, plazos, stack y soporte post-entrega claros y rápidos.',
    items: [
      {
        icon: 'engagement',
        question: '¿Cómo funciona la contratación?',
        answer: 'Trabajo por proyecto cerrado o dedicación parcial (“ingeniería on-demand”). Siempre arranco con discovery para alinear metas y riesgos.'
      },
      {
        icon: 'timeline',
        question: '¿Cuáles son los plazos típicos?',
        answer: 'MVPs suelen tardar 4–8 semanas; integraciones y mejoras continuas siguen ciclos quincenales con entregas visibles.'
      },
      {
        icon: 'stack',
        question: '¿Qué stack uso?',
        answer: 'Front: React/Next, Vite, Tailwind, Three/Framer. Back: Node/Nest, REST/GraphQL, Redis, Postgres/Mongo. Cloud: AWS/GCP/Cloudflare, CI/CD con GitHub Actions.'
      },
      {
        icon: 'support',
        question: '¿Y el soporte post-entrega?',
        answer: 'Handoff con documentación, playbooks y monitoreo básico (logs/alertas). Podemos mantener un plan de evolución y hotfixes por horas mensuales.'
      },
      {
        icon: 'contact',
        question: '¿Cómo pueden evaluar mi trabajo?',
        answer: 'Demos, admin protegido, changelogs y métricas públicas (uptime, deploys). Además, walkthrough con stakeholders si es necesario.'
      }
    ]
  },
  termsPage: {
    eyebrow: 'Términos',
    title: 'Términos de uso',
    subtitle: 'Lineamientos para usar el portafolio y acceder a demos/admin.',
    intro: 'Al usar el sitio aceptas respetar la propiedad intelectual y no abusar de demos o endpoints protegidos.',
    items: {
      scope: 'Contenido y assets son solo para presentación y evaluación.',
      rights: 'Marcas, código y medios pertenecen a Luiz Felippe salvo indicación.',
      usage: 'No redistribuir ni reproducir sin permiso.',
      liability: 'Sin garantías; el uso de demos y APIs es bajo tu responsabilidad.',
      changes: 'Los términos pueden actualizarse; el uso continuo implica aceptación.'
    },
    outro: 'Para permisos especiales o propuestas, contáctame directamente.'
  },
  privacyPage: {
    eyebrow: 'Privacidad',
    title: 'Privacidad & Datos',
    subtitle: 'Cómo manejo datos de formularios y analítica.',
    intro: 'Recojo solo lo necesario para responder y mejorar la experiencia.',
    items: {
      data: 'Datos de contacto (nombre/email/mensaje) se usan solo para responder.',
      cookies: 'Cookies opcionales guardan idioma/tema y métricas de uso.',
      security: 'Áreas admin requieren autenticación; datos sensibles no se exponen públicamente.',
      sharing: 'No vendo ni comparto datos, salvo proveedores (email/infra) estrictamente para este sitio.',
      contact: 'Puedes pedir borrado o exportar tus envíos en cualquier momento.'
    },
    outro: 'Dudas? Escríbeme y aclaro cualquier punto sobre privacidad.'
  },
  about: {
    badge: 'ADN del estudio',
    title: 'Estrategia, diseño e ingeniería alineados a resultados',
    description:
      'Opero una práctica solo de alto toque que funciona como squad incrustado. Discovery, framing, blueprint de arquitectura, diseño inmersivo y entrega rigurosa. Cada proyecto cierra con documentación, playbooks de handoff y dashboards vivos.',
    chips: ['Liderazgo fraccionado', 'Puente diseño + ingeniería', 'Estudios de Ingeniería de Software'],
    highlights: [
      {
        title: 'Formación en Ingeniería de Software',
        description: 'Cursando licenciatura en Ingeniería de Software con foco en arquitectura, sistemas de datos y liderazgo UX. Cada proyecto académico refuerza las soluciones del estudio.',
        metrics: 'Carrera en curso'
      },
      {
        title: 'Stack en capas',
        description: 'Experiencia uniendo micro front-ends, Node/Nest, colas y grafos en tiempo real.',
        metrics: '15 stacks productivas'
      },
      {
        title: 'Observabilidad y DX',
        description: 'Pipelines con tracing, logs estructurados y automatización de QA, todo versionado.',
        metrics: '120k+ eventos monitoreados/mes'
      },
      {
        title: 'Mentorías y liderazgo',
        description: 'Guié squads y formé devs en programas de aceleración con foco en calidad.',
        metrics: '60+ mentorías entregadas'
      }
    ]
  },
  experience: {
    badge: 'Experiencia',
    title: 'Línea de tiempo profesional',
    description: 'Producto, arquitectura, liderazgo y mentoría en distintos mercados.',
    items: [
      {
        company: 'Nebula Labs',
        role: 'Staff Software Engineer · DataViz',
        period: '2022 — actual',
        stack: ['React 19', 'Three.js', 'Node.js', 'Kafka', 'AWS'],
        achievements: [
          'Diseñé dashboards 3D y paneles responsivos con datos en streaming.',
          'Implementé pipelines de telemetría con Grafana/Prometheus y alertas inteligentes.',
          'Lideré la migración a un design system tipado, reduciendo el tiempo de entrega en 35%.'
        ]
      },
      {
        company: 'Atlas Cloud',
        role: 'Senior Full-Stack Engineer',
        period: '2019 — 2022',
        stack: ['Next.js', 'NestJS', 'Redis Streams', 'PostgreSQL', 'Kubernetes'],
        achievements: [
          'Creé experiencias realtime para analytics financiero con websockets redundantes.',
          'Automatizé el aprovisionamiento multi-tenant con IaC y pipelines de GitHub Actions.',
          'Optimizé APIs de 400ms a 120ms de p95 introduciendo cache inteligente.'
        ]
      },
      {
        company: 'Futurio Studio',
        role: 'Product Engineer',
        period: '2016 — 2019',
        stack: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
        achievements: [
          'Entregué portafolios interactivos para marcas globales con foco en storytelling.',
          'Implementé sistemas headless con GraphQL y feature flags.',
          'Trabajé junto a diseñadores para alinear microinteracciones y performance.'
        ]
      }
    ]
  },
  servicesSection: {
    eyebrow: 'Servicios',
    title: 'Servicios de estudio para marcas ambiciosas',
    description:
      'Actúo como estudio boutique para founders, CMOs y operaciones que necesitan productos digitales premium. Estrategia, liderazgo UX e ingeniería full-stack avanzan juntas desde el discovery hasta el cuidado continuo.',
    cards: [
      {
        title: 'Estrategia & discovery',
        detail: 'Workshops, roadmap y gobernanza para traducir metas en un plan medible.',
        items: ['Product framing', 'Alineación con stakeholders', 'Workshops de experiencia']
      },
      {
        title: 'Ingeniería de plataformas',
        detail: 'Entrega full-stack de dashboards inmersivos, APIs realtime y admins seguros.',
        items: ['Full-stack builds', 'Realtime & IA copilots', 'Playbooks de CI/CD + IaC']
      },
      {
        title: 'Care & growth',
        detail: 'Sigo presente tras el lanzamiento con observabilidad, experimentos y mentoring.',
        items: ['Observabilidad y alertas', 'Feature flags / tests A/B', 'Mentoring & enablement']
      }
    ],
    ctaPrimary: 'Solicitar propuesta',
    ctaSecondary: 'Ver casos'
  },
  skills: {
    badge: 'Stack conectado',
    title: 'Tecnologías latiendo en tiempo real',
    description:
      'Stacks web, realtime y cloud con telemetría 24/7. Los loops muestran las tecnologías que mantengo activas día tras día.',
    pillars: [
      {
        title: 'frontend sensorial',
        description: 'Interfaces cinematográficas con microinteracciones, 3D y accesibilidad.',
        tools: ['React 19', 'Next.js', 'Three.js', 'Framer Motion']
      },
      {
        title: 'plataformas escalables',
        description: 'APIs tipadas, colas y datos en tiempo real con observabilidad.',
        tools: ['Node.js', 'NestJS', 'Redis Streams', 'Socket.IO']
      },
      {
        title: 'cloud & automatización',
        description: 'Pipelines CI/CD, infraestructura como código y monitoreo continuo.',
        tools: ['Docker', 'GitHub Actions', 'AWS', 'Grafana/Prometheus']
      }
    ]
  },
  projectsSection: {
    eyebrow: 'Destacados',
    title: 'Proyectos en producción',
    description:
      'Stacks reales con dashboards interactivos, pipelines de datos y experiencias sensoriales. Cada tarjeta resume parte del laboratorio que uso con clientes.',
    cta: 'Ver todos'
  },
  systemStatus: {
    eyebrow: 'Centro de mando',
    title: 'Estado vivo de la plataforma',
    description: 'Los endpoints públicos mantienen estos contadores al día. Cada publicación en el admin actualiza los números al instante.',
    cards: {
      projects: {
        label: 'Proyectos online',
        hint: 'Casos destacados'
      },
      blog: {
        label: 'Artículos publicados',
        hint: 'Exploraciones técnicas'
      },
      certificates: {
        label: 'Certificados verificados',
        hint: 'Logros validados'
      },
      labs: {
        label: 'Labs activos',
        hint: 'Módulos beta en curso'
      }
    },
    cta: 'Abrir panel admin'
  },
  certificatesSection: {
    eyebrow: 'Formación continua',
    title: 'Certificaciones recientes',
    description: 'Pesos pesados en IA, cloud y diseño sistémico que alimentan este portafolio futurista.',
    cta: 'Ver certificados'
  },
  labsSection: {
    eyebrow: 'Labs beta',
    title: 'Experimentos casi listos',
    description: 'Automatización realtime, alertas y motor de layouts corriendo dentro del admin. Sigue los módulos que quieras probar primero.',
    cta: 'Quiero novedades',
    subscribed: 'Siguiendo',
    actions: {
      toggle: 'Activar lab',
      learn: 'Saber más'
    }
  },
  blogSection: {
    eyebrow: 'Contenido',
    title: 'Últimos artículos',
    description: 'Logs semanales sobre WebGL, arquitecturas realtime, automatización y UX inmersiva.',
    cta: 'Blog completo'
  },
  contactSection: {
    eyebrow: 'Disponible ahora',
    headline: '¿Creamos algo fuera de serie?',
    subheadline: 'Contacto directo por email para proyectos enterprise, automatizaciones a escala y productos críticos.',
    tags: ['Dashboards realtime', 'Design systems', 'Copilotos IA', 'Workshops'],
    primaryCta: 'Enviar mensaje',
    secondaryCta: 'Portafolio completo',
    metrics: [
      { label: 'SLA de respuesta', value: '< 2h', detail: 'Ventana promedio mientras la monitorización está activa.' },
      { label: 'Cobertura horaria', value: 'LATAM · EU · US', detail: 'Bloques diarios sin importar el país.' },
      { label: 'Actualizaciones de stack', value: 'Semanal', detail: 'Reportes de estado y release notes automáticos.' }
    ],
    commitmentsHeading: 'Circuito de engagement',
    commitments: [
      {
        title: 'Discovery & briefing',
        detail: 'Recojo objetivos, KPIs, stakeholders y telemetría antes de diseñar.'
      },
      {
        title: 'Blueprint de arquitectura',
        detail: 'Infra, hosting, automatización e integraciones validadas antes del código.'
      },
      {
        title: 'Loop de QA realtime',
        detail: 'Feature flags, previews y CI/CD para revisiones instantáneas.'
      },
      {
        title: 'Handoff & soporte',
        detail: 'Acceso admin, docs y políticas de alertas se mantienen tras la entrega.'
      }
    ],
    channels: {
      email: {
        label: 'Email',
        hint: 'Inbox directa monitoreada 24/7',
        action: 'Copiar email'
      },
      social: {
        label: 'Instagram',
        hint: 'DM abiertas para syncs rápidos',
        action: 'Abrir perfil'
      }
    },
    status: {
      label: 'Malla de notificaciones',
      message: 'SMTP + alertas del admin ya configurados.',
      detail: 'Cada envío dispara logs de analytics y confirmación de entrega.'
    },
    copyState: {
      success: '¡Copiado!'
    },
    note: 'Stack realtime, tooling de IA y diseño vivo listos para tu proyecto.'
  },
  settings: {
    label: 'Configuración',
    title: 'Centro de control',
    subtitle: 'Ajusta idioma, temas y futuros labs.',
    language: 'Idioma',
    theme: 'Tema',
    betaLanguages: 'Idiomas beta',
    beta: 'Pronto',
    labsTitle: 'Labs beta',
    labsDescription: 'Experimentos casi listos para liberar.',
    labsItems: {
      alertMatrix: {
        title: 'Matriz de alertas realtime',
        description: 'Reglas no-code para alertar anomalías al instante.',
        status: 'Vista previa realtime'
      },
      layoutPresets: {
        title: 'Presets de layout',
        description: 'Guarda y recupera configuraciones completas de tablero.',
        status: 'Laboratorio de diseño'
      },
      aiAutomation: {
        title: 'Automatizaciones con IA',
        description: 'Dispara builds y scripts según insights de IA.',
        status: 'Beta privada'
      }
    },
    labsNotify: 'Avísame',
    labsFollowing: 'Siguiendo',
    comingSoon: 'Avísame'
  },
  projectsPage: {
    eyebrow: 'Explorar',
    title: 'Todos los proyectos',
    heroTitle: 'Dashboards inmersivos y labs en tiempo real',
    heroSubtitle: 'Construcciones futuristas para experiencias premium',
    heroDescription: 'Cada proyecto une UI cinematográfica, APIs resilientes y observabilidad. Elige una categoría para explorar las stacks del portafolio.',
    searchPlaceholder: 'Buscar por tecnología, stack, impacto...',
    filterAll: 'Todos',
    loadError: 'No fue posible cargar los proyectos.',
    views: '{{count}} vistas',
    liveLink: 'Proyecto en vivo',
    repoLink: 'Repositorio',
    detailsLink: 'Detalles',
    galleryButton: 'Galería',
    galleryHeading: 'Snapshots',
    caseStudy: 'Estudio de caso'
  },
  blogPage: {
    eyebrow: 'Insights',
    title: 'Blog técnico y bitácora',
    subtitle: 'Historias de lanzamientos, experimentos y observabilidad aplicada.',
    searchPlaceholder: 'Buscar artículos...',
    filterAll: 'Todos',
    loadError: 'No fue posible cargar el blog.',
    readCta: 'Leer artículo',
    stats: {
      total: 'Publicados',
      readTime: 'Tiempo medio',
      topTag: 'Tag destacado'
    },
    attachment: 'Adjunto'
  },
  certificatesPage: {
    eyebrow: 'Evolución',
    title: 'Certificados y especializaciones',
    subtitle: 'Logros documentados, enlaces verificables y stacks claros.',
    filterAll: 'Todos',
    loadError: 'Error al cargar los certificados.',
    attachment: 'Adjunto'
  },
  contactPage: {
    eyebrow: 'Disponible',
    title: 'Únete a la próxima inmersión digital',
    description: 'Cuéntame del proyecto, stack deseada y objetivos. Responderé en 24h con una propuesta personalizada.',
    email: 'luizfelippeandrade@outlook.com',
    social: '@luizfelippe.dev',
    placeholders: {
      name: 'Tu nombre',
      email: 'Email profesional',
      message: 'Describe el desafío, plazos, entregables...'
    },
    form: {
      companyLabel: 'Empresa / organización',
      companyPlaceholder: 'Agencia, startup, enterprise...',
      serviceLabel: 'Enfoque del proyecto',
      serviceOptions: ['Entrega end-to-end', 'Experiencia / Frontend', 'Backend & integraciones', 'Consultoría / mentoring'],
      budgetLabel: 'Rango presupuestario',
      budgetPlaceholder: 'ej. USD 10k - 30k',
      timelineLabel: 'Inicio deseado',
      timelineOptions: ['Inmediato (0-1 mes)', 'Próximo ciclo (1-3 meses)', 'Planificación (3+ meses)']
    },
    actions: {
      send: 'Enviar mensaje',
      sending: 'Enviando...'
    },
    feedback: {
      success: 'Mensaje enviado. ¡Gracias!',
      error: 'Algo salió mal. Inténtalo de nuevo.'
    }
  },
  admin: {
    auth: {
      eyebrow: 'Autenticación admin',
      title: 'Entrar al panel',
      sessionTitle: 'Sesión autenticada',
      description: 'Usa el email y la contraseña configurados en el backend. Los tokens se mantienen en cookies httpOnly.',
      sessionDescription: 'Ya puedes ver los indicadores y endpoints protegidos.',
      sessionCard: {
        description: 'Sesión válida. Si los datos no se actualizan solos, usa el botón.'
      },
      placeholders: {
        email: 'admin@domain.com',
        password: 'contraseña segura'
      },
      actions: {
        refresh: 'Recargar métricas',
        logout: 'Cerrar sesión',
        authenticating: 'Autenticando...',
        checking: 'Verificando sesión...',
        enter: 'Entrar'
      },
      messages: {
        success: 'Inicio de sesión realizado. Cookies configuradas.',
        error: 'Error al autenticar: {{message}}',
        genericError: 'No fue posible autenticar.',
        logout: 'Sesión finalizada.'
      }
    },
    metrics: {
      labels: {
        projects: 'Proyectos publicados',
        certificates: 'Certificados emitidos',
        posts: 'Posts publicados',
        requestsPerMinute: 'Requests/min',
        activeUsers: 'Usuarios activos',
        uptime: 'Uptime',
        status: 'Estado de la API'
      },
      values: {
        syncing: 'Sincronizando…',
        synced: 'Sincronizado'
      },
      recents: 'Últimas actividades',
      alertsTitle: 'Alertas en tiempo real',
      alertsActive: '{{count}} oyentes online',
      defaults: {
        stats: {
          apis: 'APIs monitoreadas',
          latency: 'Latencia media',
          errors: 'Errores en 24h'
        },
        activity: {
          deploy: 'Deploy v2.3 finalizado',
          newsletter: 'Job de newsletter agendado',
          admin: 'Nuevo admin creado',
          generic: 'Actividad registrada',
          twoHours: 'Hace 2 horas',
          fourHours: 'Hace 4 horas',
          yesterday: 'Ayer',
          now: 'Ahora'
        }
      }
    },
    manager: {
      tabs: {
        projects: 'Proyectos',
        blog: 'Artículos',
        certificates: 'Certificados',
        labs: 'Labs beta'
      },
      descriptions: {
        projects: 'Crea nuevos casos, gestiona destacados y mantén vivo el portafolio.',
        blog: 'Publica notas técnicas, fija temas clave y mantén actualizado el diario.',
        certificates: 'Actualiza logros y destaca los sellos más relevantes.',
        labs: 'Administra los experimentos del Labs, modifica estados, íconos y CTAs visibles en el sitio.'
      },
      form: {
        title: 'Crear nuevo {{resource}}',
        helper: 'Completa los campos, adjunta medios y publica al instante.'
      },
      resources: {
        projects: 'proyecto',
        blog: 'artículo',
        certificates: 'certificado',
        labs: 'lab'
      },
      fields: {
        title: 'Título',
        slug: 'Slug',
        description: 'Descripción',
        category: 'Categoría',
        liveUrl: 'URL del proyecto en vivo',
        repositoryUrl: 'URL del repositorio',
        technologies: 'Tecnologías',
        excerpt: 'Resumen',
        content: 'Contenido',
        tags: 'Tags',
        categories: 'Categorías',
        readTime: 'Tiempo de lectura (min)',
        published: 'Publicar ahora',
        featured: 'Fijar en destacados',
        issuer: 'Organización emisora',
        issueDate: 'Fecha de emisión',
        expiryDate: 'Fecha de expiración',
        level: 'Nivel',
        skills: 'Skills relacionadas',
        credentialId: 'ID de la credencial',
        credentialUrl: 'URL de verificación',
        highlights: 'Destacados',
        metricsStars: 'Estrellas',
        metricsDownloads: 'Deploys',
        metricsViews: 'Vistas',
        labStatus: 'Etiqueta de estado',
        icon: 'Ícono',
        gradient: 'Gradiente',
        ctaUrl: 'URL del CTA',
        active: 'Activo',
        beta: 'Mostrar como beta'
      },
      placeholders: {
        projectTitle: 'ej: Plataforma holográfica',
        slug: 'ej: portfolio-3d',
        projectDescription: 'Resumen de impacto y stack principal',
        category: 'ej: DataViz',
        liveUrl: 'https://proyecto.com',
        repositoryUrl: 'https://github.com/usuario/repositorio',
        technologies: 'React, Node, Redis...',
        blogTitle: 'ej: Orquestando WebGL con React 19',
        excerpt: 'Resumen corto',
        content: 'Contenido en Markdown o HTML',
        readTime: '10',
        tags: 'Realtime, WebGL...',
        categories: 'Design system, Arquitectura...',
        certificateTitle: 'ej: AWS Data Engineer',
        issuer: 'AWS, Google, Alura...',
        skills: 'Cloud, IaC, Observability...',
        credentialId: 'ej: ABC-123',
        credentialUrl: 'https://verify.cert/abc',
        highlights: 'Liderazgo, Multi-cloud...',
        labStatus: 'ej: Realtime preview',
        icon: 'activity, grid, cpu...',
        gradient: 'linear-gradient(135deg,#22c55e,#facc15)',
        ctaUrl: 'https://labs.tusitio.com'
      },
      helpers: {
        tags: 'Separa los ítems con comas.',
        date: 'Selecciona la fecha de emisión.'
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
        title: 'Galería y archivos',
        helper: 'Sube imágenes, PDFs o videos MP4 para enriquecer el contenido.',
        upload: 'Subir archivos',
        uploading: 'Subiendo...',
        cover: 'Definir como portada',
        coverLabel: 'Portada',
        coverPreview: 'Vista previa de la portada',
        coverInstruction: 'Haz clic en la tarjeta o usa el botón para cambiar la portada.',
        coverCurrent: 'Portada actual',
        remove: 'Eliminar',
        limit: 'Hasta {{max}} archivos.',
        empty: 'Aún no hay archivos enviados.',
        errorUpload: 'Error al subir archivos.'
      },
      categories: {
        cloud: 'Cloud',
        frontend: 'Frontend',
        backend: 'Backend',
        design: 'Diseño',
        data: 'Datos',
        devops: 'DevOps',
        softSkills: 'Soft skills',
        other: 'Otros'
      },
      levels: {
        beginner: 'Inicial',
        intermediate: 'Intermedio',
        advanced: 'Avanzado'
      },
      actions: {
        create: 'Publicar item',
        delete: 'Eliminar',
        feature: 'Fijar',
        unfeature: 'Quitar',
        reset: 'Limpiar formulario'
      },
      summary: {
        total: '{{count}} elementos',
        refresh: 'Actualizar lista',
        updating: 'Actualizando…',
        hint: 'Cada envío se valida antes de publicarse.'
      },
      status: {
        featured: 'Fijado',
        noMedia: 'Sin medios'
      },
      messages: {
        created: 'Elemento publicado con éxito.',
        deleted: 'Elemento eliminado.',
        featured: 'Elemento fijado en destacados.',
        unfeatured: 'Elemento retirado de destacados.',
        empty: 'Aún no hay elementos registrados.',
        error: 'No se pudo completar la acción.'
      }
    }
  }
};

export default es;
