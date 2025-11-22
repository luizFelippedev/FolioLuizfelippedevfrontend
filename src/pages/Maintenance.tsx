import { FiArrowUpRight, FiCheckCircle, FiClock, FiInfo, FiLayers, FiRefreshCw, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const patchNotes = {
  version: 'v1.4.0',
  date: '22 Nov 2025',
  headline: 'PatchNotes - melhorias de performance e UI.',
  summary:
    'Refinamos a experiencia desktop/mobile, melhoramos responsividade, adicionamos aviso de manutencao mobile e ajustamos o fluxo de carregamento.',
  highlights: [
    'Nova barra de aviso mobile com botao de fechar e persistencia.',
    'Layout mais leve e responsivo no banner flutuante.',
    'Ajustes de contraste para temas claro/escuro.'
  ],
  changes: [
    'Home: otimizacao do fundo animado e do gradiente para reduzir uso de GPU.',
    'UI: componentes agora usam variaveis de cor do tema para manter contraste em todos os modos.',
    'Layout: banner mobile com CTA para patch notes, responsividade melhorada em breakpoints menores.',
    'Acessibilidade: foco visivel em CTA e botao de fechar do aviso.'
  ],
  fixes: [
    'Correcao do overlap do botao X no aviso mobile.',
    'Tipografia corrigida para evitar caracteres quebrados em manutencao.',
    'Suavizacao de sombras em cartoes para evitar clipping em telas pequenas.'
  ],
  next: [
    'Liberar dark/light automatico conforme preferencia do sistema.',
    'Adicionar card de status de uptime em tempo real.',
    'Publicar guia de estilo para componentes interativos.',
    'Reformular todo o frontend para mobile-first com acessibilidade total e conteudo facil de navegar.'
  ]
};

const Pill = ({ children, ariaLabel }: { children: React.ReactNode; ariaLabel?: string }) => (
  <span
    aria-label={ariaLabel}
    className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-foreground/75 sm:text-xs sm:tracking-[0.22em]"
  >
    {children}
  </span>
);

const Section = ({ title, items }: { title: string; items: string[] }) => (
  <section
    className="glass-panel space-y-3 rounded-2xl border border-foreground/10 bg-background/75 p-4 shadow-[0_14px_45px_rgba(0,0,0,0.32)] sm:p-5"
    aria-labelledby={`${title}-section`}
  >
    <div className="flex items-center gap-2 text-[0.74rem] uppercase tracking-[0.18em] text-foreground/70 sm:text-[0.78rem] sm:tracking-[0.22em]">
      <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(var(--color-accent),0.16)]" />
      <span id={`${title}-section`}>{title}</span>
    </div>
    <ul className="space-y-2 text-sm text-foreground/85" role="list">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 leading-relaxed" role="listitem">
          <FiCheckCircle className="mt-[2px] text-secondary" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

export const MaintenancePage = () => {
  return (
    <main className="page-shell space-y-10 py-24 text-foreground md:space-y-12 md:py-24" aria-labelledby="maintenance-title">
      <header className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-r from-background via-background/70 to-background/50 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.45)] md:p-8">
        <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(93,102,255,0.28),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(0,232,255,0.22),transparent_30%)]" />
        <div className="relative space-y-4">
          <div className="flex flex-wrap items-center gap-2" aria-label="Metadados de versao">
            <Pill ariaLabel="Patch Notes">
              <FiZap className="text-accent" />
              Patch Notes
            </Pill>
            <Pill ariaLabel={`Data ${patchNotes.date}`}>
              <FiClock />
              {patchNotes.date}
            </Pill>
            <Pill ariaLabel={`Versao ${patchNotes.version}`}>
              <FiRefreshCw />
              {patchNotes.version}
            </Pill>
          </div>
          <div className="space-y-2">
            <h1 id="maintenance-title" className="text-2xl font-display md:text-3xl lg:text-4xl">
              {patchNotes.headline}
            </h1>
            <p className="text-sm text-foreground/75 md:text-base">{patchNotes.summary}</p>
          </div>
          <ul className="flex flex-wrap gap-2 text-[0.7rem] text-foreground/75 md:text-xs" role="list" aria-label="Destaques">
            {patchNotes.highlights.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 uppercase tracking-[0.16em] md:tracking-[0.2em]"
                role="listitem"
              >
                <FiArrowUpRight className="text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section className="grid gap-4 md:gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="glass-panel space-y-4 rounded-3xl border border-foreground/10 bg-gradient-to-r from-background via-background/75 to-background/60 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.36)] sm:p-6">
            <div className="flex flex-wrap gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-foreground/65 sm:text-xs sm:tracking-[0.25em]">
              <Pill>
                <FiLayers />
                Log de versao
              </Pill>
              <Pill>
                <FiInfo />
                Transparencia
              </Pill>
            </div>
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2" role="list" aria-label="Lista de melhorias">
              {patchNotes.changes.map((change) => (
                <article
                  key={change}
                  className="rounded-2xl border border-foreground/10 bg-foreground/5 p-4 shadow-[0_14px_36px_rgba(0,0,0,0.26)]"
                  role="listitem"
                >
                  <div className="mb-2 flex items-center gap-2 text-foreground">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-foreground/10 bg-background/70 text-accent">
                      <FiCheckCircle />
                    </span>
                    <p className="text-[0.8rem] uppercase tracking-[0.28em] text-foreground/60">Melhoria</p>
                  </div>
                  <p className="text-sm text-foreground/80">{change}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-4">
          <Section title="Correcoes" items={patchNotes.fixes} />
          <Section title="Proximos Passos" items={patchNotes.next} />
          <div className="rounded-3xl border border-foreground/10 bg-gradient-to-br from-accent/10 via-secondary/10 to-background p-5 text-foreground shadow-[0_20px_60px_rgba(0,0,0,0.32)]">
            <h4 className="text-sm uppercase tracking-[0.25em] text-foreground/70">Status & suporte</h4>
            <p className="mt-2 text-sm text-foreground/80">
              Precisa de algo imediato? <Link to="/contact" className="text-secondary hover:text-accent">Fale comigo</Link> e te atualizo sobre o rollout.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-foreground/75">
              <span className="rounded-full border border-foreground/10 px-3 py-1">Uptime monitorado</span>
              <span className="rounded-full border border-foreground/10 px-3 py-1">Aviso mobile ativo</span>
              <span className="rounded-full border border-foreground/10 px-3 py-1">CI/CD pronto</span>
            </div>
          </div>
        </aside>
      </section>

      <div className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.28em]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/12 bg-foreground/5 px-4 py-2 text-foreground transition hover:border-[rgba(var(--color-secondary),0.6)] hover:bg-[rgba(var(--color-secondary),0.1)] hover:text-secondary"
        >
          <FiArrowUpRight />
          Home
        </Link>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/12 bg-foreground/5 px-4 py-2 text-foreground/85 transition hover:border-[rgba(var(--color-accent),0.6)] hover:bg-[rgba(var(--color-accent),0.1)] hover:text-accent"
        >
          Projetos
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/12 bg-foreground/5 px-4 py-2 text-foreground/85 transition hover:border-[rgba(var(--color-secondary),0.6)] hover:bg-[rgba(var(--color-secondary),0.1)] hover:text-secondary"
        >
          Contato
        </Link>
      </div>
    </main>
  );
};
