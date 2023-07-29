-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 29, 2023 at 05:20 PM
-- Server version: 10.6.12-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `components`
--

-- --------------------------------------------------------

--
-- Table structure for table `case`
--

CREATE TABLE `case` (
  `id` int(11) NOT NULL,
  `component_id` varchar(255) NOT NULL,
  `displayname` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `manufacturer` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `recommended` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `case`
--

INSERT INTO `case` (`id`, `component_id`, `displayname`, `price`, `manufacturer`, `url`, `recommended`) VALUES
(1, 'fractal7black', 'Fractal Design Define 7 Black', 150, 'fractal', 'https://www.amazon.com/Fractal-Design-Aluminum-Tempered-FD-C-DEF7A-05/dp/B08146X79Y', NULL),
(2, 'nzxth9eliteblack', 'NZXT H9 Elite Black', 240, 'nzxt', 'https://www.amazon.com/NZXT-Elite-Dual-Chamber-Mid-Tower-Gaming/dp/B0BG196XDP', 0),
(3, 'nzxth9flowblack', 'NZXT H9 Flow Black', 160, 'nzxt', 'https://www.amazon.com/NZXT-Elite-Dual-Chamber-Mid-Tower-Gaming/dp/B0BFZZ3ZWZ', 0),
(4, 'nzxth7eliteblack', 'NZXT H7 Elite Black', 200, 'nzxt', 'https://www.amazon.com/NZXT-H7-Elite-CM-H71EW-01-Quick-Release/dp/B09VNZHL44', 0),
(5, 'nzxth7flowblack', 'NZXT H7 Flow Black', 150, 'nzxt', 'https://www.amazon.com/NZXT-H7-Elite-CM-H71EW-01-Quick-Release/dp/B0BQS8GKWV', 0),
(6, 'nzxth5eliteblack', 'NZXT H5 Elite Black', 140, 'nzxt', 'https://www.amazon.com/NZXT-Compact-Mid-Tower-Gaming-Built/dp/B0B6Y6NQNF?th=1&psc=1', 0),
(7, 'nzxth5flowblack', 'NZXT H5 Flow Black ', 95, 'nzxt', 'https://www.amazon.com/NZXT-Compact-Mid-Tower-Gaming-Built/dp/B0B6Y15C5L?th=1&psc=1', 0);

-- --------------------------------------------------------

--
-- Table structure for table `cpu`
--

CREATE TABLE `cpu` (
  `id` int(11) NOT NULL,
  `component_id` varchar(255) NOT NULL,
  `displayname` varchar(255) NOT NULL,
  `socket` varchar(255) NOT NULL,
  `core` int(255) NOT NULL,
  `tdp` int(255) NOT NULL,
  `price` float NOT NULL,
  `manufacturer` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `recommended` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cpu`
--

INSERT INTO `cpu` (`id`, `component_id`, `displayname`, `socket`, `core`, `tdp`, `price`, `manufacturer`, `url`, `recommended`) VALUES
(1, '7950X3D', 'AMD Ryzen 9 7950X3D', 'am5', 16, 120, 700, 'amd', 'https://www.amazon.com/AMD-RyzenTM-7950X3D-32-Thread-Processor/dp/B0BTRH9MNS', 0),
(2, '7950X', 'AMD Ryzen 9 7950X', 'am5', 16, 170, 700, 'amd', 'https://www.amazon.com/AMD-7950X-32-Thread-Unlocked-Processor/dp/B0BBHD5D8Y', 0),
(3, '7900X', 'AMD Ryzen 9 7900X', 'am5', 12, 170, 550, 'amd', 'https://www.amazon.com/AMD-7900X-24-Thread-Unlocked-Processor/dp/B0BBJ59WJ4', 0),
(4, '7800X3D', 'AMD Ryzen 7 7800X3D', 'am5', 8, 120, 439, 'amd', 'https://www.amazon.com/AMD-Ryzen-7800X3D-16-Thread-Processor/dp/B0BTZB7F88', 1),
(5, '7700X', 'AMD Ryzen 7 7700X', 'am5', 8, 105, 450, 'amd', 'https://www.amazon.com/AMD-7700X-16-Thread-Unlocked-Processor/dp/B0BBHHT8LY', 0),
(6, '7600', 'AMD Ryzen 5 7600', 'am5', 6, 65, 226, 'amd', 'https://www.amazon.com/AMD-7600-12-Thread-Unlocked-Processor/dp/B0BMQJWBDM', 0),
(7, '7600X', 'AMD Ryzen 5 7600x', 'am5', 6, 105, 300, 'amd', 'https://www.amazon.com/AMD-7600X-12-Thread-Unlocked-Processor/dp/B0BBJDS62N', 0),
(8, '13900KF', 'Intel I9-13900KF', 'LGA1700', 24, 125, 600, 'intel', 'https://www.amazon.com/Intel-i9-13900KF-Desktop-Processor-P-cores/dp/B0BCFM3CJ4', 0),
(9, '13700KF', 'Intel I7-13700KF', 'LGA1700', 16, 125, 390, 'intel', 'https://www.amazon.com/Intel-i7-13700KF-Desktop-Processor-P-cores/dp/B0BCDL7F5W', 0),
(10, '13600KF', 'Intel I5-13600KF', 'LGA1700', 14, 125, 305, 'intel', 'https://www.amazon.com/Intel-i5-13600KF-Desktop-Processor-P-cores/dp/B0BCF5CZ16', 0);

-- --------------------------------------------------------

--
-- Table structure for table `gpu`
--

CREATE TABLE `gpu` (
  `id` int(11) NOT NULL,
  `component_id` varchar(255) NOT NULL,
  `displayname` varchar(255) NOT NULL,
  `gb` int(255) NOT NULL,
  `tdp` int(255) NOT NULL,
  `price` float NOT NULL,
  `manufacturer` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `recommended` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gpu`
--

INSERT INTO `gpu` (`id`, `component_id`, `displayname`, `gb`, `tdp`, `price`, `manufacturer`, `url`, `recommended`) VALUES
(1, '4090', 'Nvidia RTX 4090', 24, 450, 1800, 'nvidia', 'https://www.amazon.com/ASUS-Gaming-GeForce-Graphics-DisplayPort/dp/B0C7JYX6LN/', NULL),
(2, '4080', 'Nvidia RTX 4080', 16, 320, 1400, 'nvidia', 'https://www.amazon.com/ASUS-Gaming-GeForce-Graphics-DisplayPort/dp/B0BLGQHS53/', NULL),
(3, '4070', 'Nvidia RTX 4070', 12, 200, 680, 'nvidia', 'https://www.amazon.com/ASUS-Gaming-GeForce-Graphics-DisplayPort/dp/B0BZTDZL7J/', NULL),
(4, '4060ti', 'Nvidia RTX 4060ti', 8, 450, 460, 'nvidia', 'https://www.amazon.com/ASUS-Gaming-GeForce-Graphics-DisplayPort/dp/B0C422MFHV/', NULL),
(5, '4060', 'Nvidia RTX 4060', 12, 170, 300, 'nvidia', 'https://www.amazon.com/ASUS-DisplayPort-2-5-Slot-Axial-tech-Technology/dp/B0C7YPGFFW/', NULL),
(6, 'rx7900XTX', 'AMD Radeon RX 7900XTX', 24, 355, 1200, 'amd', 'https://www.amazon.com/ASUS-Gaming-RadeonTM-Graphics-DisplayPort/dp/B0BSVMX9DW/', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `motherboard`
--

CREATE TABLE `motherboard` (
  `id` int(11) NOT NULL,
  `component_id` varchar(255) NOT NULL,
  `displayname` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `socket` varchar(255) NOT NULL,
  `manufacturer` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `recommended` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `motherboard`
--

INSERT INTO `motherboard` (`id`, `component_id`, `displayname`, `price`, `socket`, `manufacturer`, `url`, `recommended`) VALUES
(1, 'B650-AoursE-AX', 'GIGABYTE B650 AORUS ELITE AX', 230, 'am5', 'gigabyte', 'https://www.amazon.com/GIGABYTE-B650-Warranty-EZ-Latch-Motherboard/dp/B0BH7GTY9C', NULL),
(14, 'B650-p-w-asus-t', 'ASUS TUF Gaming B650-PLUS WiFi', 230, 'am5', 'asus', 'https://www.amazon.com/ASUS-TUF-B650-PLUS-Motherboard-Ethernet/dp/B0BHN7GGBQ', NULL),
(15, 'Z760-p-w-asus-t', 'ASUS TUF Gaming Z760-PLUS WiFi', 200, 'LGA1700', 'asus', 'https://www.amazon.com/ASUS-TUF-B760-PLUS-Motherboard-Thunderbolt/dp/B0BR8TN1H4/ref=sr_1_5?crid=DO3TBF5Y4S5Q&keywords=ASUS+TUF+Gaming+Z690-PLUS+WiFi&qid=1690484055&sprefix=asus+tuf+gaming+z690-plus+wifi%2Caps%2C208&sr=8-5', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `psu`
--

CREATE TABLE `psu` (
  `id` int(11) NOT NULL,
  `component_id` varchar(255) NOT NULL,
  `displayname` varchar(255) NOT NULL,
  `wattage` int(255) NOT NULL,
  `price` float NOT NULL,
  `manufacturer` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `recommended` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `psu`
--

INSERT INTO `psu` (`id`, `component_id`, `displayname`, `wattage`, `price`, `manufacturer`, `url`, `recommended`) VALUES
(1, 'rm1000x-shift', 'Corsair rm1000x Shift', 1000, 210, 'corsair', 'https://www.amazon.com/Corsair-RM1000x-Shift-Modular-Supply/dp/B0BP8B6M7Y/', NULL),
(2, 'rm850x-shift', 'Corsair rm850x Shift', 850, 160, 'corsair', 'https://www.amazon.com/Corsair-RM850x-Shift-Modular-Supply/dp/B0BP8BJ7X4', 0),
(3, 'rm750x-shift', 'Corsair rm750x Shift', 750, 140, 'corsair', 'https://www.amazon.com/Corsair-RM750x-Shift-Modular-Supply/dp/B0C61XRJBG', 0);

-- --------------------------------------------------------

--
-- Table structure for table `ram`
--

CREATE TABLE `ram` (
  `id` int(11) NOT NULL,
  `component_id` varchar(255) NOT NULL,
  `displayname` varchar(255) NOT NULL,
  `gb` int(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `manufacturer` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `recommended` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ram`
--

INSERT INTO `ram` (`id`, `component_id`, `displayname`, `gb`, `type`, `price`, `manufacturer`, `url`, `recommended`) VALUES
(1, '64-dominator', 'Corsair Dominator Platinum 64GB', 64, 'ddr5', 300, 'corsair', 'https://www.amazon.com/CORSAIR-DOMINATOR-PLATINUM-Compatible-Computer/dp/B0BPL4F488/', 0),
(2, '32-dominator', 'Corsair Dominator Platinum 32GB', 32, 'ddr5', 160, 'corsair', 'https://www.amazon.com/CORSAIR-DOMINATOR-PLATINUM-Compatible-Computer/dp/B0BZHYYW6R/', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `storage`
--

CREATE TABLE `storage` (
  `id` int(11) NOT NULL,
  `component_id` varchar(255) NOT NULL,
  `displayname` varchar(255) NOT NULL,
  `gb` int(255) NOT NULL,
  `price` float NOT NULL,
  `manufacturer` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `recommended` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `storage`
--

INSERT INTO `storage` (`id`, `component_id`, `displayname`, `gb`, `price`, `manufacturer`, `url`, `recommended`) VALUES
(1, '2tb-samsung980', 'Samsung 980 PRO 2TB', 2000, 126, 'samsung', 'https://www.amazon.com/SAMSUNG-PCIe-Internal-Gaming-MZ-V8P1T0B/dp/B08RK2SR23/', NULL),
(2, '1tb-samsung980', 'Samsung 980 PRO 1TB', 1000, 70, 'samsung', 'https://www.amazon.com/SAMSUNG-PCIe-Internal-Gaming-MZ-V8P1T0B/dp/B08GLX7TNT/', NULL),
(3, '500gb-samsung980', 'Samsung 980 PRO 500GB', 500, 60, 'samsung', 'https://www.amazon.com/SAMSUNG-PCIe-Internal-Gaming-MZ-V8P1T0B/dp/B08GL575DB/', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `case`
--
ALTER TABLE `case`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cpu`
--
ALTER TABLE `cpu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gpu`
--
ALTER TABLE `gpu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `motherboard`
--
ALTER TABLE `motherboard`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `psu`
--
ALTER TABLE `psu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ram`
--
ALTER TABLE `ram`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `storage`
--
ALTER TABLE `storage`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `case`
--
ALTER TABLE `case`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `cpu`
--
ALTER TABLE `cpu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `gpu`
--
ALTER TABLE `gpu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `motherboard`
--
ALTER TABLE `motherboard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `psu`
--
ALTER TABLE `psu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `ram`
--
ALTER TABLE `ram`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `storage`
--
ALTER TABLE `storage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
