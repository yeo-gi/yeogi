package com.yeogi.yeogi.chat.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.*;

@EnableWebSocketMessageBroker
@Configuration
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/chat")  // 요청 보낼 엔드포인트
                .setAllowedOriginPatterns("http://localhost:3000", "http://localhost:8081")
                .withSockJS();
    }


    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        // 클라이언트한테 메세지 전달하는거고
        registry.enableSimpleBroker("/sub");
        // send요청 처리가 이거
        registry.setApplicationDestinationPrefixes("/pub");
    }
}
