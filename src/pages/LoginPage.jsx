import { useId } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { useLoginForm } from '../hooks/useLoginForm';
import { ThemeToggle } from '../components/ThemeToggle';
import '../styles/forms.css';

export function LoginPage() {
  const { estaLogueado, iniciarSesion } = useUser();
  const location = useLocation();

  const idInput = useId();
  const idError = `${idInput}-error`;
  const idAyuda = `${idInput}-ayuda`;

  const destino = location.state?.from?.pathname
    ? `${location.state.from.pathname}${location.state.from.search ?? ''}`
    : '/chats';

  const { nombre, error, mostrarError, alCambiar, alPerderFoco, alSubmit } =
    useLoginForm(iniciarSesion);

  if (estaLogueado) {
    return <Navigate to={destino} replace />;
  }

  return (
    <div className="login">
      <main className="login__tarjeta">
        <div className="login__encabezado">
          <span aria-hidden="true" style={{ fontSize: '2.5rem', lineHeight: 1 }}>
            💬
          </span>
          <h1 className="login__titulo">Bienvenido a ChatWspClon</h1>
          <p className="login__bajada">
            Ingresá tu nombre de usuario para entrar a tus conversaciones.
          </p>
        </div>
        <form onSubmit={alSubmit} noValidate>
          <div className="campo">
            <label className="campo__label" htmlFor={idInput}>
              Nombre de usuario
            </label>
            <input
              id={idInput}
              name="usuario"
              type="text"
              className="campo__input"
              value={nombre}
              onChange={alCambiar}
              onBlur={alPerderFoco}
              placeholder="Ej: Mateo"
              autoComplete="username"
              autoFocus
              required
              aria-invalid={mostrarError}
              aria-describedby={mostrarError ? `${idError} ${idAyuda}` : idAyuda}
            />
            <p className="campo__ayuda" id={idAyuda}>
              Entre 3 y 20 caracteres. Se guarda solo en tu navegador.
            </p>
            {mostrarError && (
              <p className="campo__error" id={idError} role="alert">
                <span aria-hidden="true">⚠️</span>
                <span>{error}</span>
              </p>
            )}
          </div>
          <button type="submit" className="boton boton--primario">
            Entrar
          </button>
        </form>
        <div className="login__acciones-extra">
          <ThemeToggle />
        </div>
      </main>
    </div>
  );
}
