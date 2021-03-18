-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: championesbd
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

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
-- Table structure for table `categorias_productos`
--

DROP TABLE IF EXISTS `categorias_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) NOT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias_productos`
--

LOCK TABLES `categorias_productos` WRITE;
/*!40000 ALTER TABLE `categorias_productos` DISABLE KEYS */;
INSERT INTO `categorias_productos` VALUES (1,'Calzado Urbano',1),(2,'Calzado Deportivo',1);
/*!40000 ALTER TABLE `categorias_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias_usuarios`
--

DROP TABLE IF EXISTS `categorias_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias_usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(50) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias_usuarios`
--

LOCK TABLES `categorias_usuarios` WRITE;
/*!40000 ALTER TABLE `categorias_usuarios` DISABLE KEYS */;
INSERT INTO `categorias_usuarios` VALUES (1,'usuario',1),(2,'administrador',1);
/*!40000 ALTER TABLE `categorias_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `estado` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_producto_idx` (`id_producto`),
  CONSTRAINT `producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,'1-1607531432123.jpg',1,1),(2,'2-1607531503018.jpg',2,1),(3,'3-1607531531704.jpeg',3,1),(4,'4-1607622472512.jpeg',4,1),(5,'5-1607622725020.jpeg',5,1),(6,'6-1607622798603.jpeg',6,1),(7,'7-1611374345352.jpg',7,1),(8,'8-1611375137281.jpg',8,1);
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(100) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'Vans',1),(2,'Converse',1),(3,'Nike',1),(4,'Adidas',1),(5,'Vans',1),(6,'Puma',1),(7,'Topper',1),(8,'Fila',1),(9,'DC',1),(10,'Asics',1);
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_talle`
--

DROP TABLE IF EXISTS `producto_talle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_talle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_producto` int(11) DEFAULT NULL,
  `id_talle` int(11) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_talle_idx` (`id_talle`),
  KEY `id_producto_idx` (`id_producto`),
  CONSTRAINT `id_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_talle` FOREIGN KEY (`id_talle`) REFERENCES `talles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_talle`
--

LOCK TABLES `producto_talle` WRITE;
/*!40000 ALTER TABLE `producto_talle` DISABLE KEYS */;
INSERT INTO `producto_talle` VALUES (1,2,5,1),(2,2,6,1),(3,2,7,1),(4,2,8,1),(5,1,5,1),(6,1,6,1),(7,1,7,1),(8,1,8,1),(9,1,9,1),(10,3,4,1),(11,3,5,1),(12,3,6,1),(13,3,7,1),(14,3,8,1),(15,3,9,1),(16,3,10,1),(17,3,11,1),(18,4,2,1),(19,4,3,1),(20,4,4,1),(21,4,5,1),(22,4,6,1),(23,4,7,1),(24,4,8,1),(25,4,9,1),(26,4,10,1),(27,4,11,1),(28,5,4,1),(29,5,5,1),(30,5,6,1),(31,5,7,1),(32,5,8,1),(33,5,9,1),(34,5,10,1),(35,6,3,1),(36,6,4,1),(37,6,5,1),(38,6,6,1),(39,6,7,1),(44,7,4,1),(45,7,5,1),(46,7,10,1),(47,7,11,1),(48,8,3,1),(49,8,4,1),(50,8,5,1),(51,8,6,1),(52,8,9,1);
/*!40000 ALTER TABLE `producto_talle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto` varchar(200) NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `id_marca` int(11) DEFAULT NULL,
  `precio` decimal(10,0) NOT NULL,
  `descuento` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_categoria_idx` (`id_categoria`),
  KEY `id_marcas_idx` (`id_marca`),
  CONSTRAINT `id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias_productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_marca` FOREIGN KEY (`id_marca`) REFERENCES `marcas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Vans Old School','Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico sidestripe de la marca. Nacieron como un calzado para skaters de los años 70´y con el correr de las décadas se transformó en un modelo básico de lifestyle. Son zapatillas de corte bajo confeccionadas con capellada de canvas y cuero suede resistente, tiene punteras reforzadas para añadir durabilidad, la suela de caucho original Vans Wafflesole y cuello acolchado para ofrecer sujeción y confort.',1,1,7999,15,'2021-01-01 00:00:00','2021-01-27 19:02:05',1),(2,'DC Crisis','Material de la parte superior: cuero, nobuk o loneta. Sin puntera de goma. Logo serigrafiado repujado en el panel lateral. Lengüeta y cuello acolchados con espuma, para mayor confort y sujeción. Forro de malla para mayor comodidad. Orificios de ventilación para mayor transpirabilidad. Suela de copa de alto rendimiento. Suela DC con dibujo Pill Pattern de marca registrada.',1,9,12000,NULL,'2021-01-02 00:00:00','2021-01-02 00:00:00',1),(3,'Nike Air Jordan','El Air Jordan 1 es una de las zapatillas más vendidas de Nike en relación con la practica del baloncesto, desde sus orígenes siempre ha destacado por su gran versatilidad sobre la pista de basket. Adaptándose a diversos estilos de juegos y deslumbrando por su calidad.',1,3,15999,10,'2021-01-03 00:00:00','2021-01-03 00:00:00',1),(4,'Nike Air Zoom Pegasus 37','Las zapatillas Nike Air Zoom Pegasus 37 no son otra cosa que una de las zapatillas más destacadas del mundo del running en 2020. Su mediasuela Nike React y la unidad Zoom Air para cubrir gran parte del antepié te brindan mejores transiciones y suavidad para tu pie. Sus avances en transpirabilidad y ligereza gracias a un patrón de costura similar a las Zoom Fly 3 las vuelven fundamentales para runners amateurs que quieran hacer de sus jornadas de entrenamiento, una de placer.',2,3,15000,NULL,'2021-01-03 00:00:00','2021-01-03 00:00:00',1),(5,'Zapatillas Adidas Lite Racer CLN','Las zapatillas Adidas Lite Racer CLN poseen un estilo elegante y minimalista con una parte superior de malla transpirable y ligera. Su suela y mediasuela con tecnología Cloudfoam ofrecen una pisada más cómoda. La plantilla OrthoLite® expulsa el sudor y la humedad y mantiene los pies secos.',2,4,8999,NULL,'2021-01-04 00:00:00','2021-01-04 00:00:00',1),(6,'Asics Gel-Kayano 26','Las zapatillas Asics Gel-Kayano 26 están compuestas por una malla técnica que mantendrá tus pies frescos, mientras que la suela flexible potencia una transición natural entre cada una de las fases de la pisada. La entresuela con tecnología Space Trusstic proporciona estabilidad y reduce el peso total de la zapatilla para fomentar una transición más fluida desde la fase de contacto hasta la de impulsión. Esto se complementa con un patrón de surcos flexibles y profundos en la parte delantera de la suela que hace que el calzado acompañe el movimiento natural del pie. Las Gel-Kayano 26 son una opción ideal para profesionales como también aquellos amateurs que busquen un modelo que fusione comodidad con una excelente sujeción.',1,10,16499,NULL,'2021-01-04 00:00:00','2021-01-04 00:00:00',1),(7,'Zapatillas Converse Chuck Taylor All Star','Calzado ideal para desarrollar todas tus actividades urbanas.  Diseño de caña baja para un calce rápido.  La parte superior de la capellada esta confeccionada de algodón para un calce confortable.  La suela es de caucho, logrando con ello una pisada firme y segura.',1,2,6195,10,'2021-01-05 00:00:00','2021-01-05 00:00:00',1),(8,'Zapatillas Converse Distrito Bordó','Converse All Star en estilo de corte bajo te dan ese plus para marcar la diferencia. Suela sintética que da agarre fiable en diferentes superficies. Punta de goma para protección extra. Material superior de lona resistente y ligero.',1,2,6999,15,'2021-01-06 00:00:00','2021-01-06 00:00:00',1);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_usuarios`
--

DROP TABLE IF EXISTS `productos_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos_usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto_id` int(11) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `talle` int(11) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_id_idx` (`producto_id`),
  KEY `usuario_id_idx` (`usuario_id`),
  CONSTRAINT `producto_id` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_usuarios`
--

LOCK TABLES `productos_usuarios` WRITE;
/*!40000 ALTER TABLE `productos_usuarios` DISABLE KEYS */;
INSERT INTO `productos_usuarios` VALUES (2,1,10,1,40,'1-1607531432123.jpg','2021-03-17 17:13:53','2021-03-17 17:13:53');
/*!40000 ALTER TABLE `productos_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talles`
--

DROP TABLE IF EXISTS `talles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `talle` int(11) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talles`
--

LOCK TABLES `talles` WRITE;
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
INSERT INTO `talles` VALUES (1,34,1),(2,35,1),(3,36,1),(4,37,1),(5,38,1),(6,39,1),(7,40,1),(8,41,1),(9,42,1),(10,43,1),(11,44,1);
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `dni` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `categoria` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categoria_idx` (`categoria`),
  CONSTRAINT `categoria` FOREIGN KEY (`categoria`) REFERENCES `categorias_usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (10,'santiago','bullrich','1991-11-11',35971495,'santibullrich@gmail.com','$2b$10$DLcI72i7MLyLiyWzj5RTDeqdKnvbVNoigiCf/3pKqr/JTWXSueW6i',1,'2021-03-17 17:12:36','2021-03-17 17:12:36',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-17 14:14:36
