package crudchatbot.chat.Service.impl;


import crudchatbot.chat.DTO.ChatbotDTO;
import crudchatbot.chat.Mapper.ChatbotMapper;
import crudchatbot.chat.Model.Chatbot;
import crudchatbot.chat.Repository.ChatbotRepository;
import crudchatbot.chat.Service.iChatbotService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ChatbotService implements iChatbotService{
  @Autowired
  private ChatbotRepository chatbotRepository;
    public ChatbotDTO getChatbotByDNI(Long dni) {
      Optional<Chatbot> optionalChatbot = chatbotRepository.findById(dni);
      if (optionalChatbot.isPresent()) {
        Chatbot chatbot = optionalChatbot.get();
        return ChatbotMapper.toDto(chatbot);
      }
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontró el Chatbot con el DNI especificado");
      }
  }





