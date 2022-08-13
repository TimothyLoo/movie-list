CREATE DATABASE movielist;

USE movielist;

DROP TABLE IF EXISTS `movies`;

CREATE TABLE `movies` (
  `id` INTEGER NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `overview` VARCHAR(1000),
  `release_date` VARCHAR(50) DEFAULT 'NULL',
  `popularity` VARCHAR(50) DEFAULT 'NULL',
  `poster_path` VARCHAR(255) DEFAULT 'NULL',
  `watched` TINYINT(1) DEFAULT 0,
  PRIMARY KEY (`id`)
);

-- INSERT INTO `movies` (`title`) VALUES ('Top Gun');