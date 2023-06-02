package crudchatbot.chat.Mapper;
import crudchatbot.chat.Model.Chatbot;
import crudchatbot.chat.DTO.ChatbotDTO;


public class ChatbotMapper {

  public static ChatbotDTO toDto(Chatbot chatbot) {
    ChatbotDTO chatbotDTO = new ChatbotDTO();
    chatbotDTO.setDni(chatbot.getDni());
    chatbotDTO.setNombre(chatbot.getNombre());
    chatbotDTO.setConsumo(chatbot.getConsumo());
    chatbotDTO.setPrecio(chatbot.getPrecio());
    return chatbotDTO;
  }

  public static Chatbot toModel(ChatbotDTO chatbotDTO) {
    Chatbot chatbot = new Chatbot();
    chatbot.setDni(chatbotDTO.getDni());
    chatbot.setNombre(chatbotDTO.getNombre());
    chatbot.setConsumo(chatbotDTO.getConsumo());
    chatbot.setPrecio(chatbotDTO.getPrecio());
    return chatbot;


  }
}





