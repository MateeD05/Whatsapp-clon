import { useUser } from '../hooks/useUser';
import { ThemeToggle } from './ThemeToggle';
import { Avatar } from './Avatar';
import '../styles/layout.css';

export function Header() {
  const { usuario, cerrarSesion } = useUser();

  return (
    <header className="header-app">
      <div className="header-app__interior">
        <div className="header-app__marca">
          <span className="header-app__titulo">ChatWspClon</span>
        </div>
        <div className="header-app__acciones">
          {usuario && (
            <>
              <Avatar nombre={usuario.nombre} color="rgba(0, 0, 0, 0.35)" tamano="sm" />
              <span className="header-app__usuario">
                <span className="solo-lectores">Sesión iniciada como </span>
                {usuario.nombre}
              </span>
            </>
          )}

          <ThemeToggle />
          <button type="button" className="boton boton--secundario" onClick={cerrarSesion}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  );
}
