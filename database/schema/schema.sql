TRUNCATE TABLE Annonce CASCADE;
TRUNCATE TABLE Chat CASCADE;

DROP TABLE IF EXISTS Annonce;
DROP TABLE IF EXISTS Chat;

CREATE TABLE Chat(
					 id_chat INT,
					 nom VARCHAR(50),
					 race VARCHAR(50),
					 couleur_fourrure VARCHAR(50),
					 couleur_yeux VARCHAR(50),
					 PRIMARY KEY(id_chat)
);

CREATE TABLE Annonce(
						id_annonce INT,
						type_annonce VARCHAR,
						emplacement_lat FLOAT8,
						emplacment_long FLOAT8,
						date_annonce TIMESTAMP,
						annotations VARCHAR(50),
						id_chat INT NOT NULL,
						PRIMARY KEY(id_annonce),
						UNIQUE(id_chat),
						FOREIGN KEY(id_chat) REFERENCES Chat(id_chat)
);


-- Insérer des données dans la table Chat
INSERT INTO Chat (id_chat, nom, race, couleur_fourrure, couleur_yeux)
VALUES
	(1, 'Misty', 'Persan', 'Blanc', 'Bleu'),
	(2, 'Simba', 'Siamois', 'Brun', 'Bleu'),
	(3, 'Whiskers', 'Maine Coon', 'Noir et blanc', 'Jaune'),
	(4, 'Leo', 'Bengal', 'Tacheté', 'Vert'),
	(5, 'Luna', 'Chartreux', 'Gris', 'Orange');

-- Insérer des données dans la table Annonce
INSERT INTO Annonce (id_annonce, type_annonce, emplacement_lat, emplacment_long, date_annonce, annotations, id_chat)
VALUES
	(1, 'Perdu', 48.8566, 2.3522, '2024-04-25 09:00:00', 'Collier avec grelot', 1),
	(2, 'Trouvé', 40.7128, -74.0060, '2024-04-26 15:30:00', 'Très affectueux', 2),
	(3, 'Perdu', 34.0522, -118.2437, '2024-04-27 11:45:00', 'Porte un harnais', 3),
	(4, 'Perdu', 51.5074, -0.1278, '2024-04-28 14:20:00', 'Yeux vairons', 4),
	(5, 'Trouvé', 37.7749, -122.4194, '2024-04-29 10:10:00', 'Queue courte', 5);
