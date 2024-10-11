const express = require('express');
const bodyParser = require('body-parser');
const db = require('../src/database/db');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

app.get('/api/students', (req, res) => {
  console.log('Received request for classroom:', req.query.classroom);
  db.all('SELECT * FROM students WHERE classroom = ?', [req.query.classroom], (err, rows) => {
    if (err) {
      console.error('Error fetching students:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('Fetched students:', rows);
      res.json(rows);
    }
  });
});

app.post('/api/checkin', (req, res) => {
  const { date, students, signature } = req.body;
  db.serialize(() => {
    db.run('BEGIN TRANSACTION');
    students.forEach(student => {
      db.run(
        'INSERT INTO check_ins (student_id, check_in_time, parent_signature) VALUES (?, ?, ?)',
        [student.id, date, signature],
        (err) => {
          if (err) {
            console.error('Error during check-in:', err);
            db.run('ROLLBACK');
            res.status(500).json({ error: 'Internal server error' });
            return;
          }
        }
      );
    });
    db.run('COMMIT', (err) => {
      if (err) {
        console.error('Error committing transaction:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json({ success: true });
      }
    });
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`__dirname is: ${__dirname}`);
  console.log(`Current working directory is: ${process.cwd()}`);
});