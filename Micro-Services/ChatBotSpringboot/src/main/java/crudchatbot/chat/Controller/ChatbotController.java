package crudchatbot.chat.Controller;

import crudchatbot.chat.DTO.ChatbotDTO;
import crudchatbot.chat.Mapper.ChatbotMapper;
import crudchatbot.chat.Model.Chatbot;
import crudchatbot.chat.Repository.ChatbotRepository;
import crudchatbot.chat.Service.iChatbotService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/chat")
@CrossOrigin(origins = "*")
public class ChatbotController {
  @Autowired
  private iChatbotService chatbotService;

  @GetMapping("/{dni}")
  public ResponseEntity<ChatbotDTO> getChatbotByDNI(@PathVariable Long dni) {
    ChatbotDTO chatbotDTO = chatbotService.getChatbotByDNI(dni);
    return new ResponseEntity<>(chatbotDTO, HttpStatus.OK);
  }
}



