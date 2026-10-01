import { formatearFechaLarga, formatearHora } from '../utils/formato';
import '../styles/chat-window.css';

export function MessageBubble({ mensaje, nombreContacto }) {
  const esPropio = mensaje.autor === 'yo';
  const autor = esPropio ? 'Vos' : nombreContacto;

  return (
    <li className={`mensajes__item mensajes__item--${esPropio ? 'propio' : 'ajeno'}`}>
      <article
        className={`burbuja burbuja--${esPropio ? 'propio' : 'ajeno'}`}
        aria-label={`Mensaje de ${autor}`}
      >
        <p className="burbuja__texto">{mensaje.texto}</p>
        <time className="burbuja__hora" dateTime={mensaje.hora} title={formatearFechaLarga(mensaje.hora)}>
          <span className="solo-lectores">Enviado a las </span>
          {formatearHora(mensaje.hora)}
        </time>
      </article>
    </li>
  );
}
