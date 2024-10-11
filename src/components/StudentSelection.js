import React, { useState, useEffect } from 'react';

const StudentSelection = ({ classroom, onSelect }) => {
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`/api/students?classroom=${classroom}`);
        if (!response.ok) throw new Error('Failed to fetch students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
        // Handle error (e.g., show error message to user)
      }
    };
    fetchStudents();
  }, [classroom]);

  const toggleStudent = (student) => {
    setSelectedStudents(prev => 
      prev.includes(student) ? prev.filter(s => s !== student) : [...prev, student]
    );
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Select students from {classroom}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {students.map(student => (
          <button 
            key={student.id} 
            onClick={() => toggleStudent(student)}
            style={{ 
              padding: '0.5rem', 
              backgroundColor: selectedStudents.includes(student) ? '#0056b3' : '#e9ecef',
              color: selectedStudents.includes(student) ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {student.name}
          </button>
        ))}
      </div>
      <button 
        onClick={() => onSelect(selectedStudents)} 
        style={{ 
          marginTop: '1rem', 
          padding: '0.5rem 1rem', 
          backgroundColor: selectedStudents.length === 0 ? '#6c757d' : '#0056b3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: selectedStudents.length === 0 ? 'not-allowed' : 'pointer'
        }}
        disabled={selectedStudents.length === 0}
      >
        Next
      </button>
    </div>
  );
};

export default StudentSelection;