-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-04-2022 a las 19:35:49
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

--
-- Volcado de datos para la tabla `bodegas`
--

INSERT INTO `bodegas` (`id`, `name`) VALUES
(1, 'Zuccardi'),
(2, 'Catena Zapata'),
(3, 'Trapiche'),
(4, 'Super Uco'),
(5, 'El Esteco'),
(6, 'Salentein');

--
-- Volcado de datos para la tabla `files`
--

INSERT INTO `files` (`id`, `url`, `type`) VALUES
(1, 'file-1646260635204.jpg', NULL);

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `anno`, `varietal`, `tipoVino`, `bodega`, `notasCata`, `maridaje`, `price`, `offert`, `destacado`, `recomendaciones`, `image`) VALUES
(29, 'Reserva El Esteco', '2017', 2, 1, 5, 'Frutado', 'Carnes rojas, Pastas', '3000', 0, 0, 1, 'file-1648919619653.jpg'),
(30, 'Chateau Latour', '2005', 3, 1, 1, 'Seco, Citrico', 'Pescados', '13000', 0, 1, 0, 'file-1648919874704.jpg'),
(31, 'De sangre', '2018', 6, 2, 3, 'Fresco y nítido', 'Sushi, queso azul', '4500', 1, 0, 0, 'file-1648920048394.jpg'),
(32, 'El Noble', '2019', 5, 2, 4, 'franco y refrescante, vivaz y voluptuoso', 'Pescados', '7500', 0, 1, 1, 'file-1648920186506.jpg');

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220226203912-create-bodega.js'),
('20220226203912-create-product.js'),
('20220226203912-create-tipo_vino.js'),
('20220226203912-create-user.js'),
('20220226203912-create-varietal.js');

--
-- Volcado de datos para la tabla `tipo_vino`
--

INSERT INTO `tipo_vino` (`id`, `name`) VALUES
(1, 'Tinto'),
(2, 'Blanco'),
(3, 'Rosado'),
(4, 'Espumante'),
(5, 'Champagne');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `email`, `password`, `isAdmin`, `isActive`, `image`) VALUES
(30, 'UsuarioAdmin', 'Test', 'admin@ewine.com', '$2b$10$y08OVj/oViqRNRXDxay4PuBWh4AFxYPpbvJmLEpSTufyvjb0HJk0y', 1, 1, 'file-1648919420887.jpg');

--
-- Volcado de datos para la tabla `varietales`
--

INSERT INTO `varietales` (`id`, `name`) VALUES
(1, 'Cabernet Sauvignon'),
(2, 'Malbec'),
(3, 'Merlot'),
(4, 'Syrah'),
(5, 'Chardonnay'),
(6, 'Sauvignon Blanc'),
(7, 'Pinot Noir');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
