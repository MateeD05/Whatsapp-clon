import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import '../styles/layout.css';

export function Layout() {
  return (
    <div className="app">
      <a className="saltar-contenido" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="app__contenedor">
        <Outlet />
      </main>
    </div>
  );
}
