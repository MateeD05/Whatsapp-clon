import '../styles/ui.css';

export function EmptyState({ icono = '💬', titulo, texto, children }) {
  return (
    <div className="estado-vacio">
      <span className="estado-vacio__icono" aria-hidden="true">
        {icono}
      </span>
      <p className="estado-vacio__titulo">{titulo}</p>
      {texto && <p className="estado-vacio__texto">{texto}</p>}
      {children}
    </div>
  );
}
