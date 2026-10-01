import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { normalizar } from '../utils/formato';

export const FILTROS = {
  TODOS: 'todos',
  NO_LEIDOS: 'no-leidos',
};

export function useChatSearch(chats) {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('q') ?? '';
  const filtroCrudo = searchParams.get('filtro') ?? FILTROS.TODOS;

  const filtro = Object.values(FILTROS).includes(filtroCrudo)
    ? filtroCrudo
    : FILTROS.TODOS;

  const actualizarParam = useCallback(
    (clave, valor, valorPorDefecto) => {
      setSearchParams(
        (params) => {
          const nuevos = new URLSearchParams(params);
          if (!valor || valor === valorPorDefecto) {
            nuevos.delete(clave);
          } else {
            nuevos.set(clave, valor);
          }
          return nuevos;
        },
        { replace: true },
      );
    },
    [setSearchParams],
  );

  const setQ = useCallback(
    (texto) => actualizarParam('q', texto, ''),
    [actualizarParam],
  );

  const setFiltro = useCallback(
    (nuevoFiltro) => actualizarParam('filtro', nuevoFiltro, FILTROS.TODOS),
    [actualizarParam],
  );

  const limpiarBusqueda = useCallback(() => setQ(''), [setQ]);

  const chatsFiltrados = useMemo(() => {
    const termino = normalizar(q.trim());

    return chats.filter((chat) => {
      if (filtro === FILTROS.NO_LEIDOS && chat.noLeidos === 0) return false;
      if (!termino) return true;

      const coincideNombre = normalizar(chat.nombre).includes(termino);
      const coincideMensaje = chat.mensajes.some((m) =>
        normalizar(m.texto).includes(termino),
      );

      return coincideNombre || coincideMensaje;
    });
  }, [chats, q, filtro]);

  return {
    q,
    filtro,
    setQ,
    setFiltro,
    limpiarBusqueda,
    chatsFiltrados,
    hayBusquedaActiva: q.trim() !== '' || filtro !== FILTROS.TODOS,
    busquedaActual: searchParams.toString() ? `?${searchParams}` : '',
  };
}
