CREATE DATABASE  IF NOT EXISTS `crudnodevlefxd` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `crudnodevlefxd`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: crudnodevlef
-- ------------------------------------------------------
-- Server version	5.7.30-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `peliculasdc`
--

DROP TABLE IF EXISTS `peliculasdc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peliculasdc` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name_movie` varchar(50) NOT NULL,
  `main_character` varchar(100) NOT NULL,
  `villain` varchar(100) NOT NULL,
  `duration` int(11) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculasdc`
--

LOCK TABLES `peliculasdc` WRITE;
/*!40000 ALTER TABLE `peliculasdc` DISABLE KEYS */;
INSERT INTO `peliculasdc` VALUES (1,'Batman: La broma asesina','Batman','Guason',86,7),(3,'Aquaman','Aquaman','Manta Negra',142,8),(4,'Â¡Shazam!','Shazam','Sivana',132,9);
/*!40000 ALTER TABLE `peliculasdc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculasdisney`
--

DROP TABLE IF EXISTS `peliculasdisney`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peliculasdisney` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name_movie` varchar(100) NOT NULL,
  `main_character` varchar(100) NOT NULL,
  `type_movie` varchar(20) NOT NULL,
  `duration` int(11) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculasdisney`
--

LOCK TABLES `peliculasdisney` WRITE;
/*!40000 ALTER TABLE `peliculasdisney` DISABLE KEYS */;
INSERT INTO `peliculasdisney` VALUES (1,'Rey Leon','Simba','Live Action',118,9),(3,'Mulan','Mulan','Live Action',120,7),(4,'Moana Sing Along','Moana','Animada',113,10);
/*!40000 ALTER TABLE `peliculasdisney` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculasdreamworks`
--

DROP TABLE IF EXISTS `peliculasdreamworks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peliculasdreamworks` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name_movie` varchar(100) NOT NULL,
  `main_character` varchar(100) NOT NULL,
  `type_movie` varchar(20) NOT NULL,
  `duration` int(11) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculasdreamworks`
--

LOCK TABLES `peliculasdreamworks` WRITE;
/*!40000 ALTER TABLE `peliculasdreamworks` DISABLE KEYS */;
INSERT INTO `peliculasdreamworks` VALUES (1,'Sherk Para Siempre','Sherk','Comedia',93,10),(3,'Trolls','Poppy','Musical',93,9),(4,'Los Croods','Epp (La chica cool)','Aventura',99,10),(5,'Kung Fu Panda','Po ','Aventura',95,7);
/*!40000 ALTER TABLE `peliculasdreamworks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculasmarvel`
--

DROP TABLE IF EXISTS `peliculasmarvel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peliculasmarvel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_movie` varchar(45) NOT NULL,
  `main_character` varchar(45) NOT NULL,
  `villain` varchar(45) NOT NULL,
  `duration` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculasmarvel`
--

LOCK TABLES `peliculasmarvel` WRITE;
/*!40000 ALTER TABLE `peliculasmarvel` DISABLE KEYS */;
INSERT INTO `peliculasmarvel` VALUES (1,'Far From Home','Spiderman','Mysterio',129,8),(2,'Infinity War','The Avengers','Thanos',191,10),(36,'Black Panter','T\'Challa','Klaw',135,10);
/*!40000 ALTER TABLE `peliculasmarvel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secretmsg`
--

DROP TABLE IF EXISTS `secretmsg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `secretmsg` (
  `name_user` varchar(20) NOT NULL,
  `msg` blob NOT NULL,
  `pass` varchar(17) NOT NULL,
  PRIMARY KEY (`name_user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secretmsg`
--

LOCK TABLES `secretmsg` WRITE;
/*!40000 ALTER TABLE `secretmsg` DISABLE KEYS */;
INSERT INTO `secretmsg` VALUES ('Eliot',_binary 'l§EÿÑ¶^IuZ§\Ä2\ZM	w\Ó','pruebadepassword');
/*!40000 ALTER TABLE `secretmsg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'crudnodevlef'
--

--
-- Dumping routines for database 'crudnodevlef'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-13  5:04:28
