import { useContext } from 'react';
import { ChatContext } from '../context/contextos';

export function useChat() {
  const contexto = useContext(ChatContext);

  if (contexto === null) {
    throw new Error('useChat debe usarse dentro de <ChatProvider>');
  }

  return contexto;
}
