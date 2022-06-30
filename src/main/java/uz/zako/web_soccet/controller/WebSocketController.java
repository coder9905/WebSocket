package uz.zako.web_soccet.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import uz.zako.web_soccet.model.User;

@Controller
public class WebSocketController {

    @MessageMapping("/send-message")
    @SendTo("/topic/message")
    public String sendMessage(User user) {

        System.out.println(user.getName());
        return user.getName();
    }

}
