-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-07-2022 a las 12:50:54
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
-- Base de datos: `allcourse`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `credenciales`
--

CREATE TABLE `credenciales` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `rol` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `credenciales`
--

INSERT INTO `credenciales` (`id`, `username`, `contrasena`, `estado`, `id_user`, `rol`) VALUES
(1, 'admin', '$2b$12$wosMk4pGD5bFNINKHnLuIeTO77F8R.RmpMM9C5zdYwB4NKEaI5Wni', 1, 0, 'admin'),
(2, 'admin2', 'admin', 0, NULL, ''),
(3, '1003064587', '$2b$12$466fVpgT5qbCqL46mlRISej/Ce1NtnVtUKLvLMYMgAVDSibwMlvna', 1, 1, 'tutor'),
(4, '[object Object]', '$2b$12$gr/9NQwUBilfRyb0KsvA/.b0FzMog5XlzaQnm4rlw8cd0EeouV8we', 0, 0, 'estudiante'),
(5, '[object Object]', '$2b$12$W40OVyIfr1syAjHLl05uR.1QwAaQBoFZDKtDeLIjM7I.Upr5jtfuq', 0, 0, 'estudiante'),
(6, 'Zuly', '$2b$12$lMtyniAa7ejJMck24A.yB.1K2oI2IHU45Sy3.4274bqc/z74RO5P6', 0, 7, 'estudiante'),
(7, 'Zuly', '$2b$12$rZ87nNzQU9OFMeAU30wD5e9O8WJYr4Vpqj6AjkKgOSw82N/B5zE7e', 1, 8, 'estudiante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peticiones`
--

CREATE TABLE `peticiones` (
  `id` int(11) NOT NULL,
  `fecha_deseada` varchar(20) NOT NULL,
  `hora` varchar(20) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_tutor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tutores`
--

CREATE TABLE `tutores` (
  `id` int(11) NOT NULL,
  `especialidad` varchar(20) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `disponibilidad` varchar(100) NOT NULL,
  `id_user` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tutores`
--

INSERT INTO `tutores` (`id`, `especialidad`, `descripcion`, `disponibilidad`, `id_user`, `estado`) VALUES
(1, 'Programador', 'Hibernate es un framework especializado para las primeras dos capas del negocio (a saber la capa de datos DTO y la capa de acceso a los datos DAO). Hibernate funciona mediante el marcado de clases med', 'Siempre', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `num_doc` int(11) NOT NULL,
  `tipo_doc` varchar(10) NOT NULL,
  `pais` varchar(10) NOT NULL,
  `celular` int(11) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `fecha_nacimiento` varchar(10) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `ciudad` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `num_doc`, `tipo_doc`, `pais`, `celular`, `correo`, `fecha_nacimiento`, `direccion`, `ciudad`) VALUES
(1, 'Leonardo', 'Palomo', 1003064587, 'C.C', 'Colombia', 2147483647, 'danielasasuki3112@gmail.com', '2001-06-22', 'Carrera 26 #19-50', 'Lorica'),
(2, 'Zuleimy', 'Parra Suarez', 1194276582, 'C.C', 'Colombia', 2147483647, 'luisfernandobuelvastordecilla@', '2000-08-03', 'Kra 50', 'Monteria'),
(3, 'Zuleimy', 'Parra Suarez', 1194276582, 'C.C', 'Colombia', 2147483647, 'luisfernandobuelvastordecilla@', '2000-08-03', 'Kra 50', 'Monteria'),
(4, 'Zuleimy', 'Parra Suarez', 1194276582, 'C.C', 'Colombia', 2147483647, 'luisfernandobuelvastordecilla@', '2000-08-03', 'Kra 50', 'Monteria'),
(5, 'Zuleimy', 'Parra Suarez', 1194276582, 'C.C', 'Colombia', 2147483647, 'luisfernandobuelvastordecilla@', '2000-08-03', 'Kra 50', 'Monteria'),
(6, 'Zuleimy', 'Parra Suarez', 1194276582, 'C.C', 'Colombia', 2147483647, 'luisfernandobuelvastordecilla@', '2000-08-03', 'Kra 50', 'Monteria'),
(7, 'Zuleimy', 'Parra Suarez', 1194276582, 'C.C', 'Colombia', 2147483647, 'luisfernandobuelvastordecilla@', '2000-08-03', 'Kra 50', 'Monteria'),
(8, 'Zuleimy', 'Parra Suarez', 1194276582, 'C.C', 'Colombia', 2147483647, 'luisfernandobuelvastordecilla@', '2000-08-03', 'Kra 50', 'Monteria');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `credenciales`
--
ALTER TABLE `credenciales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `peticiones`
--
ALTER TABLE `peticiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tutores`
--
ALTER TABLE `tutores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `credenciales`
--
ALTER TABLE `credenciales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `peticiones`
--
ALTER TABLE `peticiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tutores`
--
ALTER TABLE `tutores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
