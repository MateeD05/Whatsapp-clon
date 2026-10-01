import { useCallback, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useChat } from '../hooks/useChat';
import { ChatWindow } from '../components/ChatWindow';
import { EmptyState } from '../components/EmptyState';

export function ConversacionPage() {
  const { chatId } = useParams();
  const [searchParams] = useSearchParams();
  const { obtenerChat, enviarMensaje, marcarComoLeido } = useChat();

  const chat = obtenerChat(chatId);
  const cantidadMensajes = chat?.mensajes.length ?? 0;

  useEffect(() => {
    if (chat) marcarComoLeido(chat.id);
  }, [chat, cantidadMensajes, marcarComoLeido]);

  const alEnviar = useCallback(
    (texto) => enviarMensaje(chatId, texto),
    [enviarMensaje, chatId],
  );

  const volverA = `/chats${searchParams.toString() ? `?${searchParams}` : ''}`;

  if (!chat) {
    return (
      <EmptyState
        icono="🚫"
        titulo="Conversación no encontrada"
        texto={`No existe ningún chat con el identificador “${chatId}”.`}
      >
        <Link className="pagina-centrada__enlace" to="/chats">
          Volver a mis chats
        </Link>
      </EmptyState>
    );
  }

  return <ChatWindow chat={chat} onEnviar={alEnviar} volverA={volverA} />;
}
