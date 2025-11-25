const fr = {
  common: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      certificates: 'Certificats',
      blog: 'Blog',
      contact: 'Contact',
      faq: 'FAQ'
    },
    logoAlt: 'Logo du portfolio de Luiz Felippe',
    menu: 'Menu',
    close: 'Fermer',
    states: {
      loading: 'Chargement...',
      error: 'Impossible de récupérer les données.',
      empty: 'Rien à afficher pour le moment.',
      updating: '· mise à jour…'
    },
    pagination: {
      previous: '← Précédent',
      next: 'Suivant →',
      page: 'Page {{page}}'
    },
    footer: {
      title: 'Portfolio Futuriste',
      description: 'Construit avec React, Three.js, Tailwind et beaucoup de café.',
      badge: 'Toujours en beta ∞',
      ctaTitle: 'Prêt pour la prochaine release ?',
      ctaSubtitle: 'Pipelines, observabilité et interfaces immersives synchronisées 24/7.',
      primaryCta: 'Parler à Luiz',
      secondaryCta: 'Ouvrir l’admin',
      linksTitle: 'Liens rapides',
      links: {
        projects: 'Projets',
        labs: 'Labs beta',
        admin: 'Dashboard admin'
      },
      signature: 'Développé par Luiz Felippe',
      rights: 'Tous droits réservés.',
      stats: {
        uptime: 'Disponibilité',
        deployments: 'Déploiements (trimestre)',
        automations: 'Automatisations / mois'
      }
    }
  },
  hero: {
    subtitle: 'Studio indépendant',
    badges: ['Étudiant en ingénierie logicielle', 'Studio indépendant', 'Systèmes temps réel'],
    title: {
      prefix: 'Je conçois des plateformes premium qui',
      highlight: 'semblent vivantes pour vos clients'
    },
    description:
      'Studio boutique mêlant UI cinématographique, données temps réel et infrastructure résiliente. J’accompagne marketing, produit et opérations pour lancer des expériences à impact mesurable, observabilité native et care automatisé.',
    highlights: [
      { title: 'Full-stack expert', description: 'React, Three.js et Node pour des apps riches et réactives.' },
      { title: 'Temps réel', description: 'WebSockets, pipelines analytiques et instrumentation complète.' },
      { title: 'Qualité & DX', description: 'CI/CD, tests automatisés et documentation ciblée.' }
    ],
    stats: [
      { value: '48+', label: 'Projets immersifs', detail: 'Dashboards 3D & apps realtime' },
      { value: '120k+', label: 'Automatisations', detail: 'Événements observés par mois' },
      { value: '120ms', label: 'Latence moyenne', detail: 'Chats & notifications WebSocket' }
    ]
  },
  cta: {
    primary: 'Explorer les projets',
    secondary: 'Discuter maintenant'
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Ma façon de travailler avec les entreprises',
    subtitle: 'Réponses claires sur l’engagement, les délais, la stack et le support post-livraison.',
    items: [
      {
        icon: 'engagement',
        question: 'Comment démarre une mission ?',
        answer:
          'Mission au forfait (périmètre fixé) ou leadership fractionné. On commence toujours par un discovery pour aligner objectifs, risques et métriques de succès.'
      },
      {
        icon: 'timeline',
        question: 'Quels délais typiques ?',
        answer:
          'Un MVP prend souvent 4–8 semaines ; les intégrations/évolutions suivent un rythme bi-hebdomadaire avec démos et livrables visibles à chaque sprint.'
      },
      {
        icon: 'stack',
        question: 'Quelle stack ?',
        answer:
          'Front : React/Next, Vite, Tailwind, Three/Framer. Back : Node/Nest, REST/GraphQL, Redis, Postgres/Mongo. Cloud : AWS/GCP/Cloudflare, CI/CD via GitHub Actions.'
      },
      {
        icon: 'support',
        question: 'Et le support post-release ?',
        answer:
          'Handoff avec documentation, playbooks d’incident et monitoring de base (logs/alertes). Plan d’évolution et hotfix possible sur quota horaire mensuel.'
      },
      {
        icon: 'contact',
        question: 'Comment évaluer mon travail ?',
        answer:
          'Démos, admin sécurisé, changelogs et métriques publiques (uptime, déploiements). Walkthrough possible avec les parties prenantes.'
      }
    ]
  },
  about: {
    badge: 'ADN du studio',
    title: 'Stratégie, design et engineering orientés résultats',
    description:
      'Je mène une pratique solo très impliquée qui agit comme squad embarquée : discovery, framing, blueprint d’architecture, design immersif et delivery rigoureuse. Chaque mission se clôt avec documentation, playbooks de handoff et dashboards vivants.',
    chips: ['Leadership fractionné', 'Pont design + engineering', 'Études d’ingénierie logicielle'],
    highlights: [
      {
        title: 'Études d’ingénierie logicielle',
        description:
          'Licence en ingénierie logicielle axée sur l’architecture, les systèmes data-intensive et le leadership UX. Les projets académiques nourrissent les livrables du studio.',
        metrics: 'Licence en cours'
      },
      {
        title: 'Stack en couches',
        description: 'Expérience des micro front-ends, Node/Nest, files et graphes temps réel.',
        metrics: '15 stacks productives'
      },
      {
        title: 'Observabilité & DX',
        description: 'Tracing, logs structurés et automatisation QA, tout versionné.',
        metrics: '120k+ événements surveillés/mois'
      },
      {
        title: 'Mentorat & leadership',
        description: 'Coaching de squads et formation de devs avec exigence de qualité.',
        metrics: '60+ mentorats réalisés'
      }
    ]
  },
  experience: {
    badge: 'Expérience',
    title: 'Parcours professionnel',
    description: 'Produit, architecture, leadership et mentorat dans plusieurs secteurs.',
    items: [
      {
        company: 'Nebula Labs',
        role: 'Staff Software Engineer · DataViz',
        period: '2022 — actuel',
        stack: ['React 19', 'Three.js', 'Node.js', 'Kafka', 'AWS'],
        achievements: [
          'Création de dashboards 3D et de panels responsives alimentés en streaming.',
          'Mise en place de pipelines de télémétrie avec Grafana/Prometheus et alertes smart.',
          'Direction de la migration vers un design system typé (-35% sur le time-to-ship).'
        ]
      },
      {
        company: 'Atlas Cloud',
        role: 'Senior Full-Stack Engineer',
        period: '2019 — 2022',
        stack: ['Next.js', 'NestJS', 'Redis Streams', 'PostgreSQL', 'Kubernetes'],
        achievements: [
          'Expériences realtime pour la finance avec WebSockets redondants.',
          'Automatisation du provisioning multi-tenant via IaC et pipelines GitHub Actions.',
          'Optimisation d’APIs de 400ms à 120ms p95 grâce au cache intelligent.'
        ]
      },
      {
        company: 'Futurio Studio',
        role: 'Product Engineer',
        period: '2016 — 2019',
        stack: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
        achievements: [
          'Portfolios interactifs pour des marques globales centrés sur le storytelling.',
          'Systèmes headless avec GraphQL et feature flags.',
          'Travail main dans la main avec le design pour aligner micro-interactions et perf.'
        ]
      }
    ]
  },
  servicesSection: {
    eyebrow: 'Services',
    title: 'Services du studio pour entreprises ambitieuses',
    description:
      'J’opère comme studio boutique pour fondateurs, CMOs et équipes ops qui exigent des produits digitaux premium. Stratégie, leadership UX et engineering full-stack restent alignés du discovery au care continu.',
    cards: [
      {
        title: 'Stratégie & discovery',
        detail: 'Workshops, roadmap et gouvernance pour traduire les objectifs business en plan mesurable.',
        items: ['Product framing', 'Alignement stakeholders', 'Workshops expérience']
      },
      {
        title: 'Engineering de plateforme',
        detail: 'Delivery full-stack de dashboards immersifs, APIs temps réel et back-offices sécurisés.',
        items: ['Full-stack builds', 'Realtime copilotes', 'Playbooks CI/CD + IaC']
      },
      {
        title: 'Care & growth',
        detail: 'Présence après lancement via observabilité, expérimentations et mentoring.',
        items: ['Observabilité & alertes', 'Feature flags / AB tests', 'Mentoring & enablement']
      }
    ],
    ctaPrimary: 'Demander une proposition',
    ctaSecondary: 'Voir les cas'
  },
  skills: {
    badge: 'Stack connecté',
    title: 'Technos qui vibrent en temps réel',
    description:
      'Stacks web, realtime et cloud avec télémétrie 24/7. Les boucles montrent les technos que j’active chaque jour.',
    pillars: [
      {
        title: 'frontend sensoriel',
        description: 'Interfaces cinématographiques, micro-interactions, 3D et accessibilité.',
        tools: ['React 19', 'Next.js', 'Three.js', 'Framer Motion']
      },
      {
        title: 'plates-formes scalables',
        description: 'APIs typées, files et données temps réel avec observabilité.',
        tools: ['Node.js', 'NestJS', 'Redis Streams', 'Socket.IO']
      },
      {
        title: 'cloud & automation',
        description: 'CI/CD, infrastructure as code et monitoring continu.',
        tools: ['Docker', 'GitHub Actions', 'AWS', 'Grafana/Prometheus']
      }
    ]
  },
  projectsSection: {
    eyebrow: 'Mises en avant',
    title: 'Projets en production',
    description:
      'Stacks réelles avec dashboards interactifs, pipelines de données et expériences sensorielles. Chaque carte résume une pièce du labo.',
    cta: 'Voir tout'
  },
  systemStatus: {
    eyebrow: 'Centre de commande',
    title: 'Instantané de la plateforme',
    description: 'Des endpoints publics maintiennent ces compteurs à jour. Chaque publication via l’admin rafraîchit les cartes ci-dessous.',
    cards: {
      projects: {
        label: 'Projets en ligne',
        hint: 'Cas d’étude en vedette'
      },
      blog: {
        label: 'Articles publiés',
        hint: 'Explorations techniques'
      },
      certificates: {
        label: 'Certificats vérifiés',
        hint: 'Succès validés'
      },
      labs: {
        label: 'Labs actifs',
        hint: 'Modules beta en cours'
      }
    },
    cta: 'Ouvrir l’admin'
  },
  certificatesSection: {
    eyebrow: 'Formation continue',
    title: 'Certifications récentes',
    description: 'References en cloud et design systemique qui alimentent ce portfolio futuriste.',
    cta: 'Voir les certificats'
  },
  labsSection: {
    eyebrow: 'Labs beta',
    title: 'Expériences presque prêtes',
    description: 'Automatisation temps réel, alertes et moteur de layouts intégrés dans l’admin. Suivez les modules que vous voulez tester en priorité.',
    cta: 'Prévenez-moi',
    subscribed: 'Suivi',
    actions: {
      toggle: 'Activer le lab',
      learn: 'En savoir plus'
    }
  },
  blogSection: {
    eyebrow: 'Contenu',
    title: 'Derniers articles',
    description: 'Logs hebdo sur WebGL, architectures realtime, automatisation et UX immersive.',
    cta: 'Blog complet'
  },
    contactSection: {
    eyebrow: "Disponible maintenant",
    headline: "On construit quelque chose de fou ?",
    subheadline: "Contact direct par e-mail pour projets enterprise, automatisation a l'echelle et produits critiques.",
    responseBadge: "Repond en <2h",
    chips: ["Contact direct", "Projets enterprise", "Reponse rapide", "Design system vivant"],
    quickCards: [
      {
        title: "Architecture prete a scaler.",
        detail: "Sprints courts, automatisation forte et focus disponibilite."
      },
      {
        title: "Code et design alignes.",
        detail: "UI, design systems, observabilite et contenu synchronises."
      }
    ],
    tags: ["Dashboards temps reel", "Design systems", "Copilotes realtime", "Ateliers"],
    primaryCta: "Envoyer un message",
    secondaryCta: "Voir tout le portfolio",
    metrics: [
      { label: "SLA de reponse", value: "< 2h", detail: "Fenetre moyenne quand la surveillance est active." },
      { label: "Fuseaux couverts", value: "LATAM | EU | US", detail: "Creneaux quotidiens peu importe la region." },
      { label: "Mises a jour ops", value: "Hebdomadaire", detail: "Rapports de statut et release notes automatiques." }
    ],
    commitmentsHeading: "Circuit d'engagement",
    commitments: [
      {
        title: "Discovery & briefing",
        detail: "Objectifs, KPIs, parties prenantes et telemetrie avant le design."
      },
      {
        title: "Blueprint d'architecture",
        detail: "Infra, hebergement, automatisation et integrations valides avant le code."
      },
      {
        title: "Boucle QA temps reel",
        detail: "Feature flags, previews et CI/CD pour des revues instantanees."
      },
      {
        title: "Handoff & suivi",
        detail: "Acces admin, docs et politiques d'alertes maintenus apres livraison."
      }
    ],
    personal: {
      title: 'Luiz repond en personne.',
      detail: 'Pas de file ni bot; ton email ou DM arrive directement chez moi.',
      cta: 'Dire bonjour'
    },
    channels: {
      email: {
        label: "Email",
        hint: "Boite directe surveillee 24/7",
        action: "Copier l'email"
      },
      social: {
        label: "Instagram",
        hint: "DM ouvertes pour sync rapides",
        action: "Ouvrir le profil"
      }
    },
    status: {
      label: "Maille de notifications",
      message: "SMTP + alertes admin deja configures.",
      detail: "Chaque contact declenche logs analytics et confirmation de livraison."
    },
    copyState: {
      success: "Copie !"
    },
    note: "Stack temps reel et design system vivant prets. Construisons ensemble."
  },
  settings: {
    label: 'Réglages',
    title: 'Centre de contrôle',
    subtitle: 'Ajustez langue, thèmes et futurs labs.',
    language: 'Langue',
    theme: 'Thème',
    betaLanguages: 'Langues beta',
    beta: 'Bientôt',
    labsTitle: 'Labs beta',
    labsDescription: 'Expériences presque prêtes à être livrées.',
    labsItems: {
      alertMatrix: {
        title: 'Matrice d’alertes realtime',
        description: 'Règles no-code pour diffuser les anomalies instantanément.',
        status: 'Aperçu temps réel'
      },
      layoutPresets: {
        title: 'Presets de layout',
        description: 'Enregistrez et rappelez des configurations complètes de dashboards.',
        status: 'Laboratoire design'
      },
      aiAutomation: {
        title: 'Automations avancees',
        description: 'Déclenchez builds et scripts basés sur les signaux telemetry.',
        status: 'Beta privée'
      }
    },
    labsNotify: 'Prévenez-moi',
    labsFollowing: 'Suivi',
    comingSoon: 'Prévenez-moi'
  },
  projectsPage: {
    eyebrow: 'Explorer',
    title: 'Tous les projets',
    heroTitle: 'Dashboards immersifs et labs temps réel',
    heroSubtitle: 'Constructions futuristes pour expériences premium',
    heroDescription: 'Chaque projet marie UI cinématographique, APIs résilientes et observabilité. Choisissez une catégorie pour explorer les stacks du portfolio.',
    searchPlaceholder: 'Rechercher par techno, stack, impact...',
    filterAll: 'Tous',
    loadError: 'Impossible de charger les projets.',
    views: '{{count}} vues',
    liveLink: 'Projet en ligne',
    repoLink: 'Dépôt',
    detailsLink: 'Détails',
    galleryButton: 'Galerie',
    galleryHeading: 'Captures',
    caseStudy: 'Étude de cas'
  },
  blogPage: {
    eyebrow: 'Insights',
    title: 'Blog technique et carnet de bord',
    subtitle: 'Carnets de lancement, expériences et observabilité appliquée.',
    searchPlaceholder: 'Rechercher des articles...',
    filterAll: 'Tous',
    loadError: 'Impossible de charger le blog.',
    readCta: 'Lire l’article',
    stats: {
      total: 'Publiés',
      readTime: 'Temps moyen',
      topTag: 'Tag dominant'
    },
    attachment: 'Pièce jointe'
  },
  certificatesPage: {
    eyebrow: 'Évolution',
    title: 'Certificats & spécialisations',
    subtitle: 'Succès vérifiables, liens officiels et compétences tracées.',
    filterAll: 'Tous',
    loadError: 'Erreur lors du chargement des certificats.',
    attachment: 'Pièce jointe'
  },
  contactPage: {
    eyebrow: 'Disponible',
    title: 'Rejoignez la prochaine immersion digitale',
    description: 'Parlez-moi du projet, de la stack souhaitée et des objectifs. Réponse en 24h avec une proposition sur-mesure.',
    email: 'luizfelippeandrade@outlook.com',
    social: '@luizfelippe.dev',
    placeholders: {
      name: 'Votre nom',
      email: 'Email professionnel',
      message: 'Décrivez le challenge, les délais, les livrables...'
    },
    form: {
      companyLabel: 'Entreprise / organisation',
      companyPlaceholder: 'Agence, startup, enterprise...',
      serviceLabel: 'Focalisation du projet',
      serviceOptions: ['Delivery end-to-end', 'Expérience / Frontend', 'Backend & intégrations', 'Conseil / mentoring'],
      budgetLabel: 'Budget estimé',
      budgetPlaceholder: 'ex. 10k€ - 30k€',
      timelineLabel: 'Démarrage souhaité',
      timelineOptions: ['Immédiat (0-1 mois)', 'Prochain cycle (1-3 mois)', 'Planification (3+ mois)']
    },
    actions: {
      send: 'Envoyer',
      sending: 'Envoi...'
    },
    feedback: {
      success: 'Message envoyé. Merci !',
      error: 'Une erreur est survenue. Réessayez.'
    }
  },
  admin: {
    auth: {
      eyebrow: 'Authentification admin',
      title: 'Entrer dans le panneau',
      sessionTitle: 'Session authentifiée',
      description: 'Utilisez l’email et le mot de passe configurés côté backend. Les tokens restent dans des cookies httpOnly.',
      sessionDescription: 'Les métriques protégées sont accessibles.',
      sessionCard: {
        description: 'Session active. Rafraîchissez les données si nécessaire.'
      },
      placeholders: {
        email: 'admin@domain.com',
        password: 'mot de passe sécurisé'
      },
      actions: {
        refresh: 'Rafraîchir les métriques',
        logout: 'Déconnexion',
        authenticating: 'Authentification...',
        checking: 'Vérification...',
        enter: 'Entrer'
      },
      messages: {
        success: 'Connexion réussie. Cookies configurés.',
        error: 'Erreur d’authentification : {{message}}',
        genericError: 'Impossible de se connecter.',
        logout: 'Session terminée.'
      }
    },
    metrics: {
      labels: {
        projects: 'Projets publiés',
        certificates: 'Certificats émis',
        posts: 'Articles publiés',
        requestsPerMinute: 'Requêtes/min',
        activeUsers: 'Utilisateurs actifs',
        uptime: 'Disponibilité',
        status: 'Statut API'
      },
      values: {
        syncing: 'Synchronisation…',
        synced: 'Synchronisé'
      },
      recents: 'Activités récentes',
      alertsTitle: 'Alertes en temps réel',
      alertsActive: '{{count}} auditeurs en ligne',
      defaults: {
        stats: {
          apis: 'APIs monitorées',
          latency: 'Latence moyenne',
          errors: 'Erreurs sur 24h'
        },
        activity: {
          deploy: 'Déploiement v2.3 finalisé',
          newsletter: 'Campagne newsletter planifiée',
          admin: 'Nouvel admin créé',
          generic: 'Activité enregistrée',
          twoHours: 'Il y a 2 h',
          fourHours: 'Il y a 4 h',
          yesterday: 'Hier',
          now: 'À l’instant'
        }
      }
    },
    manager: {
      tabs: {
        projects: 'Projets',
        blog: 'Articles',
        certificates: 'Certificats',
        labs: 'Labs beta'
      },
      descriptions: {
        projects: 'Ajoutez des cas d’usage, gérez les highlights et gardez le portfolio vivant.',
        blog: 'Publiez des notes techniques et mettez en avant les sujets clés.',
        certificates: 'Actualisez les réussites et affichez les badges clés.',
        labs: 'Supervisez les expériences Labs, modifiez statuts, icônes et CTAs visibles sur le site.'
      },
      form: {
        title: 'Créer un nouveau {{resource}}',
        helper: 'Préparez le contenu, joignez des médias et publiez en une étape.'
      },
      resources: {
        projects: 'projet',
        blog: 'article',
        certificates: 'certificat',
        labs: 'lab'
      },
      fields: {
        title: 'Titre',
        slug: 'Slug',
        description: 'Description',
        category: 'Catégorie',
        liveUrl: 'URL du projet en ligne',
        repositoryUrl: 'URL du dépôt',
        technologies: 'Technologies',
        excerpt: 'Résumé',
        content: 'Contenu',
        tags: 'Tags',
        categories: 'Catégories',
        readTime: 'Temps de lecture (min)',
        published: 'Publier immédiatement',
        featured: 'Épingler',
        issuer: 'Organisme',
        issueDate: 'Date d’émission',
        expiryDate: 'Date d’expiration',
        level: 'Niveau',
        skills: 'Compétences liées',
        credentialId: 'ID de la certification',
        credentialUrl: 'URL de vérification',
        highlights: 'Points forts',
        metricsStars: 'Étoiles',
        metricsDownloads: 'Déploiements',
        metricsViews: 'Vues',
        labStatus: 'Libellé de statut',
        icon: 'Icône',
        gradient: 'Dégradé',
        ctaUrl: 'URL CTA',
        active: 'Actif',
        beta: 'Afficher comme beta'
      },
      placeholders: {
        projectTitle: 'ex : Plateforme holographique',
        slug: 'ex : portfolio-3d',
        projectDescription: 'Résumé de l’impact et stack principale',
        category: 'ex : DataViz',
        liveUrl: 'https://projet.com',
        repositoryUrl: 'https://github.com/utilisateur/depot',
        technologies: 'React, Node, Redis...',
        blogTitle: 'ex : Orchestrer WebGL avec React 19',
        excerpt: 'Résumé court',
        content: 'Contenu Markdown ou HTML',
        readTime: '10',
        tags: 'Realtime, WebGL...',
        categories: 'Design system, Architecture...',
        certificateTitle: 'ex : AWS Data Engineer',
        issuer: 'AWS, Google, Alura...',
        skills: 'Cloud, IaC, Observability...',
        credentialId: 'ex : ABC-123',
        credentialUrl: 'https://verify.cert/abc',
        highlights: 'Leadership, Multi-cloud...',
        labStatus: 'ex : Preview realtime',
        icon: 'activity, grid, cpu...',
        gradient: 'linear-gradient(135deg,#22c55e,#facc15)',
        ctaUrl: 'https://labs.votresite.com'
      },
      helpers: {
        tags: 'Séparez les éléments par des virgules.',
        date: 'Sélectionnez la date d’émission.'
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
        title: 'Galerie et fichiers',
        helper: 'Ajoutez des images, PDF ou vidéos MP4 pour enrichir le contenu.',
        upload: 'Téléverser',
        uploading: 'Téléversement...',
        cover: 'Définir comme couverture',
        coverLabel: 'Couverture',
        coverPreview: 'Aperçu de la couverture',
        coverInstruction: 'Cliquez sur la carte ou utilisez le bouton étoile pour changer la couverture.',
        coverCurrent: 'Couverture actuelle',
        remove: 'Supprimer',
        limit: 'Jusqu’à {{max}} fichiers.',
        empty: 'Aucun fichier pour le moment.',
        errorUpload: 'Échec du téléversement.'
      },
      categories: {
        cloud: 'Cloud',
        frontend: 'Frontend',
        backend: 'Backend',
        design: 'Design',
        data: 'Données',
        devops: 'DevOps',
        softSkills: 'Soft skills',
        other: 'Autres'
      },
      levels: {
        beginner: 'Débutant',
        intermediate: 'Intermédiaire',
        advanced: 'Avancé'
      },
      actions: {
        create: 'Publier',
        delete: 'Supprimer',
        feature: 'Épingler',
        unfeature: 'Retirer',
        reset: 'Réinitialiser le formulaire'
      },
      summary: {
        total: '{{count}} éléments',
        refresh: 'Actualiser la liste',
        updating: 'Mise à jour…',
        hint: 'Chaque envoi est validé avant publication.'
      },
      status: {
        featured: 'Épinglé',
        noMedia: 'Sans média'
      },
      messages: {
        created: 'Élément publié.',
        deleted: 'Élément supprimé.',
        featured: 'Élément mis en avant.',
        unfeatured: 'Élément retiré des highlights.',
        empty: 'Aucun élément pour le moment.',
        error: 'Action impossible.'
      }
    }
  }
  ,
        patchNotes: {
    headline: 'PatchNotes - performance, SEO et DX.',
    summary: 'Split des paquets, lazy load, metas SEO, robots/sitemap, focus visible et motion reduit.',
    highlights: [
      'Manual chunks vendor/router/query/motion/i18n, retrait de three.js inutile.',
      'Sections home en lazy load avec Suspense pour reduire le first paint.',
      'SEO: meta description/OG/robots + sitemap.xml et robots.txt.',
      'A11y: focus-visible et prefers-reduced-motion.'
    ],
    changes: [
      'Bundle initial plus leger.',
      'Cartes de contact avec hover/badges plus propres.',
      'CTA contact garde email et Instagram actifs.'
    ],
    fixes: [
      'Ajustements recents appliques.',
      'Meta/textes nettoyes pour eviter les caracteres casses.'
    ],
    next: [
      'Isoler react-icons ou passer en SVG inline pour reduire vendor.',
      'Reduire ou auto-heberger les polices (deux familles).',
      'Optimiser favicon.png ou passer en WebP.'
    ]
  },
  patchNotesHistory: [
    {
      version: 'v1.4.1',
      date: '22 Nov 2025',
      headline: 'PatchNotes - performance, SEO et DX.',
      summary: 'Split des paquets, lazy load, metas SEO, robots/sitemap, focus visible et motion reduit.',
      highlights: [
        'Manual chunks vendor/router/query/motion/i18n, retrait de three.js inutile.',
        'Sections home en lazy load avec Suspense pour reduire le first paint.',
        'SEO: meta description/OG/robots + sitemap.xml et robots.txt.',
        'A11y: focus-visible et prefers-reduced-motion.'
      ],
      changes: [
        'Bundle initial plus leger.',
        'Cartes de contact avec hover/badges plus propres.',
        'CTA contact garde email et Instagram actifs.'
      ],
      fixes: [
        'Ajustements recents appliques.',
        'Meta/textes nettoyes pour eviter les caracteres casses.'
      ],
      next: [
        'Isoler react-icons ou passer en SVG inline pour reduire vendor.',
        'Reduire ou auto-heberger les polices (deux familles).',
        'Optimiser favicon.png ou passer en WebP.'
      ]
    },
    {
      version: 'v1.3.0',
      date: '05 Nov 2025',
      headline: 'PatchNotes - UI et mobilite.',
      summary: 'Alerte mobile persistante, contraste ameliore et chargement allege.',
      highlights: [
        'Barre mobile avec fermeture et persistance.',
        'Banniere flottante plus legere et reactive.',
        'Contraste meilleur pour clair/sombre.'
      ],
      changes: [
        'Home: fond anime optimise pour moins de GPU.',
        'UI: couleurs via theme pour garder le contraste.',
        'Layout: banniere mobile avec CTA vers patch notes.',
        'A11y: focus visible sur CTA et bouton fermer.'
      ],
      fixes: [
        'Chevauchement du bouton X corrige.',
        'Typo ajustee pour eviter les caracteres casses.',
        'Ombres adoucies sur cartes petites.'
      ],
      next: [
        'Activer dark/light automatique par systeme.',
        'Ajouter une carte uptime temps reel.',
        'Publier un guide de style composants.'
      ]
    }
  ],

  };

  export default fr;

