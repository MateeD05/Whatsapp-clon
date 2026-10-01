import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';
import { MessageBubble } from './MessageBubble';
import { MessageInput } from './MessageInput';
import { useAutoScroll } from '../hooks/useAutoScroll';
import '../styles/chat-window.css';

export function ChatWindow({ chat, onEnviar, volverA }) {
  const refMensajes = useAutoScroll(`${chat.id}:${chat.mensajes.length}`);

  return (
    <section className="conversacion" aria-label={`Conversación con ${chat.nombre}`}>
      <header className="conversacion__header">
        <Link
          to={volverA}
          className="boton boton--icono solo-mobile"
          aria-label="Volver a la lista de conversaciones"
        >
          <span aria-hidden="true">←</span>
        </Link>
        <Avatar nombre={chat.nombre} color={chat.color} tamano="sm" />
        <div className="conversacion__datos">
          <h2 className="conversacion__nombre">{chat.nombre}</h2>
          <p className="conversacion__estado">{chat.estado}</p>
        </div>
      </header>
      <ul
        className="mensajes"
        ref={refMensajes}
        role="log"
        aria-live="polite"
        aria-relevant="additions"
        tabIndex={0}
        aria-label="Historial de mensajes"
      >
        {chat.mensajes.map((mensaje) => (
          <MessageBubble
            key={mensaje.id}
            mensaje={mensaje}
            nombreContacto={chat.nombre}
          />
        ))}
      </ul>
      <MessageInput
        chatId={chat.id}
        nombreContacto={chat.nombre}
        onEnviar={onEnviar}
      />
    </section>
  );
}
