-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-01-2021 a las 19:49:11
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `championes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_productos`
--

CREATE TABLE `categorias_productos` (
  `id` int(11) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `estado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias_productos`
--

INSERT INTO `categorias_productos` (`id`, `categoria`, `estado`) VALUES
(1, 'Calzado Urbano', 1),
(2, 'Calzado Deportivo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_usuarios`
--

CREATE TABLE `categorias_usuarios` (
  `id` int(11) NOT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias_usuarios`
--

INSERT INTO `categorias_usuarios` (`id`, `categoria`, `estado`) VALUES
(1, 'usuario', 1),
(2, 'administrador', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `estado` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `nombre`, `id_producto`, `estado`) VALUES
(1, '1-1607531432123.jpg', 1, 1),
(2, '2-1607531503018.jpg', 2, 1),
(3, '3-1607531531704.jpeg', 3, 1),
(4, '4-1607622472512.jpeg', 4, 1),
(5, '5-1607622725020.jpeg', 5, 1),
(6, '6-1607622798603.jpeg', 6, 1),
(7, '7-1611374345352.jpg', 7, 1),
(8, '8-1611375137281.jpg', 8, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `id` int(11) NOT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`id`, `marca`, `estado`) VALUES
(1, 'Vans', 1),
(2, 'Converse', 1),
(3, 'Nike', 1),
(4, 'Adidas', 1),
(5, 'Vans', 1),
(6, 'Puma', 1),
(7, 'Topper', 1),
(8, 'Fila', 1),
(9, 'DC', 1),
(10, 'Asics', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `producto` varchar(200) NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `id_marca` int(11) DEFAULT NULL,
  `precio` decimal(10,0) NOT NULL,
  `descuento` int(11) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `producto`, `descripcion`, `id_categoria`, `id_marca`, `precio`, `descuento`, `estado`) VALUES
(1, 'Vans Old School', 'Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico sidestripe de la marca. Nacieron como un calzado para skaters de los años 70´y con el correr de las décadas se transformó en un modelo básico de lifestyle. Son zapatillas de corte bajo confeccionadas con capellada de canvas y cuero suede resistente, tiene punteras reforzadas para añadir durabilidad, la suela de caucho original Vans Wafflesole y cuello acolchado para ofrecer sujeción y confort.', 1, 1, '7999', 15, 1),
(2, 'DC Crisis', 'Material de la parte superior: cuero, nobuk o loneta. Sin puntera de goma. Logo serigrafiado repujado en el panel lateral. Lengüeta y cuello acolchados con espuma, para mayor confort y sujeción. Forro de malla para mayor comodidad. Orificios de ventilación para mayor transpirabilidad. Suela de copa de alto rendimiento. Suela DC con dibujo Pill Pattern de marca registrada.', 1, 9, '12000', NULL, 1),
(3, 'Nike Air Jordan', 'El Air Jordan 1 es una de las zapatillas más vendidas de Nike en relación con la practica del baloncesto, desde sus orígenes siempre ha destacado por su gran versatilidad sobre la pista de basket. Adaptándose a diversos estilos de juegos y deslumbrando por su calidad.', 1, 3, '15999', 10, 1),
(4, 'Nike Air Zoom Pegasus 37', 'Las zapatillas Nike Air Zoom Pegasus 37 no son otra cosa que una de las zapatillas más destacadas del mundo del running en 2020. Su mediasuela Nike React y la unidad Zoom Air para cubrir gran parte del antepié te brindan mejores transiciones y suavidad para tu pie. Sus avances en transpirabilidad y ligereza gracias a un patrón de costura similar a las Zoom Fly 3 las vuelven fundamentales para runners amateurs que quieran hacer de sus jornadas de entrenamiento, una de placer.', 2, 3, '15000', NULL, 1),
(5, 'Zapatillas Adidas Lite Racer CLN', 'Las zapatillas Adidas Lite Racer CLN poseen un estilo elegante y minimalista con una parte superior de malla transpirable y ligera. Su suela y mediasuela con tecnología Cloudfoam ofrecen una pisada más cómoda. La plantilla OrthoLite® expulsa el sudor y la humedad y mantiene los pies secos.', 2, 4, '8999', NULL, 1),
(6, 'Asics Gel-Kayano 26', 'Las zapatillas Asics Gel-Kayano 26 están compuestas por una malla técnica que mantendrá tus pies frescos, mientras que la suela flexible potencia una transición natural entre cada una de las fases de la pisada. La entresuela con tecnología Space Trusstic proporciona estabilidad y reduce el peso total de la zapatilla para fomentar una transición más fluida desde la fase de contacto hasta la de impulsión. Esto se complementa con un patrón de surcos flexibles y profundos en la parte delantera de la suela que hace que el calzado acompañe el movimiento natural del pie. Las Gel-Kayano 26 son una opción ideal para profesionales como también aquellos amateurs que busquen un modelo que fusione comodidad con una excelente sujeción.', 1, 10, '16499', NULL, 1),
(7, 'Zapatillas Converse Chuck Taylor All Star', 'Calzado ideal para desarrollar todas tus actividades urbanas.  Diseño de caña baja para un calce rápido.  La parte superior de la capellada esta confeccionada de algodón para un calce confortable.  La suela es de caucho, logrando con ello una pisada firme y segura.', 1, 2, '6195', 10, 1),
(8, 'Zapatillas Converse Distrito Bordó', 'Converse All Star en estilo de corte bajo te dan ese plus para marcar la diferencia. Suela sintética que da agarre fiable en diferentes superficies. Punta de goma para protección extra. Material superior de lona resistente y ligero.', 1, 2, '6999', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_talle`
--

CREATE TABLE `producto_talle` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `id_talle` int(11) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto_talle`
--

INSERT INTO `producto_talle` (`id`, `id_producto`, `id_talle`, `estado`) VALUES
(1, 2, 5, 1),
(2, 2, 6, 1),
(3, 2, 7, 1),
(4, 2, 8, 1),
(5, 1, 5, 1),
(6, 1, 6, 1),
(7, 1, 7, 1),
(8, 1, 8, 1),
(9, 1, 9, 1),
(10, 3, 4, 1),
(11, 3, 5, 1),
(12, 3, 6, 1),
(13, 3, 7, 1),
(14, 3, 8, 1),
(15, 3, 9, 1),
(16, 3, 10, 1),
(17, 3, 11, 1),
(18, 4, 2, 1),
(19, 4, 3, 1),
(20, 4, 4, 1),
(21, 4, 5, 1),
(22, 4, 6, 1),
(23, 4, 7, 1),
(24, 4, 8, 1),
(25, 4, 9, 1),
(26, 4, 10, 1),
(27, 4, 11, 1),
(28, 5, 4, 1),
(29, 5, 5, 1),
(30, 5, 6, 1),
(31, 5, 7, 1),
(32, 5, 8, 1),
(33, 5, 9, 1),
(34, 5, 10, 1),
(35, 6, 3, 1),
(36, 6, 4, 1),
(37, 6, 5, 1),
(38, 6, 6, 1),
(39, 6, 7, 1),
(44, 7, 4, 1),
(45, 7, 5, 1),
(46, 7, 10, 1),
(47, 7, 11, 1),
(48, 8, 3, 1),
(49, 8, 4, 1),
(50, 8, 5, 1),
(51, 8, 6, 1),
(52, 8, 9, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `talles`
--

CREATE TABLE `talles` (
  `id` int(11) NOT NULL,
  `talle` int(11) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `talles`
--

INSERT INTO `talles` (`id`, `talle`, `estado`) VALUES
(1, 34, 1),
(2, 35, 1),
(3, 36, 1),
(4, 37, 1),
(5, 38, 1),
(6, 39, 1),
(7, 40, 1),
(8, 41, 1),
(9, 42, 1),
(10, 43, 1),
(11, 44, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `dni` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `estado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias_productos`
--
ALTER TABLE `categorias_productos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indices de la tabla `categorias_usuarios`
--
ALTER TABLE `categorias_usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `id_producto_idx` (`id_producto`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `id_categoria_idx` (`id_categoria`),
  ADD KEY `id_marcas_idx` (`id_marca`);

--
-- Indices de la tabla `producto_talle`
--
ALTER TABLE `producto_talle`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `id_talle_idx` (`id_talle`),
  ADD KEY `id_producto_idx` (`id_producto`);

--
-- Indices de la tabla `talles`
--
ALTER TABLE `talles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria_idx` (`id_categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias_productos`
--
ALTER TABLE `categorias_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `categorias_usuarios`
--
ALTER TABLE `categorias_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `producto_talle`
--
ALTER TABLE `producto_talle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `talles`
--
ALTER TABLE `talles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias_productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_marca` FOREIGN KEY (`id_marca`) REFERENCES `marcas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `producto_talle`
--
ALTER TABLE `producto_talle`
  ADD CONSTRAINT `id_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_talle` FOREIGN KEY (`id_talle`) REFERENCES `talles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias_usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
