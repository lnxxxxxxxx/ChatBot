// ChatPage.js
import { useRef, useEffect, useState } from 'react';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import ChatUseCase from '../../domains/chat/useCases/ChatUseCase';

const chatUseCase = new ChatUseCase();

function ChatPage() {
  const [messages, setMessages] = useState([
    { sender: 'bot', message: chatUseCase.startMessage }
  ]);
  const chatContainerRef = useRef(null);

  const handleSendMessage = async (userMessage) => {
    const newMessageSent = { sender: 'user', message: userMessage };
    setMessages((prevMessages) => [...prevMessages, newMessageSent]);

    try {
      const response = await chatUseCase.sendMessage(userMessage);

      const newMessageReceived = { sender: 'bot', message: response };

      setMessages((prevMessages) => [...prevMessages, newMessageReceived]);
    } catch (error) {
      console.error('Error sending message to chatbot:', error);
    }
  };

  const handleDNISubmit = (dni) => {
    chatUseCase.setDNI(dni); // Establece el DNI en el chatUseCase para iniciar el chat //
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="container">
      <div className="chat-container" ref={chatContainerRef}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} isSender={msg.sender === 'user'} message={msg.message} />
        ))}
      </div>
      <ChatInput
        onSendMessage={handleSendMessage}
        onDNISubmit={handleDNISubmit} // Pasa la función handleDNISubmit al componente ChatInput
      />
    </div>
  );
  
}

export default ChatPage;
