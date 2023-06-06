# 💻 ChatBot 
### ChatBot Full stack Software Hexagonal Architecture - consuming Springboot and Flask Micro-Services
#### JavaScript,React,Next.js/Java,Springboot,Hibernate,H2/Python,Flask,Tensorflow,IA 

  [![GitHub Repo stars](https://img.shields.io/github/stars/lnxxxxxxxx/ChatBot?style=social)](https://github.com/lnxxxxxxxx/ChatBot/stargazers)
  
## 📋 Requirements
- Environment 
  - [Python](https://www.python.org/downloads/)
  - [React](https://es.react.dev/)
  - [Next.js](https://nextjs.org/docs/getting-started/installation)
  - [Node.js](https://nodejs.org/es/download)
  - [Springboot](https://spring.io/projects/spring-boot)
  - [JDK-19](https://www.oracle.com/java/technologies/javase/jdk19-archive-downloads.html)
  - [Visual-Studio](https://code.visualstudio.com/download)
  - [TensorFlow](https://www.tensorflow.org/install?hl=es-419)
  - [NLTK](https://www.nltk.org/install.html)
  - [Flask](https://flask.palletsprojects.com/en/2.3.x/installation/#install-flask)
  - [Postman](https://www.postman.com/product/rest-client/)
 
## 📋 Installation
  If you want to run your application in a local environment, you should consider the following:
  1. Clone the repository using GIT or by downloading the ZIP file:

      ```git clone https://github.com/lnxxxxxxxx/ChatBot.git```
      
  2. Open the folder in Visual Studio.
  3. In the Micro-Services folders, start the services by terminal
     - ChatBotDefault: `python chatbot.py`
     - ChatIA: `python model.py` > `python app.py`
     - ChatBotSpringboot: `java -jar chat1.jar`
  4. In Visual Studio or a terminal launch Front folder `npm run dev`. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 
 

## 🔧 Usage
  
  1. As soon as you enter the chat you will be asked "Ingresar el DNI", you must enter your DNI by default we only keep 3 in the database
  '98765432', '11111111', '12345678'.
  
  2. Then, it will connect to the 'ChatBotDefault' API where you will have access to some default responses until you select option 3, 4 or 5.
   
  3. Option 3 will connect you to the 'ChatBotSpringboot' API where through the GET method you will return the client's consumption of the database, and you will continue with the 'ChatBotDefault' API running normally.
   
  4. Option 4 will connect you to the 'ChatBotSpringboot' API where through the GET method it will return the customer's debt from the database, and continue with the 'ChatBotDefault' API running normally.
   
  5. Option 5 will connect you to the API 'ChatIA' where through the POST method you will have access to chat with an artificial intelligence created personally to get your concerns.


