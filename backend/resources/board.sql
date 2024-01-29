DROP DATABASE IF EXISTS yeogi;
CREATE DATABASE yeogi;
USE yeogi;

CREATE TABLE `user` (
                        `user_id` bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        `email` varchar(100) NOT NULL,
                        `nickname` varchar(24) NOT NULL,
                        `password` varchar(100) NOT NULL,
                        `joined_trips` VARCHAR(255) NULL,
                        `profile_img` text NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `post` (
                        `post_id` bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        `user_id` bigint NOT NULL,
                        `title` varchar(100) NOT NULL,
                        `content` text NOT NULL,
                        `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                        `updated_date`	timestamp	NOT NULL	DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `comment` (
                           `comment_id` bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,
                           `post_id` bigint NOT NULL,
                           `user_id` bigint NOT NULL,
                           `content` text NOT NULL,
                           `comment_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                           `is_deleted`	boolean	NOT NULL	DEFAULT false,
                           `parent_id` bigint NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `chat_room` (
                             `chat_room_id`	bigint	NOT NULL  AUTO_INCREMENT PRIMARY KEY,
                             `chat_room_name`	varchar(50)	NOT NULL,
                             `created_date`	timestamp	NOT NULL	DEFAULT CURRENT_TIMESTAMP,
                             `last_chat`	varchar(255)	NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `chat_user` (
                             `user_id`	bigint	NOT NULL,
                             `chat_room_id`	bigint	NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `chat` (
                        `chat_id`	bigint	NOT NULL  AUTO_INCREMENT PRIMARY KEY,
                        `content`	varchar(500)	NOT NULL,
                        `created_time`	timestamp	NOT NULL	DEFAULT CURRENT_TIMESTAMP,
                        `is_checked`	boolean	NOT NULL	DEFAULT false,
                        `user_id`	bigint	NOT NULL,
                        `chat_room_id`	bigint	NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

ALTER TABLE `chat_user` ADD CONSTRAINT `PK_CHAT_USER` PRIMARY KEY (
                                                                   `user_id`,
                                                                   `chat_room_id`
    );

ALTER TABLE `chat_user` ADD CONSTRAINT `FK_user_TO_chat_user_1` FOREIGN KEY (
                                                                             `user_id`
    )
    REFERENCES `user` (
                       `user_id`
        );

ALTER TABLE `chat_user` ADD CONSTRAINT `FK_chat_room_TO_chat_user_1` FOREIGN KEY (
                                                                                  `chat_room_id`
    )
    REFERENCES `chat_room` (
                            `chat_room_id`
        );



ALTER TABLE `post` ADD CONSTRAINT `FK_user_TO_post_1` FOREIGN KEY (
                                                                   `user_id`
    )
    REFERENCES `user` (
                       `user_id`
        );

ALTER TABLE `comment` ADD CONSTRAINT `FK_post_TO_comment_1` FOREIGN KEY (
                                                                         `post_id`
    )
    REFERENCES `post` (
                       `post_id`
        );

ALTER TABLE `comment` ADD CONSTRAINT `FK_user_TO_comment_1` FOREIGN KEY (
                                                                         `user_id`
    )
    REFERENCES `user` (
                       `user_id`
        );


INSERT INTO user(`email`, `password`, `nickname`)
VALUES ('ww@naver.com', '{bcrypt}$2a$10$NgAsWB9qRNjfl4OOWALIz.GTAJEzibygrLNwPSWO/2b/c37mbzfE6', '유저');