CREATE DATABASE movielist;

USE movielist;

DROP TABLE IF EXISTS `movies`;

CREATE TABLE `movies` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `movies` (`title`) VALUES ('Top Gun');