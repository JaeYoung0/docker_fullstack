DROP DATABASE IF EXISTS react_fullstack_app;

CREATE DATABASE react_fullstack_app;
USE react_fullstack_app;

CREATE TABLE lists
(
    id INTEGER
    AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY
    (id)
)