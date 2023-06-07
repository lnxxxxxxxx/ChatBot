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
      let response = await chatUseCase.sendMessage(userMessage);

      if (response === 'Conectando con un asesor...') {
        let response1 = 'Conectando con un asesor....'; //

        const newMessageReceived2 = { sender: 'bot', message: response1 };
        setMessages((prevMessages) => [...prevMessages, newMessageReceived2]);

        setTimeout(() => {
          response = chatUseCase.MENSAJE();
          const newMessageReceived = { sender: 'bot', message: response };
          setMessages((prevMessages) => [...prevMessages, newMessageReceived]);
        }, 5000); // Intervalo de 5 segundo (5000 milisegundos)
      } else {
        const newMessageReceived = { sender: 'bot', message: response };
        setMessages((prevMessages) => [...prevMessages, newMessageReceived]);
      }
     } catch (error) {
      console.error('Error sending message to chatbot:', error);
    }
  };

  const handleDNISubmit = (dni) => {
    chatUseCase.setDNI(dni); // Establece el DNI en el chatUseCase para iniciar el chat
    const response1 = chatUseCase.userDNI;
    const newMessageReceived2 = { sender: 'user', message: response1 };
    setMessages((prevMessages) => [...prevMessages, newMessageReceived2]);


    const response = chatUseCase.enterDNI(); // Obtiene el mensaje de respuesta de enterDNI()

    const newMessageReceived = { sender: 'bot', message: response };
    setMessages((prevMessages) => [...prevMessages, newMessageReceived]);

    
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
