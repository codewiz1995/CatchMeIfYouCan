-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 02, 2016 at 01:15 PM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ctf_prankster`
--
/*CREATE DATABASE IF NOT EXISTS `ctf_prankster` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `ctf_prankster`;*/

-- --------------------------------------------------------

--
-- Table structure for table `level_details`
--

CREATE TABLE IF NOT EXISTS `level_details` (
  `lvlID` int(255) NOT NULL,
  `levelKey` varchar(255) NOT NULL,
  `levelUrl` varchar(255) NOT NULL,
  PRIMARY KEY (`lvlID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `level_details`
--

INSERT INTO `level_details` (`lvlID`, `levelKey`, `levelUrl`) VALUES
(2, '8a17ecb6c1cbe98c3204289d2f8871a8', 'http://localhost/Prankster/aequumtribus.php#'),
(3, '0e7be5bd474722f06afa26580c8a2792', 'http://localhost/Prankster/aequumquattuor.php'),
(4, '7ffef6eb1f0a8ea2f8673b454793b792', 'http://localhost/Prankster/aequumquinque.php'),
(5, '10ff1864b283ba8f1b4c4dbdc3c8603b', 'http://localhost/Prankster/aequumsex.php'),
(6, '9ddbf8dfb598a59b235ea91e1d6c8ec1', 'http://localhost/Prankster/aequumseptem.php'),
(7, '02c75fb22c75b23dc963c7eb91a062cc', 'http://localhost/Prankster/aequumocto.php');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
