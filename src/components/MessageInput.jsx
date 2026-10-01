import { useEffect, useId } from 'react';
import { useMessageForm } from '../hooks/useMessageForm';
import '../styles/chat-window.css';

export function MessageInput({ chatId, nombreContacto, onEnviar }) {
  const idInput = useId();
  const { texto, estaVacio, alCambiar, alSubmit, alPresionarTecla, reiniciar } =
    useMessageForm(onEnviar);

  useEffect(() => {
    reiniciar();
  }, [chatId, reiniciar]);

  return (
    <form className="form-mensaje" onSubmit={alSubmit}>
      <div className="form-mensaje__campo">
        <label className="solo-lectores" htmlFor={idInput}>
          Escribir un mensaje para {nombreContacto}
        </label>
        <textarea
          id={idInput}
          className="form-mensaje__input"
          rows={1}
          placeholder="Escribí un mensaje"
          value={texto}
          onChange={alCambiar}
          onKeyDown={alPresionarTecla}
        />
      </div>
      <button
        type="submit"
        className="form-mensaje__enviar"
        disabled={estaVacio}
        aria-label="Enviar mensaje"
        title="Enviar mensaje (Enter)"
      >
        <span aria-hidden="true">➤</span>
      </button>
    </form>
  );
}
