-- crear base de datos uwu
CREATE DATABASE crudnodevlef;

-- usarla uwu
use crudnodevlef;

-- crear la tabla de peliculas marvel
CREATE TABLE peliculasmarvel (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name_movie VARCHAR(100) NOT NULL,
  main_character VARCHAR(100) NOT NULL,
  villain VARCHAR(100) NOT NULL,
  duration INT(11) NOT NULL,
  rating INT(11)
);


-- crear la tabla de Dd
CREATE TABLE peliculasdc (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name_movie VARCHAR(100) NOT NULL,
  main_character VARCHAR(100) NOT NULL,
  villain VARCHAR(100) NOT NULL,
  duration INT(11) NOT NULL,
  rating INT(11)
);

-- crear la tabla de Disney
CREATE TABLE peliculasdisney (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name_movie VARCHAR(100) NOT NULL,
  main_character VARCHAR(100) NOT NULL,
  type_movie VARCHAR(20) NOT NULL,
  duration INT(11) NOT NULL,
  rating INT(11)
);


-- crear la tabla de Pixar
CREATE TABLE peliculasdreamworks (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name_movie VARCHAR(100) NOT NULL,
  main_character VARCHAR(100) NOT NULL,
  type_movie VARCHAR(20) NOT NULL,
  duration INT(11) NOT NULL,
  rating INT(11)
);

-- ver todas las tablas uwu
show tables;

