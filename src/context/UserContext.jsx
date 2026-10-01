import { useCallback, useMemo, useState } from 'react';
import { UserContext } from './contextos';

export function UserProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const iniciarSesion = useCallback((nombre) => {
    setUsuario({ nombre: nombre.trim(), desde: new Date().toISOString() });
  }, []);

  const cerrarSesion = useCallback(() => {
    setUsuario(null);
  }, []);

  const valor = useMemo(
    () => ({
      usuario,
      estaLogueado: Boolean(usuario),
      iniciarSesion,
      cerrarSesion,
    }),
    [usuario, iniciarSesion, cerrarSesion],
  );

  return <UserContext.Provider value={valor}>{children}</UserContext.Provider>;
}
