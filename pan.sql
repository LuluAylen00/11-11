DROP DATABASE IF EXISTS pan_db;
CREATE DATABASE pan_db;
USE pan_db;

CREATE TABLE categories (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE products (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    price INT UNSIGNED,
    category_id INT(10) UNSIGNED
);
INSERT INTO products (id, name, price) VALUES (DEFAULT, 'Product A', 20),(DEFAULT, "Product B", 25),(DEFAULT, "Product C", 30);