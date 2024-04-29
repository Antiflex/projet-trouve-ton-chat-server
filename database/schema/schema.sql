CREATE TABLE Chat(
   id_chat INT,
   race VARCHAR(50),
   couleur_fourrure VARCHAR(50),
   couleur_yeux VARCHAR(50),
   PRIMARY KEY(id_chat)
);

CREATE TABLE Annonce(
   id_annonce INT,
   date_annonce DATETIME,
   annotations VARCHAR(50),
   id_chat INT NOT NULL,
   PRIMARY KEY(id_annonce),
   UNIQUE(id_chat),
   FOREIGN KEY(id_chat) REFERENCES Chat(id_chat)
);
