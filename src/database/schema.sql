CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  classroom VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS check_ins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT,
  check_in_time DATETIME,
  parent_signature TEXT,
  FOREIGN KEY (student_id) REFERENCES students(id)
);