-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2026 at 12:22 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appointment`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookingslots`
--

CREATE TABLE `bookingslots` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `day` varchar(255) NOT NULL,
  `time1` varchar(255) DEFAULT NULL,
  `time2` varchar(255) DEFAULT NULL,
  `time3` varchar(255) DEFAULT NULL,
  `time4` varchar(255) DEFAULT NULL,
  `time5` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bookingslots`
--

INSERT INTO `bookingslots` (`id`, `doctor_id`, `day`, `time1`, `time2`, `time3`, `time4`, `time5`, `created_at`, `updated_at`) VALUES
(1, 1, 'Mon', '10:00', NULL, NULL, NULL, NULL, '2026-03-31 06:25:53', '2026-03-31 06:25:53'),
(2, 1, 'Tue', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:25:53', '2026-03-31 06:25:53'),
(3, 1, 'Wed', '10:00', NULL, NULL, NULL, NULL, '2026-03-31 06:25:53', '2026-03-31 06:25:53'),
(4, 1, 'Thu', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:25:53', '2026-03-31 06:25:53'),
(5, 1, 'Fri', '10:00', NULL, NULL, NULL, NULL, '2026-03-31 06:25:53', '2026-03-31 06:25:53'),
(6, 1, 'Sat', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:25:53', '2026-03-31 06:25:53'),
(7, 1, 'Sun', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:25:53', '2026-03-31 06:25:53'),
(8, 2, 'Mon', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:32:15', '2026-03-31 06:32:15'),
(9, 2, 'Tue', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:32:15', '2026-03-31 06:32:15'),
(10, 2, 'Wed', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:32:15', '2026-03-31 06:32:15'),
(11, 2, 'Thu', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:32:15', '2026-03-31 06:32:15'),
(12, 2, 'Fri', '13:00', NULL, NULL, NULL, NULL, '2026-03-31 06:32:15', '2026-03-31 06:32:15'),
(13, 2, 'Sat', '13:00', NULL, NULL, NULL, NULL, '2026-03-31 06:32:15', '2026-03-31 06:32:15'),
(14, 2, 'Sun', '13:00', NULL, NULL, NULL, NULL, '2026-03-31 06:32:15', '2026-03-31 06:32:15'),
(15, 3, 'Mon', '12:00', NULL, NULL, NULL, NULL, '2026-03-31 06:44:46', '2026-03-31 06:44:46'),
(16, 3, 'Tue', '17:00', NULL, NULL, NULL, NULL, '2026-03-31 06:44:46', '2026-03-31 06:44:46'),
(17, 3, 'Wed', '17:00', NULL, NULL, NULL, NULL, '2026-03-31 06:44:46', '2026-03-31 06:44:46'),
(18, 3, 'Thu', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:44:46', '2026-03-31 06:44:46'),
(19, 3, 'Fri', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:44:46', '2026-03-31 06:44:46'),
(20, 3, 'Sat', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:44:46', '2026-03-31 06:44:46'),
(21, 3, 'Sun', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:44:46', '2026-03-31 06:44:46'),
(22, 4, 'Mon', '10:00', NULL, NULL, NULL, NULL, '2026-03-31 06:45:54', '2026-03-31 06:45:54'),
(23, 4, 'Tue', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:45:54', '2026-03-31 06:45:54'),
(24, 4, 'Wed', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:45:54', '2026-03-31 06:45:54'),
(25, 4, 'Thu', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:45:54', '2026-03-31 06:45:54'),
(26, 4, 'Fri', '10:00', NULL, NULL, NULL, NULL, '2026-03-31 06:45:54', '2026-03-31 06:45:54'),
(27, 4, 'Sat', '10:00', '18:00', NULL, NULL, NULL, '2026-03-31 06:45:54', '2026-03-31 06:45:54'),
(28, 4, 'Sun', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:45:54', '2026-03-31 06:45:54'),
(29, 5, 'Mon', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:54:54', '2026-03-31 06:54:54'),
(30, 5, 'Tue', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:54:54', '2026-03-31 06:54:54'),
(31, 5, 'Wed', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:54:54', '2026-03-31 06:54:54'),
(32, 5, 'Thu', NULL, NULL, NULL, NULL, NULL, '2026-03-31 06:54:54', '2026-03-31 06:54:54'),
(33, 5, 'Fri', '12:00', NULL, NULL, NULL, NULL, '2026-03-31 06:54:54', '2026-03-31 06:54:54'),
(34, 5, 'Sat', '12:00', NULL, NULL, NULL, NULL, '2026-03-31 06:54:54', '2026-03-31 06:54:54'),
(35, 5, 'Sun', '12:00', NULL, NULL, NULL, NULL, '2026-03-31 06:54:54', '2026-03-31 06:54:54'),
(36, 6, 'Mon', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:01:54', '2026-03-31 07:01:54'),
(37, 6, 'Tue', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:01:54', '2026-03-31 07:01:54'),
(38, 6, 'Wed', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:01:54', '2026-03-31 07:01:54'),
(39, 6, 'Thu', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:01:54', '2026-03-31 07:01:54'),
(40, 6, 'Fri', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:01:54', '2026-03-31 07:01:54'),
(41, 6, 'Sat', '15:00', NULL, NULL, NULL, NULL, '2026-03-31 07:01:54', '2026-03-31 07:01:54'),
(42, 6, 'Sun', '15:00', NULL, NULL, NULL, NULL, '2026-03-31 07:01:54', '2026-03-31 07:01:54'),
(43, 7, 'Mon', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:04:46', '2026-03-31 07:04:46'),
(44, 7, 'Tue', '16:00', NULL, NULL, NULL, NULL, '2026-03-31 07:04:46', '2026-03-31 07:04:46'),
(45, 7, 'Wed', '16:00', NULL, NULL, NULL, NULL, '2026-03-31 07:04:46', '2026-03-31 07:04:46'),
(46, 7, 'Thu', '17:00', NULL, NULL, NULL, NULL, '2026-03-31 07:04:46', '2026-03-31 07:04:46'),
(47, 7, 'Fri', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:04:46', '2026-03-31 07:04:46'),
(48, 7, 'Sat', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:04:46', '2026-03-31 07:04:46'),
(49, 7, 'Sun', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:04:46', '2026-03-31 07:04:46'),
(50, 8, 'Mon', '12:00', NULL, NULL, NULL, NULL, '2026-03-31 07:10:56', '2026-03-31 07:10:56'),
(51, 8, 'Tue', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:10:56', '2026-03-31 07:10:56'),
(52, 8, 'Wed', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:10:56', '2026-03-31 07:10:56'),
(53, 8, 'Thu', '14:00', NULL, NULL, NULL, NULL, '2026-03-31 07:10:56', '2026-03-31 07:10:56'),
(54, 8, 'Fri', '14:00', NULL, NULL, NULL, NULL, '2026-03-31 07:10:56', '2026-03-31 07:10:56'),
(55, 8, 'Sat', '17:00', NULL, NULL, NULL, NULL, '2026-03-31 07:10:56', '2026-03-31 07:10:56'),
(56, 8, 'Sun', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:10:56', '2026-03-31 07:10:56'),
(57, 9, 'Mon', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:13:39', '2026-03-31 07:13:39'),
(58, 9, 'Tue', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:13:39', '2026-03-31 07:13:39'),
(59, 9, 'Wed', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:13:39', '2026-03-31 07:13:39'),
(60, 9, 'Thu', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:13:39', '2026-03-31 07:13:39'),
(61, 9, 'Fri', '10:00', NULL, NULL, NULL, NULL, '2026-03-31 07:13:39', '2026-03-31 07:13:39'),
(62, 9, 'Sat', '15:00', NULL, NULL, NULL, NULL, '2026-03-31 07:13:39', '2026-03-31 07:13:39'),
(63, 9, 'Sun', '15:00', NULL, NULL, NULL, NULL, '2026-03-31 07:13:39', '2026-03-31 07:13:39'),
(64, 10, 'Mon', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:26:34', '2026-03-31 07:26:34'),
(65, 10, 'Tue', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:26:34', '2026-03-31 07:26:34'),
(66, 10, 'Wed', '18:00', NULL, NULL, NULL, NULL, '2026-03-31 07:26:34', '2026-03-31 07:26:34'),
(67, 10, 'Thu', '18:00', NULL, NULL, NULL, NULL, '2026-03-31 07:26:34', '2026-03-31 07:26:34'),
(68, 10, 'Fri', '18:00', NULL, NULL, NULL, NULL, '2026-03-31 07:26:34', '2026-03-31 07:26:34'),
(69, 10, 'Sat', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:26:34', '2026-03-31 07:26:34'),
(70, 10, 'Sun', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:26:34', '2026-03-31 07:26:34'),
(71, 11, 'Mon', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:28:31', '2026-03-31 07:28:31'),
(72, 11, 'Tue', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:28:31', '2026-03-31 07:28:31'),
(73, 11, 'Wed', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:28:31', '2026-03-31 07:28:31'),
(74, 11, 'Thu', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:28:31', '2026-03-31 07:28:31'),
(75, 11, 'Fri', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:28:31', '2026-03-31 07:28:31'),
(76, 11, 'Sat', '10:30', NULL, NULL, NULL, NULL, '2026-03-31 07:28:31', '2026-03-31 07:28:31'),
(77, 11, 'Sun', '10:30', NULL, NULL, NULL, NULL, '2026-03-31 07:28:31', '2026-03-31 07:28:31'),
(78, 12, 'Mon', '16:30', NULL, NULL, NULL, NULL, '2026-03-31 07:41:10', '2026-03-31 07:41:10'),
(79, 12, 'Tue', '16:30', NULL, NULL, NULL, NULL, '2026-03-31 07:41:10', '2026-03-31 07:41:10'),
(80, 12, 'Wed', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:41:10', '2026-03-31 07:41:10'),
(81, 12, 'Thu', NULL, NULL, NULL, NULL, NULL, '2026-03-31 07:41:10', '2026-03-31 07:41:10'),
(82, 12, 'Fri', '16:30', NULL, NULL, NULL, NULL, '2026-03-31 07:41:10', '2026-03-31 07:41:10'),
(83, 12, 'Sat', '16:30', NULL, NULL, NULL, NULL, '2026-03-31 07:41:10', '2026-03-31 07:41:10'),
(84, 12, 'Sun', '16:30', NULL, NULL, NULL, NULL, '2026-03-31 07:41:10', '2026-03-31 07:41:10'),
(85, 13, 'Mon', NULL, NULL, NULL, NULL, NULL, '2026-03-31 08:19:35', '2026-03-31 08:19:35'),
(86, 13, 'Tue', '16:30', NULL, NULL, NULL, NULL, '2026-03-31 08:19:35', '2026-03-31 08:19:35'),
(87, 13, 'Wed', '16:30', NULL, NULL, NULL, NULL, '2026-03-31 08:19:35', '2026-03-31 08:19:35'),
(88, 13, 'Thu', '16:30', NULL, NULL, NULL, NULL, '2026-03-31 08:19:35', '2026-03-31 08:19:35'),
(89, 13, 'Fri', '16:30', NULL, NULL, NULL, NULL, '2026-03-31 08:19:35', '2026-03-31 08:19:35'),
(90, 13, 'Sat', NULL, NULL, NULL, NULL, NULL, '2026-03-31 08:19:35', '2026-03-31 08:19:35'),
(91, 13, 'Sun', NULL, NULL, NULL, NULL, NULL, '2026-03-31 08:19:35', '2026-03-31 08:19:35'),
(92, 14, 'Mon', '09:00', '17:00', NULL, NULL, NULL, '2026-04-03 08:10:39', '2026-04-03 08:10:39'),
(93, 14, 'Tue', NULL, NULL, NULL, NULL, NULL, '2026-04-03 08:10:39', '2026-04-03 08:10:39'),
(94, 14, 'Wed', '09:00', '17:00', NULL, NULL, NULL, '2026-04-03 08:10:39', '2026-04-03 08:10:39'),
(95, 14, 'Thu', NULL, NULL, NULL, NULL, NULL, '2026-04-03 08:10:39', '2026-04-03 08:10:39'),
(96, 14, 'Fri', '09:00', '17:00', NULL, NULL, NULL, '2026-04-03 08:10:39', '2026-04-03 08:10:39'),
(97, 14, 'Sat', '15:00', NULL, NULL, NULL, NULL, '2026-04-03 08:10:39', '2026-04-03 08:10:39'),
(98, 14, 'Sun', '15:00', NULL, NULL, NULL, NULL, '2026-04-03 08:10:39', '2026-04-03 08:10:39'),
(99, 15, 'Mon', NULL, NULL, NULL, NULL, NULL, '2026-04-03 08:25:05', '2026-04-03 08:25:05'),
(100, 15, 'Tue', NULL, NULL, NULL, NULL, NULL, '2026-04-03 08:25:05', '2026-04-03 08:25:05'),
(101, 15, 'Wed', NULL, NULL, NULL, NULL, NULL, '2026-04-03 08:25:05', '2026-04-03 08:25:05'),
(102, 15, 'Thu', NULL, NULL, NULL, NULL, NULL, '2026-04-03 08:25:05', '2026-04-03 08:25:05'),
(103, 15, 'Fri', '14:00', NULL, NULL, NULL, NULL, '2026-04-03 08:25:05', '2026-04-03 08:25:05'),
(104, 15, 'Sat', '14:00', NULL, NULL, NULL, NULL, '2026-04-03 08:25:05', '2026-04-03 08:25:05'),
(105, 15, 'Sun', '14:00', NULL, NULL, NULL, NULL, '2026-04-03 08:25:05', '2026-04-03 08:25:05'),
(106, 16, 'Mon', NULL, NULL, NULL, NULL, NULL, '2026-04-03 08:44:29', '2026-04-03 08:44:29'),
(107, 16, 'Tue', NULL, NULL, NULL, NULL, NULL, '2026-04-03 08:44:29', '2026-04-03 08:44:29'),
(108, 16, 'Wed', '10:45', NULL, NULL, NULL, NULL, '2026-04-03 08:44:29', '2026-04-03 08:44:29'),
(109, 16, 'Thu', '10:45', NULL, NULL, NULL, NULL, '2026-04-03 08:44:29', '2026-04-03 08:44:29'),
(110, 16, 'Fri', '10:45', NULL, NULL, NULL, NULL, '2026-04-03 08:44:29', '2026-04-03 08:44:29'),
(111, 16, 'Sat', '10:45', NULL, NULL, NULL, NULL, '2026-04-03 08:44:29', '2026-04-03 08:44:29'),
(112, 16, 'Sun', '10:45', NULL, NULL, NULL, NULL, '2026-04-03 08:44:29', '2026-04-03 08:44:29');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `speciality_id` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `exp` int(11) NOT NULL,
  `about` text NOT NULL,
  `fee` int(11) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `hospital` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `available` int(11) NOT NULL,
  `earnings` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `name`, `email`, `degree`, `speciality_id`, `password`, `exp`, `about`, `fee`, `phone`, `hospital`, `image`, `available`, `earnings`, `created_at`, `updated_at`) VALUES
(1, 'Dr.Higuruma', 'higuruma@gmail.com', 'MBBS Ph.D , DHSc Londan', 5, '$2y$12$6VJR1b.GFQipQemq2dm3su6kStkCpURjdDb5kkLCJOhjtFt4sZVea', 8, 'Hello', 350, '09356894795', 'OSC Hospital', '/storage/profile/ZHRfaSa5lzo5tFyVSGbpPbiqFTl5YonoH11Csi9D.jpg', 1, NULL, '2026-03-31 06:23:56', '2026-03-31 06:23:56'),
(2, 'Dr.Choso', 'choso@gmail.com', 'MBBS (UK) , Ph.D', 1, '$2y$12$MD/yiKl5Z0OD2gfjonHQ9eDTKzIlYLA5FihKkod3t9KJayWxiHJ3m', 7, 'I need blood', 199, '01-552940890', 'Yangon Hospital', '/storage/profile/lR5ajMobwVxtYPUbSIai08FONBtuhBjFRcwhcPdu.jpg', 1, 199, '2026-03-31 06:31:32', '2026-04-05 00:00:22'),
(3, 'Dr.Maki Zenin', 'maki@gmail.com', 'MBBS (Ph.D) MBChB, MBBChir (HongKong)', 6, '$2y$12$TA9PawNImKrnOLVhmLZJF.j9WGEmkBJ082uYk2fYVVZkSx6ZkhbqK', 11, 'Hello', 500, '09115991051', 'Toyota University Hospital', '/storage/profile/Y914ElYG11JFBSQQhjB0MBfAbpdtD2JNoQeyPCPQ.jpg', 1, NULL, '2026-03-31 06:36:08', '2026-03-31 06:36:08'),
(4, 'Dr.Todo', 'todo@gmail.com', 'MBBS (Japan) , Ph.D, M.Ed', 1, '$2y$12$ORecSuibV8U6Sbixu/JZAOEQ552w.y3fjyBuhU5n3mA/mLjfHm4Xu', 6, 'Gay', 180, '01-287640980', 'OSC Hospital', '/storage/profile/HJ4vbqrP0rfl1LTvAtTiPEyMv9h1iSJmDBFFCr6r.jpg', 1, NULL, '2026-03-31 06:37:41', '2026-03-31 06:37:41'),
(5, 'Dr.Megumi Fushiguro', 'megumi@gmail.com', 'MBBS Ph.D , DHSc Korea , M.MEd', 3, '$2y$12$X9Td/qbrCpLjvX6NI.Pb5.PuZNc7ud3/.zwuHRHvbIvuK8.3UAdN6', 8, 'Summon the god', 270, '01-197677920', 'Kyoto Hospital', '/storage/profile/NNR49eOVGsluJqWXQYm8COfBiKFYdSO8AwDBZEuf.jpg', 1, NULL, '2026-03-31 06:39:37', '2026-03-31 06:39:37'),
(6, 'Dr.Gojo Satoru', 'gojo@gmail.com', 'MBBS (Ph.D) MBChB (Head) ,  M.MEd (India)', 5, '$2y$12$5a8Q1YAmA5UV8jI0pYI2ne/OJZj1o0BqMA1Rd8P9fPDidr.NrJAKa', 11, 'GOjo Satoru........', 600, '09564001287', 'Toyota University Hospital', '/storage/profile/i8j3WiLEHyCriskqR8YuDxhdfT1FGtlC5zdN2As4.jpg', 1, 1200, '2026-03-31 06:42:49', '2026-04-03 04:02:42'),
(7, 'Dr.Okkotsu Yuta', 'yuta@gmail.com', 'MBBS (UK) , Ph.D , DHsc(Japan)', 4, '$2y$12$CGBbISUbk6n5ePuimVPPkOv8Ijja8BMx39.388lwVgW503szQVaxO', 10, 'I love Rika', 400, '09356894795', 'ArYu Hospital', '/storage/profile/Ejwk1Ie9DHwJN6kAKakrMBLPAyKkD4AVdjmM04ox.jpg', 1, NULL, '2026-03-31 07:04:18', '2026-03-31 07:04:18'),
(8, 'Dr.Toji Fushiguro', 'toji@gmail.com', 'MBBS Ph.D , DHSc India ,M.MEd (Russia)', 1, '$2y$12$zjFnYPhO/KeAtX7HbXRc3O346YJi2ttak2Pr59gQOMvfBNgb5wjOa', 11, 'I am father of you', 550, '01-197677920', 'ArYu Hospital', '/storage/profile/L2tpjFv7mSze6QYcwa9LLviwt1Cy7hNTjz3gi2XU.jpg', 1, NULL, '2026-03-31 07:10:04', '2026-03-31 07:10:04'),
(9, 'Dr.Suguru Geto', 'geto@hotmail.com', 'MBBS (NY) , Ph.D.med , MSc (HS) , DPT Ph.D , DHA (Head)', 2, '$2y$12$uzBvOTTju6ukJLQE0rMwc.uB18a6suJgCWu.68.wRvX6a6Q7Zk.GC', 11, 'Sukuna , i will kill you', 600, '09450554795', 'University of Tokyo Hospital (Japan)', '/storage/profile/XkfHOSNz3epi4ru9fpeuguebffomKI1Zl2mtVn6w.jpg', 1, NULL, '2026-03-31 07:13:09', '2026-03-31 07:13:09'),
(10, 'Dr.Kento Nanami', 'nanami@gmail.com', 'MBBS (UK) , Ph.D ,P.Med (Head)', 3, '$2y$12$fNB9JotD5XoUiN8EK961GuYVH6iqn/VueGyMPlGJZ6n5ptBUK2F2y', 11, 'I don\'t like this job', 480, '01-287640980', 'University of Tokyo Hospital (Japan)', '/storage/profile/5513xsPleX2f2shpbXvniQbKLLhDdOmT0HcZQq3h.jpg', 1, NULL, '2026-03-31 07:25:38', '2026-03-31 07:25:38'),
(11, 'Dr.Sukuna', 'sukuna@hotmail.com', 'MBBS (China) , Ph.D.med , M.Ed (HS) , DHA (Head)', 6, '$2y$12$hIP5xMhINq7GDjfLcEk0E.FZx2BJfDtlk.jbAckCkIg5b7rjRh1U2', 11, 'Blah Blah', 650, '09450554795', 'KanTharYar Hospital', '/storage/profile/Dlawc6ECk3pbukCeEmCyrS8yEYmAlOAoCBsF5jMm.jpg', 1, NULL, '2026-03-31 07:28:07', '2026-03-31 07:28:07'),
(12, 'Dr.Kinji Hakari', 'hakari@gmail.com', 'MBBS Ph.D , DHSc India', 4, '$2y$12$XlNeueHr9SEYHZA1OjQgY./Xz64kha3ki0om3BIPWQ9mqK6/8dnay', 8, 'I like dancing', 300, '09115991051', 'Yangon Hospital', '/storage/profile/KNWEfg2NBz9WARZFlDSrK8xYnBRcEIHuG148est3.jpg', 1, NULL, '2026-03-31 07:40:23', '2026-03-31 07:40:23'),
(13, 'Dr.Yuki Tsukumo', 'yuki@gmail.com', 'MBBS Ph.D , DHSc Londan , M.Med (Head)', 2, '$2y$12$UhxDsAXCrem.Ofxc65ufquY6h/I9AD1r2.fsawm1LFOqIcGeHEEeG', 11, 'Gojo', 580, '09564001287', 'ArYu Hospital', '/storage/profile/LCaDSn1QigZUUsDIDB6r9AFzzpcu1cr0T0S5TvRB.jpg', 1, NULL, '2026-03-31 08:16:23', '2026-03-31 08:16:23'),
(14, 'Dr.Jogo', 'jogo@gmail.com', 'MBBS (China) , Ph.D Msc', 5, '$2y$12$SpQn7IXtUtNOwVR0OY4di.nrHBW7m3Rew6oW4s0CaQjyY4X9ZS2Gq', 5, 'I will kill you gojo', 80, '09356894795', 'Shibuyu Hospital', '/storage/profile/Y2Mb24bk0n9UINHW5asFo2bxqUiMOt6uet1orNlG.jpg', 1, NULL, '2026-04-03 07:52:02', '2026-04-03 07:52:02'),
(15, 'Dr.Tengen Sama', 'tengen@gmail.com', 'MBBS (NY) , Ph.D.med , MSc (HS) , DPT Ph.D , DHA (Head)', 3, '$2y$12$OKvgH6IoWTGdwMYn2UaERe8D7.gLHgWvD01HVKgNnDGBlSTGge/gm', 11, 'Wah ha ha ha ha ha ha ha ha ha  ha', 780, '1-512-542-6484', 'Menhantan Hospital', '/storage/profile/deuhUetkKpjv2L5z3xi9OOQ1nag3dKPTrMtPaAak.jpg', 1, 1560, '2026-04-03 08:15:37', '2026-04-06 02:09:30'),
(16, 'Dr.Fumihiko Takaba', 'takaba@gmail.com', 'MBBS Ph.D , DHSc India , M.Med', 2, '$2y$12$iP0Q8Hzb8/2PdwljZqpDX.N8cMxXhbP/hyGa3TNkOjemCjym3Mu/e', 8, 'ZOro', 400, '1-774-606-2696', 'Comedian Hospital', '/storage/profile/uJ7nGYnEv0SL9oKSDJywHlIpUq4LmoNzOvrY4ZcU.jpg', 1, NULL, '2026-04-03 08:40:55', '2026-04-03 08:46:23');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(10, '0001_01_01_000000_create_users_table', 1),
(11, '0001_01_01_000001_create_cache_table', 1),
(12, '0001_01_01_000002_create_jobs_table', 1),
(13, '2026_01_01_070526_create_doctors_table', 1),
(14, '2026_01_01_094426_create_personal_access_tokens_table', 1),
(15, '2026_01_02_123935_create_specialities_table', 1),
(16, '2026_01_04_145554_create_bookingslots_table', 1),
(17, '2026_02_12_102039_create_user_appointments_table', 1),
(18, '2026_02_14_080219_create_user_roles_table', 1),
(19, '2026_04_01_151639_add_payment_to_user_appointments_table', 2),
(20, '2026_04_01_152310_add_payment_to_user_appointments_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 12, 'api', '14657afcee790ae92e62bd7d17101805c30702163b500da3955fa94ad3988bbb', '[\"*\"]', NULL, NULL, '2026-03-31 06:10:50', '2026-03-31 06:10:50'),
(2, 'App\\Models\\User', 13, 'api', 'cd8b801905283dd490bd3e2100413088ed117e559abe79f4e01fb148911be7cf', '[\"*\"]', NULL, NULL, '2026-03-31 06:17:58', '2026-03-31 06:17:58'),
(3, 'App\\Models\\User', 14, 'api', '083d71e4c54f2523949ba962a0e719c3ce9b545862e14b7e06cdf9853dabaeb3', '[\"*\"]', NULL, NULL, '2026-03-31 06:19:47', '2026-03-31 06:19:47'),
(4, 'App\\Models\\User', 12, 'api', 'd354bbad30f964943f0b0c7eafda965ae7ad466b5d391cd9a0dd4f39ef6b9119', '[\"*\"]', NULL, NULL, '2026-03-31 06:20:45', '2026-03-31 06:20:45'),
(5, 'App\\Models\\User', 15, 'api', 'b25f0352161e8b4e1f47e93327f60d7b4898b61d90a2d6d2a35fc9218ed27df7', '[\"*\"]', NULL, NULL, '2026-03-31 08:24:27', '2026-03-31 08:24:27'),
(6, 'App\\Models\\User', 15, 'api', '53c405eb366464b431e4ae8c0aa83b37344b03f6c02a6e72cf565244c4a41918', '[\"*\"]', NULL, NULL, '2026-03-31 09:51:31', '2026-03-31 09:51:31'),
(7, 'App\\Models\\User', 1, 'api', '532c82681e4b4c63fdc0dcee13c116a306535e08d1d4d1632ca418e060d75c26', '[\"*\"]', NULL, NULL, '2026-04-01 09:03:20', '2026-04-01 09:03:20'),
(8, 'App\\Models\\User', 16, 'api', 'd0792812cb383c110b1b25e1bbddd4df7af5d825536e9deea94fef6ced0d8684', '[\"*\"]', NULL, NULL, '2026-04-01 09:14:48', '2026-04-01 09:14:48'),
(9, 'App\\Models\\User', 12, 'api', 'ed23448d193ae16773d4ca396cfef7143204eb3803c017bf63b4c40cec93308a', '[\"*\"]', NULL, NULL, '2026-04-01 09:16:51', '2026-04-01 09:16:51'),
(10, 'App\\Models\\User', 13, 'api', '75633557409d7be4da167fe8c5ebd187e01ca7fbf7dc20aab58d536fd215d55e', '[\"*\"]', NULL, NULL, '2026-04-02 02:05:10', '2026-04-02 02:05:10'),
(11, 'App\\Models\\User', 16, 'api', 'e972c580e117855845dac67f267886ad6b1818804f66709e9f68db5be376974c', '[\"*\"]', NULL, NULL, '2026-04-02 02:59:46', '2026-04-02 02:59:46'),
(12, 'App\\Models\\User', 2, 'api', '8e5e8323504dc5eb505a128d98d9f1f06e956aabe74dc583bbd0e5e46c635d7b', '[\"*\"]', NULL, NULL, '2026-04-02 03:00:36', '2026-04-02 03:00:36'),
(13, 'App\\Models\\User', 13, 'api', '7496469d54eaa113febb46caa932915d3da409268dea21279bcc05d8580b3355', '[\"*\"]', NULL, NULL, '2026-04-02 20:59:40', '2026-04-02 20:59:40'),
(14, 'App\\Models\\User', 13, 'api', 'd47ae73faeb04de4682f18b48e90a65c7c96e463ba3fc76fa8cf062799d6644e', '[\"*\"]', NULL, NULL, '2026-04-03 00:59:03', '2026-04-03 00:59:03'),
(15, 'App\\Models\\User', 16, 'api', '46f23f23f8c85dc72ee8f996b2a5fae037f4db16c4ae5d88b5157f615bd91cc2', '[\"*\"]', NULL, NULL, '2026-04-03 04:01:02', '2026-04-03 04:01:02'),
(16, 'App\\Models\\User', 16, 'api', '3fd735e835cdf0cc5e3a0d1d8e0b99937b34a52b1b34cc9c840d428b67765b5c', '[\"*\"]', NULL, NULL, '2026-04-03 04:02:12', '2026-04-03 04:02:12'),
(17, 'App\\Models\\User', 16, 'api', 'c2bc22f43d1a61a053a081a8585741f8bac065d3c6c16ae86e78a25ec83323aa', '[\"*\"]', NULL, NULL, '2026-04-03 06:53:57', '2026-04-03 06:53:57'),
(18, 'App\\Models\\User', 16, 'api', '7bcd03d3682b817319ffecbe61f32d861775c5a13c254cf663ae1a1b1d2bfce9', '[\"*\"]', NULL, NULL, '2026-04-03 07:06:20', '2026-04-03 07:06:20'),
(19, 'App\\Models\\User', 12, 'api', '80de29425f9de946720dff60454de5a6cecc46b7acfa10e3828e25116d08560d', '[\"*\"]', NULL, NULL, '2026-04-03 07:49:33', '2026-04-03 07:49:33'),
(20, 'App\\Models\\User', 15, 'api', '249c682587cac404ed48a481b93a0bfdf1bda14bd948292e8f58a1c38e98277f', '[\"*\"]', NULL, NULL, '2026-04-04 23:55:33', '2026-04-04 23:55:33'),
(21, 'App\\Models\\User', 15, 'api', '4b7dec4e61ac552f75195672692bea9909bb1fa48dac97578bbe41041048001b', '[\"*\"]', NULL, NULL, '2026-04-04 23:58:12', '2026-04-04 23:58:12'),
(22, 'App\\Models\\User', 12, 'api', '2c0265a02002f9bc3d63dff401495e4cd9ff8284fe827c0293284cff92939256', '[\"*\"]', NULL, NULL, '2026-04-05 08:09:02', '2026-04-05 08:09:02'),
(23, 'App\\Models\\User', 13, 'api', 'c40674c44d88d1cae66dba854949c6ff087b58969c25c8401a2f3baae690d203', '[\"*\"]', NULL, NULL, '2026-04-06 01:33:59', '2026-04-06 01:33:59'),
(24, 'App\\Models\\User', 13, 'api', 'e5cbbe42fb4c87581d4bec079b214c05dcf6862abc8670a3427968f9d8cb11c7', '[\"*\"]', NULL, NULL, '2026-04-06 02:02:48', '2026-04-06 02:02:48'),
(25, 'App\\Models\\User', 13, 'api', 'b32b2aab000e105b0f9f5fec4b183533e5e66f443dbe7a1a2816df0c86e6dfee', '[\"*\"]', NULL, NULL, '2026-04-06 02:06:12', '2026-04-06 02:06:12'),
(26, 'App\\Models\\User', 13, 'api', '4cec91287ecd2d23b5c6f0fc9a79cfb374bf75b812ac070c9320c7b034d02b44', '[\"*\"]', NULL, NULL, '2026-04-06 02:08:55', '2026-04-06 02:08:55'),
(27, 'App\\Models\\User', 15, 'api', 'ce54dc32be0501ad9d76660aa3a09d7c84b43cde3bbefcde6f15beaab9540597', '[\"*\"]', NULL, NULL, '2026-04-06 07:00:24', '2026-04-06 07:00:24'),
(28, 'App\\Models\\User', 15, 'api', '870102ab76af0936669f1003c92044a2de8df5c800e5164e07a911075a3722ad', '[\"*\"]', NULL, NULL, '2026-04-06 07:10:41', '2026-04-06 07:10:41'),
(29, 'App\\Models\\User', 13, 'api', 'bf0d4dcd0921be4bbbbf9fdd08589fc0094bd6c51050d57a43d7f34a504600d8', '[\"*\"]', NULL, NULL, '2026-04-06 09:08:10', '2026-04-06 09:08:10'),
(30, 'App\\Models\\User', 13, 'api', 'd859f2bda2ab4f390d75333465d2159729d084d58ebaaf8de9009c3d3f460647', '[\"*\"]', NULL, NULL, '2026-04-07 00:38:53', '2026-04-07 00:38:53'),
(31, 'App\\Models\\User', 13, 'api', '44d68947d45002b87f7a27bde32c0dad30c3217b5975cfcb987332f324464044', '[\"*\"]', NULL, NULL, '2026-04-07 00:39:29', '2026-04-07 00:39:29'),
(32, 'App\\Models\\User', 13, 'api', '5712662f156e31c346eb56fe3c5912cda8f4877a2385a6f7751afe23a519ca86', '[\"*\"]', NULL, NULL, '2026-04-07 00:40:09', '2026-04-07 00:40:09'),
(33, 'App\\Models\\User', 3, 'api', '40dd545467eed72c813fcdd2c4c25004ef4c850ae6d8792d85a57ab2d274c13e', '[\"*\"]', NULL, NULL, '2026-04-07 01:19:21', '2026-04-07 01:19:21'),
(34, 'App\\Models\\User', 16, 'api', '97ce060d0ab57ef0ca1fe6dc40b32a38c6d721ca1e22bde21834d7a53948418b', '[\"*\"]', NULL, NULL, '2026-04-07 03:00:58', '2026-04-07 03:00:58'),
(35, 'App\\Models\\User', 16, 'api', '1a6c39f4925e210b5977b2ceb04759ec4b75df3eb80feacd3699fdd8e538414a', '[\"*\"]', NULL, NULL, '2026-04-07 03:05:52', '2026-04-07 03:05:52'),
(36, 'App\\Models\\User', 12, 'api', '23ae63181c79e3fa81b26f42fda0447c0586a8e5c0eff5cade7ee69a0bca0f2d', '[\"*\"]', NULL, NULL, '2026-04-07 03:23:13', '2026-04-07 03:23:13'),
(37, 'App\\Models\\User', 14, 'api', '18f01f5e8cadde611cb1dbba37234102b672fafec13644549b2161079b58aafc', '[\"*\"]', NULL, NULL, '2026-04-07 03:50:05', '2026-04-07 03:50:05');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `specialities`
--

CREATE TABLE `specialities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `specialities`
--

