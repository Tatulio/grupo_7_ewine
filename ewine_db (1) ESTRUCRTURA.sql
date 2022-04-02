-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-03-2022 a las 00:16:14
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ewine_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bodegas`
--

CREATE TABLE `bodegas` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `bodegas`
--

INSERT INTO `bodegas` (`id`, `name`) VALUES
(1, 'RUTINI'),
(2, 'LOPEZ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `url` varchar(100) NOT NULL,
  `type` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `files`
--

INSERT INTO `files` (`id`, `url`, `type`) VALUES
(1, 'file-1646260635204.jpg', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `anno` varchar(255) NOT NULL,
  `varietal` int(11) DEFAULT NULL,
  `tipoVino` int(11) DEFAULT NULL,
  `bodega` int(11) DEFAULT NULL,
  `notasCata` varchar(255) NOT NULL,
  `maridaje` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `offert` tinyint(1) DEFAULT NULL,
  `destacado` tinyint(1) DEFAULT NULL,
  `recomendaciones` tinyint(1) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `anno`, `varietal`, `tipoVino`, `bodega`, `notasCata`, `maridaje`, `price`, `offert`, `destacado`, `recomendaciones`, `image`) VALUES
(1, 'PROBANDO', '1900', 2, 2, 2, '345345', '32454235', '44444', 0, 0, 0, NULL),
(2, 'prueba de prueba', '1904', 2, 2, 2, '3453452345243\r\n                 ', '3452345345345', '34444444', 0, 0, 0, NULL),
(3, 'GUFFY ES LOPEZ Y VERDE?', '1234', 2, 2, 2, 'sarasa  4353245345', 'sarasa4                ', '6666', 0, 0, 0, NULL),
(4, 'pluto', '1500', 1, 1, 1, 'CATASSSSS', 'MARIDAJESSSS', '1501', 0, 0, 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220226203912-create-bodega.js'),
('20220226203912-create-product.js'),
('20220226203912-create-tipo_vino.js'),
('20220226203912-create-user.js'),
('20220226203912-create-varietal.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_vino`
--

