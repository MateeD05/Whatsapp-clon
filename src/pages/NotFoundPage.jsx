import { Link } from 'react-router-dom';
import '../styles/paginas.css';

export function NotFoundPage() {
  return (
    <div className="pagina-centrada">
      <main className="pagina-centrada__tarjeta">
        <p className="pagina-centrada__codigo" aria-hidden="true">
          404
        </p>
        <h1 className="pagina-centrada__titulo">Página no encontrada</h1>
        <p className="pagina-centrada__texto">
          La dirección que intentaste abrir no existe o fue movida.
        </p>
        <Link className="pagina-centrada__enlace" to="/chats">
          Ir a mis conversaciones
        </Link>
      </main>
    </div>
  );
}
