package crudchatbot.chat.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "chatbot")
public class Chatbot {
  @Id
  @Column(name = "dni")
  private Long dni;

  @Column(name = "nombre")
  private String nombre;

  @Column(name = "consumo")
  private String consumo;

  @Column(name = "precio")
  private float precio;


}





