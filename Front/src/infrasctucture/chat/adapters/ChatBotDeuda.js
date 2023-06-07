import ChatRepository from '../../../domains/chat/interfaces/ChatRepository';

export default class ChatbotAPIS extends ChatRepository {
  constructor(apiClient) {
    super();
    this.apiClient = apiClient;
  }

  async receivedConsumo(dni) {
    try {
      const response = await fetch(`https://chatbotjava-production.up.railway.app/chat/${dni}`, {
        method: 'GET'
      });

      const deuda = await response.json();
      const data = deuda.precio;
     
      return { response: "Su deuda es de " + data };
    } catch (error) {
      throw new Error('Error al obtener los datos');
    }
  }
}
