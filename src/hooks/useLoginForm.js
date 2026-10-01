import { useCallback, useState } from 'react';

const LARGO_MINIMO = 3;
const LARGO_MAXIMO = 20;

const CARACTERES_VALIDOS = /^[\p{L}\p{N} _-]+$/u;

export function validarNombre(valor) {
  const limpio = valor.trim();

  if (limpio === '') return 'Ingresá un nombre de usuario para continuar.';
  if (limpio.length < LARGO_MINIMO)
    return `El nombre debe tener al menos ${LARGO_MINIMO} caracteres.`;
  if (limpio.length > LARGO_MAXIMO)
    return `El nombre no puede superar los ${LARGO_MAXIMO} caracteres.`;
  if (!CARACTERES_VALIDOS.test(limpio))
    return 'Solo se permiten letras, números, espacios, guiones y guiones bajos.';

  return null;
}

export function useLoginForm(alEnviar) {
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState(null);

  const [tocado, setTocado] = useState(false);

  const alCambiar = useCallback(
    (evento) => {
      const valor = evento.target.value;
      setNombre(valor);

      if (tocado) setError(validarNombre(valor));
    },
    [tocado],
  );

  const alPerderFoco = useCallback(() => {
    setTocado(true);
    setError(validarNombre(nombre));
  }, [nombre]);

  const alSubmit = useCallback(
    (evento) => {
      evento.preventDefault();

      const mensajeError = validarNombre(nombre);
      setTocado(true);
      setError(mensajeError);

      if (mensajeError) return;

      alEnviar(nombre.trim());
    },
    [nombre, alEnviar],
  );

  return {
    nombre,
    error,
    mostrarError: tocado && Boolean(error),
    alCambiar,
    alPerderFoco,
    alSubmit,
  };
}
