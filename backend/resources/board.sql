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
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `post` (
                        `post_id` bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        `user_id` bigint NOT NULL,
                        `title` varchar(100) NOT NULL,
                        `content` text NOT NULL,
                        `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                        `updated_date`	timestamp	NOT NULL	DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `comment` (
                           `comment_id` bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,
                           `post_id` bigint NOT NULL,
                           `user_id` bigint NOT NULL,
                           `content` text NOT NULL,
                           `comment_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                           `parent_id` bigint NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;


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
