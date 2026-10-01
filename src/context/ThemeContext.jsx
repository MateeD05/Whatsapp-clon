import { useCallback, useEffect, useMemo } from 'react';
import { ThemeContext } from './contextos';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CLAVE_STORAGE = 'chatwspclon:tema';

function temaPorDefecto() {
  const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefiereOscuro ? 'oscuro' : 'claro';
}

export function ThemeProvider({ children }) {
  const [tema, setTema] = useLocalStorage(CLAVE_STORAGE, temaPorDefecto());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);

    document.documentElement.style.colorScheme = tema === 'oscuro' ? 'dark' : 'light';
  }, [tema]);

  const alternarTema = useCallback(() => {
    setTema((actual) => (actual === 'oscuro' ? 'claro' : 'oscuro'));
  }, [setTema]);

  const valor = useMemo(
    () => ({
      tema,
      esOscuro: tema === 'oscuro',
      alternarTema,
    }),
    [tema, alternarTema],
  );

  return <ThemeContext.Provider value={valor}>{children}</ThemeContext.Provider>;
}
