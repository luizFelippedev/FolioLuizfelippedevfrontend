import en from './en';

type LocaleShape = typeof en;

const zh: LocaleShape = {
  ...en,
  common: {
    ...en.common,
    nav: {
      home: '首页',
      projects: '项目',
      certificates: '证书',
      blog: '博客',
      contact: '联系',
      faq: 'FAQ'
    },
    logoAlt: 'Luiz Felippe 作品集标志',
    menu: '菜单',
    close: '关闭',
    states: {
      loading: '加载中…',
      error: '无法获取数据。',
      empty: '这里还没有内容。',
      updating: '· 更新中…'
    },
    pagination: {
      previous: '← 上一页',
      next: '下一页 →',
      page: '第 {{page}} 页'
    },
    footer: {
      title: '未来主义作品集',
      description: '由 React、Three.js、Tailwind 以及大量咖啡打造。',
      badge: '永远在 Beta ∞',
      ctaTitle: '准备好下一个发布了吗？',
      ctaSubtitle: 'Pipeline、可观测性与沉浸式前端 24/7 同步运行。',
      primaryCta: '联系 Luiz',
      secondaryCta: '打开后台',
      linksTitle: '快速链接',
      links: {
        projects: '项目',
        labs: 'Labs beta',
        admin: '后台面板',
        faq: 'FAQ',
        terms: '服务条款',
        privacy: '隐私政策'
      },
      signature: '由 Luiz Felippe 开发。',
      rights: '版权所有。',
      stats: {
        uptime: '可用性',
        deployments: '季度部署',
        automations: '每月自动化'
      }
    }
  },
  hero: {
    subtitle: '独立工作室',
    badges: ['软件工程本科', '独立工作室', '实时系统'],
    title: {
      prefix: '我打造的高端平台',
      highlight: '让客户体验宛如实时在线'
    },
    description:
      '精品工作室，融合电影级 UI、实时数据与韧性基础设施。与市场、产品、运营团队共创，交付可量化的体验，并附带可观测性与自动护理方案。',
    highlights: [
      { title: '全栈进阶', description: 'React、Three.js、Node 驱动的丰富响应式体验。' },
      { title: '实时系统', description: 'WebSocket、数据管道与全链路监控。' },
      { title: '质量 & DX', description: 'CI/CD、自动化测试与精炼文档。' }
    ],
    stats: [
      { value: '48+', label: '沉浸式项目', detail: '3D 仪表盘 & 实时应用' },
      { value: '120k+', label: '自动化', detail: '每月监控事件' },
      { value: '120 ms', label: '平均延迟', detail: '聊天与 WebSocket 通知' }
    ]
  },
  cta: {
    primary: '浏览项目',
    secondary: '立即联系'
  },
  faq: {
    eyebrow: '常见问题',
    title: '我如何与企业合作',
    subtitle: '关于合作方式、周期、技术栈和上线后支持的清晰解答。',
    items: [
      {
        icon: 'engagement',
        question: '合作如何开始？',
        answer: '可以按项目（固定范围）或弹性工程师模式。始终先做发现阶段，明确目标、风险和成功标准。'
      },
      {
        icon: 'timeline',
        question: '常见周期？',
        answer: 'MVP 通常 4–8 周；集成/持续优化按双周节奏推进，每个迭代都会有演示和可见交付。'
      },
      {
        icon: 'stack',
        question: '使用什么技术栈？',
        answer:
          '前端：React/Next、Vite、Tailwind、Three/Framer。后端：Node/Nest、REST/GraphQL、Redis、Postgres/Mongo。云：AWS/GCP/Cloudflare，CI/CD 用 GitHub Actions。'
      },
      {
        icon: 'support',
        question: '上线后的支持？',
        answer: '交付文档、故障手册和基础监控（日志/告警）。可按月保留进化与热修复时长。'
      },
      {
        icon: 'contact',
        question: '企业如何评估我的工作？',
        answer: '提供演示、受保护的后台、变更日志和公开指标（可用性、部署）。如需，可安排与干系人的讲解会。'
      }
    ]
  },
  termsPage: {
    eyebrow: '服务条款',
    title: '服务条款',
    subtitle: '使用作品集及其演示/后台的指引。',
    intro: '访问本网站即表示你同意尊重知识产权，不滥用演示或受保护的接口。',
    items: {
      scope: '内容与素材仅供展示和评估。',
      rights: '除特别说明外，商标、代码和媒体归 Luiz Felippe 所有。',
      usage: '未经许可不得转载或复制。',
      liability: '不提供任何担保；使用演示/API 风险自负。',
      changes: '条款可能更新；继续使用即视为同意。'
    },
    outro: '如需特殊授权或合作，请直接联系我。'
  },
  privacyPage: {
    eyebrow: '隐私',
    title: '隐私与数据',
    subtitle: '我如何处理表单和分析获得的数据。',
    intro: '仅收集回复和改进体验所必需的数据。',
    items: {
      data: '联系表数据（姓名/邮箱/消息）仅用于回复并安全存储。',
      cookies: '可选 Cookie 可保存语言/主题与使用分析。',
      security: '后台需认证；敏感数据不会公开。',
      sharing: '不出售或共享你的数据，除非与本网站的邮件/主机服务方所需。',
      contact: '你可随时请求删除或导出你的提交。'
    },
    outro: '有疑问？发送邮件，我会解答任何隐私问题。'
  },
  about: {
    ...en.about,
    badge: '工作室基因',
    title: '战略·设计·工程统一指向结果',
    description:
      '以嵌入式小队方式运作的高参与度个人工作室。覆盖 Discovery、Framing、架构蓝图、沉浸式设计与严格交付，最终附上文档、交接手册与实时仪表盘。',
    chips: ['Fractional Leadership', '连接设计与工程', '软件工程本科在读'],
    highlights: [
      {
        title: '软件工程本科学习',
        description: '就读软件工程专业，聚焦架构、数据密集系统与体验领导力。课程项目直接转化为真实交付。',
        metrics: '本科在读'
      },
      {
        title: '多层技术栈',
        description: '擅长整合微前端、Node/Nest、队列与实时图谱。',
        metrics: '15 套高产能栈'
      },
      {
        title: '可观测性 & DX',
        description: 'Tracing、结构化日志与 QA 自动化全部版本化管理。',
        metrics: '每月监控 120k+ 事件'
      },
      {
        title: 'Mentoring & Leadership',
        description: '带领团队与开发者辅导，专注高质量文化。',
        metrics: '60+ 次辅导'
      }
    ]
  },
  experience: {
    ...en.experience,
    badge: '经历',
    title: '职业时间线',
    description: '跨行业的产品、架构、领导力与辅导经验。'
  },
  servicesSection: {
    eyebrow: '服务',
    title: '为高要求团队提供的工作室服务',
    description:
      '我作为精品工作室，为创始人、市场与运营团队打造高端数字产品。战略、体验领导与全栈工程保持同频，从发现阶段一直延伸到长期维护。',
    cards: [
      {
        title: '战略与发现',
        detail: '通过工作坊、路线图与治理，将业务目标转化为可衡量计划。',
        items: ['产品定位', '利益相关者对齐', '体验工作坊']
      },
      {
        title: '平台工程',
        detail: '交付沉浸式仪表盘、实时 API 与安全后台。',
        items: ['全栈交付', '实时 &  Copilot', 'CI/CD + IaC 手册']
      },
      {
        title: 'Care & Growth',
        detail: '上线后提供可观测性、实验与赋能，持续陪伴增长。',
        items: ['可观测性与告警', 'Feature Flag / A/B 测试', 'Mentoring & Enablement']
      }
    ],
    ctaPrimary: '索取方案',
    ctaSecondary: '查看案例'
  },
  skills: {
    ...en.skills,
    badge: '互联技术栈',
    title: '实时脉动的技术',
    description: 'Web、实时与云栈 24/7 监控，展示我每日使用的技术。',
    pillars: en.skills.pillars
  },
  projectsSection: {
    eyebrow: '精选',
    title: '上线项目',
    description: '交互式仪表盘、数据管道与沉浸式体验，每一张卡片都代表实验室的一部分。',
    cta: '查看全部'
  },
  systemStatus: {
    eyebrow: '指挥中心',
    title: '平台实时快照',
    description: '公共接口保持计数最新，通过后台发布后卡片立即刷新。',
    cards: {
      projects: { label: '上线项目', hint: '重点案例' },
      blog: { label: '已发布文章', hint: '技术洞察' },
      certificates: { label: '已验证证书', hint: '可信成就' },
      labs: { label: '活跃 Labs', hint: 'Beta 模块' }
    },
    cta: '打开后台'
  },
  certificatesSection: {
    eyebrow: '持续学习',
    title: '最新认证',
    description: '、云与系统设计领域的重量级认证，支撑整个作品集。',
    cta: '查看证书'
  },
  labsSection: {
    eyebrow: 'Labs beta',
    title: '即将解锁的实验',
    description: '实时自动化、告警与布局引擎已集成到后台，关注想要抢先体验的模块。',
    cta: '提醒我',
    subscribed: '已关注',
    actions: {
      toggle: '切换 Lab',
      learn: '了解更多'
    }
  },
  blogSection: {
    eyebrow: '内容',
    title: '最新文章',
    description: '关于 WebGL、实时架构、自动化与沉浸式 UX 的周更日志。',
    cta: '前往博客'
  },
  contactSection: {
    eyebrow: '????',
    headline: '??????????',
    subheadline: '?????????????????????????',
    responseBadge: '??2?????',
    chips: ['????', '????', '????', '??????'],
    quickCards: [
      {
        title: '?????????',
        detail: '???????????????'
      },
      {
        title: '????????',
        detail: 'UI????????????????????'
      }
    ],
    tags: ['????', '????', '????', '???'],
    primaryCta: '????',
    secondaryCta: '???????',
    metrics: [
      { label: '??SLA', value: '< 2h', detail: '?????????????' },
      { label: '????', value: 'LATAM | EU | US', detail: '?????????????' },
      { label: '????', value: '??', detail: '??????????????' }
    ],
    commitmentsHeading: '????',
    commitments: [
      {
        title: '?????',
        detail: '?????????KPI??????????'
      },
      {
        title: '????',
        detail: '???????????????????????'
      },
      {
        title: '??QA??',
        detail: 'Feature flag??????CI/CD???????'
      },
      {
        title: '???????',
        detail: '????????????????????'
      }
    ],
    personal: {
      title: 'Luiz?????',
      detail: '????????????DM???????',
      cta: '????'
    },
    channels: {
      email: {
        label: 'Email',
        hint: '24/7???????',
        action: '????'
      },
      social: {
        label: 'Instagram',
        hint: 'DM?????????',
        action: '????'
      }
    },
    status: {
      label: '????',
      message: 'SMTP??????????',
      detail: '??????????????????'
    },
    copyState: {
      success: '????'
    },
    note: '?????????????????????????????'
  },
  settings: {
    ...en.settings,
    label: '设置',
    title: '控制中心',
    subtitle: '调整语言、主题与 Labs。',
    language: '语言',
    theme: '主题',
    betaLanguages: '更多语言',
    labsNotify: '提醒我',
    labsFollowing: '已关注'
  },
  projectsPage: {
    ...en.projectsPage,
    eyebrow: '探索',
    title: '全部项目',
    heroTitle: '沉浸式仪表盘与实时实验室',
    heroSubtitle: '面向高端体验的未来构建',
    heroDescription: '结合电影级 UI、韧性 API 与 observability，按类别探索技术栈。',
    searchPlaceholder: '按技术、栈、影响搜索…',
    filterAll: '全部',
    loadError: '无法加载项目。',
    views: '{{count}} 次浏览',
    liveLink: '在线体验',
    repoLink: '代码库',
    detailsLink: '详情',
    galleryButton: '图库',
    galleryHeading: '快照',
    caseStudy: '案例研究'
  },
  blogPage: {
    ...en.blogPage,
    eyebrow: '洞察',
    title: '技术博客与现场笔记',
    subtitle: '来自上线、实验与 Observability 的一线记录。',
    searchPlaceholder: '搜索文章…',
    filterAll: '全部',
    loadError: '无法加载博客。',
    readCta: '阅读文章',
    stats: {
      total: '已发布',
      readTime: '平均阅读时间',
      topTag: '热门标签'
    },
    attachment: '附件'
  },
  certificatesPage: {
    ...en.certificatesPage,
    eyebrow: '成长',
    title: '证书与专精',
    subtitle: '附带可验证链接的成果。',
    filterAll: '全部',
    loadError: '无法加载证书。',
    attachment: '附件'
  },
  contactPage: {
    ...en.contactPage,
    eyebrow: '开放',
    title: '加入下一场数字沉浸',
    description: '告诉我挑战、时间线与交付目标，24 小时内提供定制提案。',
    placeholders: {
      name: '姓名',
      email: '工作邮箱',
      message: '描述挑战、时间线、交付物…'
    },
    form: {
      companyLabel: '公司 / 组织',
      companyPlaceholder: '代理商、初创、企业…',
      serviceLabel: '项目重点',
      serviceOptions: ['端到端交付', '体验 / 前端', '后端与集成', '咨询 / 导师'],
      budgetLabel: '预算范围',
      budgetPlaceholder: '如：USD 10k - 30k',
      timelineLabel: '期望启动',
      timelineOptions: ['立即 (0-1 个月)', '近期 (1-3 个月)', '规划中 (3+ 个月)']
    },
    actions: {
      send: '发送',
      sending: '发送中…'
    },
    feedback: {
      success: '消息已发送，感谢！',
      error: '发送失败，请重试。'
    }
  },
        patchNotes: {
    headline: 'PatchNotes - xingneng, SEO, DX',
    summary: 'Shou dong fen bao, lazy load, SEO meta/robots/sitemap, focus ke jian, jianshao donghua.',
    highlights: [
      'vendor/router/query/motion/i18n shou dong fen bao, yi chu three.js.',
      'Shou ye kuai su lazy load + Suspense, jian qing shou ping.',
      'SEO: meta description/OG/robots, jia sitemap.xml he robots.txt.',
      'A11y: focus-visible he prefers-reduced-motion.'
    ],
    changes: [
      'Chu shi bundle geng xiao.',
      'Lianluo ka hover/badge geng jingjian.',
      'Lianxi CTA baoliu Email he Instagram.'
    ],
    fixes: [
      'Zui xin tiaozheng yijing yingyong.',
      'Qingli meta/wenzi bi mian luan ma.'
    ],
    next: [
      'fen li react-icons huo yong SVG inline suoxiao vendor.',
      'jianshao ziti dao liang ge xi lie huo zizhu jiazai.',
      'youhua favicon.png huo huan WebP.'
    ]
  },
  patchNotesHistory: [
    {
      version: 'v1.4.1',
      date: '22 Nov 2025',
      headline: 'PatchNotes - xingneng, SEO, DX',
      summary: 'Shou dong fen bao, lazy load, SEO meta/robots/sitemap, focus ke jian, jianshao donghua.',
      highlights: [
        'vendor/router/query/motion/i18n shou dong fen bao, yi chu three.js.',
        'Shou ye kuai su lazy load + Suspense, jian qing shou ping.',
        'SEO: meta description/OG/robots, jia sitemap.xml he robots.txt.',
        'A11y: focus-visible he prefers-reduced-motion.'
      ],
      changes: [
        'Chu shi bundle geng xiao.',
        'Lianluo ka hover/badge geng jingjian.',
        'Lianxi CTA baoliu Email he Instagram.'
      ],
      fixes: [
        'Zui xin tiaozheng yijing yingyong.',
        'Qingli meta/wenzi bi mian luan ma.'
      ],
      next: [
        'fen li react-icons huo yong SVG inline suoxiao vendor.',
        'jianshao ziti dao liang ge xi lie huo zizhu jiazai.',
        'youhua favicon.png huo huan WebP.'
      ]
    },
    {
      version: 'v1.3.0',
      date: '05 Nov 2025',
      headline: 'PatchNotes - UI he yidong',
      summary: 'Shouji tixing chi cun, duibi geng hao, jia zai geng qing.',
      highlights: [
        'Yidong tixing dai guanbi he cunchu.',
        'Qing liang de fuxuankuang guanggao.',
        'Geng hao de duibi yong yu hei/bai.'
      ],
      changes: [
        'Shouye: donghua beijing youhua jianshao GPU.',
        'UI: zhutise baochi duibi.',
        'Layout: yidong guanggao dai CTA daoxiang patch notes.',
        'A11y: kexian jiaodian yu guanbi anniu.'
      ],
      fixes: [
        'Xiufu le yidong tixing X anniu diejia.',
        'Zhengli ziti fangzhi luanma.',
        'Ruosuo ka pian yinying.'
      ],
      next: [
        'Jiqi you anliang moshi zidong qiehuan.',
        'Tianjia shishang uptime ka pian.',
        'Fabiao jiaohu zujian fengge zhinan.'
      ]
    }
  ],

  };

  export default zh;

