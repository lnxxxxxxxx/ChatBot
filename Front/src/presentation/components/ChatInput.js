import { useState } from "react";

/*
No uso el ChatUseCase
import ChatUseCase from '../../domains/chat/useCases/ChatUseCase';
const chatUseCase = new ChatUseCase();
*/

/*Agrego una props que guarda el valor del DNI*/
const ChatInput = ({ onSendMessage, onDNISubmit }) => {
  const [userMessage, setUserMessage] = useState("");
  // Creo un estado para el DNI
  const [isDNISubmitted, setIsDNISubmitted] = useState(false);

  const handleInputChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSend = () => {
    // Agrego un condicional que verifica si userMessage es distinto de " "
    if (userMessage.trim() !== "") {
      onSendMessage(userMessage);
      setUserMessage("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (isDNISubmitted) {
        handleSend();
      } else {
        setIsDNISubmitted(true);
        onDNISubmit(userMessage); // Llama a la función onDNISubmit con el valor del DNI
        setUserMessage("");
      }
    }
  };

  const handleTouchEnd = () => {
    if (isDNISubmitted) {
      handleSend();
    }
  };

  return (
    <div className="chat-input-container">
      <input className="chat-input"
        type="text"
        placeholder={isDNISubmitted ? "Type your message..." : "Ingrese su DNI"}
        value={userMessage}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onTouchEnd={handleTouchEnd} // Agrega el evento onTouchEnd para dispositivos móviles
      />
      <button className="send-button" onClick={isDNISubmitted ? handleSend : () => {}}>Send</button>
    </div>
  );
};

/* Linea 48 pregunto al estado isDNISubmitted si es handleSend(linea 19 - 23) sino manda una funcion vacia */
export default ChatInput;
