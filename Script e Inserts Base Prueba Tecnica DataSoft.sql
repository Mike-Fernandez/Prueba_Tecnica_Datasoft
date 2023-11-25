--CREATE DATABASE pruebaDataSoft;
--CREATE USER user_prueba WITH PASSWORD 1234;
--GRANT ALL PRIVILEGES ON DATABASE pruebaDataSoft TO user_prueba;

CREATE TABLE categorias (
	cat_id INT primary key,
	cat_nombre varchar(50)
);

CREATE TABLE usuarios(
    usr_id SERIAL primary key,
    usr_codigo varchar(20),
    usr_nombre varchar(50),
    usr_clave varchar(20),
    usr_estado varchar(3)
);

CREATE TABLE productos(
    prd_id SERIAL primary key,
    prd_nombre varchar(50),
    prd_descripcion varchar(200),
    prd_precio float,
    prd_imagen varchar(999),
    prd_estado varchar(3),
    prd_cat_id INT, 
	FOREIGN KEY (prd_cat_id) REFERENCES categorias(cat_id)
);

--Inserts
INSERT INTO categorias (cat_id, cat_nombre)
VALUES	(1001, 'Calzado'),
		(1002, 'Ropa Caballero'),
		(1003, 'Ropa Dama')
		(1000, 'Todos');

		
INSERT INTO usuarios (usr_codigo, usr_nombre, usr_clave, usr_estado)
VALUES	('miguel_', 'Miguel Fernandez', '123456', 'A'),
		('jose', 'Jose Armando', '789456', 'I');
		
INSERT INTO productos (prd_nombre, prd_descripcion, prd_precio, prd_imagen, prd_estado, prd_cat_id)
VALUES	('Zapatos Deportivos', 'Zapatos deportivos marca Adidas color negro', 64.99, 
		 	'https://m.media-amazon.com/images/I/61k4Q-NMC0L._AC_SY500_.jpg',
		 	'A', 1001),
		('Camiseta Deportiva', 'Camiseta deportiva marca Adidas color azul', 15.99, 
		 	'https://m.media-amazon.com/images/I/51TxW0feDHL._AC_SX522_.jpg',
		 	'A', 1002),
		('Blusa Deportiva', 'Blusa deportiva marca Adidas color morado', 14.99, 
		 	'https://m.media-amazon.com/images/I/61FhPz3N1PL._AC_SY500_.jpg',
		 	'A', 1003),
		('Zapatos de vestir', 'Zapatos de vestir color cafe versatiles para diferentes ocasiones', 99.99, 
		 	'https://m.media-amazon.com/images/I/71AA93kzoxL._AC_SY500_.jpg',
		 	'A', 1001),
		('Calzado casual Converse', 'Calzado casual Converse color negro', 79.99, 
		 	'https://m.media-amazon.com/images/I/71VGkluJQ+L._AC_SX500_.jpg',
		 	'A', 1001),
		('Blusa semi-formal', 'Blusa semi-formal blanca para mujer', 67.99, 
		 	'hhttps://m.media-amazon.com/images/I/61TqE9gcvyL._AC_SY500_.jpg',
		 	'A', 1003),
		('Blusa Casual', 'Blusa casual negra para mujer', 45.99, 
		 	'https://m.media-amazon.com/images/I/71pWOOmOd2L._AC_SX522_.jpg',
		 	'A', 1003),
		('Camiseta formal de botones', 'Camiseta formal de botones color solido para hombres', 109.99, 
		 	'https://m.media-amazon.com/images/I/81QTqE5P1HL._AC_SX425_.jpg',
		 	'A', 1002),
		('Camiseta rayada formal de botones', 'Camiseta formal de botones con patron rayado para hombres', 109.99, 
		 	'https://m.media-amazon.com/images/I/A1smoo0cD5L._AC_SX425_.jpg',
		 	'A', 1002),
		('Camiseta casual', 'Camiseta casual de multiples colores para hombres', 34.99, 
		 	'https://m.media-amazon.com/images/I/81l4nb3ba+L._AC_SX466_.jpg',
		 	'A', 1002);

