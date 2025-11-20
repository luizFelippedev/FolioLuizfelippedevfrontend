import clsx from 'clsx';

import { resolveTechnologyMeta } from '@constants/techIcons';

interface TechnologyBadgesProps {
  items?: string[];
  className?: string;
  condensed?: boolean;
}

export const TechnologyBadges = ({ items, className, condensed }: TechnologyBadgesProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      className={clsx(
        'flex flex-wrap gap-2 text-xs text-foreground/80',
        condensed ? 'gap-1.5 text-[0.6rem]' : 'text-xs',
        className
      )}
    >
      {items.map((item) => {
        const meta = resolveTechnologyMeta(item);
        const IconComp = meta.Icon;
        return (
          <span
            key={`${meta.id}-${item}`}
            className={clsx(
              'inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-3 py-1',
              condensed ? 'bg-background/30' : 'bg-background/50'
            )}
          >
            {IconComp ? <IconComp className="text-base text-foreground/70" aria-hidden /> : null}
            {meta.name}
          </span>
        );
      })}
    </div>
  );
};

export default TechnologyBadges;
