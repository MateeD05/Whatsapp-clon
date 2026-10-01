import { useContext } from 'react';
import { ThemeContext } from '../context/contextos';

export function useTheme() {
  const contexto = useContext(ThemeContext);

  if (contexto === null) {
    throw new Error('useTheme debe usarse dentro de <ThemeProvider>');
  }

  return contexto;
}
