import { NavLink } from 'react-router-dom';
import { Avatar } from './Avatar';
import { formatearFechaCorta } from '../utils/formato';
import '../styles/chat-list.css';

export function ChatItem({ chat, busqueda }) {
  const { id, nombre, color, ultimoMensaje, noLeidos } = chat;

  const previa = ultimoMensaje
    ? `${ultimoMensaje.autor === 'yo' ? 'Vos: ' : ''}${ultimoMensaje.texto}`
    : 'Todavía no hay mensajes';

  return (
    <li>
      <NavLink
        to={`/chats/${id}${busqueda}`}
        className={({ isActive }) =>
          [
            'chat-item',
            isActive ? 'chat-item--activo' : '',
            noLeidos > 0 ? 'chat-item--no-leido' : '',
          ]
            .filter(Boolean)
            .join(' ')
        }
      >
        <Avatar nombre={nombre} color={color} />
        <span className="chat-item__cuerpo">
          <span className="chat-item__fila">
            <span className="chat-item__nombre">{nombre}</span>
            {ultimoMensaje && (
              <span className="chat-item__hora">
                {formatearFechaCorta(ultimoMensaje.hora)}
              </span>
            )}
          </span>
          <span className="chat-item__fila">
            <span className="chat-item__previa">{previa}</span>
            {noLeidos > 0 && (
              <span className="badge">
                <span aria-hidden="true">{noLeidos}</span>
                <span className="solo-lectores">
                  {noLeidos} {noLeidos === 1 ? 'mensaje sin leer' : 'mensajes sin leer'}
                </span>
              </span>
            )}
          </span>
        </span>
      </NavLink>
    </li>
  );
}
