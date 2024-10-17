import React, { useState, useEffect } from 'react';
import CenteredLayout from './CenteredLayout';

const StudentSelection = ({ classroom, onSelect, onBack, buttonStyle }) => {
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
    <CenteredLayout>
      <h2 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Select students from {classroom}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '20px', maxWidth: '600px' }}>
        {students.map(student => (
          <button 
            key={student.id} 
            onClick={() => toggleStudent(student)}
            style={{ 
              ...buttonStyle,
              backgroundColor: selectedStudents.includes(student) ? '#0056b3' : '#e9ecef',
              color: selectedStudents.includes(student) ? 'white' : 'black',
            }}
          >
            {student.name}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '1rem' }}>
        <button onClick={onBack} style={{ ...buttonStyle, backgroundColor: '#6c757d' }}>
          Back
        </button>
        <button 
          onClick={() => onSelect(selectedStudents)} 
          style={{ 
            ...buttonStyle,
            backgroundColor: selectedStudents.length === 0 ? '#6c757d' : '#0056b3',
            cursor: selectedStudents.length === 0 ? 'not-allowed' : 'pointer'
          }}
          disabled={selectedStudents.length === 0}
        >
          Next
        </button>
      </div>
    </CenteredLayout>
  );
};

export default StudentSelection;