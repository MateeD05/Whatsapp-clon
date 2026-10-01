import { FILTROS } from '../hooks/useChatSearch';
import '../styles/chat-list.css';

const OPCIONES = [
  { valor: FILTROS.TODOS, etiqueta: 'Todos' },
  { valor: FILTROS.NO_LEIDOS, etiqueta: 'No leídos' },
];

export function ChatFilters({ filtroActivo, alCambiarFiltro }) {
  return (
    <div className="filtros" role="group" aria-label="Filtrar conversaciones">
      {OPCIONES.map((opcion) => (
        <button
          key={opcion.valor}
          type="button"
          className="filtro-chip"
          aria-pressed={filtroActivo === opcion.valor}
          onClick={() => alCambiarFiltro(opcion.valor)}
        >
          {opcion.etiqueta}
        </button>
      ))}
    </div>
  );
}
