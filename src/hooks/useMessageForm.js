import { useCallback, useState } from 'react';

export function useMessageForm(enviar) {
  const [texto, setTexto] = useState('');

  const estaVacio = texto.trim() === '';

  const alCambiar = useCallback((evento) => {
    setTexto(evento.target.value);
  }, []);

  const alSubmit = useCallback(
    (evento) => {
      evento?.preventDefault();
      if (estaVacio) return;

      const seEnvio = enviar(texto);
      if (seEnvio) setTexto('');
    },
    [texto, estaVacio, enviar],
  );

  const alPresionarTecla = useCallback(
    (evento) => {
      if (evento.key === 'Enter' && !evento.shiftKey) {
        evento.preventDefault();
        alSubmit();
      }
    },
    [alSubmit],
  );

  const reiniciar = useCallback(() => setTexto(''), []);

  return { texto, estaVacio, alCambiar, alSubmit, alPresionarTecla, reiniciar };
}
