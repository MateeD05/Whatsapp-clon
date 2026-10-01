import { useEffect, useRef } from 'react';

export function useAutoScroll(dependencia) {
  const refContenedor = useRef(null);

  useEffect(() => {
    const elemento = refContenedor.current;
    if (!elemento) return;

    elemento.scrollTop = elemento.scrollHeight;
  }, [dependencia]);

  return refContenedor;
}