CREATE TABLE `tipo_vino` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_vino`
--

INSERT INTO `tipo_vino` (`id`, `name`) VALUES
(1, 'MALBEC'),
(2, 'CAVERNET');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `email`, `password`, `isAdmin`, `isActive`, `image`) VALUES
(1, 'Nicolás', 'Tablas', 'smkton@ewine.com', '$2b$10$ehaF6NjGvvtnnYoroWzGJuM2r94ONboLWPXm1Ig.08eWSBXTiOxQ6', 1, 1, 'file-1646705885199.jpg'),
(2, 'Nicolás', 'Tablas', 'sm3E3kton@gmail.com', '$2b$10$SmB6qsJnUG2RPHK5uABZAOZ9IrxPYYVau3CMn43uBKSj0daoD81uy', 0, 1, NULL),
(3, 'Nicolás', 'Tablas', 'smkton@gm', '$2b$10$lyXkD.WR4L695N2JPIPlR.A7qwZZsIbw6fsLYerKezAhmQI30arzW', 0, 1, NULL),
(4, 'Nicolás', 'Tablas', 'smktoom', '$2b$10$sAVhArPJFBKCZUp2ZI6ZyeX.Ia6ipe3Y1qiLWBiQUY8a7qf8f2BmS', 0, 1, NULL),
(5, 'Nicolás', 'Tablas', 'smkto', '$2b$10$ZudHfAdRSP7HVORhBmVebOefmYs2UUPt/qs3Sk4sWSo5irqM51Pb.', 0, 1, NULL),
(6, 'Nicolás', 'Tablas', 'sm', '$2b$10$GQV7NZtBz/y5d4sZ.70nb.FmzHKigCQ5f5V3HQMPPzOnL/EPrJ3G.', 0, 1, NULL),
(7, 'Nicolás', 'Tablas', 'silm', '$2b$10$YgWNb93W7L4mMPIfSOU1z.8HhCWSrNRwf9JDywSFUhrZ1.1JQp23a', 0, 1, NULL),
(8, 'Nicolás', 'Tablas', 'smkton@gmail.com', '$2b$10$ysF46Lu4qZilHy1V/ldI4.wkq.WTnmanHx3joubaY7LqM.UsimLS2', 0, 1, NULL),
(9, 'Nicolás', 'Tablas', 'smkto333n@gmail.com', '$2b$10$qJSEgOkecesVKj0vhwQupesO9/L1oGAEH9qfHPYHTcTQvuU5xnJI6', 0, 1, NULL),
(10, 'Nicolás', 'Tablas', 'smkt5', '$2b$10$EPhsiF3NPu/eH.BBixarnOV0sOAeFpvPxi9L3RPvgQhzLenliBxiG', 0, 1, NULL),
(11, 'Nicolás', 'Tablas', 'sm3333kton@gmail.com', '$2b$10$ajXAwrXWq4QlnjMQFkAUG.bH2sWwr9ODRsKCkJDJfMvfzET53CzlO', 0, 1, NULL),
(12, 'Nicolás', 'Tablas', 's342mkton@gmail.com', '$2b$10$TCyWcClmz4vuJ7JQlbHuYuSjnPhiidCEjvGSqcAoWDIK4XdD/06ou', 0, 1, 'file-1647221067259.jpg'),
(13, 'Nicolás', 'Tablas', 'sm333kton@gmail.com', '$2b$10$xAupxxFyyBxsSPcdzwbljuwakIs/t4fTZ8SABegzu5GT0aYAFqwzO', 0, 1, NULL),
(14, 'Nicolás', 'Tablas', 'smkt234234il.com', '$2b$10$Elyk9VE/RpvuD0S7ch99C.tufwXT0uZ4oLowWfCg/fOs3R20XnSam', 0, 1, NULL),
(15, 'Nicolás', 'Tablas', '111111smkton@gmail.com', '$2b$10$YlpUA3BfFrUDWMwj3rWWbeG07kVOLjgAAcdBKuSErn/CMoAH5s/bK', 0, 1, NULL),
(16, 'Nicolás', 'Tablas', 'sm333311111kton@gmail.com', '$2b$10$zPHyoAY..rnJ71zu5Ge6.e3bm2kao3XrTqBB8uY56FiJRncvRvikS', 0, 1, NULL),
(17, '', '', 'smkt6765756on@gmail.com', '$2b$10$WIXCCkOlbjxRtbV/vRCm2OS9pXfvXKXGmN3XQA5IwquYkSKBTDDVS', 0, 1, NULL),
(18, '', '', 'smkt6766on@gmail.com', '$2b$10$Uf3n.QdoWTK4nKMtT7FjoexPtwKQp/HTYqYzZ0mYwLXZZZaFGkFkm', 0, 1, NULL),
(19, 'Nicolás', 'Tablas', 'snnmkton@gmail.com', '$2b$10$RS8up4KD1u7cS9DozH5jsut/6lbS919ekJrcPcwqrS4UXfu4gPbw.', 0, 1, NULL),
(20, 'Nicolás', 'Tablas', 'nicolas@ewine.com', '$2b$10$VrF8YMjaDII3zDQZqsV25eAgGfurdygn45YJO9vsUvFmm8Cx3K4.2', 1, 1, NULL),
(21, '12341', 'Tablas', 'sm3341kton@gmail.com', '$2b$10$It2.49taafxhR0jTk7.O/.rBwbb8/YLygYfk/CN78o6ve7mTVA2qG', 0, 1, NULL),
(22, 'Nicolás', 'Tablas', 'smk231ton@gmail.com', '$2b$10$oIvrCjzlaKT.nmyte/04.OAeyUgn902PHLSAEfx4NmrNMbhJMgj46', 0, 1, NULL),
(23, 'Nicolás', '1', 'smkto5465464n@gmail.com', '$2b$10$LiFJhtGe60FIBrRvtpUc5OOvPb3/OH61iOh9nZstpuuiiubys5k4O', 0, 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `varietales`
--

CREATE TABLE `varietales` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `varietales`
--

INSERT INTO `varietales` (`id`, `name`) VALUES
(1, 'UVA ROJA'),
(2, 'UVA VERDE');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bodegas`
--
ALTER TABLE `bodegas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipoBodega` (`bodega`),
  ADD KEY `tipoVino1` (`tipoVino`),
  ADD KEY `tipoVarietal` (`varietal`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `tipo_vino`
--
ALTER TABLE `tipo_vino`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `varietales`
--
ALTER TABLE `varietales`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bodegas`
--
ALTER TABLE `bodegas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipo_vino`
--
ALTER TABLE `tipo_vino`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `varietales`
--
ALTER TABLE `varietales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `tipoBodega` FOREIGN KEY (`bodega`) REFERENCES `bodegas` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `tipoVarietal` FOREIGN KEY (`varietal`) REFERENCES `varietales` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `tipoVino1` FOREIGN KEY (`tipoVino`) REFERENCES `tipo_vino` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
