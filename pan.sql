DROP DATABASE IF EXISTS pan_db;
CREATE DATABASE pan_db;
USE pan_db;

CREATE TABLE categories (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INT UNSIGNED,
    category_id INT(10) UNSIGNED,
    -- foreign key == clave foránea == FK
    -- A esta declaración de abajo se le dice CONSTRAINT (Foreign key MySQL)
    -- [Palabras clave] [ (columna de esta tabla) ] [Palabra clave] [tabla externa(columna de esa tabla externa)]
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (id, name) VALUES (DEFAULT, "Panadería"),(DEFAULT, "Facturería");
INSERT INTO products (id, name, price) VALUES (DEFAULT, 'Product A', 20),(DEFAULT, "Product B", 25),(DEFAULT, "Product C", 30);