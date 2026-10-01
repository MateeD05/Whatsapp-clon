import { useContext } from 'react';
import { UserContext } from '../context/contextos';

export function useUser() {
  const contexto = useContext(UserContext);

  if (contexto === null) {
    throw new Error('useUser debe usarse dentro de <UserProvider>');
  }

  return contexto;
}
