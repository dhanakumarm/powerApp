DROP DATABASE IF EXISTS `power_app`;
CREATE DATABASE IF NOT EXISTS `power_app` 
USE `power_app`;

DROP TABLE IF EXISTS `tbl_lookup`;
CREATE TABLE IF NOT EXISTS `tbl_lookup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `code` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `position` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `tbl_lookup` (`id`, `name`, `code`, `type`, `position`) VALUES
	(1, 'Draft', '3', 'PostStatus', 1),
	(2, 'Published', '2', 'PostStatus', 2),
	(3, 'Archived', '3', 'PostStatus', 3),
	(4, 'Pending Approval', '1', 'CommentStatus', 1),
	(5, 'Approved', '2', 'CommentStatus', 2);

DROP TABLE IF EXISTS `tbl_user_master`;
CREATE TABLE IF NOT EXISTS `tbl_user_master` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_fullname` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` varchar(250) NOT NULL,
  `user_type` enum('User','Manager','Admin','Super Admin') NOT NULL DEFAULT 'User',
  `user_status` enum('Y','N') NOT NULL DEFAULT 'Y',
  `auth_key` char(50) DEFAULT NULL,
  `user_activation_code` varchar(20) DEFAULT NULL,
  `user_created_by` smallint(6) unsigned NOT NULL,
  `user_created_date` datetime NOT NULL,
  `user_modified_by` smallint(6) unsigned DEFAULT NULL,
  `user_modified_date` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `FK_billing_user_master_billing_user_type` (`user_type`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

INSERT INTO `tbl_user_master` (`user_id`, `user_name`, `user_fullname`, `user_email`, `user_password`, `user_type`, `user_status`, `auth_key`, `user_activation_code`, `user_created_by`, `user_created_date`, `user_modified_by`, `user_modified_date`) VALUES
	(1, 'admin', 'admin', 'admin@test.com', '55478a4af0e7d9247681d59adac74bf4', 'User', 'Y', '12345', 'qwerty', 1, '2020-04-11 22:54:02', 1, '2020-04-11 22:54:07');
	
DROP TABLE IF EXISTS `employee`;
CREATE TABLE IF NOT EXISTS `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `employee_name` varchar(255) NOT NULL COMMENT 'employee name',
  `employee_salary` double NOT NULL COMMENT 'employee salary',
  `employee_age` int(11) NOT NULL COMMENT 'employee age',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COMMENT='datatable demo table';
	
	