// ChatbotAPI.js

import ChatRepository from '../../../domains/chat/interfaces/ChatRepository2';


export default class ChatbotAPI extends ChatRepository {
  constructor(apiClient) {
    super();
    this.apiClient = apiClient;
    this.welcomeMessageReceived = false;
  }


  async sendMessage(message) {
    if (!this.welcomeMessageReceived) {
      this.welcomeMessageReceived = true;
      const welcomeResponse = await this.getWelcomeMessage();
      return welcomeResponse;
    }

    try {
      const response = await fetch('https://chatpruebaia-production.up.railway.app/chat', {
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

  async getWelcomeMessage() {
    try {
      const response = await fetch('https://chatpruebaia-production.up.railway.app/chat', {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud de bienvenida');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error al obtener el mensaje de bienvenida');
    }
  }
}
