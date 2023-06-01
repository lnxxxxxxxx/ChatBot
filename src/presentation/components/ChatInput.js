import { useState } from 'react';
import ChatUseCase from '../../domains/chat/useCases/ChatUseCase';

const chatUseCase = new ChatUseCase();

const ChatInput = ({ onSendMessage }) => {
  const [userMessage, setUserMessage] = useState('');

  const handleInputChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleDNISubmit = () => {
    chatUseCase.setDNI(userMessage); // Pasar el valor del DNI al chatUseCase
    chatUseCase.startChat(); // Iniciar el chat después de establecer el DNI
    setUserMessage('');
  };

  const handleSend = async () => {
    try {
      let response = await chatUseCase.sendMessage(userMessage);
      onSendMessage(userMessage, response);
      setUserMessage('');
    } catch (error) {
      console.error('Error sending message to chatbot:', error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (chatUseCase.userDNI) {
        handleSend();
      } else {
        handleDNISubmit();
      }
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={userMessage}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={chatUseCase.userDNI ? handleSend : handleDNISubmit}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
