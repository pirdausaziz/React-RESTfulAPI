-- Creating Table --

CREATE TABLE IF NOT EXISTS teacher (
	teacher_id SERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	-- matrix INTEGER UNIQUE NOT NULL,
	matrix INTEGER NOT NULL,
	age INTEGER NOT NULL,
	experience INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS student (
	student_id SERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	-- matrix INTEGER UNIQUE NOT NULL,
	matrix INTEGER NOT NULL,
	age INTEGER NOT NULL,
	course VARCHAR(255) DEFAULT 'Unregistered'
);

CREATE TABLE IF NOT EXISTS subject (
	subject_id SERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	code VARCHAR(6) UNIQUE NOT NULL
);

-- Inserting Data to Table --

INSERT INTO student
(name, matrix, age, course)
VALUES
('Mason Duke', 7001, 23, 'Computer Science'),
('Sarah Ann', 7002, 19, 'Biomedical Engineering'),
('Tucker Gonzales', 7003, 34, 'Chemical Engineering'),
('Castiel Crane', 7004, 26, 'Mechanical Engineering'),
('Ayda Miller', 7005, 25, 'Biomedical Engineering'),
('Fisher Williams', 7006, 26, 'Computer Engineering');

INSERT INTO subject
(name, code)
VALUES
('Biology', 'BAM221'),
('Calculus', 'MET231'),
('Software Engineering', 'ECT266'),
('Technical Drawing', 'ENT112');

INSERT INTO teacher
(name, matrix, age, experience)
VALUES
('Dr John Campbell', 9001, 45, 12),
('Mrs Catherine William', 9002, 34, 2),
('Mr Eithan Cortez', 9003, 38, 8),
('DrMeredith Sanford', 9004, 50, 20);