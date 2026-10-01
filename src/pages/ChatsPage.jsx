import { useEffect } from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import { useChat } from '../hooks/useChat';
import { useChatSearch } from '../hooks/useChatSearch';
import { useEsEscritorio } from '../hooks/useMediaQuery';
import { ChatList } from '../components/ChatList';
import { ChatFilters } from '../components/ChatFilters';
import { SearchBar } from '../components/SearchBar';
import { EmptyState } from '../components/EmptyState';
import '../styles/chat-list.css';
import '../styles/layout.css';

export function ChatsPage() {
  const { chats, totalNoLeidos } = useChat();
  const { q, filtro, setQ, setFiltro, limpiarBusqueda, chatsFiltrados, hayBusquedaActiva, busquedaActual } =
    useChatSearch(chats);

  const esEscritorio = useEsEscritorio();

  const chatAbierto = useMatch('/chats/:chatId');

  const mostrarLista = esEscritorio || !chatAbierto;
  const mostrarConversacion = esEscritorio || Boolean(chatAbierto);

  useEffect(() => {
    document.title =
      totalNoLeidos > 0 ? `(${totalNoLeidos}) ChatWspClon` : 'ChatWspClon';
  }, [totalNoLeidos]);

  return (
    <div className="panel-zona">
      {mostrarLista && (
        <section className="panel panel--lista" aria-label="Conversaciones">
          <h1 className="solo-lectores">Conversaciones</h1>
          <div className="lista-chats__barra">
            <SearchBar
              valor={q}
              alCambiar={setQ}
              alLimpiar={limpiarBusqueda}
              cantidadResultados={chatsFiltrados.length}
            />
            <ChatFilters filtroActivo={filtro} alCambiarFiltro={setFiltro} />
          </div>
          {hayBusquedaActiva && (
            <p className="lista-chats__resultado">
              {chatsFiltrados.length} resultado{chatsFiltrados.length === 1 ? '' : 's'}
              {q.trim() !== '' && ` para “${q.trim()}”`}
            </p>
          )}

          <ChatList
            chats={chatsFiltrados}
            busqueda={busquedaActual}
            hayBusquedaActiva={hayBusquedaActiva}
          />
        </section>
      )}

      {mostrarConversacion && (
        <div className="panel panel--conversacion">
          {chatAbierto ? (
            <Outlet />
          ) : (
            <EmptyState
              icono="💬"
              titulo="Elegí una conversación"
              texto="Seleccioná un chat de la lista para ver los mensajes y responder."
            />
          )}
        </div>
      )}
    </div>
  );
}
