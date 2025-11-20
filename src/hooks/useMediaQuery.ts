import { useEffect, useState } from 'react';

/**
 * Hook para consultar media queries (ex.: '(min-width: 1024px)').
 * Retorna true/false e atualiza ao mudar o viewport.
 */
export const useMediaQuery = (query: string) => {
  const getMatch = () => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false);
  const [matches, setMatches] = useState<boolean>(getMatch);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia(query);
    const onChange = () => setMatches(media.matches);

    onChange();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [query]);

  return matches;
};
