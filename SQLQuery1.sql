CREATE DATABASE PHOENIX;
USE PHOENIX;
CREATE TABLE Bodega(
	idBodega INT IDENTITY(1,1) NOT NULL,
	codigo VARCHAR(50) PRIMARY KEY NOT NULL,
	tipo VARCHAR(50) NOT NULL,
	alturaPromedio NUMERIC(18, 6) NULL,
	anchuraPromedio numeric(18, 6) NULL,
	profundidadPromedio numeric(18, 6) NULL,
	activa bit NULL,
);
INSERT INTO Bodega VALUES ('A0A', 'B', '6', '12', '10', 1),
('A0B', 'B', '6', '12', '10', 1),
('A0C', 'B', '6', '12', '10', 0),
('A0D', 'B', '6', '12', '10', 1);
SELECT * FROM Bodega
CREATE TABLE Proveedor(
	idProveedor int IDENTITY(1,1) NOT NULL,
	codigo varchar(50) PRIMARY KEY NOT NULL,
	nombre varchar(50) NOT NULL,
	razonSocial varchar(100) NOT NULL,
	direccion varchar(100) NOT NULL,
	telefono varchar(15) NULL,
	correo varchar(50) NULL,
);
INSERT INTO Proveedor VALUES ('A0A', 'HNOS SUAREZ', 'A', 'Ciudad', '35412871', 'fake@gmail.com'),
('A0B', 'LA BARATA', 'A', 'Ciudad', '13142154', 'barata@yahoo.com'),
('A0C', 'INTINV', 'B', 'Ciudad', '15464510', 'intinv@outloook.com'),
('A0D', 'GLOBAL', 'B', 'Ciudad', '15456445', 'globalinc@gmail.com');
SELECT * FROM Proveedor
CREATE TABLE Producto(
	idProducto int IDENTITY(1,1) NOT NULL,
	codigo varchar(50) PRIMARY KEY NOT NULL,
	descripcion varchar(100) NULL,
	precio numeric(18, 6) NOT NULL,
	bodega varchar(50) NOT NULL,
	proveedor varchar(50) NOT NULL,
	FOREIGN KEY (bodega) REFERENCES Bodega(codigo),
	FOREIGN KEY (proveedor) REFERENCES Proveedor(codigo),
);
INSERT INTO Producto VALUES ('0A0', 'Desc.', '25', 'A0A', 'A0A'),
('0A1', 'Desc.', '25', 'A0C', 'A0A'),
('0A2', 'Desc.', '25', 'A0D', 'A0C'),
('0A3', 'Desc.', '25', 'A0B', 'A0D'),
('0A4', 'Desc.', '25', 'A0A', 'A0B')
SELECT * FROM Producto

CREATE TABLE Usuario(
	idUsuario int IDENTITY(1,1) NOT NULL,
	codigo varchar(50) NOT NULL,
	clave varchar(100) NULL,
);
INSERT INTO Usuario VALUES ('201906570', '123456')
SELECT * from Usuario
