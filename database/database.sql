

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(20) NOT NULL,
	sobrenome VARCHAR(40) NOT NULL,
	email VARCHAR (35)
);


INSERT INTO users (nome, sobrenome, email) VALUES
('Diego', 'Martins', 'diego.martins@sysdata.com.br'),
('Ismael', 'Pontes', 'ismael.pontes@sysdata.com.br'),
('Nilda', 'Xaves', 'nilda.xaves@sysdata.com.br')

SELECT *FROM users

