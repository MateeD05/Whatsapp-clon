import { useId } from 'react';
import '../styles/chat-list.css';

export function SearchBar({ valor, alCambiar, alLimpiar, cantidadResultados }) {
  const idInput = useId();

  return (
    <div className="buscador">
      <label className="solo-lectores" htmlFor={idInput}>
        Buscar conversaciones por nombre o por contenido
      </label>
      <div className="buscador__campo">
        <span className="buscador__icono" aria-hidden="true">
          🔍
        </span>
        <input
          id={idInput}
          type="search"
          className="buscador__input"
          placeholder="Buscar o empezar un chat"
          value={valor}
          onChange={(evento) => alCambiar(evento.target.value)}
          autoComplete="off"
        />
        {valor !== '' && (
          <button
            type="button"
            className="boton boton--icono buscador__limpiar"
            onClick={alLimpiar}
            aria-label="Limpiar búsqueda"
          >
            <span aria-hidden="true">✕</span>
          </button>
        )}
      </div>
      <p className="solo-lectores" role="status">
        {cantidadResultados}{' '}
        {cantidadResultados === 1
          ? 'conversación encontrada'
          : 'conversaciones encontradas'}
      </p>
    </div>
  );
}
