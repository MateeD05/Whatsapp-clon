import { useCallback, useMemo, useReducer } from 'react';
import { ChatContext } from './contextos';
import { CONTACTOS, MENSAJES_INICIALES } from '../data/chats';

let contadorMensajes = 0;
function nuevoId(chatId) {
  contadorMensajes += 1;
  return `${chatId}-nuevo-${contadorMensajes}`;
}

function chatReducer(mensajesPorChat, accion) {
  switch (accion.tipo) {
    case 'ENVIAR_MENSAJE': {
      const { chatId, mensaje } = accion;
      return {
        ...mensajesPorChat,
        [chatId]: [...(mensajesPorChat[chatId] ?? []), mensaje],
      };
    }

    case 'MARCAR_LEIDO': {
      const { chatId } = accion;
      const mensajes = mensajesPorChat[chatId];
      if (!mensajes) return mensajesPorChat;

      const hayNoLeidos = mensajes.some((m) => m.autor === 'contacto' && !m.leido);
      if (!hayNoLeidos) return mensajesPorChat;

      return {
        ...mensajesPorChat,
        [chatId]: mensajes.map((m) => (m.leido ? m : { ...m, leido: true })),
      };
    }

    default:
      throw new Error(`Acción de chat desconocida: ${accion.tipo}`);
  }
}

export function ChatProvider({ children }) {
  const [mensajesPorChat, dispatch] = useReducer(chatReducer, MENSAJES_INICIALES);

  const enviarMensaje = useCallback((chatId, texto) => {
    const limpio = texto.trim();
    if (!limpio) return false;

    dispatch({
      tipo: 'ENVIAR_MENSAJE',
      chatId,
      mensaje: {
        id: nuevoId(chatId),
        autor: 'yo',
        texto: limpio,
        hora: new Date().toISOString(),
        leido: true,
      },
    });

    return true;
  }, []);

  const marcarComoLeido = useCallback((chatId) => {
    dispatch({ tipo: 'MARCAR_LEIDO', chatId });
  }, []);

  const chats = useMemo(() => {
    return CONTACTOS.map((contacto) => {
      const mensajes = mensajesPorChat[contacto.id] ?? [];
      const ultimoMensaje = mensajes[mensajes.length - 1] ?? null;
      const noLeidos = mensajes.filter(
        (m) => m.autor === 'contacto' && !m.leido,
      ).length;

      return { ...contacto, mensajes, ultimoMensaje, noLeidos };
    }).sort((a, b) => {
      const fechaA = a.ultimoMensaje ? new Date(a.ultimoMensaje.hora) : 0;
      const fechaB = b.ultimoMensaje ? new Date(b.ultimoMensaje.hora) : 0;
      return fechaB - fechaA;
    });
  }, [mensajesPorChat]);

  const totalNoLeidos = useMemo(
    () => chats.reduce((total, chat) => total + chat.noLeidos, 0),
    [chats],
  );

  const obtenerChat = useCallback(
    (chatId) => chats.find((chat) => chat.id === chatId) ?? null,
    [chats],
  );

  const valor = useMemo(
    () => ({
      chats,
      totalNoLeidos,
      obtenerChat,
      enviarMensaje,
      marcarComoLeido,
    }),
    [chats, totalNoLeidos, obtenerChat, enviarMensaje, marcarComoLeido],
  );

  return <ChatContext.Provider value={valor}>{children}</ChatContext.Provider>;
}
