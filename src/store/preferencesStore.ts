import { create } from 'zustand';

interface PreferencesState {
  labs: Record<string, boolean>;
  toggleLab: (id: string) => void;
}

const STORAGE_KEY = 'portfolio-preferences';

const loadStorage = (): Record<string, boolean> => {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Record<string, boolean>) : {};
  } catch {
    return {};
  }
};

const persist = (labs: Record<string, boolean>) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(labs));
  }
};

export const usePreferencesStore = create<PreferencesState>((set, get) => ({
  labs: loadStorage(),
  toggleLab: (id: string) => {
    set((state) => {
      const next = { ...state.labs, [id]: !state.labs[id] };
      persist(next);
      return { labs: next };
    });
    return get().labs;
  }
}));
