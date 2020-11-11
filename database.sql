CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "data" (
    "id" SERIAL PRIMARY KEY,
    "donor_name" VARCHAR (40) NOT NULL,
    "donor_blood_type" VARCHAR (3) NOT NULL,
    "donor_height" INT NOT NULL,
    "donor_weight" INT NOT NULL,
    "donor_age" INT NOT NULL,
    "donor_organ" VARCHAR NOT NULL,
    "zip" INT NOT NULL,
    "recipient_name" VARCHAR (40) NOT NULL,
    "recipient_blood_type" VARCHAR (3) NOT NULL,
    "recipient_height" INT NOT NULL,
    "recipient_weight" INT NOT NULL,
    "recipient_age" INT NOT NULL,
    "recipient_organ" VARCHAR NOT NULL,
    "matched" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "matches" (
	"id" SERIAL PRIMARY KEY REFERENCES "data",
	"donor_id" INT REFERENCES "data",
	"recipient_id" INT REFERENCES "data"
);

DROP TABLE "matches";

SELECT recipient_name, recipient_blood_type, recipient_height, recipient_weight, recipient_age, recipient_organ FROM data
JOIN matches ON matches.recipient_id = 1;

SELECT donor_name, donor_blood_type, donor_height, donor_weight, donor_age, donor_organ FROM data
JOIN matches ON matches.donor_id = data.id
WHERE matches.id = 1 AND 