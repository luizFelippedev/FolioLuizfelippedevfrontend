import en from './en';

type LocaleShape = typeof en;

const de: LocaleShape = {
  ...en,
  common: {
    ...en.common,
    nav: {
      home: 'Start',
      projects: 'Projekte',
      certificates: 'Zertifikate',
      blog: 'Blog',
      contact: 'Kontakt',
      faq: 'FAQ'
    },
    logoAlt: 'Logo des Portfolios von Luiz Felippe',
    menu: 'Menü',
    close: 'Schließen',
    states: {
      loading: 'Wird geladen…',
      error: 'Daten konnten nicht geladen werden.',
      empty: 'Hier gibt es noch nichts zu sehen.',
      updating: '· aktualisiere…'
    },
    pagination: {
      previous: '← Zurück',
      next: 'Weiter →',
      page: 'Seite {{page}}'
    },
    footer: {
      title: 'Futuristisches Portfolio',
      description: 'Gebaut mit React, Three.js, Tailwind und reichlich Kaffee.',
      badge: 'Immer in Beta ∞',
      ctaTitle: 'Bereit für den nächsten Release?',
      ctaSubtitle: 'Pipelines, Observability und immersive Frontends laufen 24/7 synchron.',
      primaryCta: 'Mit Luiz sprechen',
      secondaryCta: 'Admin öffnen',
      linksTitle: 'Direktlinks',
      links: {
        projects: 'Projekte',
        labs: 'Labs beta',
        admin: 'Admin-Dashboard',
        faq: 'FAQ',
        terms: 'Nutzungsbedingungen',
        privacy: 'Datenschutz'
      },
      signature: 'Entwickelt von Luiz Felippe',
      rights: 'Alle Rechte vorbehalten.',
      stats: {
        uptime: 'Verfügbarkeit',
        deployments: 'Deploys (Quartal)',
        automations: 'Automationen / Monat'
      }
    }
  },
  hero: {
    subtitle: 'Unabhängiges Studio',
    badges: ['Studium Software Engineering', 'Unabhängiges Studio', 'Realtime-Systeme'],
    title: {
      prefix: 'Ich baue Premium-Plattformen, die',
      highlight: 'sich lebendig für eure Kundschaft anfühlen'
    },
    description:
      'Boutique-Studio mit kinoreifer UI, Realtime-Daten und belastbarer Infrastruktur. Ich begleite Marketing-, Produkt- und Ops-Teams bei Launches mit messbarem Impact, Observability und automatisiertem Care.',
    highlights: [
      {
        title: 'Fortgeschrittener Full‑Stack',
        description: 'React, Three.js und Node treiben reaktive, responsive Apps an.'
      },
      {
        title: 'Realtime-Systeme',
        description: 'WebSockets, Analytics-Pipelines und vollständige Instrumentierung.'
      },
      {
        title: 'Qualität & DX',
        description: 'CI/CD, automatisierte Tests und prägnante Dokumentation.'
      }
    ],
    stats: [
      { value: '48+', label: 'Immersive Projekte', detail: '3D-Dashboards & Realtime-Apps' },
      { value: '120k+', label: 'Automationen', detail: 'Ereignisse pro Monat beobachtet' },
      { value: '120 ms', label: 'Ø Latenz', detail: 'Chats & WebSocket-Notifications' }
    ]
  },
  cta: {
    primary: 'Projekte ansehen',
    secondary: 'Kontakt aufnehmen'
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'So arbeite ich mit Unternehmen',
    subtitle: 'Klare Antworten zu Engagement, Zeitplänen, Stack und Support nach dem Go-live.',
    items: [
      {
        icon: 'engagement',
        question: 'Wie startet die Zusammenarbeit?',
        answer:
          'Fixes Projekt (festes Scope) oder Fractional Engineering. Immer mit Discovery, um Ziele, Risiken und Erfolgsmessung zu klären.'
      },
      {
        icon: 'timeline',
        question: 'Typische Zeitpläne?',
        answer:
          'MVPs dauern meist 4–8 Wochen; Integrationen und Weiterentwicklung laufen in 2-Wochen-Sprints mit sichtbaren Demos.'
      },
      {
        icon: 'stack',
        question: 'Welcher Stack?',
        answer:
          'Frontend: React/Next, Vite, Tailwind, Three/Framer. Backend: Node/Nest, REST/GraphQL, Redis, Postgres/Mongo. Cloud: AWS/GCP/Cloudflare, CI/CD mit GitHub Actions.'
      },
      {
        icon: 'support',
        question: 'Support nach dem Launch?',
        answer:
          'Handoff mit Doku, Incident-Playbooks und Basis-Monitoring (Logs/Alerts). Optionales Evolutions-/Hotfix-Paket pro Monat.'
      },
      {
        icon: 'contact',
        question: 'Wie kann man meine Arbeit bewerten?',
        answer:
          'Demos, geschützter Admin, Changelogs und öffentliche Metriken (Uptime, Deploys). Walkthrough mit Stakeholdern auf Wunsch.'
      }
    ]
  },
  termsPage: {
    eyebrow: 'AGB',
    title: 'Nutzungsbedingungen',
    subtitle: 'Richtlinien für die Nutzung dieses Portfolios sowie den Zugang zu Admin/Demos.',
    intro:
      'Mit dem Zugriff auf diese Seite stimmst du zu, geistiges Eigentum zu respektieren und Demos oder Admin-Endpunkte nicht zu missbrauchen.',
    items: {
      scope: 'Inhalte und Assets dienen nur zur Präsentation und Bewertung.',
      rights: 'Alle Marken, Code-Beispiele und Medien gehören Luiz Felippe, sofern nicht anders angegeben.',
      usage: 'Keine Weitergabe oder Reproduktion des Materials ohne Zustimmung.',
      liability: 'Keine Gewährleistung; Nutzung von Demos und APIs auf eigenes Risiko.',
      changes: 'Bedingungen können aktualisiert werden; weitere Nutzung gilt als Zustimmung.'
    },
    outro: 'Für Sondergenehmigungen oder Partnerschaften kontaktiere mich direkt.'
  },
  privacyPage: {
    eyebrow: 'Datenschutz',
    title: 'Privatsphäre & Daten',
    subtitle: 'Wie ich mit Daten aus Formularen und Analytics umgehe.',
    intro:
      'Es werden nur Daten erfasst, die nötig sind, um Nachrichten zu beantworten und die Experience zu verbessern.',
    items: {
      data: 'Kontaktformulardaten (Name/E-Mail/Nachricht) werden sicher gespeichert und nur zur Antwort genutzt.',
      cookies: 'Optionale Cookies für Sprache/Theme und anonymisierte Analytics.',
      security: 'Admin-Bereiche erfordern Authentifizierung; sensible Daten werden nicht öffentlich geteilt.',
      sharing: 'Keine Weitergabe an Dritte zu Werbezwecken; nur technische Dienstleister (E-Mail/Hosting) bekommen das Nötige.',
      contact: 'Du kannst jederzeit Löschung oder Export deiner Einreichungen anfragen.'
    },
    outro: 'Fragen? Schreib mir, ich kläre jedes Datenschutzthema.'
  },
        patchNotes: {
    headline: 'PatchNotes - Performance, SEO und DX.',
    summary: 'Package-Splits, Lazy Load, SEO-Metas, robots/sitemap, sichtbarer Fokus und weniger Motion.',
    highlights: [
      'Manual chunks fuer vendor/router/query/motion/i18n, ungenutztes three.js entfernt.',
      'Home-Sektionen per Lazy Load + Suspense fuer schnelleren First Paint.',
      'SEO: meta description/OG/robots plus sitemap.xml und robots.txt.',
      'A11y: focus-visible Outline und prefers-reduced-motion Support.'
    ],
    changes: [
      'Kleineres Initial-Bundle.',
      'Kontaktkarten mit sauberem Hover/Badges.',
      'CTA Kontakt behaelt E-Mail und Instagram.'
    ],
    fixes: [
      'Letzte Anpassungen angewandt.',
      'Meta/Text bereinigt gegen kaputte Zeichen.'
    ],
    next: [
      'react-icons splitten oder SVG inline nutzen.',
      'Fonts auf zwei Familien reduzieren oder self-host.',
      'favicon.png optimieren oder auf WebP wechseln.'
    ]
  },
  patchNotesHistory: [
    {
      version: 'v1.4.1',
      date: '22 Nov 2025',
      headline: 'PatchNotes - Performance, SEO und DX.',
      summary: 'Package-Splits, Lazy Load, SEO-Metas, robots/sitemap, sichtbarer Fokus und weniger Motion.',
      highlights: [
        'Manual chunks fuer vendor/router/query/motion/i18n, ungenutztes three.js entfernt.',
        'Home-Sektionen per Lazy Load + Suspense fuer schnelleren First Paint.',
        'SEO: meta description/OG/robots plus sitemap.xml und robots.txt.',
        'A11y: focus-visible Outline und prefers-reduced-motion Support.'
      ],
      changes: [
        'Kleineres Initial-Bundle.',
        'Kontaktkarten mit sauberem Hover/Badges.',
        'CTA Kontakt behaelt E-Mail und Instagram.'
      ],
      fixes: [
        'Letzte Anpassungen angewandt.',
        'Meta/Text bereinigt gegen kaputte Zeichen.'
      ],
      next: [
        'react-icons splitten oder SVG inline nutzen.',
        'Fonts auf zwei Familien reduzieren oder self-host.',
        'favicon.png optimieren oder auf WebP wechseln.'
      ]
    },
    {
      version: 'v1.3.0',
      date: '05 Nov 2025',
      headline: 'PatchNotes - UI und Mobilitat.',
      summary: 'Mobiler Hinweis mit Persistenz, besserer Kontrast und leichteres Laden.',
      highlights: [
        'Mobile Bar mit Close und Persistenz.',
        'Leichteres, reaktives Banner.',
        'Besserer Kontrast fuer Hell/Dunkel.'
      ],
      changes: [
        'Home: animierter Hintergrund optimiert fuer weniger GPU.',
        'UI: Theme-Farben fuer Kontrast.',
        'Layout: Mobile Banner mit CTA zu Patch Notes.',
        'A11y: sichtbarer Fokus auf CTA und Close.'
      ],
      fixes: [
        'Overlap des X-Buttons behoben.',
        'Typografie angepasst gegen kaputte Zeichen.',
        'Schatten weicher auf kleinen Screens.'
      ],
      next: [
        'Dark/Light automatisch nach System.',
        'Realtime-Uptime-Karte hinzufuegen.',
        'Styleguide fuer interaktive Komponenten.'
      ]
    }
  ],

  };

  export default de;

