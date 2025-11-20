import type { IconType } from 'react-icons';
import * as SiIcons from 'react-icons/si';

export interface TechnologyMeta {
  id: string;
  name: string;
  Icon?: IconType;
}

const getIcon = (name: string): IconType | undefined => (SiIcons as Record<string, IconType | undefined>)[name];

const catalog = new Map<string, TechnologyMeta>();

const register = (meta: TechnologyMeta, aliases: string[]) => {
  aliases.forEach((alias) => {
    const key = alias.trim().toLowerCase();
    if (key) {
      catalog.set(key, meta);
    }
  });
};

const entries: Array<[TechnologyMeta, string[]]> = [
  [{ id: 'react', name: 'React', Icon: getIcon('SiReact') }, ['react', 'reactjs', 'react.js', 'rear']],
  [{ id: 'react-native', name: 'React Native', Icon: getIcon('SiReact') }, ['react native', 'react-native', 'rn']],
  [{ id: 'nextjs', name: 'Next.js', Icon: getIcon('SiNextdotjs') }, ['next', 'nextjs', 'next.js']],
  [{ id: 'remix', name: 'Remix', Icon: getIcon('SiRemix') }, ['remix']],
  [{ id: 'astro', name: 'Astro', Icon: getIcon('SiAstro') }, ['astro']],
  [{ id: 'gatsby', name: 'Gatsby', Icon: getIcon('SiGatsby') }, ['gatsby']],
  [{ id: 'angular', name: 'Angular', Icon: getIcon('SiAngular') }, ['angular']],
  [{ id: 'vue', name: 'Vue.js', Icon: getIcon('SiVuedotjs') }, ['vue', 'vuejs', 'vue.js']],
  [{ id: 'nuxt', name: 'Nuxt.js', Icon: getIcon('SiNuxtdotjs') }, ['nuxt', 'nuxtjs', 'nuxt.js']],
  [{ id: 'svelte', name: 'Svelte', Icon: getIcon('SiSvelte') }, ['svelte']],
  [{ id: 'solid', name: 'SolidJS', Icon: getIcon('SiSolid') }, ['solid', 'solidjs']],
  [{ id: 'qwik', name: 'Qwik', Icon: getIcon('SiQwik') }, ['qwik']],
  [{ id: 'vite', name: 'Vite', Icon: getIcon('SiVite') }, ['vite']],
  [{ id: 'webpack', name: 'Webpack', Icon: getIcon('SiWebpack') }, ['webpack']],
  [{ id: 'rollup', name: 'Rollup', Icon: getIcon('SiRollupdotjs') }, ['rollup', 'rollupjs']],
  [{ id: 'astro-build', name: 'Astro', Icon: getIcon('SiAstro') }, ['astro build']],
  [{ id: 'parcel', name: 'Parcel', Icon: getIcon('SiBabel') }, ['parcel']],
  [{ id: 'babel', name: 'Babel', Icon: getIcon('SiBabel') }, ['babel']],
  [{ id: 'snowpack', name: 'Snowpack', Icon: getIcon('SiSnowpack') }, ['snowpack']],
  [{ id: 'storybook', name: 'Storybook', Icon: getIcon('SiStorybook') }, ['storybook']],
  [{ id: 'tailwind', name: 'Tailwind CSS', Icon: getIcon('SiTailwindcss') }, ['tailwind', 'tailwindcss', 'tailwind css']],
  [{ id: 'sass', name: 'Sass', Icon: getIcon('SiSass') }, ['sass', 'scss']],
  [{ id: 'less', name: 'Less', Icon: getIcon('SiLess') }, ['less']],
  [{ id: 'css', name: 'CSS3', Icon: getIcon('SiCss3') }, ['css', 'css3']],
  [{ id: 'html', name: 'HTML5', Icon: getIcon('SiHtml5') }, ['html', 'html5']],
  [{ id: 'styled-components', name: 'Styled Components', Icon: getIcon('SiStyledcomponents') }, ['styled-components', 'styled components']],
  [{ id: 'chakraui', name: 'Chakra UI', Icon: getIcon('SiChakraui') }, ['chakra', 'chakra ui']],
  [{ id: 'mui', name: 'Material UI', Icon: getIcon('SiMui') }, ['mui', 'material ui', 'material design']],
  [{ id: 'antdesign', name: 'Ant Design', Icon: getIcon('SiAntdesign') }, ['antdesign', 'ant design']],
  [{ id: 'bootstrap', name: 'Bootstrap', Icon: getIcon('SiBootstrap') }, ['bootstrap']],
  [{ id: 'node', name: 'Node.js', Icon: getIcon('SiNodedotjs') }, ['node', 'nodejs', 'node.js']],
  [{ id: 'express', name: 'Express', Icon: getIcon('SiExpress') }, ['express', 'expressjs']],
  [{ id: 'nest', name: 'NestJS', Icon: getIcon('SiNestjs') }, ['nest', 'nestjs']],
  [{ id: 'fastify', name: 'Fastify', Icon: getIcon('SiFastify') }, ['fastify']],
  [{ id: 'koa', name: 'Koa', Icon: getIcon('SiKoa') }, ['koa']],
  [{ id: 'adonis', name: 'AdonisJS', Icon: getIcon('SiAdonisjs') }, ['adonis', 'adonisjs']],
  [{ id: 'laravel', name: 'Laravel', Icon: getIcon('SiLaravel') }, ['laravel']],
  [{ id: 'symfony', name: 'Symfony', Icon: getIcon('SiSymfony') }, ['symfony']],
  [{ id: 'codeigniter', name: 'CodeIgniter', Icon: getIcon('SiCodeigniter') }, ['codeigniter']],
  [{ id: 'spring', name: 'Spring', Icon: getIcon('SiSpring') }, ['spring', 'springboot', 'spring boot']],
  [{ id: 'django', name: 'Django', Icon: getIcon('SiDjango') }, ['django']],
  [{ id: 'flask', name: 'Flask', Icon: getIcon('SiFlask') }, ['flask']],
  [{ id: 'fastapi', name: 'FastAPI', Icon: getIcon('SiFastapi') }, ['fastapi']],
  [{ id: 'rails', name: 'Ruby on Rails', Icon: getIcon('SiRubyonrails') }, ['rails', 'ruby on rails']],
  [{ id: 'phoenix', name: 'Phoenix', Icon: getIcon('SiPhoenixframework') }, ['phoenix', 'phoenixframework']],
  [{ id: 'dotnet', name: '.NET', Icon: getIcon('SiDotnet') }, ['.net', 'dotnet', 'net']],
  [{ id: 'csharp', name: 'C#', Icon: getIcon('SiDotnet') }, ['c#', 'csharp', 'c-sharp', 'cysharp']],
  [{ id: 'cpp', name: 'C++', Icon: getIcon('SiCplusplus') }, ['c++', 'cpp', 'cplusplus']],
  [{ id: 'c', name: 'C', Icon: getIcon('SiC') }, ['c']],
  [{ id: 'fsharp', name: 'F#', Icon: getIcon('SiFsharp') }, ['f#', 'fsharp']],
  [{ id: 'rust', name: 'Rust', Icon: getIcon('SiRust') }, ['rust']],
  [{ id: 'go', name: 'Go', Icon: getIcon('SiGo') }, ['go', 'golang']],
  [{ id: 'python', name: 'Python', Icon: getIcon('SiPython') }, ['python', 'py']],
  [{ id: 'java', name: 'Java', Icon: getIcon('SiSpring') }, ['java']], // fallback icon
  [{ id: 'kotlin', name: 'Kotlin', Icon: getIcon('SiKotlin') }, ['kotlin']],
  [{ id: 'scala', name: 'Scala', Icon: getIcon('SiScala') }, ['scala']],
  [{ id: 'swift', name: 'Swift', Icon: getIcon('SiSwift') }, ['swift']],
  [{ id: 'objective-c', name: 'Objective-C', Icon: getIcon('SiApple') }, ['objective-c', 'objective c']],
  [{ id: 'dart', name: 'Dart', Icon: getIcon('SiDart') }, ['dart']],
  [{ id: 'php', name: 'PHP', Icon: getIcon('SiPhp') }, ['php']],
  [{ id: 'ruby', name: 'Ruby', Icon: getIcon('SiRuby') }, ['ruby']],
  [{ id: 'elixir', name: 'Elixir', Icon: getIcon('SiElixir') }, ['elixir']],
  [{ id: 'lua', name: 'Lua', Icon: getIcon('SiLua') }, ['lua']],
  [{ id: 'haskell', name: 'Haskell', Icon: getIcon('SiHaskell') }, ['haskell']],
  [{ id: 'bash', name: 'Bash', Icon: getIcon('SiGnubash') }, ['bash', 'shell', 'sh', 'zsh']],
  [{ id: 'powershell', name: 'PowerShell', Icon: getIcon('SiGnubash') }, ['powershell', 'ps1']],
  [{ id: 'typescript', name: 'TypeScript', Icon: getIcon('SiTypescript') }, ['typescript', 'ts']],
  [{ id: 'javascript', name: 'JavaScript', Icon: getIcon('SiJavascript') }, ['javascript', 'js']],
  [{ id: 'redux', name: 'Redux', Icon: getIcon('SiRedux') }, ['redux']],
  [{ id: 'apollo', name: 'Apollo GraphQL', Icon: getIcon('SiApollographql') }, ['apollo', 'apollographql']],
  [{ id: 'graphql', name: 'GraphQL', Icon: getIcon('SiGraphql') }, ['graphql']],
  [{ id: 'prisma', name: 'Prisma', Icon: getIcon('SiPrisma') }, ['prisma']],
  [{ id: 'sequelize', name: 'Sequelize', Icon: getIcon('SiSequelize') }, ['sequelize']],
  [{ id: 'mongoose', name: 'Mongoose', Icon: getIcon('SiMongoose') }, ['mongoose']],
  [{ id: 'mysql', name: 'MySQL', Icon: getIcon('SiMysql') }, ['mysql']],
  [{ id: 'postgres', name: 'PostgreSQL', Icon: getIcon('SiPostgresql') }, ['postgres', 'postgresql', 'postgre sql']],
  [{ id: 'sqlite', name: 'SQLite', Icon: getIcon('SiSqlite') }, ['sqlite']],
  [{ id: 'mariadb', name: 'MariaDB', Icon: getIcon('SiMariadb') }, ['mariadb']],
  [{ id: 'mongodb', name: 'MongoDB', Icon: getIcon('SiMongodb') }, ['mongodb', 'mongo']],
  [{ id: 'redis', name: 'Redis', Icon: getIcon('SiRedis') }, ['redis']],
  [{ id: 'firebase', name: 'Firebase', Icon: getIcon('SiFirebase') }, ['firebase']],
  [{ id: 'supabase', name: 'Supabase', Icon: getIcon('SiSupabase') }, ['supabase']],
  [{ id: 'elastic', name: 'Elasticsearch', Icon: getIcon('SiElasticsearch') }, ['elasticsearch', 'elastic']],
  [{ id: 'kibana', name: 'Kibana', Icon: getIcon('SiKibana') }, ['kibana']],
  [{ id: 'grafana', name: 'Grafana', Icon: getIcon('SiGrafana') }, ['grafana']],
  [{ id: 'prometheus', name: 'Prometheus', Icon: getIcon('SiPrometheus') }, ['prometheus']],
  [{ id: 'kafka', name: 'Kafka', Icon: getIcon('SiApachekafka') }, ['kafka', 'apache kafka']],
  [{ id: 'rabbitmq', name: 'RabbitMQ', Icon: getIcon('SiRabbitmq') }, ['rabbitmq']],
  [{ id: 'docker', name: 'Docker', Icon: getIcon('SiDocker') }, ['docker']],
  [{ id: 'kubernetes', name: 'Kubernetes', Icon: getIcon('SiKubernetes') }, ['kubernetes', 'k8s']],
  [{ id: 'terraform', name: 'Terraform', Icon: getIcon('SiTerraform') }, ['terraform']],
  [{ id: 'ansible', name: 'Ansible', Icon: getIcon('SiAnsible') }, ['ansible']],
  [{ id: 'jenkins', name: 'Jenkins', Icon: getIcon('SiJenkins') }, ['jenkins']],
  [{ id: 'github-actions', name: 'GitHub Actions', Icon: getIcon('SiGithubactions') }, ['github actions', 'gh actions']],
  [{ id: 'git', name: 'Git', Icon: getIcon('SiGit') }, ['git']],
  [{ id: 'github', name: 'GitHub', Icon: getIcon('SiGithub') }, ['github']],
  [{ id: 'gitlab', name: 'GitLab', Icon: getIcon('SiGitlab') }, ['gitlab']],
  [{ id: 'bitbucket', name: 'Bitbucket', Icon: getIcon('SiBitbucket') }, ['bitbucket']],
  [{ id: 'circleci', name: 'CircleCI', Icon: getIcon('SiCircleci') }, ['circleci']],
  [{ id: 'travis', name: 'Travis CI', Icon: getIcon('SiTravisci') }, ['travis', 'travisci']],
  [{ id: 'npm', name: 'npm', Icon: getIcon('SiNpm') }, ['npm']],
  [{ id: 'yarn', name: 'Yarn', Icon: getIcon('SiYarn') }, ['yarn']],
  [{ id: 'pnpm', name: 'pnpm', Icon: getIcon('SiPnpm') }, ['pnpm']],
  [{ id: 'composer', name: 'Composer', Icon: getIcon('SiComposer') }, ['composer']],
  [{ id: 'gradle', name: 'Gradle', Icon: getIcon('SiGradle') }, ['gradle']],
  [{ id: 'maven', name: 'Maven', Icon: getIcon('SiApachemaven') }, ['maven', 'apache maven']],
  [{ id: 'aws', name: 'AWS', Icon: getIcon('SiAmazonwebservices') }, ['aws', 'amazon web services']],
  [{ id: 'amplify', name: 'AWS Amplify', Icon: getIcon('SiAwsamplify') }, ['amplify', 'aws amplify']],
  [{ id: 'azure', name: 'Azure', Icon: getIcon('SiAmazonwebservices') }, ['azure', 'microsoft azure']],
  [{ id: 'gcp', name: 'Google Cloud', Icon: getIcon('SiGooglecloud') }, ['gcp', 'google cloud', 'google cloud platform']],
  [{ id: 'digitalocean', name: 'DigitalOcean', Icon: getIcon('SiDigitalocean') }, ['digitalocean']],
  [{ id: 'vercel', name: 'Vercel', Icon: getIcon('SiVercel') }, ['vercel']],
  [{ id: 'netlify', name: 'Netlify', Icon: getIcon('SiNetlify') }, ['netlify']],
  [{ id: 'heroku', name: 'Heroku', Icon: getIcon('SiHeroku') }, ['heroku']],
  [{ id: 'cloudflare', name: 'Cloudflare', Icon: getIcon('SiCloudflare') }, ['cloudflare']],
  [{ id: 'android', name: 'Android', Icon: getIcon('SiAndroid') }, ['android']],
  [{ id: 'ios', name: 'iOS', Icon: getIcon('SiApple') }, ['ios', 'apple']],
  [{ id: 'flutter', name: 'Flutter', Icon: getIcon('SiFlutter') }, ['flutter']],
  [{ id: 'ionic', name: 'Ionic', Icon: getIcon('SiIonic') }, ['ionic']],
  [{ id: 'capacitor', name: 'Capacitor', Icon: getIcon('SiCapacitor') }, ['capacitor']],
  [{ id: 'xamarin', name: 'Xamarin', Icon: getIcon('SiXamarin') }, ['xamarin']],
  [{ id: 'expo', name: 'Expo', Icon: getIcon('SiExpo') }, ['expo']],
  [{ id: 'unity', name: 'Unity', Icon: getIcon('SiUnity') }, ['unity']],
  [{ id: 'unreal', name: 'Unreal Engine', Icon: getIcon('SiUnrealengine') }, ['unreal', 'unreal engine']],
  [{ id: 'blender', name: 'Blender', Icon: getIcon('SiBlender') }, ['blender']],
  [{ id: 'figma', name: 'Figma', Icon: getIcon('SiFigma') }, ['figma']],
  [{ id: 'adobexd', name: 'Adobe XD', Icon: getIcon('SiAdobexd') }, ['adobe xd', 'xd']],
  [{ id: 'illustrator', name: 'Illustrator', Icon: getIcon('SiAdobeillustrator') }, ['illustrator', 'ai']],
  [{ id: 'photoshop', name: 'Photoshop', Icon: getIcon('SiAdobephotoshop') }, ['photoshop', 'ps']],
  [{ id: 'framer', name: 'Framer', Icon: getIcon('SiFramer') }, ['framer']],
  [{ id: 'canva', name: 'Canva', Icon: getIcon('SiCanva') }, ['canva']],
  [{ id: 'notion', name: 'Notion', Icon: getIcon('SiNotion') }, ['notion']],
  [{ id: 'jira', name: 'Jira', Icon: getIcon('SiJira') }, ['jira']],
  [{ id: 'trello', name: 'Trello', Icon: getIcon('SiTrello') }, ['trello']],
  [{ id: 'slack', name: 'Slack', Icon: getIcon('SiSlack') }, ['slack']],
  [{ id: 'postman', name: 'Postman', Icon: getIcon('SiPostman') }, ['postman']],
  [{ id: 'insomnia', name: 'Insomnia', Icon: getIcon('SiInsomnia') }, ['insomnia']],
  [{ id: 'swagger', name: 'Swagger', Icon: getIcon('SiOpenapiinitiative') }, ['swagger', 'openapi']],
  [{ id: 'algolia', name: 'Algolia', Icon: getIcon('SiAlgolia') }, ['algolia']],
  [{ id: 'shopify', name: 'Shopify', Icon: getIcon('SiShopify') }, ['shopify']],
  [{ id: 'woocommerce', name: 'WooCommerce', Icon: getIcon('SiWoocommerce') }, ['woocommerce']],
  [{ id: 'webflow', name: 'Webflow', Icon: getIcon('SiWebflow') }, ['webflow']],
  [{ id: 'stripe', name: 'Stripe', Icon: getIcon('SiStripe') }, ['stripe']],
  [{ id: 'paypal', name: 'PayPal', Icon: getIcon('SiPaypal') }, ['paypal']],
  [{ id: 'sentry', name: 'Sentry', Icon: getIcon('SiSentry') }, ['sentry']],
  [{ id: 'datadog', name: 'Datadog', Icon: getIcon('SiDatadog') }, ['datadog']],
  [{ id: 'newrelic', name: 'New Relic', Icon: getIcon('SiNewrelic') }, ['new relic', 'newrelic']],
  [{ id: 'pagerduty', name: 'PagerDuty', Icon: getIcon('SiPagerduty') }, ['pagerduty']],
  [{ id: 'testing-library', name: 'Testing Library', Icon: getIcon('SiTestinglibrary') }, ['testing library', 'rtl']],
  [{ id: 'jest', name: 'Jest', Icon: getIcon('SiJest') }, ['jest']],
  [{ id: 'vitest', name: 'Vitest', Icon: getIcon('SiVitest') }, ['vitest']],
  [{ id: 'cypress', name: 'Cypress', Icon: getIcon('SiCypress') }, ['cypress']],
  [{ id: 'selenium', name: 'Selenium', Icon: getIcon('SiSelenium') }, ['selenium']]
];

entries.forEach(([meta, aliases]) => register(meta, aliases));

const formatName = (value: string) =>
  value
    .split(/[\s_-]+/)
    .map((token) => (token ? token.charAt(0).toUpperCase() + token.slice(1).toLowerCase() : token))
    .join(' ')
    .replace(/Js\b/g, 'JS')
    .replace(/Ts\b/g, 'TS')
    .replace('Aws', 'AWS')
    .replace('Gcp', 'GCP');

export const resolveTechnologyMeta = (value: string): TechnologyMeta => {
  const normalized = value?.trim();
  if (!normalized) {
    return { id: 'unknown', name: 'Unknown' };
  }
  const key = normalized.toLowerCase();
  const meta = catalog.get(key);
  if (meta) {
    return meta;
  }

  return {
    id: key.replace(/[^a-z0-9]+/g, '-'),
    name: formatName(normalized)
  };
};
