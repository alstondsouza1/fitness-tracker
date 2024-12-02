CREATE DATABASE fitness_tracker;

USE fitness_tracker;

CREATE TABLE workouts(
	id INT AUTO_INCREMENT PRIMARY KEY,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    type VARCHAR(50),
    duration INT,
    calories_burned INT,
    note TEXT,
    favorite BOOLEAN DEFAULT FALSE
);

INSERT INTO workouts (type, duration, calories_burned, note) 
VALUES 
('Cardio', 30, 250, 'Morning jog in the park'),
('Strength', 45, 300, 'Weight lifting session at the gym');

SELECT * FROM workouts;