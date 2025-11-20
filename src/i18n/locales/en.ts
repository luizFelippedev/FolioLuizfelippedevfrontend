const en = {
  common: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      certificates: 'Certificates',
      blog: 'Blog',
      contact: 'Contact',
      faq: 'FAQ'
    },
    logoAlt: 'Luiz Felippe portfolio logo',
    menu: 'Menu',
    close: 'Close',
    states: {
      loading: 'Loading...',
      error: 'Something went wrong while fetching data.',
      empty: 'Nothing to show here yet.',
      updating: '· updating…'
    },
    pagination: {
      previous: '← Previous',
      next: 'Next →',
      page: 'Page {{page}}'
    },
    footer: {
      title: 'Futuristic Portfolio',
      description: 'Built with React, Three.js, Tailwind and a lot of coffee.',
      badge: 'Always in beta ∞',
      ctaTitle: 'Ready to launch the next release?',
      ctaSubtitle: 'Pipelines, observability and immersive front-ends stay synchronized 24/7.',
      primaryCta: 'Talk to Luiz',
      secondaryCta: 'Open admin',
    linksTitle: 'Quick links',
    links: {
      projects: 'Projects',
      labs: 'Labs beta',
      admin: 'Admin dashboard',
      faq: 'FAQ',
      terms: 'Terms',
      privacy: 'Privacy'
    },
      signature: 'Developed by Luiz Felippe',
      rights: 'All rights reserved.',
      stats: {
        uptime: 'Uptime',
        deployments: 'Deploys (quarter)',
        automations: 'Automations / month'
      }
    }
  },
  hero: {
    subtitle: 'Software Engineering · Estácio',
    badges: [
      'Full-stack + automations',
      'Coding since 12',
      'Cloud & realtime',
      'Immersive UX'
    ],
    title: {
      prefix: 'Software Engineer in training solving hard problems',
      highlight: 'with automation, cloud and cinematic UIs'
    },
    description:
      'Software Engineering student (about 2 years to graduate). I started with a Python calculator at 12 and now tackle complex challenges: distributed architectures, tough integrations, scaled automations, realtime data, AI and premium UX. I deliver front-end, back-end, databases, APIs, automations and observability with clean, resilient, scalable code.',
    highlights: [
      {
        title: 'Advanced full-stack',
        description: 'React, Three.js and Node powering rich, responsive apps.'
      },
      {
        title: 'Realtime systems',
        description: 'WebSockets, analytics pipelines and full instrumentation.'
      },
      {
        title: 'Quality & DX',
        description: 'CI/CD, automated testing and concise documentation.'
      }
    ],
    stats: [
      { value: '48+', label: 'Immersive projects', detail: '3D dashboards & realtime apps' },
      { value: '120k+', label: 'Automations', detail: 'Events observed per month' },
      { value: '120ms', label: 'Average latency', detail: 'Chats & WebSocket notifications' }
    ]
  },
  cta: {
    primary: 'Explore projects',
    secondary: 'Let’s talk'
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'How I work with companies',
    subtitle: 'Transparent answers on engagement, timelines, stack and post-launch care.',
    items: [
      {
        icon: 'engagement',
        question: 'How does the engagement start?',
        answer:
          'We can work per project (agreed scope) or fractional engineering. I always begin with a discovery round to align goals, risks and measures of success.'
      },
      {
        icon: 'timeline',
        question: 'What timelines are typical?',
        answer:
          'MVPs often take 4–8 weeks; integrations and continuous improvements follow a biweekly cadence with visible milestones and demos each sprint.'
      },
      {
        icon: 'stack',
        question: 'Which stack do you use?',
        answer:
          'Front: React/Next, Vite, Tailwind, Three/Framer. Back: Node/Nest, REST/GraphQL, Redis, Postgres/Mongo. Cloud: AWS/GCP/Cloudflare, CI/CD with GitHub Actions.'
      },
      {
        icon: 'support',
        question: 'What about post-launch support?',
        answer:
          'I include handoff with documentation, incident playbooks and basic monitoring (logs/alerts). We can keep an evolution/hotfix plan with monthly hours.'
      },
      {
        icon: 'contact',
        question: 'How can companies evaluate my work?',
        answer:
          'I provide demos, protected admin, changelogs and public metrics (uptime, deploys). Stakeholder walkthroughs can be scheduled on request.'
      }
    ]
  },
  termsPage: {
    eyebrow: 'Terms',
    title: 'Terms of Service',
    subtitle: 'Guidelines for using this portfolio and accessing admin/demos.',
    intro: 'By accessing this site you agree to respect the intellectual property and not to misuse demos or admin endpoints.',
    items: {
      scope: 'Content and assets are for presentation and evaluation purposes only.',
      rights: 'All trademarks, code samples and media belong to Luiz Felippe unless otherwise noted.',
      usage: 'Do not redistribute or reproduce the material without permission.',
      liability: 'There is no warranty; use demos and APIs at your own risk.',
      changes: 'Terms may be updated; continued use implies acceptance.'
    },
    outro: 'For special permissions or partnership requests, contact me directly.'
  },
  privacyPage: {
    eyebrow: 'Privacy',
    title: 'Privacy & Data',
    subtitle: 'How I handle data collected through forms and analytics.',
    intro: 'I collect only what is necessary to respond to your messages and improve the experience.',
    items: {
      data: 'Contact form data (name/email/message) is stored securely and used only to respond.',
      cookies: 'Optional cookies may be used for language/theme preferences and analytics.',
      security: 'Admin areas require authentication; sensitive data is not shared publicly.',
      sharing: 'I do not sell or share your data with third parties, except service providers (email/hosting) strictly for this site.',
      contact: 'You can request deletion or export of your contact submissions at any time.'
    },
    outro: 'Questions? Send an email and I will clarify any privacy concern.'
  },
  about: {
    badge: 'Studio DNA',
    title: 'Strategy, design and engineering aligned to outcomes',
    description:
      'I run a high-touch solo practice that works like an embedded squad. Expect due diligence, product framing, architecture blueprints, immersive design and rigorous delivery standards. Each engagement closes with documentation, handoff playbooks and living dashboards.',
    chips: ['Fractional leadership', 'Design-engineering bridge', 'Software engineering B.Sc. candidate'],
    highlights: [
      {
        title: 'Software engineering studies',
        description:
          'Pursuing a B.Sc. in Software Engineering with emphasis on architecture, data-intensive systems and UX leadership. Course projects feed directly into client work.',
        metrics: 'Higher education in progress'
      },
      {
        title: 'Layered stack',
        description: 'Experience combining micro-frontends, Node/Nest, queues and realtime graphs.',
        metrics: '15 productive stacks'
      },
      {
        title: 'Observability & DX',
        description: 'Tracing pipelines, structured logs and QA automation, everything versioned.',
        metrics: '120k+ monitored events/month'
      },
      {
        title: 'Mentorship & leadership',
        description: 'Led squads and mentored devs in acceleration programs focused on quality.',
        metrics: '60+ mentorships delivered'
      }
    ]
  },
  experience: {
    badge: 'Experience',
    title: 'Professional timeline',
    description: 'Product, architecture, leadership and mentoring across multiple markets.',
    items: [
      {
        company: 'Nebula Labs',
        role: 'Staff Software Engineer · DataViz',
        period: '2022 — present',
        stack: ['React 19', 'Three.js', 'Node.js', 'Kafka', 'AWS'],
        achievements: [
          'Designed 3D dashboards and responsive panels fed by streaming data.',
          'Shipped telemetry pipelines with Grafana/Prometheus and smart alerting.',
          'Led the migration to a typed design system, cutting delivery time by 35%.'
        ]
      },
      {
        company: 'Atlas Cloud',
        role: 'Senior Full-Stack Engineer',
        period: '2019 — 2022',
        stack: ['Next.js', 'NestJS', 'Redis Streams', 'PostgreSQL', 'Kubernetes'],
        achievements: [
          'Built realtime analytics for finance with redundant WebSocket channels.',
          'Automated multi-tenant provisioning with IaC and GitHub Actions pipelines.',
          'Reduced API p95 from 400ms to 120ms introducing intelligent caching.'
        ]
      },
      {
        company: 'Futurio Studio',
        role: 'Product Engineer',
        period: '2016 — 2019',
        stack: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
        achievements: [
          'Delivered immersive portfolios for global brands focused on storytelling.',
          'Implemented headless systems with GraphQL and feature flags.',
          'Partnered with designers to align micro-interactions and performance.'
        ]
      }
    ]
  },
  servicesSection: {
    eyebrow: 'Capabilities',
    title: 'Studio services for ambitious companies',
    description:
      'I operate as a boutique software studio for founders, CMOs and ops teams that need premium digital products. Strategy, UX leadership and full-stack engineering stay connected from discovery to long-term care.',
    cards: [
      {
        title: 'Strategy & discovery',
        detail: 'Workshops, roadmaps and governance to translate business goals into a measurable plan.',
        items: ['Product framing', 'Stakeholder alignment', 'Experience workshops']
      },
      {
        title: 'Platform engineering',
        detail: 'Full-stack delivery for immersive dashboards, realtime APIs and secure admin tools.',
        items: ['Full-stack builds', 'Realtime & AI copilots', 'CI/CD + IaC playbooks']
      },
      {
        title: 'Care & growth',
        detail: 'Stay in the loop after launch with observability, experiments and ongoing mentoring.',
        items: ['Observability & alerting', 'Feature flags / AB tests', 'Mentoring & enablement']
      }
    ],
    ctaPrimary: 'Request a proposal',
    ctaSecondary: 'View case studies'
  },
  skills: {
    badge: 'Connected stack',
    title: 'Technologies pulsing in realtime',
    description:
      'Web, realtime and cloud stacks with 24/7 telemetry. The loops below showcase the technologies I keep active everyday.',
    pillars: [
      {
        title: 'Sensorial frontend',
        description: 'Cinematic interfaces with micro-interactions, 3D and accessibility.',
        tools: ['React 19', 'Next.js', 'Three.js', 'Framer Motion']
      },
      {
        title: 'Scale platforms',
        description: 'Typed APIs, queues and realtime data with observability.',
        tools: ['Node.js', 'NestJS', 'Redis Streams', 'Socket.IO']
      },
      {
        title: 'Cloud & automation',
        description: 'CI/CD pipelines, infrastructure as code and continuous monitoring.',
        tools: ['Docker', 'GitHub Actions', 'AWS', 'Grafana/Prometheus']
      }
    ]
  },
  projectsSection: {
    eyebrow: 'Highlights',
    title: 'Production projects',
    description:
      'Real stacks with interactive dashboards, data pipelines and sensorial experiences. Each card summarizes part of the lab I use with clients.',
    cta: 'View all'
  },
  systemStatus: {
    eyebrow: 'Command center',
    title: 'Live platform snapshot',
    description: 'Public endpoints keep these counters synced. Publishing via the admin instantly refreshes the cards below.',
    cards: {
      projects: {
        label: 'Projects online',
        hint: 'Featured case studies'
      },
      blog: {
        label: 'Articles published',
        hint: 'Technical explorations'
      },
      certificates: {
        label: 'Certificates verified',
        hint: 'Credited achievements'
      },
      labs: {
        label: 'Labs active',
        hint: 'Beta modules in the lab'
      }
    },
    cta: 'Open admin panel'
  },
  certificatesSection: {
    eyebrow: 'Continuous learning',
    title: 'Recent certifications',
    description: 'Heavy hitters in AI, cloud and systemic design powering this futuristic portfolio.',
    cta: 'View certificates'
  },
  labsSection: {
    eyebrow: 'Labs beta',
    title: 'Experiments almost ready',
    description: 'Realtime automation, alerting and layout engines baked inside the admin. Opt in to follow the modules you want to test first.',
    cta: 'Notify me',
    subscribed: 'Following',
    actions: {
      toggle: 'Toggle lab',
      learn: 'Learn more'
    }
  },
  blogSection: {
    eyebrow: 'Content',
    title: 'Latest articles',
    description: 'Weekly logs on WebGL experiments, realtime architectures, automation and immersive UX.',
    cta: 'Full blog'
  },
  contactSection: {
    eyebrow: 'Available now',
    headline: 'Ready to build something bold?',
    subheadline: 'Direct email for enterprise builds, automation at scale and critical products.',
    tags: ['Realtime dashboards', 'Design systems', 'AI copilots', 'Workshops'],
    primaryCta: 'Send a message',
    secondaryCta: 'See full portfolio',
    metrics: [
      { label: 'Response SLA', value: '< 2h', detail: 'Average reply window while monitoring is active.' },
      { label: 'Timezone coverage', value: 'LATAM · EU · US', detail: 'Daily sync slots regardless of region.' },
      { label: 'Ops updates', value: 'Weekly', detail: 'Status reports and release notes shipped automatically.' }
    ],
    commitmentsHeading: 'Engagement circuit',
    commitments: [
      {
        title: 'Discovery & briefing',
        detail: 'Collecting goals, KPIs, stakeholders and telemetry requirements before we design anything.'
      },
      {
        title: 'Architecture blueprint',
        detail: 'Infra, hosting, automation and integration plan validated prior to coding.'
      },
      {
        title: 'Realtime QA loop',
        detail: 'Feature flags, preview URLs and CI/CD so every stakeholder can review instantly.'
      },
      {
        title: 'Handoff & care',
        detail: 'Admin access, docs and alert policies stay maintained after delivery.'
      }
    ],
    channels: {
      email: {
        label: 'Email',
        hint: 'Direct inbox monitored 24/7',
        action: 'Copy email'
      },
      social: {
        label: 'Instagram',
        hint: 'DMs open for quick syncs',
        action: 'Open profile'
      }
    },
    status: {
      label: 'Notification mesh',
      message: 'SMTP + admin alerts already configured.',
      detail: 'Each contact form event triggers analytics logs and delivery confirmation.'
    },
    copyState: {
      success: 'Copied!'
    },
    note: 'Equipped with realtime stack, AI tooling and a living design system. Let’s architect something together.'
  },
  settings: {
    label: 'Config',
    title: 'Control center',
    subtitle: 'Tune aesthetics, language and future labs.',
    language: 'Language',
    theme: 'Theme',
    betaLanguages: 'Beta languages',
    beta: 'Soon',
    labsTitle: 'Labs beta',
    labsDescription: 'Experiments almost ready for release.',
    labsItems: {
      alertMatrix: {
        title: 'Realtime alert matrix',
        description: 'No-code rules to broadcast anomalies instantly.',
        status: 'Realtime preview'
      },
      layoutPresets: {
        title: 'Layout presets',
        description: 'Save and recall entire dashboard configurations.',
        status: 'Designer lab'
      },
      aiAutomation: {
        title: 'AI automations',
        description: 'Trigger builds and scripts based on AI insights.',
        status: 'Private beta'
      }
    },
    labsNotify: 'Notify me',
    labsFollowing: 'Following',
    comingSoon: 'Notify me'
  },
  projectsPage: {
    eyebrow: 'Explore',
    title: 'All projects',
    heroTitle: 'Immersive dashboards and real-time labs',
    heroSubtitle: 'Futuristic builds for premium experiences',
    heroDescription: 'Every project merges cinematic UI, resilient APIs and observability. Pick a category to explore the stacks powering this portfolio.',
    searchPlaceholder: 'Search by technology, stack, impact...',
    filterAll: 'All',
    loadError: 'Unable to load projects.',
    views: '{{count}} views',
    liveLink: 'Live project',
    repoLink: 'Repository',
    detailsLink: 'Details',
    galleryButton: 'Gallery',
    galleryHeading: 'Snapshots',
    caseStudy: 'Case study'
  },
  blogPage: {
    eyebrow: 'Insights',
    title: 'Technical blog & field notes',
    subtitle: 'Field reports from launches, experiments, and observability deep dives.',
    searchPlaceholder: 'Search articles...',
    filterAll: 'All',
    loadError: 'Unable to load the blog.',
    readCta: 'Read article',
    stats: {
      total: 'Published',
      readTime: 'Avg. read time',
      topTag: 'Top tag'
    },
    attachment: 'Attachment'
  },
  certificatesPage: {
    eyebrow: 'Growth',
    title: 'Certificates & specializations',
    subtitle: 'Documented achievements, verifiable links, curated skillsets.',
    filterAll: 'All',
    loadError: 'Unable to load certificates.',
    attachment: 'Attachment'
  },
  contactPage: {
    eyebrow: 'Available',
    title: 'Join the next digital immersion',
    description: 'Tell me more about the project, desired stack and goals. I’ll reply within 24h with a tailored proposal.',
    email: 'luizfelippeandrade@outlook.com',
    social: '@luizfelippe.dev',
    placeholders: {
      name: 'Your name',
      email: 'Work email',
      message: 'Describe the challenge, timeline, deliverables...'
    },
    form: {
      companyLabel: 'Company / organization',
      companyPlaceholder: 'Agency, startup, enterprise...',
      serviceLabel: 'Project focus',
      serviceOptions: ['End-to-end build', 'Frontend / product experience', 'Backend & integrations', 'Consulting / mentoring'],
      budgetLabel: 'Budget range',
      budgetPlaceholder: 'e.g. USD 10k - 30k',
      timelineLabel: 'Desired start',
      timelineOptions: ['Immediate (0-1 month)', 'Soon (1-3 months)', 'Planning (3+ months)']
    },
    actions: {
      send: 'Send message',
      sending: 'Sending...'
    },
    feedback: {
      success: 'Message sent. Thank you!',
      error: 'Something went wrong. Try again.'
    }
  },
  admin: {
    auth: {
      eyebrow: 'Admin authentication',
      title: 'Access the panel',
      sessionTitle: 'Session authenticated',
      description: 'Use the credentials configured on the backend to test the login flow. Tokens stay inside httpOnly cookies.',
      sessionDescription: 'You can now see the protected metrics and endpoints.',
      sessionCard: {
        description: 'Session is valid. If data does not refresh automatically, use the button below.'
      },
      placeholders: {
        email: 'admin@domain.com',
        password: 'secure password'
      },
      actions: {
        refresh: 'Refresh metrics',
        logout: 'Sign out',
        authenticating: 'Authenticating...',
        checking: 'Checking session...',
        enter: 'Enter'
      },
      messages: {
        success: 'Login successful! Session cookies configured.',
        error: 'Authentication failed: {{message}}',
        genericError: 'Unable to authenticate.',
        logout: 'Session closed.'
      }
    },
    metrics: {
      labels: {
        projects: 'Published projects',
        certificates: 'Issued certificates',
        posts: 'Published posts',
        requestsPerMinute: 'Requests/min',
        activeUsers: 'Active users',
        uptime: 'Uptime',
        status: 'API status'
      },
      values: {
        syncing: 'Syncing…',
        synced: 'Synced'
      },
      recents: 'Recent activity',
      alertsTitle: 'Realtime alerts',
      alertsActive: '{{count}} listeners online',
      defaults: {
        stats: {
          apis: 'Monitored APIs',
          latency: 'Average latency',
          errors: 'Errors last 24h'
        },
        activity: {
          deploy: 'Deploy v2.3 shipped',
          newsletter: 'Newsletter job scheduled',
          admin: 'New admin added',
          generic: 'Activity recorded',
          twoHours: '2 hours ago',
          fourHours: '4 hours ago',
          yesterday: 'Yesterday',
          now: 'Just now'
        }
      }
    },
    manager: {
      tabs: {
        projects: 'Projects',
        blog: 'Articles',
        certificates: 'Certificates',
        labs: 'Labs beta'
      },
      descriptions: {
        projects: 'Create new case studies, manage featured slots and keep the portfolio fresh.',
        blog: 'Publish technical notes, pin hot topics and keep the log updated.',
        certificates: 'Update achievements and highlight the most relevant badges.',
        labs: 'Launch experiments, update statuses and control the CTAs powering the Labs area.'
      },
      form: {
        title: 'Create new {{resource}}',
        helper: 'Draft content, attach media and publish with one click.'
      },
      resources: {
        projects: 'project',
        blog: 'article',
        certificates: 'certificate',
        labs: 'lab'
      },
      fields: {
        title: 'Title',
        slug: 'Slug',
        description: 'Description',
        category: 'Category',
        liveUrl: 'Live URL',
        repositoryUrl: 'Repository URL',
        technologies: 'Technologies',
        excerpt: 'Excerpt',
        content: 'Content',
        tags: 'Tags',
        categories: 'Categories',
        readTime: 'Read time (min)',
        published: 'Publish immediately',
        featured: 'Pin to highlights',
        issuer: 'Issuing organization',
        issueDate: 'Issue date',
        expiryDate: 'Expiry date',
        level: 'Level',
        skills: 'Related skills',
        credentialId: 'Credential ID',
        credentialUrl: 'Credential URL',
        highlights: 'Highlights',
        metricsStars: 'Stars',
        metricsDownloads: 'Deploys',
        metricsViews: 'Views',
        labStatus: 'Status label',
        icon: 'Icon',
        gradient: 'Gradient',
        ctaUrl: 'CTA URL',
        active: 'Active',
        beta: 'Beta badge'
      },
      placeholders: {
        projectTitle: 'e.g. Holographic platform',
        slug: 'e.g. portfolio-3d',
        projectDescription: 'Impact summary and main stack',
        category: 'e.g. DataViz',
        liveUrl: 'https://project.live',
        repositoryUrl: 'https://github.com/user/repo',
        technologies: 'React, Node, Redis...',
        blogTitle: 'e.g. Orchestrating WebGL with React 19',
        excerpt: 'Short article summary',
        content: 'Markdown or HTML content',
        readTime: '10',
        tags: 'Realtime, WebGL...',
        categories: 'Design system, Architecture...',
        certificateTitle: 'e.g. AWS Data Engineer',
        issuer: 'AWS, Google, Alura...',
        skills: 'Cloud, IaC, Observability...',
        credentialId: 'e.g. ABC-123',
        credentialUrl: 'https://verify.cert/abc',
        highlights: 'Leadership, Multi-cloud...',
        labStatus: 'e.g. Private beta',
        icon: 'activity, grid, cpu...',
        gradient: 'linear-gradient(135deg,#22c55e,#facc15)',
        ctaUrl: 'https://labs.domain.com'
      },
      helpers: {
        tags: 'Separate items with commas.',
        date: 'Pick the date the certificate was issued.'
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
        title: 'Gallery & files',
        helper: 'Upload images, PDFs or MP4 videos to enrich the entry.',
        upload: 'Upload files',
        uploading: 'Uploading...',
        cover: 'Set as cover',
        coverLabel: 'Cover',
        coverPreview: 'Cover preview',
        coverInstruction: 'Tap a card or use the star button to swap the cover.',
        coverCurrent: 'Current cover',
        remove: 'Remove',
        limit: 'Up to {{max}} files.',
        empty: 'No files uploaded yet.',
        errorUpload: 'Upload failed.'
      },
      categories: {
        cloud: 'Cloud',
        frontend: 'Frontend',
        backend: 'Backend',
        design: 'Design',
        data: 'Data',
        devops: 'DevOps',
        softSkills: 'Soft skills',
        other: 'Other'
      },
      levels: {
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced'
      },
      actions: {
        create: 'Publish item',
        delete: 'Delete',
        feature: 'Pin',
        unfeature: 'Unpin',
        reset: 'Reset form'
      },
      summary: {
        total: '{{count}} items',
        refresh: 'Refresh list',
        updating: 'Updating…',
        hint: 'Changes sync instantly with the API.'
      },
      status: {
        featured: 'Pinned',
        noMedia: 'No media'
      },
      messages: {
        created: 'Item published successfully.',
        deleted: 'Item removed.',
        featured: 'Item pinned to highlights.',
        unfeatured: 'Item removed from highlights.',
        empty: 'No items registered yet.',
        error: 'Unable to complete the action.'
      }
    }
  }
};

export default en;
