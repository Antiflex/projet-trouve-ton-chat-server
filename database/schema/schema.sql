TRUNCATE TABLE Annonce CASCADE;
TRUNCATE TABLE Chat CASCADE;

DROP TABLE IF EXISTS Annonce;
DROP TABLE IF EXISTS Chat;

CREATE TABLE Chat(
					 id_chat SERIAL,
					 nom VARCHAR(50),
					 race VARCHAR(50),
					 couleur_fourrure VARCHAR(50),
					 couleur_yeux VARCHAR(50),
					 PRIMARY KEY(id_chat)
);

CREATE TABLE Annonce(
						id_annonce SERIAL,
						type_annonce VARCHAR,
						emplacement_lat FLOAT8,
						emplacement_long FLOAT8,
						date_annonce TIMESTAMP DEFAULT NOW(),
						annotations VARCHAR(50),
						id_chat INT NOT NULL,
						PRIMARY KEY(id_annonce),
						FOREIGN KEY(id_chat) REFERENCES Chat(id_chat)
);


-- Insérer des données dans la table Chat
INSERT INTO Chat (nom, race, couleur_fourrure, couleur_yeux)
VALUES
	('Misty', 'Persan', 'Blanc', 'Bleu'),
	('Simba', 'Siamois', 'Brun', 'Bleu'),
	('Whiskers', 'Maine Coon', 'Noir et blanc', 'Jaune'),
	('Leo', 'Bengal', 'Tacheté', 'Vert'),
	('Luna', 'Chartreux', 'Gris', 'Orange');

-- Insérer des données dans la table Annonce
INSERT INTO Annonce (type_annonce, emplacement_lat, emplacement_long, date_annonce, annotations, id_chat)
VALUES
	('Perdu', 48.8566, 2.3522, '2024-04-25 09:00:00', 'Collier avec grelot', 1),
	('Trouvé', 40.7128, -74.0060, '2024-04-26 15:30:00', 'Très affectueux', 2),
	('Perdu', 34.0522, -118.2437, '2024-04-27 11:45:00', 'Porte un harnais', 3),
	('Perdu', 51.5074, -0.1278, '2024-04-28 14:20:00', 'Yeux vairons', 4),
	('Trouvé', 37.7749, -122.4194, '2024-04-29 10:10:00', 'Queue courte', 5),
	('Vu', 48.8555, 2.3515, '2024-05-15 09:00:00', 'Collier avec grelot', 1);
