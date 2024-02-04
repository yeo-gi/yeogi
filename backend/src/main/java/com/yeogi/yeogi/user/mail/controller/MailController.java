package com.yeogi.yeogi.user.mail.controller;

import com.yeogi.yeogi.user.mail.dto.MailConfirmDto;
import com.yeogi.yeogi.user.mail.service.MailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/mail")
@RequiredArgsConstructor
@RestController
public class MailController {

    private final MailService mailService;

    @PostMapping("/send")
    public ResponseEntity<String> sendMail(@RequestBody MailConfirmDto mailConfirmDto) throws Exception {
        String code = mailService.sendMail(mailConfirmDto.getEmail());
        return ResponseEntity.ok(code);
    }

    @PostMapping("/confirm")
    public ResponseEntity<Boolean> confirmMail(@RequestBody MailConfirmDto mailConfirmDto) throws Exception {
        return ResponseEntity.ok(mailService.confirmCode(mailConfirmDto));
    }
}
