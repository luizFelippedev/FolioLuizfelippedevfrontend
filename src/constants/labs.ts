import { FiActivity, FiCpu, FiGrid, FiZap, FiRadio, FiLayers } from 'react-icons/fi';
import type { IconType } from 'react-icons';

export const labIconMap: Record<string, IconType> = {
  activity: FiActivity,
  grid: FiGrid,
  cpu: FiCpu,
  signal: FiRadio,
  stack: FiLayers,
  zap: FiZap
};

export const fallbackLabVisual = {
  gradient: 'linear-gradient(135deg,#64748b,#0ea5e9)',
  icon: FiZap
};

export const resolveLabIcon = (icon?: string): IconType => {
  if (!icon) return fallbackLabVisual.icon;
  const key = icon.toLowerCase();
  return labIconMap[key] ?? fallbackLabVisual.icon;
};