INSERT INTO `specialities` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'General Physician', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(2, 'Gynecologist', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(3, 'Dermatologist', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(4, 'Pediatricians', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(5, 'Neurologist', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(6, 'Gastroenterologist', '2026-03-31 05:17:14', '2026-03-31 05:17:14');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `gender`, `address`, `phone`, `birthday`, `image`, `role_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'alice 😘', 'alice@example.com', '2026-03-31 05:17:14', '$2y$12$nnkfpOFU7RlEyGQTJbIJzOzFbR95FwM8l7A/FeHIZ4.bQUljAiXHi', 'female', '821 Justice ForestNorth Petra, MA 31555', '1-774-606-2696', '2006-10-18', '/storage/profile/XmP66Qv9h4f0VjjQMt0xFJLa9BNbiwYi1qvCbeqM.jpg', 1, 'gEntQpnwmy', '2026-03-31 05:17:14', '2026-04-01 09:07:34'),
(2, 'Prof. Daphne Robel Jr.', 'little.bettie@example.com', '2026-03-31 05:17:14', '$2y$12$Yugjdc1OrS3QDWk9v5j5K.RwYSZmfDg9iowPKtOICUpxrQy/LvGdG', 'male', '336 Lakin ShoalNorth Craigmouth, IN 85969', '317-620-4944', '1986-10-21', '/storage/profile/2XYa7OKVsUASN3eMq7kx4rVzovAhyNum8dOC2vPa.jpg', 1, '5ZLMQ2X74l', '2026-03-31 05:17:14', '2026-04-02 03:01:20'),
(3, 'Arianna Klocko V', 'alta02@example.org', '2026-03-31 05:17:14', '$2y$12$aXsYqS/WRvgQuMMGGIxMZeZ86wTdlI1KRDE3R2bgh3Z47viYY7DKm', 'female', '39731 Keyon CausewayPfannerstillmouth, CO 55750', '934-693-4581', '2004-06-07', '/storage/profile/PhqCWQbGvrZHiG6BYCJV4ZEITzQeBM0GgsZbi1Jq.jpg', 1, 'QXmkCIAxf9', '2026-03-31 05:17:14', '2026-04-07 01:20:27'),
(4, 'Prof. Chet Gleichner IV', 'derick.kerluke@example.net', '2026-03-31 05:17:14', '$2y$12$bRq6nND5q4kwuTe0Kl2kBuzPbdXY73wFOX1wSgL5Lehx1BoocGOMS', NULL, '994 Crist Point Suite 171\nCraighaven, MN 83052-9937', '971.938.6414', '2022-10-26', NULL, 1, 'YsaUXRcZ2a', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(5, 'Alfred Larkin', 'rocio90@example.org', '2026-03-31 05:17:14', '$2y$12$bRq6nND5q4kwuTe0Kl2kBuzPbdXY73wFOX1wSgL5Lehx1BoocGOMS', NULL, '10449 Oceane Creek\nWest Mazie, MT 59041-0727', '917-709-0415', '1995-09-05', NULL, 1, '7Dq5q2jrTS', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(6, 'Prof. Brielle Mills', 'ondricka.paige@example.org', '2026-03-31 05:17:14', '$2y$12$bRq6nND5q4kwuTe0Kl2kBuzPbdXY73wFOX1wSgL5Lehx1BoocGOMS', NULL, '2418 Berge Curve Apt. 857\nBlickport, MT 35836-8644', '417.564.0755', '1972-11-11', NULL, 1, 'zls7zc92k3', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(7, 'Aniyah Grant', 'nconn@example.org', '2026-03-31 05:17:14', '$2y$12$bRq6nND5q4kwuTe0Kl2kBuzPbdXY73wFOX1wSgL5Lehx1BoocGOMS', NULL, '3036 Hegmann Well Apt. 706\nSkileshaven, MO 82006-5087', '563.402.6496', '1989-04-14', NULL, 1, 'ftqY83NnDL', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(8, 'Miss Andreanne Bosco IV', 'predovic.sienna@example.net', '2026-03-31 05:17:14', '$2y$12$bRq6nND5q4kwuTe0Kl2kBuzPbdXY73wFOX1wSgL5Lehx1BoocGOMS', NULL, '331 Hessel Manors\nRolfsonfort, AL 50203', '(364) 659-3594', '1985-08-21', NULL, 1, '6rEC7rMm9t', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(9, 'Jacey Marquardt', 'igibson@example.com', '2026-03-31 05:17:14', '$2y$12$bRq6nND5q4kwuTe0Kl2kBuzPbdXY73wFOX1wSgL5Lehx1BoocGOMS', NULL, '4397 Adella Haven Suite 820\nBartellmouth, MO 13860-0725', '+1-386-831-4456', '1989-02-13', NULL, 1, 'QnV3Lg2pQY', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(10, 'Annette Barton', 'juanita61@example.com', '2026-03-31 05:17:14', '$2y$12$bRq6nND5q4kwuTe0Kl2kBuzPbdXY73wFOX1wSgL5Lehx1BoocGOMS', NULL, '195 Erna Common Suite 060\nMarksbury, DC 08642', '+1.828.462.9566', '1995-11-06', NULL, 1, 'MxUC7yu4rX', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(11, 'Adrienne Runte DVM', 'oberbrunner.dagmar@example.org', '2026-03-31 05:17:14', '$2y$12$bRq6nND5q4kwuTe0Kl2kBuzPbdXY73wFOX1wSgL5Lehx1BoocGOMS', NULL, '4601 Kaley Camp\nEast Rosinabury, NC 40369', '+1-239-846-8786', '2007-08-01', NULL, 1, 'rMrm1jUiwn', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(12, 'Nyan Lin Mg', 'nyanlinmg2666@gmail.com', NULL, '$2y$12$Yljwd3rTnbWU/a6ut6jYMu1HPSZMDzASs.4zPizgvwftKT0c1yC8a', 'male', 'Shwe Oat Gu 4th street', '09266693144', '2006-06-13', '/storage/profile/JT3XgzlGC86MKEGpjYt8jtmM9FdVTAW0xkuKm8mH.png', 2, NULL, '2026-03-31 06:10:19', '2026-04-01 09:18:00'),
(13, 'Naoya Zenin', 'naoya@gmail.com', NULL, '$2y$12$DNz9XqnzCIcfpMstwHvN.OFPltYaRT.7AU0NfetM2z.QXNcCC1IQ2', 'male', 'Yangon', '09450554795', '1999-11-25', '/storage/profile/ontgC1X4q0j9os7jn4Cgc3s2KpHyKILSHPmRHdsP.jpg', 1, NULL, '2026-03-31 06:17:23', '2026-03-31 06:17:23'),
(14, 'Momo Ayasen', 'momo@gmail.com', NULL, '$2y$12$4c0jlB0OtmWy8CLZ3sV2zeY.dO2K8EuaZGBOymU5hmULLjnEZTrhm', 'female', 'Yangon , Tamwe Tsp', '09115991051', '1990-10-09', '/storage/profile/oJB7L70psRp6XWOEBaYkYfgsSkgoJS6h6vr0U6GL.jpg', 1, NULL, '2026-03-31 06:19:27', '2026-03-31 06:19:27'),
(15, 'Toge Inumaki', 'toge@gmail.com', NULL, '$2y$12$HXL/YYUg8e8cw3o.eizUGuK2NWoT6qnxXWHST1xn.XPASbLyCZMvO', 'male', 'Yangon , Kyauk Tada Tsp', '09115991051', '2000-06-28', '/storage/profile/RYfbjzZ4GCCT2FAsve5wqqbPHx3R0L1XJsXGiGHx.jpg', 1, NULL, '2026-03-31 08:24:12', '2026-03-31 08:24:12'),
(16, 'Kirara Hoshi', 'kirara@hotmail.com', NULL, '$2y$12$g6MeoF3AKR0oS/PdViZFXOdcxjHUiDSel58pai8XVGKTGhSoTOh5G', 'female', 'Mandalay , Chan MyaThar Zi', '09115991051', '1998-06-11', '/storage/profile/Bs5fF5rryMZuGoNFFoWFGKsm851AwleCxJLwcbbb.jpg', 1, NULL, '2026-04-01 09:14:36', '2026-04-01 09:14:36');

-- --------------------------------------------------------

--
-- Table structure for table `user_appointments`
--

CREATE TABLE `user_appointments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `day` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `month` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `action` int(11) DEFAULT NULL,
  `payment` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_appointments`
--

INSERT INTO `user_appointments` (`id`, `user_id`, `doctor_id`, `day`, `date`, `time`, `month`, `year`, `action`, `payment`, `created_at`, `updated_at`) VALUES
(14, 15, 2, 'Fri', '10', '13:00', 'Apr', '2026', 1, 1, '2026-04-04 23:57:03', '2026-04-05 00:00:22'),
(15, 13, 15, 'Fri', '10', '14:00', 'Apr', '2026', 1, 1, '2026-04-06 01:35:46', '2026-04-06 02:03:25'),
(17, 13, 15, 'Sun', '12', '14:00', 'Apr', '2026', 1, 1, '2026-04-06 02:07:38', '2026-04-06 02:09:29');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'user', '2026-03-31 05:17:14', '2026-03-31 05:17:14'),
(2, 'admin', '2026-03-31 05:17:14', '2026-03-31 05:17:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookingslots`
--
ALTER TABLE `bookingslots`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `specialities`
--
ALTER TABLE `specialities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_appointments`
--
ALTER TABLE `user_appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookingslots`
--
ALTER TABLE `bookingslots`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `specialities`
--
ALTER TABLE `specialities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `user_appointments`
--
ALTER TABLE `user_appointments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
