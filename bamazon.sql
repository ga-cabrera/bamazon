DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM bamazon.products;
INSERT INTO bamazon.products (product_name, department_name, price, stock_quantity)
VALUES ("Dog", "Animals", 500, 5);

INSERT INTO bamazon.products (product_name, department_name, price, stock_quantity)
VALUES ("Cat", "Animals", 200, 20);

INSERT INTO bamazon.products (product_name, department_name, price, stock_quantity)
VALUES ("Beans", "Canned Goods", 0.68, 419);

INSERT INTO bamazon.products (product_name, department_name, price, stock_quantity)
VALUES ("Batman Comics", "Books & Comics", "3.99", 20);

INSERT INTO bamazon.products (product_name, department_name, price, stock_quantity)
VALUES ("50 Shades of John McCain", "Books & Comics", "20", 4);

INSERT INTO bamazon.products (product_name, department_name, price, stock_quantity)
VALUES ("Disney On Ice", "Random Pile of Junk", "4.99", 800);

INSERT INTO bamazon.products (product_name, department_name, price, stock_quantity)
VALUES ("Tony Hawk Pro Skater 5", "Video Games", 59.99, 12);

INSERT INTO bamazon.products (product_name, department_name, price, stock_quantity)
VALUES ("Death Star", "Canned Goods", 3000, 2);

INSERT INTO bamazon.products (product_name, department_name, price, stock_quantity)
VALUES ("Death Note", "Books & Comics", 10, 2);

INSERT INTO bamazon.products (product_name, department_name, price, stock_quantity)
VALUES ("Teen Titans", "Books & Comics", 3.99, 30);