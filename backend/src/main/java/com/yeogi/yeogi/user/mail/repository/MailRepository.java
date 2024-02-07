package com.yeogi.yeogi.user.mail.repository;

import com.yeogi.yeogi.user.mail.model.Mail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MailRepository extends JpaRepository<Mail, Long> {
    Boolean existsMailByEmail(String email);
    Boolean existsMailByCodeAndEmail(String code, String email);
    Mail findMailByEmail(String email);

    Mail findMailByCodeAndEmail(String code, String email);
}
