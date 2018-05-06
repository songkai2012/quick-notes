CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(45) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL COMMENT '用户名',
  `account` varchar(50) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `password` varchar(200) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `repeatPass` varchar(200) COLLATE utf8_croatian_ci DEFAULT NULL,
  `email` varchar(200) COLLATE utf8_croatian_ci DEFAULT NULL,
  `phone` varchar(200) COLLATE utf8_croatian_ci DEFAULT NULL,
  `card` varchar(255) COLLATE utf8_croatian_ci DEFAULT NULL,
  `birth` datetime(6) DEFAULT NULL,
  `sex` varchar(50) COLLATE utf8_croatian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

