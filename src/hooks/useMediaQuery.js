import { useCallback, useSyncExternalStore } from 'react';

export function useMediaQuery(consulta) {
  const suscribir = useCallback(
    (alCambiar) => {
      const mql = window.matchMedia(consulta);
      mql.addEventListener('change', alCambiar);
      return () => mql.removeEventListener('change', alCambiar);
    },
    [consulta],
  );

  const leerValor = useCallback(
    () => window.matchMedia(consulta).matches,
    [consulta],
  );

  return useSyncExternalStore(suscribir, leerValor);
}

export function useEsEscritorio() {
  return useMediaQuery('(min-width: 768px)');
}
