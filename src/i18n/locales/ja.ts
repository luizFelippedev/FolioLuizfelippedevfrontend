import en from './en';

type LocaleShape = typeof en;

const ja: LocaleShape = {
  ...en,
  common: {
    ...en.common,
    nav: {
      home: 'ホーム',
      projects: 'プロジェクト',
      certificates: '認定',
      blog: 'ブログ',
      contact: 'お問い合わせ',
      faq: 'FAQ'
    },
    logoAlt: 'Luiz Felippe のポートフォリオロゴ',
    menu: 'メニュー',
    close: '閉じる',
    states: {
      loading: '読み込み中…',
      error: 'データを取得できませんでした。',
      empty: 'まだコンテンツはありません。',
      updating: '· 更新中…'
    },
    pagination: {
      previous: '← 前へ',
      next: '次へ →',
      page: 'ページ {{page}}'
    },
    footer: {
      ...en.common.footer,
      title: 'フューチャリスティック・ポートフォリオ',
      description: 'React・Three.js・Tailwind、そして大量のコーヒーで構築。',
      badge: '常にベータ ∞',
      ctaTitle: '次のリリース、始めましょう。',
      ctaSubtitle: 'パイプライン・オブザーバビリティ・没入型フロントエンドを24/7で同期。',
      primaryCta: 'Luiz に連絡',
      secondaryCta: 'Admin を開く',
      linksTitle: 'クイックリンク',
      links: {
        ...en.common.footer.links,
        projects: 'プロジェクト',
        labs: 'Labs beta',
        admin: '管理ダッシュボード',
        faq: 'FAQ',
        terms: '利用規約',
        privacy: 'プライバシー'
      },
      signature: 'Luiz Felippe が開発。',
      rights: 'すべての権利を保有します。',
      stats: {
        uptime: '稼働率',
        deployments: 'デプロイ（四半期）',
        automations: '自動化 / 月'
      }
    }
  },
  hero: {
    subtitle: 'インディペンデントスタジオ',
    badges: ['ソフトウェア工学専攻', 'インディペンデントスタジオ', 'リアルタイムシステム'],
    title: {
      prefix: 'プレミアムなプラットフォームを構築し',
      highlight: 'ユーザーに“生きた”体験を届けます'
    },
    description:
      '映画的なUI、リアルタイムデータ、堅牢なインフラを掛け合わせるブティックスタジオ。マーケ・プロダクト・オペレーションと伴走し、観測性と自動ケアまで含めた体験をローンチします。',
    highlights: [
      {
        title: '高度なフルスタック',
        description: 'React / Three.js / Node でリッチでレスポンシブなアプリを提供。'
      },
      {
        title: 'リアルタイムシステム',
        description: 'WebSocket・分析パイプライン・フルインストルメンテーション。'
      },
      {
        title: '品質とDX',
        description: 'CI/CD、自動テスト、凝縮されたドキュメント。'
      }
    ],
    stats: [
      { value: '48+', label: '没入型プロジェクト', detail: '3Dダッシュボード & Realtime' },
      { value: '120k+', label: 'オートメーション', detail: '月間監視イベント' },
      { value: '120 ms', label: '平均レイテンシ', detail: 'チャット & WebSocket 通知' }
    ]
  },
  cta: {
    primary: 'プロジェクトを見る',
    secondary: '今すぐ相談'
  },
  faq: {
    eyebrow: 'FAQ',
    title: '企業との連携について',
    subtitle: '契約形態、スケジュール、スタック、リリース後サポートを明確に説明します。',
    items: [
      {
        icon: 'engagement',
        question: '契約はどう進む？',
        answer:
          'スコープを決めたプロジェクト型またはFractional Engineering。必ずディスカバリーでゴールとリスク、成功指標を揃えます。'
      },
      {
        icon: 'timeline',
        question: '一般的なスケジュールは？',
        answer:
          'MVPは4〜8週間が目安。統合・継続開発は2週間サイクルでデモと成果物を提示します。'
      },
      {
        icon: 'stack',
        question: '使用するスタックは？',
        answer:
          'フロント：React/Next、Vite、Tailwind、Three/Framer。バック：Node/Nest、REST/GraphQL、Redis、Postgres/Mongo。クラウド：AWS/GCP/Cloudflare、CI/CDはGitHub Actions。'
      },
      {
        icon: 'support',
        question: 'リリース後のサポートは？',
        answer:
          'ドキュメント、インシデント用プレイブック、基本モニタリング（ログ/アラート）を引き渡します。月次の進化・ホットフィックス契約も可能。'
      },
      {
        icon: 'contact',
        question: '成果をどう評価できますか？',
        answer:
          'デモ、保護されたAdmin、変更履歴、公開メトリクス（稼働率・デプロイ）を提供。必要に応じてステークホルダー向けのウォークスルーを実施します。'
      }
    ]
  },
  termsPage: {
    eyebrow: '利用規約',
    title: '利用規約',
    subtitle: 'ポートフォリオおよびデモ/管理エリア利用に関するガイドライン。',
    intro: '本サイトを利用することで知的財産を尊重し、デモや保護されたエンドポイントを悪用しないことに同意したものとみなします。',
    items: {
      scope: 'コンテンツとアセットはプレゼンと評価のためのものです。',
      rights: '商標・コード・メディアは特記のない限り Luiz Felippe に帰属します。',
      usage: '許可なく再配布・複製しないでください。',
      liability: '保証はありません。デモやAPIの利用は自己責任でお願いします。',
      changes: '規約は変更される場合があります。継続利用は同意とみなされます。'
    },
    outro: '特別な許諾やパートナー提案は直接ご連絡ください。'
  },
  privacyPage: {
    eyebrow: 'プライバシー',
    title: 'プライバシーとデータ',
    subtitle: 'フォームや分析で取得するデータの取り扱いについて。',
    intro: '返信と体験改善に必要な最低限のデータのみ収集します。',
    items: {
      data: '連絡フォームのデータ（名前/メール/メッセージ）は安全に保存し返信のみに使用します。',
      cookies: '言語/テーマや利用状況を保持するオプションのクッキーを使う場合があります。',
      security: '管理エリアは認証が必要で、機密データは公開しません。',
      sharing: '第三者への販売・共有は行いません。本サイトのメール/インフラ提供者に限り利用します。',
      contact: 'いつでも削除やエクスポートをリクエストできます。'
    },
    outro: '不明点はメールでお問い合わせください。'
  },
  about: {
    ...en.about,
    badge: 'スタジオDNA',
    title: '戦略・デザイン・エンジニアリングを成果に結びつける',
    description:
      '組み込みチームのように動くハイタッチなソロプラクティス。Discovery、Framing、アーキ設計、没入型デザイン、厳格なデリバリーまで担い、最後にドキュメントとハンドオフ用プレイブック、ライブなダッシュボードを残します。',
    chips: ['Fractional Leadership', 'デザイン×開発の橋渡し', 'ソフトウェア工学専攻 (大学)'],
    highlights: [
      {
        title: 'ソフトウェア工学専攻',
        description: '大学でソフトウェア工学を専攻し、アーキテクチャ・データ指向システム・UXリードを研究中。学びをクライアントワークに即還元しています。',
        metrics: '大学課程 進行中'
      },
      {
        title: 'レイヤードスタック',
        description: 'マイクロフロントエンド、Node/Nest、キュー、リアルタイムグラフを統合。',
        metrics: '15 の実用スタック'
      },
      {
        title: 'Observability & DX',
        description: 'トレーシング、構造化ログ、QAオートメーションをバージョン管理。',
        metrics: '月間 120k+ イベント'
      },
      {
        title: 'メンタリング & リード',
        description: 'スコードを率い、育成プログラムで開発者を支援。',
        metrics: '60+ メンタリング'
      }
    ]
  },
  experience: {
    ...en.experience,
    badge: '経歴',
    title: 'キャリアタイムライン',
    description: '複数市場でのプロダクト/アーキテクチャ/リーダーシップ/メンタリング経験。',
    items: en.experience.items.map((item) => ({ ...item }))
  },
  servicesSection: {
    eyebrow: 'サービス',
    title: '野心的な企業のためのスタジオ・サービス',
    description:
      'プレミアムなデジタル体験を求めるファウンダー、CMO、OPSのために動くブティックスタジオ。戦略、UXリード、フルスタックエンジニアリングがディスカバリーからケアまで一つにつながります。',
    cards: [
      {
        title: 'Strategy & Discovery',
        detail: 'ビジネスゴールを計測可能なプランへ翻訳するワークショップとガバナンス。',
        items: ['プロダクトフレーミング', 'ステークホルダー整合', 'エクスペリエンスWS']
      },
      {
        title: 'Platform Engineering',
        detail: '没入型ダッシュボード、Realtime API、堅牢な管理ツールをフルスタックで提供。',
        items: ['Full-stack builds', 'Realtime & AI Copilots', 'CI/CD・IaCプレイブック']
      },
      {
        title: 'Care & Growth',
        detail: 'ローンチ後も観測性、実験、メンタリングで伴走。',
        items: ['Observability & Alerts', 'Feature Flags / A/B', 'Mentoring & Enablement']
      }
    ],
    ctaPrimary: '提案を依頼',
    ctaSecondary: 'ケーススタディを見る'
  },
  skills: {
    ...en.skills,
    badge: '接続されたスタック',
    title: 'リアルタイムに鼓動するテクノロジー',
    description: 'Web・リアルタイム・クラウドスタックを24/7で監視。毎日使う技術をループで紹介。',
    pillars: [
      {
        title: 'センソリーなフロントエンド',
        description: '映画的UI、マイクロインタラクション、3D、アクセシビリティ。',
        tools: ['React 19', 'Next.js', 'Three.js', 'Framer Motion']
      },
      {
        title: 'スケールするプラットフォーム',
        description: '型付きAPI、キュー、リアルタイムデータ、観測性。',
        tools: ['Node.js', 'NestJS', 'Redis Streams', 'Socket.IO']
      },
      {
        title: 'クラウド & 自動化',
        description: 'CI/CD パイプライン、IaC、継続的モニタリング。',
        tools: ['Docker', 'GitHub Actions', 'AWS', 'Grafana/Prometheus']
      }
    ]
  },
  projectsSection: {
    eyebrow: 'ハイライト',
    title: '稼働中のプロジェクト',
    description: 'インタラクティブなダッシュボード、データパイプライン、感覚的な体験。各カードはラボの一部を要約。',
    cta: 'すべて見る'
  },
  systemStatus: {
    eyebrow: 'コマンドセンター',
    title: 'プラットフォームのライブ状況',
    description: '公開エンドポイントがカウンターを同期。Adminで公開すると即座に更新されます。',
    cards: {
      projects: { label: '公開中のプロジェクト', hint: '注目ケース' },
      blog: { label: '公開済み記事', hint: 'テックノート' },
      certificates: { label: '検証済み認定', hint: '信頼できる実績' },
      labs: { label: '稼働中の Labs', hint: 'ベータモジュール' }
    },
    cta: 'Admin を開く'
  },
  certificatesSection: {
    eyebrow: '継続学習',
    title: '最新の認定',
    description: 'AI・クラウド・システムデザインのヘビー級がこのポートフォリオを支えます。',
    cta: '認定を見る'
  },
  labsSection: {
    eyebrow: 'Labs beta',
    title: 'まもなく解放される実験',
    description: 'リアルタイム自動化、アラート、レイアウトエンジンをAdminに内蔵。先に試したいモジュールをフォロー。',
    cta: '通知を受け取る',
    subscribed: 'フォロー中',
    actions: {
      toggle: 'Lab を切替',
      learn: '詳細'
    }
  },
  blogSection: {
    eyebrow: 'コンテンツ',
    title: '最新記事',
    description: 'WebGL 実験やリアルタイムアーキテクチャ、オートメーション、没入型UXの週次ログ。',
    cta: 'ブログへ'
  },
  contactSection: {
    eyebrow: '受付中',
    headline: '挑戦的なプロジェクトを一緒に？',
    subheadline: 'エンタープライズ案件・大規模オートメーション・クリティカルなプロダクトはメール経由で直接対応します。',
    tags: ['リアルタイムダッシュボード', 'デザインシステム', 'AIコパイロット', 'ワークショップ'],
    primaryCta: 'メッセージを送る',
    secondaryCta: 'フルポートフォリオ',
    metrics: [
      { label: '回答 SLA', value: '< 2h', detail: '監視が稼働している間の平均レスポンス。' },
      { label: '対応タイムゾーン', value: 'LATAM · EU · US', detail: '地域を問わず毎日スロットを用意。' },
      { label: 'スタック更新', value: '毎週', detail: 'ステータスレポートとリリースノートを自動送信。' }
    ],
    commitmentsHeading: 'エンゲージメントフロー',
    commitments: [
      {
        title: 'Discovery & ブリーフィング',
        detail: 'デザイン前にゴール・KPI・ステークホルダー・テレメトリを整理。'
      },
      {
        title: 'アーキテクチャ青写真',
        detail: 'インフラ・ホスティング・自動化・連携をコーディング前に確定。'
      },
      {
        title: 'Realtime QA ループ',
        detail: 'フィーチャーフラグとプレビューURL、CI/CDで即レビュー。'
      },
      {
        title: 'ハンドオフ & ケア',
        detail: '納品後も管理画面、ドキュメント、アラートポリシーを維持。'
      }
    ],
    channels: {
      email: {
        label: 'メール',
        hint: '24/7監視のダイレクト受信箱',
        action: 'メールをコピー'
      },
      social: {
        label: 'Instagram',
        hint: '素早い同期用にDMオープン',
        action: 'プロフィールを開く'
      }
    },
    status: {
      label: '通知メッシュ',
      message: 'SMTPと管理者アラートはすでに稼働。',
      detail: '送信ごとに分析ログと配信確認を記録します。'
    },
    copyState: {
      success: 'コピーしました！'
    },
    note: 'リアルタイムスタック、AIツール、生きたデザインシステムで次のローンチを組み立てましょう。'
  },
  settings: {
    ...en.settings,
    label: '設定',
    title: 'コントロールセンター',
    subtitle: '言語・テーマ・Labs を調整。',
    language: '言語',
    theme: 'テーマ',
    betaLanguages: '追加予定の言語',
    labsNotify: '通知する',
    labsFollowing: 'フォロー中'
  },
  projectsPage: {
    ...en.projectsPage,
    eyebrow: '探索',
    title: 'すべてのプロジェクト',
    heroTitle: '没入型ダッシュボード & Realtime Labs',
    heroSubtitle: 'プレミアム体験のための未来的ビルド',
    heroDescription: 'シネマティックUI、堅牢なAPI、Observability を融合。カテゴリからスタックを探す。',
    searchPlaceholder: '技術・スタック・インパクトで検索…',
    filterAll: 'すべて',
    loadError: 'プロジェクトを読み込めませんでした。',
    views: '{{count}} 件のビュー',
    liveLink: 'ライブ',
    repoLink: 'リポジトリ',
    detailsLink: '詳細',
    galleryButton: 'ギャラリー',
    galleryHeading: 'スナップショット',
    caseStudy: 'ケーススタディ'
  },
  blogPage: {
    ...en.blogPage,
    eyebrow: 'インサイト',
    title: 'テックブログ & フィールドノート',
    subtitle: 'ローンチや実験、Observabilityの深掘りログ。',
    searchPlaceholder: '記事を検索…',
    filterAll: 'すべて',
    loadError: 'ブログを読み込めませんでした。',
    readCta: '記事を読む',
    stats: {
      total: '公開済み',
      readTime: '平均読了時間',
      topTag: '人気タグ'
    },
    attachment: '添付'
  },
  certificatesPage: {
    ...en.certificatesPage,
    eyebrow: '成長',
    title: '認定 & スペシャリゼーション',
    subtitle: '検証可能なリンク付き実績。',
    filterAll: 'すべて',
    loadError: '認定を読み込めませんでした。',
    attachment: '添付'
  },
  contactPage: {
    ...en.contactPage,
    eyebrow: '受付中',
    title: '次のデジタル没入へ',
    description: '課題・スタック・ゴールを教えてください。24時間以内に提案を返します。',
    placeholders: {
      name: 'お名前',
      email: 'ビジネスメール',
      message: '課題・タイムライン・成果物…'
    },
    form: {
      companyLabel: '企業 / 組織',
      companyPlaceholder: '代理店、スタートアップ、企業…',
      serviceLabel: 'プロジェクトの焦点',
      serviceOptions: ['End-to-end デリバリー', 'エクスペリエンス / Frontend', 'Backend & 連携', 'コンサル / メンタリング'],
      budgetLabel: '想定予算',
      budgetPlaceholder: '例: USD 10k - 30k',
      timelineLabel: '希望開始時期',
      timelineOptions: ['即時 (0-1ヶ月)', '近々 (1-3ヶ月)', '計画中 (3ヶ月以上)']
    },
    actions: {
      send: '送信',
      sending: '送信中…'
    },
    feedback: {
      success: '送信しました。ありがとうございます！',
      error: '問題が発生しました。もう一度お試しください。'
    }
  }
};

export default ja;
