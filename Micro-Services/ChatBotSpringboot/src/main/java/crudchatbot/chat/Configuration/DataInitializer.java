package crudchatbot.chat.Configuration;

import crudchatbot.chat.Model.Chatbot;
import crudchatbot.chat.Repository.ChatbotRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

  private final ChatbotRepository chatbotRepository;

  public DataInitializer(ChatbotRepository chatbotRepository) {
    this.chatbotRepository = chatbotRepository;
  }

  @Override
  public void run(String... args) throws Exception {
    // Crear y guardar usuarios predefinidos
    Chatbot chatbot1 = new Chatbot();
    chatbot1.setDni(11111111L);
    chatbot1.setNombre("Usuario1");
    chatbot1.setConsumo("Su consumo es de 4000 kWh");
    chatbot1.setPrecio(19.503f);
    chatbotRepository.save(chatbot1);

    Chatbot chatbot2 = new Chatbot();
    chatbot2.setDni(98765432L);
    chatbot2.setNombre("Usuario2");
    chatbot2.setConsumo("Su consumo es de 3000 kWh");
    chatbot2.setPrecio(15.000f);
    chatbotRepository.save(chatbot2);

    Chatbot chatbot3 = new Chatbot();
    chatbot3.setDni(12345678L);
    chatbot3.setNombre("Usuario3");
    chatbot3.setConsumo("Su consumo es de 5000 kWh");
    chatbot3.setPrecio(22.000f);
    chatbotRepository.save(chatbot3);
  }
}
