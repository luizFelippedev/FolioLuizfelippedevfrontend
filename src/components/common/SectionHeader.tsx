import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  cta?: {
    label: string;
    to: string;
  };
}

export const SectionHeader = ({ eyebrow, title, description, cta }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/45">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-display">{title}</h2>
        {description ? <p className="mt-2 max-w-2xl text-sm text-foreground/70">{description}</p> : null}
      </motion.div>

      {cta ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link
            to={cta.to}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-accent/60 hover:text-accent"
          >
            {cta.label}
            <span aria-hidden className="text-base">
              ↗
            </span>
          </Link>
        </motion.div>
      ) : null}
    </div>
  );
};
