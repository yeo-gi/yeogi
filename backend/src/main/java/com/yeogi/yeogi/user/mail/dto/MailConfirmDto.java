package com.yeogi.yeogi.user.mail.dto;

import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class MailConfirmDto {
    @Email
    String email;
    String code;

}
