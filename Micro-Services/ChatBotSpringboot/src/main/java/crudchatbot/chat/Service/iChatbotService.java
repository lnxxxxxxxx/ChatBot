package crudchatbot.chat.Service;
import crudchatbot.chat.Model.Chatbot;
import crudchatbot.chat.DTO.ChatbotDTO;

import java.util.List;
import java.util.Optional;


public interface iChatbotService {

  ChatbotDTO getChatbotByDNI(Long dni);

}





