import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { esOscuro, alternarTema } = useTheme();

  const etiqueta = esOscuro ? 'Activar tema claro' : 'Activar tema oscuro';

  return (
    <button
      type="button"
      className="boton boton--icono"
      onClick={alternarTema}
      aria-label={etiqueta}
      title={etiqueta}
      aria-pressed={esOscuro}
    >
      <span aria-hidden="true">{esOscuro ? '☀️' : '🌙'}</span>
    </button>
  );
}
