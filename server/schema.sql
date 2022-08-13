CREATE DATABASE movielist;

USE movielist;

DROP TABLE IF EXISTS `movies`;

CREATE TABLE `movies` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `release_date` VARCHAR(50) DEFAULT 'NULL',
  `popularity` VARCHAR(50) DEFAULT 'NULL',
  `overview` VARCHAR(255) DEFAULT 'NULL',
  `poster_path` VARCHAR(50) DEFAULT 'NULL',
  `watched` VARCHAR(50) DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

INSERT INTO `movies` (`title`) VALUES ('Top Gun');