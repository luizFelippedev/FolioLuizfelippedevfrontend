import en from './en';

type LocaleShape = typeof en;

const it: LocaleShape = {
  ...en,
  common: {
    ...en.common,
    nav: {
      home: 'Inizio',
      projects: 'Progetti',
      certificates: 'Certificati',
      blog: 'Blog',
      contact: 'Contatti',
      faq: 'FAQ'
    },
    logoAlt: 'Logo del portfolio di Luiz Felippe',
    menu: 'Menu',
    close: 'Chiudi',
    states: {
      loading: 'Caricamento…',
      error: 'Impossibile recuperare i dati.',
      empty: 'Non ci sono ancora elementi qui.',
      updating: '· aggiornamento…'
    },
    pagination: {
      previous: '← Precedente',
      next: 'Successiva →',
      page: 'Pagina {{page}}'
    },
    footer: {
      title: 'Portfolio futuristico',
      description: 'Realizzato con React, Three.js, Tailwind e molto caffè.',
      badge: 'Sempre in beta ∞',
      ctaTitle: 'Pronti per il prossimo release?',
      ctaSubtitle: 'Pipeline, observability e interfacce immersive sincronizzate 24/7.',
      primaryCta: 'Parla con Luiz',
      secondaryCta: 'Apri l’admin',
      linksTitle: 'Link rapidi',
      links: {
        projects: 'Progetti',
        labs: 'Labs beta',
        admin: 'Dashboard admin',
        faq: 'FAQ',
        terms: 'Termini',
        privacy: 'Privacy'
      },
      signature: 'Sviluppato da Luiz Felippe',
      rights: 'Tutti i diritti riservati.',
      stats: {
        uptime: 'Disponibilità',
        deployments: 'Deploy (trimestre)',
        automations: 'Automazioni / mese'
      }
    }
  },
  hero: {
    subtitle: 'Studio indipendente',
    badges: ['Studente di Ingegneria del Software', 'Studio indipendente', 'Sistemi realtime'],
    title: {
      prefix: 'Costruisco piattaforme premium che',
      highlight: 'sembrano vive ai tuoi clienti'
    },
    description:
      'Studio boutique che fonde UI cinematografica, dati realtime e infrastruttura resiliente. Collaboro con marketing, prodotto e operations per lanciare esperienze con impatto misurabile, observability nativa e care automatizzato.',
    highlights: [
      {
        title: 'Full-stack avanzato',
        description: 'React, Three.js e Node alimentano app ricche e responsive.'
      },
      {
        title: 'Sistemi realtime',
        description: 'WebSockets, pipeline analytics e strumentazione completa.'
      },
      {
        title: 'Qualità & DX',
        description: 'CI/CD, test automatici e documentazione essenziale.'
      }
    ],
    stats: [
      { value: '48+', label: 'Progetti immersivi', detail: 'Dashboard 3D & app realtime' },
      { value: '120k+', label: 'Automazioni', detail: 'Eventi monitorati al mese' },
      { value: '120 ms', label: 'Latenza media', detail: 'Chat & notifiche WebSocket' }
    ]
  },
  cta: {
    primary: 'Esplora i progetti',
    secondary: 'Parliamo ora'
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Come collaboro con le aziende',
    subtitle: 'Risposte chiare su ingaggio, tempi, stack e supporto post-rilascio.',
    items: [
      {
        icon: 'engagement',
        question: 'Come parte la collaborazione?',
        answer:
          'Progetto a forfait (scope definito) o ingegneria frazionale. Sempre un discovery iniziale per allineare obiettivi, rischi e metriche di successo.'
      },
      {
        icon: 'timeline',
        question: 'Tempi tipici?',
        answer:
          'Un MVP richiede di solito 4–8 settimane; integrazioni ed evoluzioni seguono sprint quindicinali con demo e consegne visibili.'
      },
      {
        icon: 'stack',
        question: 'Che stack utilizzo?',
        answer:
          'Front: React/Next, Vite, Tailwind, Three/Framer. Back: Node/Nest, REST/GraphQL, Redis, Postgres/Mongo. Cloud: AWS/GCP/Cloudflare, CI/CD con GitHub Actions.'
      },
      {
        icon: 'support',
        question: 'Supporto post-rilascio?',
        answer:
          'Handoff con documentazione, playbook incident e monitoraggio base (log/alert). Possibile piano di evoluzione/hotfix con ore mensili.'
      },
      {
        icon: 'contact',
        question: 'Come valutare il mio lavoro?',
        answer:
          'Demo, admin protetto, changelog e metriche pubbliche (uptime, deploy). Su richiesta, walkthrough con gli stakeholder.'
      }
    ]
  },
  termsPage: {
    eyebrow: 'Termini',
    title: 'Termini di utilizzo',
    subtitle: 'Linee guida per usare il portfolio e accedere a demo/admin.',
    intro:
      "Usando il sito accetti di rispettare l'IP e non abusare di demo o endpoint protetti.",
    items: {
      scope: 'Contenuti e asset sono solo per presentazione/valutazione.',
      rights: 'Trademarks, codice e media di Luiz Felippe salvo nota diversa.',
      usage: 'Nessuna redistribuzione o copia senza permesso.',
      liability: 'Nessuna garanzia; uso di demo/API a tuo rischio.',
      changes: 'I termini possono cambiare; uso continuato implica accettazione.'
    },
    outro: 'Per permessi speciali o partnership, contattami direttamente.'
  },
  privacyPage: {
    eyebrow: 'Privacy',
    title: 'Privacy & Dati',
    subtitle: 'Come tratto i dati raccolti via form o analytics.',
    intro: 'Raccolgo solo il necessario per rispondere e migliorare la UX.',
    items: {
      data: 'I dati di contatto (nome/email/messaggio) servono solo per il follow-up.',
      cookies: 'Cookie opzionali per lingua/tema e metriche di utilizzo.',
      security: 'Le aree admin richiedono login; dati sensibili non sono esposti pubblicamente.',
      sharing: 'Non vendo né condivido dati, se non con provider (email/infra) per questo sito.',
      contact: 'Puoi chiedere la cancellazione o export dei tuoi invii in qualsiasi momento.'
    },
    outro: 'Dubbi? Scrivimi e chiarisco ogni tema di privacy.'
  },
  about: {
    ...en.about,
    badge: 'DNA dello studio',
    title: 'Strategia, design e ingegneria allineati ai risultati',
    description:
      'Gestisco una practice solo ad alto coinvolgimento che opera come una squad embedded: discovery, framing, blueprint architetturale, design immersivo e delivery rigorosa. Ogni incarico termina con documentazione, playbook di handoff e dashboard vivi.',
    chips: ['Leadership frazionata', 'Ponte design + engineering', 'Studente di Ingegneria del Software'],
    highlights: [
      {
        title: 'Studi in Ingegneria del Software',
        description:
          'Percorso universitario focalizzato su architetture, sistemi data-intensive e leadership UX. I project work accademici alimentano direttamente gli engagement del mio studio.',
        metrics: 'Percorso universitario in corso'
      },
      {
        title: 'Stack a strati',
        description: 'Micro-frontend, Node/Nest, code e grafici realtime lavorano insieme.',
        metrics: '15 stack produttive'
      },
      {
        title: 'Observability & DX',
        description: 'Tracing, log strutturati e QA automation, tutto versionato.',
        metrics: '120k+ eventi monitorati/mese'
      },
      {
        title: 'Mentorship & leadership',
        description: 'Ho guidato squadre e formato devs in programmi intensivi.',
        metrics: '60+ mentorship erogate'
      }
    ]
  },
  experience: {
    ...en.experience,
    badge: 'Esperienza',
    title: 'Timeline professionale',
    description: 'Prodotto, architettura, leadership e mentoring in più mercati.',
    items: en.experience.items.map((item) => ({ ...item }))
  },
  servicesSection: {
    eyebrow: 'Servizi',
    title: 'Servizi di studio per brand ambiziosi',
    description:
      'Opero come studio boutique per founder, CMO e ops che cercano prodotti digitali premium. Strategia, leadership UX e ingegneria full-stack restano connesse dal discovery alla cura continua.',
    cards: [
      {
        title: 'Strategia & discovery',
        detail: 'Workshop, roadmap e governance per tradurre gli obiettivi in un piano misurabile.',
        items: ['Product framing', 'Allineamento stakeholder', 'Workshop di esperienza']
      },
      {
        title: 'Ingegneria di piattaforma',
        detail: 'Delivery full-stack di dashboard immersivi, API realtime e admin sicuri.',
        items: ['Full-stack builds', 'Realtime & copiloti IA', 'Playbook CI/CD + IaC']
      },
      {
        title: 'Care & growth',
        detail: 'Resto vicino dopo il lancio con observability, esperimenti e mentoring.',
        items: ['Observability & alerting', 'Feature flags / test A/B', 'Mentoring & enablement']
      }
    ],
    ctaPrimary: 'Richiedi una proposta',
    ctaSecondary: 'Guarda i case study'
  },
  skills: {
    ...en.skills,
    badge: 'Stack connesso',
    title: 'Tecnologie in tempo reale',
    description:
      'Stack web, realtime e cloud con telemetria 24/7. I loop mostrano le tecnologie che mantengo attive ogni giorno.',
    pillars: [
      {
        title: 'Frontend sensoriale',
        description: 'Interfacce cinematografiche con micro-interazioni, 3D e accessibilità.',
        tools: ['React 19', 'Next.js', 'Three.js', 'Framer Motion']
      },
      {
        title: 'Piattaforme scalabili',
        description: 'API tipizzate, queue e dati realtime con observability.',
        tools: ['Node.js', 'NestJS', 'Redis Streams', 'Socket.IO']
      },
      {
        title: 'Cloud & automazione',
        description: 'Pipeline CI/CD, IaC e monitoraggio continuo.',
        tools: ['Docker', 'GitHub Actions', 'AWS', 'Grafana/Prometheus']
      }
    ]
  },
  projectsSection: {
    eyebrow: 'In evidenza',
    title: 'Progetti live',
    description: 'Dashboard interattive, pipeline dati ed esperienze sensoriali. Ogni card racconta una parte del mio laboratorio.',
    cta: 'Vedi tutto'
  },
  systemStatus: {
    eyebrow: 'Centro di comando',
    title: 'Snapshot della piattaforma',
    description: 'Endpoint pubblici mantengono questi contatori aggiornati. Pubblica dal pannello admin e tutto si sincronizza.',
    cards: {
      projects: { label: 'Progetti online', hint: 'Case study in evidenza' },
      blog: { label: 'Articoli pubblicati', hint: 'Exploit tecnici' },
      certificates: { label: 'Certificati verificati', hint: 'Risultati validati' },
      labs: { label: 'Labs attivi', hint: 'Moduli beta in corso' }
    },
    cta: 'Apri admin'
  },
  certificatesSection: {
    eyebrow: 'Formazione continua',
    title: 'Certificazioni recenti',
    description: 'Heavy hitter in AI, cloud e design sistemico che alimentano questo portfolio.',
    cta: 'Vedi certificati'
  },
  labsSection: {
    eyebrow: 'Labs beta',
    title: 'Esperimenti quasi pronti',
    description: 'Automazione realtime, alerting e motore layout direttamente nell’admin. Segui i moduli che vuoi provare.',
    cta: 'Avvisami',
    subscribed: 'Seguito',
    actions: {
      toggle: 'Attiva lab',
      learn: 'Scopri di più'
    }
  },
  blogSection: {
    eyebrow: 'Contenuti',
    title: 'Ultimi articoli',
    description: 'Log settimanali su WebGL, architetture realtime, automazione e UX immersiva.',
    cta: 'Vai al blog'
  },
  contactSection: {
    eyebrow: 'Disponibile ora',
    headline: 'Pronto a creare qualcosa di audace?',
    subheadline: 'Contatto diretto via email per progetti enterprise, automazione su scala e prodotti critici.',
    tags: ['Dashboard realtime', 'Design systems', 'Copiloti IA', 'Workshop'],
    primaryCta: 'Invia messaggio',
    secondaryCta: 'Portfolio completo',
    metrics: [
      { label: 'SLA di risposta', value: '< 2h', detail: 'Finestra media con monitoraggio attivo.' },
      { label: 'Fusi coperti', value: 'LATAM · EU · US', detail: 'Slot giornalieri indipendentemente dal paese.' },
      { label: 'Aggiornamenti stack', value: 'Settimanali', detail: 'Report di stato e release notes automatici.' }
    ],
    commitmentsHeading: 'Percorso di ingaggio',
    commitments: [
      {
        title: 'Discovery & briefing',
        detail: 'Obiettivi, KPI, stakeholder e telemetria prima del design.'
      },
      {
        title: 'Blueprint architetturale',
        detail: 'Infra, hosting, automazioni e integrazioni approvate prima del codice.'
      },
      {
        title: 'Loop QA realtime',
        detail: 'Feature flag, link di preview e CI/CD per feedback immediato.'
      },
      {
        title: 'Handoff & supporto',
        detail: 'Accesso admin, documentazione e policy di alert mantenuti anche dopo.'
      }
    ],
    channels: {
      email: {
        label: 'Email',
        hint: 'Inbox diretta monitorata 24/7',
        action: 'Copia email'
      },
      social: {
        label: 'Instagram',
        hint: 'DM aperti per sync rapidi',
        action: 'Apri profilo'
      }
    },
    status: {
      label: 'Rete di notifiche',
      message: 'SMTP + alert nel pannello già configurati.',
      detail: 'Ogni invio genera log analytics e conferma di consegna.'
    },
    copyState: {
      success: 'Copiato!'
    },
    note: 'Stack realtime, strumenti AI e design system vivo pronti per il prossimo progetto.'
  },
  settings: {
    ...en.settings,
    label: 'Impostazioni',
    title: 'Control center',
    subtitle: 'Regola lingua, temi e labs.',
    language: 'Lingua',
    theme: 'Tema',
    betaLanguages: 'Lingue beta',
    beta: 'Presto',
    labsNotify: 'Avvisami',
    labsFollowing: 'Seguito',
    comingSoon: 'In arrivo'
  },
  projectsPage: {
    ...en.projectsPage,
    eyebrow: 'Esplora',
    title: 'Tutti i progetti',
    heroTitle: 'Dashboard immersive e labs realtime',
    heroSubtitle: 'Costruzioni futuristiche per esperienze premium',
    heroDescription: 'Ogni progetto unisce UI cinematografica, API resilienti e observability.',
    searchPlaceholder: 'Cerca per tecnologia, stack, impatto…',
    filterAll: 'Tutti',
    loadError: 'Impossibile caricare i progetti.',
    views: '{{count}} visualizzazioni',
    liveLink: 'Live',
    repoLink: 'Repository',
    detailsLink: 'Dettagli',
    galleryButton: 'Galleria',
    galleryHeading: 'Snapshots',
    caseStudy: 'Case study'
  },
  blogPage: {
    ...en.blogPage,
    eyebrow: 'Insights',
    title: 'Blog tecnico & field notes',
    subtitle: 'Report settimanali su lanci, esperimenti e observability.',
    searchPlaceholder: 'Cerca articoli…',
    filterAll: 'Tutti',
    loadError: 'Impossibile caricare il blog.',
    readCta: 'Leggi l’articolo',
    stats: {
      total: 'Pubblicati',
      readTime: 'Tempo medio',
      topTag: 'Tag top'
    },
    attachment: 'Allegato'
  },
  certificatesPage: {
    ...en.certificatesPage,
    eyebrow: 'Crescita',
    title: 'Certificati & specializzazioni',
    subtitle: 'Achievement documentati e link verificabili.',
    filterAll: 'Tutti',
    loadError: 'Impossibile caricare i certificati.',
    attachment: 'Allegato'
  },
  contactPage: {
    ...en.contactPage,
    eyebrow: 'Disponibile',
    title: 'Costruiamo la prossima immersione digitale',
    description: 'Raccontami sfida, stack e obiettivi. Rispondo entro 24h con una proposta su misura.',
    placeholders: {
      name: 'Il tuo nome',
      email: 'Email di lavoro',
      message: 'Descrivi sfida, timeline, deliverable…'
    },
    form: {
      companyLabel: 'Azienda / organizzazione',
      companyPlaceholder: 'Agenzia, startup, enterprise...',
      serviceLabel: 'Focus del progetto',
      serviceOptions: ['Delivery end-to-end', 'Esperienza / Frontend', 'Backend & integrazioni', 'Consulenza / mentoring'],
      budgetLabel: 'Budget stimato',
      budgetPlaceholder: 'es. 10k€ - 30k€',
      timelineLabel: 'Avvio desiderato',
      timelineOptions: ['Immediato (0-1 mese)', 'A breve (1-3 mesi)', 'Pianificazione (3+ mesi)']
    },
    actions: {
      send: 'Invia messaggio',
      sending: 'Invio…'
    },
    feedback: {
      success: 'Messaggio inviato. Grazie!',
      error: 'Qualcosa è andato storto. Riprova.'
    }
  }
  patchNotes: {
    ...en.patchNotes,
    headline: 'PatchNotes - miglioramenti di performance e UI.',
    summary:
      'Abbiamo raffinato l esperienza desktop/mobile, migliorato la reattivita, aggiunto un avviso di manutenzione mobile e regolato il flusso di caricamento.',
    highlights: [
      'Nuova barra di avviso mobile con chiusura e persistenza.',
      'Banner flottante piu leggero e reattivo.',
      'Regolazioni di contrasto per modalita chiaro/scuro.'
    ],
    changes: [
      'Home: sfondo animato e gradienti ottimizzati per ridurre l uso della GPU.',
      'UI: componenti ora usano variabili di colore del tema per mantenere il contrasto in ogni modalita.',
      'Layout: banner mobile con CTA ai patch notes, migliore risposta sui breakpoint piccoli.',
      'Accessibilita: focus visibile su CTA e bottone di chiusura dell avviso.'
    ],
    fixes: [
      'Risolto l overlap del bottone X nell avviso mobile.',
      'Tipografia corretta per evitare caratteri rotti in manutencao.',
      'Ombre delle card ammorbidite per evitare clipping su schermi piccoli.'
    ],
    next: [
      'Abilitare dark/light automatico secondo la preferenza di sistema.',
      'Aggiungere card di stato uptime in tempo reale.',
      'Pubblicare style guide per componenti interattivi.',
      'Ripensare tutto il frontend mobile-first con accessibilita completa e navigazione semplice.'
    ]
  }
};

export default it;
