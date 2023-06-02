package crudchatbot.chat.Repository;
import crudchatbot.chat.Model.Chatbot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ChatbotRepository extends JpaRepository<Chatbot, Long>  {

}


