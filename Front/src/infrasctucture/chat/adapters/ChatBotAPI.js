import ChatRepository from '../../../domains/chat/interfaces/ChatRepository';

export default class ChatbotAPI extends ChatRepository {
  constructor(apiClient) {
    super();
    this.apiClient = apiClient;
  }

  async sendMessage(message) {
    try {
      const response = await fetch('https://chatbotdefault-production.up.railway.app/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ message })
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud al chatbot');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error al enviar el mensaje al chatbot');
    }
  }
}
