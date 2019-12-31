DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE employee (
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(50) NOT NULL, 
last_name VARCHAR(50) NOT NULL, 
role_id int NOT NULL,
manager_id int NULL,
FOREIGN KEY (role_id) REFERENCES role(id),
PRIMARY KEY (`id`)
);

USE employee_trackerDB;

CREATE TABLE role (
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(50) NOT NULL, 
salary decimal(10,0) NOT NULL, 
department_id int NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (department_id) REFERENCES department(id)
);

USE employee_trackerDB;

CREATE TABLE department (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(50) NOT NULL, 
PRIMARY KEY (`id`)
);