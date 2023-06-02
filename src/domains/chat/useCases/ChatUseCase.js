// ChatUseCase.js
import ChatbotAPI from '../../../infrasctucture/chat/adapters/ChatBotAPI';
import ChatbotIA from '../../../infrasctucture/chat/adapters/ChatBotIA';
import ChatbotConsumo from '../../../infrasctucture/chat/adapters/ChatBotConsumo';
import ChatbotDeuda from '../../../infrasctucture/chat/adapters/ChatBotDeuda';


/// ChatUseCase.js
class ChatUseCase {
  constructor() {
    this.chatbotAPI = new ChatbotAPI();
    this.chatbotIA = new ChatbotIA();
    this.chatbotConsumo = new ChatbotConsumo();
    this.chatbotDeuda = new ChatbotDeuda();
    this.activeChatbotAPI = null;
    this.userDNI = null;
    this.startMessage = "Por favor, ingrese su DNI";
  }

  setDNI(dni) {
    this.userDNI = dni;
    this.startChat(); // Inicia automáticamente el chat después de establecer el DNI
  }

  startChat() {
    if (this.userDNI) {
      this.activeChatbotAPI = this.chatbotAPI;
    } else {
      throw new Error('DNI not set. Please set the DNI before starting the chat.');
    }
  }

  async sendMessage(userMessage) {
    if (this.activeChatbotAPI === null) {
      return this.startMessage;
    }
    
    let response = await this.activeChatbotAPI.sendMessage(userMessage);

    if (response.response === 'Conectando con un asesor...') {
      this.activeChatbotAPI = this.chatbotIA;
    }

    if (userMessage === '3' && this.userDNI) {
      response = await this.chatbotConsumo.receivedConsumo(this.userDNI);
      console.log(response);
    }

    if(userMessage === '4' && this.userDNI){
      response = await this.chatbotDeuda.receivedConsumo(this.userDNI);
    }

    
    return response.response;
  }
}

export default ChatUseCase;