import { obtenerIniciales } from '../utils/formato';
import '../styles/ui.css';

export function Avatar({ nombre, color, tamano = 'md' }) {
  const claseTamano = tamano === 'md' ? '' : ` avatar--${tamano}`;

  return (
    <span
      className={`avatar${claseTamano}`}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {obtenerIniciales(nombre)}
    </span>
  );
}
