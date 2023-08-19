-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: todo
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `tasktable`
--

DROP TABLE IF EXISTS `tasktable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasktable` (
  `TaskID` int NOT NULL AUTO_INCREMENT,
  `TaskName` varchar(255) DEFAULT NULL,
  `Description` text,
  `UserID` int DEFAULT NULL,
  `Status` varchar(50) DEFAULT NULL,
  `CreatedDate` timestamp NULL DEFAULT NULL,
  `UpdatedDate` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`TaskID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `tasktable_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `usertable` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasktable`
--

LOCK TABLES `tasktable` WRITE;
/*!40000 ALTER TABLE `tasktable` DISABLE KEYS */;
INSERT INTO `tasktable` VALUES (1,'Todo task','Interview',1,'Completed','2023-08-17 18:30:00','2023-08-17 18:30:00'),(2,' My Name','sfddfd',1,'Active','2023-08-17 18:30:00','2023-08-17 18:30:00'),(3,'sdfdfvads','asfasfas',1,'Completed','2023-08-17 18:30:00',NULL),(4,'test#1','Dis',2,'Active','2023-08-17 18:30:00','2023-08-17 18:30:00'),(6,'Todo task','Test@1',3,'Active','2023-08-18 18:30:00',NULL),(7,'name','Test2',1,'Active','2023-08-18 18:30:00','2023-08-18 18:30:00');
/*!40000 ALTER TABLE `tasktable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertable`
--

DROP TABLE IF EXISTS `usertable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertable` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `UserName` varchar(50) DEFAULT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertable`
--

LOCK TABLES `usertable` WRITE;
/*!40000 ALTER TABLE `usertable` DISABLE KEYS */;
INSERT INTO `usertable` VALUES (1,'Puvan','puvan123','$2b$10$ARZxqB/C4EoIjChdlBSST.aLqBrOKJLsJfAe4uLxLbQLQhLMDa6zK','puvan@gmail.com'),(2,'test','testuser','$2b$10$JR5371fT5R7VvzgOR6KPXuZUoPb1pHTqVhC7y191j5AEABPEK0qcK','test@gmail.com'),(3,'Siva','siva123','$2b$10$N9VBwoOtF0jS5aTAxn/aiOXmgrkmwej6op0p417yf2V4WbMAzmOj.','siva@gmail.com');
/*!40000 ALTER TABLE `usertable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-19 11:10:30
