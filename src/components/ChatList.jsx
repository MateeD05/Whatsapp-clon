import { ChatItem } from './ChatItem';
import { EmptyState } from './EmptyState';
import '../styles/chat-list.css';

export function ChatList({ chats, busqueda, hayBusquedaActiva }) {
  if (chats.length === 0) {
    return (
      <EmptyState
        icono="🔎"
        titulo="Sin resultados"
        texto={
          hayBusquedaActiva
            ? 'Probá con otro nombre o quitá el filtro de no leídos.'
            : 'Todavía no hay conversaciones para mostrar.'
        }
      />
    );
  }

  return (
    <nav aria-label="Lista de conversaciones" className="lista-chats">
      <ul>
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} busqueda={busqueda} />
        ))}
      </ul>
    </nav>
  );
}
